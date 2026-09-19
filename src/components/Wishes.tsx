import { FormEvent, useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import { SectionTitle } from './SectionTitle'
import { weddingData } from '../data/weddingData'

type Wish = { name: string; message: string; date: string }
export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([])
  useEffect(() => { try { setWishes(JSON.parse(localStorage.getItem(weddingData.wishes.storageKey) || '[]')) } catch { setWishes([]) } }, [])
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const form = new FormData(e.currentTarget); const wish = { name: String(form.get('name')), message: String(form.get('message')), date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) }
    const next = [wish, ...wishes].slice(0, 12); setWishes(next); localStorage.setItem(weddingData.wishes.storageKey, JSON.stringify(next)); e.currentTarget.reset()
  }
  return <section className="wishes section-pad"><SectionTitle eyebrow="Leave a little love" title="Wishes for the Couple"/><form onSubmit={submit} className="wish-form"><input name="name" aria-label="Your name" placeholder="Your name" required minLength={2}/><textarea name="message" aria-label="Your wish" placeholder="Write your wish…" required minLength={3} rows={3}/><button type="submit"><Send size={17}/>Add your wish</button></form>
    <div className="wish-wall">{wishes.length ? wishes.map((w, i) => <blockquote key={`${w.name}-${i}`}><p>“{w.message}”</p><footer>{w.name} · <span>{w.date}</span></footer></blockquote>) : <p className="empty-wishes">Your loving wishes will appear here.</p>}</div>
  </section>
}
