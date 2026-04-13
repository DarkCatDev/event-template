import styles from './OurStory.module.css'

const TIMELINE = [
  {
    year: '2018',
    title: 'First Hello',
    body: 'We met at a tiny bookshop in Edinburgh on a rainy November afternoon. He knocked a stack of books off the shelf — She helped him pick them up. Neither of us left for three hours.',
  },
  {
    year: '2019',
    title: 'Our First Trip',
    body: 'A spontaneous weekend to Porto turned into two weeks wandering the Douro Valley. We returned with matching sunburns and a shared playlist of 200 songs.',
  },
  {
    year: '2021',
    title: 'Home Together',
    body: 'After lockdown showed us what really mattered, we moved into our little flat in Islington — arguing over bookshelves and falling more in love every single day.',
  },
  {
    year: '2024',
    title: 'He Asked',
    body: 'On a terrace overlooking the Arno in Florence — the city that always felt like ours — He got down on one knee. She said yes before he finished the sentence.',
  },
  {
    year: '2026',
    title: 'Forever Starts Here',
    body: "We're getting married in the city where it all became clear. Thank you for being part of our story.",
  },
]

export default function OurStory() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>How It All Began</p>
        <h1 className={styles.title}>Our Story</h1>
        <div className={styles.hairline} />
        <p className={styles.subtitle}>
          A love story told in five chapters — and counting.
        </p>
      </header>

      <div className={styles.timeline}>
        {TIMELINE.map((item, i) => (
          <div key={item.year} className={`${styles.entry} ${i % 2 === 1 ? styles.right : ''}`}>
            <div className={styles.card}>
              <span className={styles.year}>{item.year}</span>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
            <div className={styles.node}>
              <div className={styles.dot} />
            </div>
          </div>
        ))}
        <div className={styles.stem} />
      </div>
    </div>
  )
}
