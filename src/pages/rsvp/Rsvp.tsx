import { useState } from 'react'
import styles from './Rsvp.module.css'

type Attending = 'yes' | 'no' | ''

interface FormState {
  name: string
  email: string
  attending: Attending
  guests: string
  dietary: string
  song: string
  message: string
}

const EMPTY: FormState = {
  name: '', email: '', attending: '', guests: '1', dietary: '', song: '', message: '',
}

export default function RSVP() {
  const [form, setForm]       = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]     = useState('')

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

 const handleSubmit = async (e: React.MouseEvent) => {
  e.preventDefault()
  if (!form.name.trim())     return setError('Please enter your full name.')
  if (!form.email.trim())    return setError('Please enter your email address.')
  if (!form.attending)       return setError('Please let us know if you can attend.')
  setError('')
  
  try {
    // Convert form data to URL parameters
    const params = new URLSearchParams({
      name: form.name,
      email: form.email,
      attending: form.attending,
      guests: form.guests,
      dietary: form.dietary,
      song: form.song,
      message: form.message
    })
    
    await fetch(`https://script.google.com/macros/s/AKfycbyza7CTRRDBqNSumxhUNQsnH8EtGXOwgrAvktTwNQ43tqtkwIa5L3eYpjpDby_bH7KHcw/exec`, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(params))
    })
    
    setSubmitted(true)
    
  } catch (err) {
    setError('Failed to submit RSVP. Please try again.')
  }
}

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.thanks}>
          <span className={styles.thanksFlower}>✿</span>
          <h1 className={styles.thanksTitle}>
            {form.attending === 'yes' ? "We'll see you there!" : "We'll miss you dearly."}
          </h1>
          <div className={styles.hairline} />
          <p className={styles.thanksSub}>
            {form.attending === 'yes'
              ? `Thank you, ${form.name.split(' ')[0]}. We can't wait to celebrate with you on October 18th in Florence.`
              : `Thank you for letting us know, ${form.name.split(' ')[0]}. We'll be thinking of you on our special day.`}
          </p>
          <button className={styles.resetBtn} onClick={() => { setForm(EMPTY); setSubmitted(false) }}>
            Submit Another Response
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Kindly Reply By August 1, 2025</p>
        <h1 className={styles.title}>RSVP</h1>
        <div className={styles.hairline} />
        <p className={styles.subtitle}>We hope you can join us in Florence.</p>
      </header>

      <div className={styles.formWrap}>
        <div className={styles.form}>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name <span className={styles.req}>*</span></label>
              <input
                className={styles.input}
                type="text"
                placeholder="Firstname Lastname"
                value={form.name}
                onChange={set('name')}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email Address <span className={styles.req}>*</span></label>
              <input
                className={styles.input}
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={set('email')}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Will you be attending? <span className={styles.req}>*</span></label>
            <div className={styles.toggleRow}>
              <button
                type="button"
                className={`${styles.toggle} ${form.attending === 'yes' ? styles.toggleActive : ''}`}
                onClick={() => setForm(p => ({ ...p, attending: 'yes' }))}
              >
                Joyfully accepts
              </button>
              <button
                type="button"
                className={`${styles.toggle} ${form.attending === 'no' ? styles.toggleActive : ''}`}
                onClick={() => setForm(p => ({ ...p, attending: 'no' }))}
              >
                Regretfully declines
              </button>
            </div>
          </div>

          {form.attending === 'yes' && (
            <>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Number of Guests (including yourself)</label>
                  <select className={styles.input} value={form.guests} onChange={set('guests')} title="Number of Guests">
                    {['1','2','3','4'].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Dietary Requirements</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Vegetarian, gluten-free, etc."
                    value={form.dietary}
                    onChange={set('dietary')}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Song Request 🎶</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="What song will get you on the dance floor?"
                  value={form.song}
                  onChange={set('song')}
                />
              </div>
            </>
          )}

          <div className={styles.field}>
            <label className={styles.label}>Leave a message for the bride &amp; groom</label>
            <textarea
              className={styles.textarea}
              placeholder="Share your wishes, a favourite memory, or anything you'd like us to know…"
              value={form.message}
              onChange={set('message')}
              rows={4}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.submitBtn} onClick={handleSubmit}>
            Send RSVP
          </button>
        </div>
      </div>
    </div>
  )
}
