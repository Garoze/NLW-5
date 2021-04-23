import '../styles/global.scss';

import {Header} from '../components/Header';
import {Player} from '../components/Player';
import PlayerContext from '../contexts/Player.context';

import styles from '../styles/App.module.scss';
import {useState} from 'react';

const MyApp = ({Component, pageProps}) => {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = (episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const setPlayState = (state: boolean) => setIsPlaying(state);


  return (
    <PlayerContext.Provider value={{episodeList, currentEpisodeIndex, play, togglePlay, isPlaying, setPlayState}}>
      <div className={styles.appWraper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp;
