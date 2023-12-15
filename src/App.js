import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Slider } from './components/Slider/Slider';


function App() {
  return (
		<div className={styles.wrapper}>
			<Header />
      		<Main/>
			<Footer/>
			<Slider/>
		</div>
	)
}

export default App;
