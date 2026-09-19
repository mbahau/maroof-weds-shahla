import { Music2, VolumeX } from 'lucide-react'
import { useRef, useState } from 'react'
import { weddingData } from '../data/weddingData'

export function MusicPlayer() {
  const audio = useRef<HTMLAudioElement>(null); const [playing, setPlaying] = useState(false)
  const toggle = async () => {
    if (!audio.current) return; if (playing) audio.current.pause(); else await audio.current.play(); setPlaying(!playing)
  }
  if (!weddingData.media.musicUrl) return null
  return <><audio ref={audio} src={weddingData.media.musicUrl} loop/><button className="music-player" onClick={toggle} aria-label={playing ? 'Pause background music' : 'Play background music'}>{playing ? <VolumeX/> : <Music2/>}</button></>
}
