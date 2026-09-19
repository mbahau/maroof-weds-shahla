import { Heart } from 'lucide-react'
import { weddingData } from '../data/weddingData'

export function Footer() { return <footer className="footer"><div className="footer-monogram">{weddingData.couple.groom[0]} <Heart fill="currentColor"/> {weddingData.couple.bride[0]}</div><h2>{weddingData.couple.display}</h2><p>{weddingData.invitation.displayDate}</p><div className="footer-rule"/><span>With love, from our families to yours</span></footer> }
