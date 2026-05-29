import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Tema01Propiedades } from './components/tema01-propiedades/Tema01Propiedades'
import { Tema02Eventos } from './components/tema02-eventos/Tema02Eventos'
import { Tema03Estados } from './components/tema03-estados/Tema03Estados'
import { Tema04UseEffect } from './components/tema04-useEffect/Tema04UseEffect'
import { Tema05Referencias } from './components/tema05-referencias/Tema05Referencias'
import { Tema06Formularios } from './components/tema06-formularios/Tema06Formularios'
import { Tema07ContextAPI } from './components/tema07-context-api/Tema07ContextAPI'
import { Tema08PropChildrenYPortals } from './components/tema08-prop-children-y-portals/Tema08PropChildrenYPortals'
import { Tema09RoutingYZustand } from './components/tema09-routing-y-zustand/Tema09RoutingYZustand'



function App() {

  return (
    <>
      <h1>Curso de React</h1>
      {/* <Tema01Propiedades /> */}
      {/* <Tema02Eventos /> */}
      {/* <Tema03Estados /> */}
      {/* <Tema04UseEffect /> */}
      {/* <Tema05Referencias /> */}
      {/* <Tema06Formularios /> */}
      {/* <Tema07ContextAPI /> */}
      {/* <Tema08PropChildrenYPortals /> */}
      <Tema09RoutingYZustand />

    </>
  )
}

export default App
