import '../styles/global.scss';

import {Header} from '../components/Header';
import {Player} from '../components/Player';

import {PlayerContextProvider} from '../contexts/Player.context';

import styles from '../styles/App.module.scss';

const MyApp = ({Component, pageProps}) => {

  return (
    <PlayerContextProvider>
      <div className={styles.appWraper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp;
