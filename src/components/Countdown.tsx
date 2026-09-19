import { useEffect, useState } from 'react'
import { weddingData } from '../data/weddingData'

const calculate = () => {
  const diff = Math.max(0, new Date(weddingData.countdown.target).getTime() - Date.now())
  return { days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 }
}
export function Countdown() {
  const [time, setTime] = useState(calculate)
  useEffect(() => { const timer = window.setInterval(() => setTime(calculate()), 1000); return () => window.clearInterval(timer) }, [])
  return <section className="countdown"><p className="eyebrow">Until {weddingData.countdown.event}</p><h2>Counting every moment</h2><div className="countdown-grid">{Object.entries(time).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div></section>
}
