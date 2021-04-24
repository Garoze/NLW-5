import {createContext, ReactNode, useState} from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLoop: boolean;
  isShuffle: boolean;
  hasNext: boolean;
  hasPrev: boolean;
  play: (episode: Episode) => void;
  playList: (list: Episode[], index: number) => void;
  togglePlay: () => void;
  setPlayState: (state: boolean) => void;
  playNext: () => void;
  playPrev: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPlayerstate: () => void;
}

type PlayerContextProviderProps = {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextData);

export const PlayerContextProvider = ({children}: PlayerContextProviderProps) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const play = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  const playList = (list: Episode[], index: number) => {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  const hasPrev = currentEpisodeIndex > 0;
  const hasNext = isShuffle || (currentEpisodeIndex + 1) < episodeList.length;

  const playNext = () => {
    if (isShuffle)
      setCurrentEpisodeIndex(Math.floor(Math.random() * episodeList.length));
    else if (hasNext)
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);

  }

  const playPrev = () => {
    if (hasPrev)
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const toggleLoop = () => {
    setIsLoop(!isLoop);
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  }

  const clearPlayerstate = () => {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  const setPlayState = (state: boolean) => setIsPlaying(state);

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        togglePlay,
        isPlaying,
        isLoop,
        isShuffle,
        setPlayState,
        playList,
        playNext,
        playPrev,
        hasNext,
        hasPrev,
        toggleLoop,
        toggleShuffle,
        clearPlayerstate,
      }}>
      {children}
    </PlayerContext.Provider>
  )
}


export default PlayerContext;

