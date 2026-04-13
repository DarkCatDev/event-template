import styles from './Details.module.css'

const EVENTS = [ //Isa sa mga babaguhin
  {
    tag: 'Ceremony',
    name: 'Santo Nino De Praga Parish',
    time: '4:00 PM',
    address: '48 GSIS Avenue, COGEO Ave, \nAntipolo, 1820 Rizal, Philippines',
    note: 'Doors open at 3:30 PM. Please be seated by 3:50 PM.',
    dress: 'Formal / Black Tie Optional',
  },
  {
    tag: 'Pictorial Venue',
    name: 'Grand Pavillion - Tulips Garden',
    time: '5:30 PM',
    address: 'Bagong Nayon I \n50125 Antipolo, Rizal, Philippines',
    note: 'Photo op and guest book signing.',
    dress: '',
  },
  {
    tag: 'Reception',
    name: 'Grand Pavillion - Mess Hall',
    time: '6:30 PM',
    address: 'Bagong Nayon I \n50125 Antipolo, Rizal, Philippines',
    note: 'Dinner, speeches, and dancing until midnight.',
    dress: '',
  },
]

const FAQS = [
  { q: 'Is there parking at the venues?', a: 'Limited parking is available near Grand Pavillion. We recommend using taxis or the shuttle service we\'ve arranged from the Hotel Victoria.' },
  { q: 'Are children welcome?', a: 'We love your little ones! Children are warmly welcome at both the ceremony and reception.' },
  { q: 'What is the dress code?', a: 'Formal / Black Tie Optional. We\'d love you to dress up with us — think floor-length gowns and dinner jackets.' },
  { q: 'Will there be a shuttle?', a: 'Yes — a complimentary shuttle will run between Hotel Victoria, Santo Nino De Praga Parish, and Grand Pavillion throughout the evening.' },
]

export default function Details() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>The Big Day</p>
        <h1 className={styles.title}>Event Details</h1>
        <div className={styles.hairline} />
        <p className={styles.subtitle}>October 18, 2026 · Florence, Italy</p>
      </header>

      <section className={styles.section}>
        <div className={styles.eventsGrid}>
          {EVENTS.map(({ tag, name, time, address, note, dress }) => (
            <div key={tag} className={styles.eventCard}>
              <span className={styles.tag}>{tag}</span>
              <h2 className={styles.venueName}>{name}</h2>
              <p className={styles.time}>{time}</p>
              <p className={styles.address}>{address}</p>
              {note && <p className={styles.note}>{note}</p>}
              {dress && <p className={styles.dress}><em>Dress code:</em> {dress}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {FAQS.map(({ q, a }) => (
            <div key={q} className={styles.faqItem}>
              <p className={styles.faqQ}>{q}</p>
              <p className={styles.faqA}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.accom}>
        <p className={styles.eyebrow}>Where to Stay</p>
        <h2 className={styles.accomTitle}>Recommended Hotels</h2>
        <p className={styles.accomSub}>
          We have reserved a room block at <strong>Hotel Victoria</strong> (Cogeo Village, 7) for our guests. Quote <strong>"Wife &amp; Husband's Wedding"</strong> when booking.
        </p>
      </section>
    </div>
  )
}
