import { useState } from 'react'
import styles from './Gallery.module.css'

// Placeholder pastel swatches that represent photos
const PHOTOS = [
  { id: 1,  caption: 'Edinburgh, November 2018',   bg: '#EDE4DC', size: 'tall'   },
  { id: 2,  caption: 'Porto, Summer 2019',          bg: '#E8DDD4', size: 'normal' },
  { id: 3,  caption: 'Douro Valley Sunsets',        bg: '#F0E8E0', size: 'normal' },
  { id: 4,  caption: 'Our Islington Flat',          bg: '#E4DCD8', size: 'wide'   },
  { id: 5,  caption: 'Florence, Proposal Day',      bg: '#F5EDE6', size: 'tall'   },
  { id: 6,  caption: 'Arno at Twilight',            bg: '#EBE2D8', size: 'normal' },
  { id: 7,  caption: 'Engagement Party',            bg: '#E8E0D8', size: 'normal' },
  { id: 8,  caption: 'Villa Cora Preview',          bg: '#F2E8E0', size: 'wide'   },
  { id: 9,  caption: 'Dress Fitting Day',           bg: '#EDE6DE', size: 'normal' },
  { id: 10, caption: 'With Our Families',           bg: '#E6DDD6', size: 'normal' },
]

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const activePhoto = PHOTOS.find(p => p.id === active)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Memories</p>
        <h1 className={styles.title}>Our Gallery</h1>
        <div className={styles.hairline} />
        <p className={styles.subtitle}>A few of our favourite moments together.</p>
      </header>

      <div className={styles.grid}>
        {PHOTOS.map(photo => (
          <button
            key={photo.id}
            className={`${styles.tile} ${styles[photo.size]}`}
            style={{ background: photo.bg }}
            onClick={() => setActive(photo.id)}
            aria-label={`View photo: ${photo.caption}`}
          >
            <span className={styles.tileCaption}>{photo.caption}</span>
            <div className={styles.overlay} />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && activePhoto && (
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <div
            className={styles.lightboxInner}
            style={{ background: activePhoto.bg }}
            onClick={e => e.stopPropagation()}
          >
            <div className={styles.lightboxPhoto} style={{ background: activePhoto.bg }} />
            <p className={styles.lightboxCaption}>{activePhoto.caption}</p>
            <button className={styles.closeBtn} onClick={() => setActive(null)}>
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
