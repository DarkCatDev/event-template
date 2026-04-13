import { useState, useEffect } from 'react'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

const WEDDING = new Date('2026-10-18T16:00:00+08:00').getTime()

function calc(): TimeLeft {
  const diff = WEDDING - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  /    60_000),
    seconds: Math.floor((diff %    60_000)  /     1_000),
    isPast: false,
  }
}

export function useCountdown(): TimeLeft {
  const [t, setT] = useState<TimeLeft>(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}
