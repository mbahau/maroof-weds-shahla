import { Check, X } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SectionTitle } from './SectionTitle'
import { weddingData } from '../data/weddingData'

export function RSVP() {
  const [choice, setChoice] = useState<'yes' | 'no' | null>(null)
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity() || !choice) return
    const form = new FormData(e.currentTarget)
    localStorage.setItem(weddingData.rsvp.storageKey, JSON.stringify({
      response: choice,
      name: String(form.get('name')),
      email: String(form.get('email')),
      guests: choice === 'yes' ? Number(form.get('guests')) : 0,
      note: String(form.get('note') || ''),
      savedAt: new Date().toISOString(),
    }))
    setSent(true)
  }
  return <section id="rsvp" className="rsvp section-pad"><SectionTitle eyebrow="Kindly respond" title="Will you join us?" light />
    {!weddingData.rsvp.endpoint && <p className="local-only-note">No RSVP recipient or submission service has been provided. Responses are saved only on this device and are not sent to the hosts.</p>}
    {!choice && <div className="rsvp-choice"><button onClick={() => setChoice('yes')}><Check/>Joyfully accept</button><button onClick={() => setChoice('no')}><X/>Regretfully decline</button></div>}
    {choice && !sent && <form onSubmit={submit} className="rsvp-form">
      <button type="button" className="back-choice" onClick={() => setChoice(null)}>← Change response</button>
      <label>Full name<input name="name" autoComplete="name" required minLength={2} /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
      {choice === 'yes' && <label>Number of guests<select name="guests" defaultValue="1"><option>1</option><option>2</option><option>3</option><option>4</option></select></label>}
      <label>A note for the couple<textarea name="note" rows={3} /></label>
      <button className="gold-button" type="submit">Send response</button>
    </form>}
    {sent && <div className="success-message"><span>✦</span><h3>Response saved on this device.</h3><p>It has not been sent to the hosts.</p></div>}
  </section>
}
