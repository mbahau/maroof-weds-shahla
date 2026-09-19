import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { weddingData } from '../data/weddingData'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, .09, .19], [1, 1.22, 1.46])
  const leftX = useTransform(scrollYProgress, [.07, .2], ['0%', '-55%'])
  const rightX = useTransform(scrollYProgress, [.07, .2], ['0%', '55%'])
  const visualOpacity = useTransform(scrollYProgress, [.17, .27], [1, 0])
  const textY = useTransform(scrollYProgress, [0, .2], [0, -70])
  const textOpacity = useTransform(scrollYProgress, [0, .16], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [.05, .2], [0, 1])
  return <section ref={ref} className="hero" aria-labelledby="hero-title">
    <div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="cloud cloud-three" />
    <motion.div className="hero-copy" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
      <p>A celebration of love</p>
      <h1 id="hero-title">{weddingData.couple.groom} <em>weds</em> {weddingData.couple.bride}</h1>
    </motion.div>
    <motion.div className="portal-glow" style={reduce ? { opacity: 0 } : { opacity: glowOpacity }} />
    <motion.div className="palace-stage" style={reduce ? undefined : { x: '-50%', scale, opacity: visualOpacity }} aria-hidden="true">
      {reduce ? <img src="/mughal-palace.png" alt="" /> : <>
        <motion.img className="palace-half palace-left" src="/mughal-palace.png" alt="" style={{ x: leftX }} />
        <motion.img className="palace-half palace-right" src="/mughal-palace.png" alt="" style={{ x: rightX }} />
      </>}
    </motion.div>
    <a className="scroll-cue" href="#invitation"><span>Scroll to explore</span><ChevronDown size={17} /></a>
  </section>
}
