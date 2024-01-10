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
          <span>AGB</span>
          <span>Datenschutzerklarung</span>
          <span>Hilfe</span>
        </div>
        <div className={styles['address-right']}>
          <div className={styles['address-name']}>
            <span>Schweizerischer Ingenieur - und Architektenverein</span>
            <span>Société suisse des ingénieurs et des architectes</span>
            <span>Società svizzera degli ingegneri e degli architetti</span>
            <span>Swiss society of engineers and architects</span>
          </div>
          <div className={styles['address-contact']}>
            <span>+41 44 283 15 15</span>
            <span>contact@sia.ch</span>
            <span>Postfach</span>
            <span>8027 Zurich</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer