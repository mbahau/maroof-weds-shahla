import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { weddingData } from '../data/weddingData'

export function Carousel() {
  const [index, setIndex] = useState(0)
  const move = (step: number) => setIndex(i => (i + step + weddingData.gallery.length) % weddingData.gallery.length)
  if (weddingData.gallery.length === 0) return <div className="carousel carousel-empty" role="img" aria-label="Couple photographs have not been provided"><img src="/mughal-palace.png" alt=""/><div><strong>M & S</strong><span>Photographs to be added</span></div></div>
  return <div className="carousel" aria-roledescription="carousel" aria-label="Our story gallery">
    <AnimatePresence mode="wait">
      <motion.img key={index} src={weddingData.gallery[index].src} alt={weddingData.gallery[index].alt} loading="lazy" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }} />
    </AnimatePresence>
    <div className="carousel-controls">
      <button onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button>
      <span>{String(index + 1).padStart(2, '0')} / {String(weddingData.gallery.length).padStart(2, '0')}</span>
      <button onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button>
    </div>
  </div>
}
