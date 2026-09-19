import { weddingData } from '../data/weddingData'
import { Carousel } from './Carousel'
import { SectionTitle } from './SectionTitle'

export function Couple() {
  const story = weddingData.coupleStory
  return <section className="couple section-pad"><div className="couple-copy"><SectionTitle eyebrow={story?.eyebrow ?? 'Bride & Groom'} title={story?.title ?? 'Our Story'} /><p>{story?.body ?? 'Their personal story will be added once it has been provided by the couple.'}</p><div className="signature">{weddingData.couple.groom[0]} <span>♥</span> {weddingData.couple.bride[0]}</div></div><Carousel /></section>
}
