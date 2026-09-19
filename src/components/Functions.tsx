import { Heart, MoonStar, Sparkles, Star, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { weddingData, type WeddingEvent } from '../data/weddingData'
import { SectionTitle } from './SectionTitle'

const icons = { sun: Sun, sparkles: Sparkles, moon: MoonStar, heart: Heart, star: Star }
function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const Icon = icons[event.icon]
  return <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="event-card">
    <Icon aria-hidden="true" /><p className="event-count">0{index + 1}</p><h3>{event.name}</h3>{event.note && <p>{event.note}</p>}<div className="event-rule"/><time dateTime={event.dateTime}>{event.date}<br /><strong>{event.time}</strong></time>
  </motion.article>
}
export function Functions() {
  return <section className="functions section-pad"><SectionTitle eyebrow="Mark your calendar" title="The Celebrations" light /><div className="events-grid">{weddingData.events.map((e, i) => <EventCard event={e} index={i} key={e.name} />)}</div></section>
}
