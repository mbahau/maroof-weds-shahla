import { Camera } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Instagram() {
  const hashtag = weddingData.social.instagramHashtag
  return <section className="instagram-band"><Camera aria-hidden="true"/><p>Instagram</p><h2>{hashtag ?? 'Hashtag to be announced'}</h2>{hashtag && <span>Tag your moments so we can treasure them forever</span>}</section>
}
