
import styles from './Main.module.css'
import { IbmCloudEventNotification } from '@carbon/icons-react';

const Main = () => {
  return (
    <main>
        <section className={styles.section}>
            <div className={styles.benchmark}>
                <IbmCloudEventNotification size={32}></IbmCloudEventNotification>
                <span>Benchmarking</span>
            </div>
            <div>
                <img src="https://www.ivins.com/wp-content/uploads/2020/09/placeholder-1.png" className={styles.wallpaper}/>
                <span className={styles['wallpaper-subtitle']}>c: Ronny Hunger</span>
            </div>
            <div className={styles.welcome}>
                <h1 className={styles['welcome-title']}>Herzlich willkommen auf der Benchmarking Plattform</h1>
                <h5 className={styles['welcome-subtitle']}>Aktuell findet eine Erhebungspause statt. Die nachste Erhebung ist fur Fruhjahr 2024 geplant.</h5>
            </div>
        </section>
    </main>
  )
}

export default Main