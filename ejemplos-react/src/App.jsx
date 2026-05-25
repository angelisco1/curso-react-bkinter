import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Tema01Propiedades } from './components/tema01-propiedades/Tema01Propiedades'
import { Tema02Eventos } from './components/tema02-eventos/Tema02Eventos'
import { Tema03Estados } from './components/tema03-estados/Tema03Estados'



function App() {

  return (
    <>
      <h1>Curso de React</h1>
      {/* <Tema01Propiedades /> */}
      {/* <Tema02Eventos /> */}
      <Tema03Estados />

    </>
  )
}

export default App
