import { motion } from 'framer-motion'

export function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .7 }} className="section-title">
    <p className={light ? 'eyebrow text-gold-light' : 'eyebrow'}>{eyebrow}</p>
    <h2 className={light ? 'text-ivory' : ''}>{title}</h2>
    <span className="title-flourish" aria-hidden="true">✦</span>
  </motion.div>
}
