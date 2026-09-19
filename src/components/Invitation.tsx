import { motion } from 'framer-motion'
import { weddingData } from '../data/weddingData'

export function Invitation() {
  return <section id="invitation" className="invitation ornate-section">
    <div className="corner corner-tl" /><div className="corner corner-tr" /><div className="corner corner-bl" /><div className="corner corner-br" />
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }} className="invitation-inner">
      <p className="arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
      <p className="blessing">In the name of Allah, the Most Gracious, the Most Merciful</p>
      <div className="mini-palace"><img src="/mughal-palace.png" alt="Ornate Mughal palace illustration" loading="lazy" /></div>
      <p className="family">Together with their families</p>
      <p className="invite-word">invite</p>
      <h2>{weddingData.couple.groom} <span>&</span> {weddingData.couple.bride}</h2>
      <p className="invitation-copy">to share in the joy of their wedding celebrations</p>
    </motion.div>
  </section>
}
