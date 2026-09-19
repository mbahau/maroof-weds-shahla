import { Play } from 'lucide-react'
import { weddingData } from '../data/weddingData'
import { SectionTitle } from './SectionTitle'

export function Video() {
  return <section className="video-section section-pad"><SectionTitle eyebrow="Before forever" title="Our Little Film" /><div className="video-frame">
    {weddingData.media.youtubeVideoId ? <iframe src={`https://www.youtube-nocookie.com/embed/${weddingData.media.youtubeVideoId}`} title="Maroof and Shahla pre-wedding film" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <div className="video-placeholder"><div className="play-circle"><Play fill="currentColor" /></div><p>Pre-wedding film</p><span>Video not provided</span></div>}
  </div></section>
}
