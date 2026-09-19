import { motion } from 'framer-motion'
import { useState } from 'react'
import { weddingData } from '../data/weddingData'

export function DateReveal() {
  const [revealed, setRevealed] = useState(false)
  return <section className="date-reveal section-pad">
    <div className="date-card">
      <p className="eyebrow">Save our date</p>
      <h2>Something beautiful awaits</h2>
      <button className={`seal ${revealed ? 'opened' : ''}`} onClick={() => setRevealed(true)} aria-expanded={revealed} aria-controls="revealed-date"><span>MS</span></button>
      <div id="revealed-date" className={`revealed-date ${revealed ? 'is-visible' : ''}`} aria-live="polite">
        <p>{weddingData.invitation.weekday}</p><strong>{weddingData.invitation.day}</strong><p>{weddingData.invitation.monthYear}</p>
      </div>
      {!revealed && <p className="tap-note">Tap the seal to reveal the date</p>}
    </div>
  </section>
}
