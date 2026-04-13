import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.monogram}>
        W <em>&amp;</em> H
      </div>
      <p className={styles.date}>October 18, 2026 · Antipolo, Rizal</p>
      <div className={styles.divider} />
      <p className={styles.note}>We cannot wait to celebrate with you.</p>
    </footer>
  )
}
