import '../styles/global.scss';

import {Header} from '../components/Header';
import {Player} from '../components/Player';

import styles from '../styles/app.module.scss';

const MyApp = ({Component, pageProps}) => {
  return (
    <div className={styles.appWraper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp;

