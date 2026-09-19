import { Bell, MapPin, MessageCircle } from 'lucide-react'
import { weddingData } from '../data/weddingData'
import { SectionTitle } from './SectionTitle'

export function ThingsToKnow() {
  const details = weddingData.guestInformation
  const cards = [
    { Icon: MapPin, title: 'The Venue', body: details.venue ? `${details.venue.name}. ${details.venue.address}` : 'Venue details have not been provided.' },
    { Icon: MessageCircle, title: 'Contact', body: details.contact ?? 'Contact details have not been provided.' },
    { Icon: Bell, title: 'Guest Information', body: details.reminder ?? 'No additional guest instructions have been provided.' },
  ]
  return <section className="things section-pad"><SectionTitle eyebrow="For our dear guests" title="Things to Know"/><div className="things-grid">{cards.map(({ Icon, title, body }) => <article key={title}><Icon/><h3>{title}</h3><p>{body}</p></article>)}</div></section>
}
