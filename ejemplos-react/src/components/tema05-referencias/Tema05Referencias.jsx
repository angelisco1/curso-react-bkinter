import { useEffect, useRef, useState } from 'react'
import Video from '../../assets/video.mp4'


export const Tema05Referencias = () => {
  const refVideo = useRef(null)
  const [volumen, setVolumen] = useState(0)

  useEffect(() => {
    const volumenInicial = refVideo.current.volume * 100
    setVolumen(volumenInicial)
  }, [])

  const play = () => {
    console.log(refVideo)
    refVideo.current.play()
  }

  const pause = () => {
    // console.log(refVideo)
    refVideo.current.pause()
  }

  const cambiarVolumen = (event) => {
    const inputVolumen = Number(event.target.value)
    console.log(inputVolumen)

    refVideo.current.volume = inputVolumen / 100
    
    setVolumen(inputVolumen)
  }
  
  return (
    <>
      <h2>Tema 05: referencias con useRef</h2>

      <video src={Video} width="500" ref={refVideo} />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <input type="range" min={0} max={100} value={volumen} onChange={cambiarVolumen} />

    </>  
  )
}