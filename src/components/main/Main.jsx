import React from 'react'
import styles from './Main.module.css'
import { Helicopter, IbmCloudEventNotification } from '@carbon/icons-react';

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
            </div>
            <div>
                c
            </div>
        </section>
    </main>
  )
}

export default Main