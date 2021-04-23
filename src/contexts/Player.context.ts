import {createContext} from 'react';

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
  isPlaying: boolean,
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayState: (state: boolean) => void;
}

const PlayerContext = createContext({} as PlayerContextData);

export default PlayerContext;