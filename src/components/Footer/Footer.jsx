import styles from './Footer.module.css'
import { LogoFacebook, LogoLinkedin, LogoTwitter } from '@carbon/icons-react';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles['social-container']}>
        <div className={styles['social-left']}>
          <span>Folgen Sie uns</span>
          <div className={styles['social-icons']}>
            <LogoFacebook />
            <LogoLinkedin />
            <LogoTwitter />
            <span>Newsletter Abo</span>
          </div>
        </div>
        <div className={styles['social-right']}>
          <span>Kontaktieren Sie uns</span>
          <span>Kontakt</span>
        </div>
      </div>
      <div className={styles['address-container']}>
        <div className={styles['address-left']}>

        </div>
        <div className={styles['address-right']}>

        </div>
      </div>
    </footer>
  )
}

export default Footer