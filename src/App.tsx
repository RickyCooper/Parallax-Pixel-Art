import styles from './app.module.scss'
import PixelArt from './components/PixelArt/PixelArt'
function App() {

  return (
    <div className={styles.app}>
      <PixelArt/>
      <div className={styles.main}></div>
    </div>
  )
}

export default App
