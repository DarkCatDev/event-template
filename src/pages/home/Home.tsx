import { Link } from 'react-router-dom'
import { useCountdown } from '../../hooks/useCountdown'
import styles from './Home.module.css'

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown()

  const units = [
    { value: days,    label: 'Days'    },
    { value: hours,   label: 'Hours'   },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <div className={styles.page}>
      {/* Decorative botanical corners */}
      <span className={`${styles.sprig} ${styles.tl}`}>✿</span>
      <span className={`${styles.sprig} ${styles.tr}`}>✿</span>
      <span className={`${styles.sprig} ${styles.bl}`}>✿</span>
      <span className={`${styles.sprig} ${styles.br}`}>✿</span>

      <p className={styles.eyebrow}>Together Forever</p>

      <h1 className={styles.names}>
        Wife <em>&amp;</em> Husband
      </h1>

      <div className={styles.hairline} />

      <p className={styles.weddingDate}>October 18, 2026</p>
      <p className={styles.location}>Bagong Nayon I · Antipolo, Rizal</p>

      <div className={styles.countdown}>
        {units.map(({ value, label }, i) => (
          <>
            <div key={label} className={styles.unit}>
              <span className={styles.num}>{String(value).padStart(2, '0')}</span>
              <span className={styles.label}>{label}</span>
            </div>
            {i < units.length - 1 && (
              <span key={`dot-${i}`} className={styles.dot}>·</span>
            )}
          </>
        ))}
      </div>

      <Link to="/rsvp" className={styles.rsvpBtn}>
        RSVP Now
      </Link>

      <p className={styles.sub}>
        Kindly reply by <strong>August 1, 2026</strong>
      </p>
    </div>
  )
}
