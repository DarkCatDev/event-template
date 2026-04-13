import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home'      },
  { to: '/our-story', label: 'Our Story' },
  { to: '/details',   label: 'Details'   },
  { to: '/gallery',   label: 'Gallery'   },
  { to: '/rsvp',      label: 'RSVP'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        W <em>&amp;</em> H
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.active : ''].join(' ')
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
