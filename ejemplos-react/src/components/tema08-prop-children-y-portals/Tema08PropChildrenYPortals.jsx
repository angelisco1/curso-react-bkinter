import { useState } from "react"
import { Sugus } from "../tema01-propiedades/Sugus"
import { Modal } from "./Modal"

export const Tema08PropChildrenYPortals = () => {
  const [showingError, setShowingError] = useState(false)
  const [isOpened, toggleModal] = useState(false)

  const closeModal = () => {
    setShowingError(false)
  }

  const openModal = () => {
    setTimeout(() => {
      setShowingError(true)
    }, 500)
  }
  
  return (
    <>
      <h2>Tema 08: prop children y portals</h2>

      <button type="button" onClick={openModal}>Login</button>
      <button type="button" onClick={() => toggleModal(true)}>Mostrar sugus</button>
      
{/* 
      <Modal>
        <p>Contenido</p>
      </Modal>

      <Modal>
        <p style={{color: 'red'}}>Las credenciales son invalidas</p>
      </Modal> */}

      {showingError && <Modal onClose={closeModal}>
        <p style={{color: 'red'}}>
          <span>Las credenciales son invalidas</span>
          <img width={50} src="https://img.freepik.com/vector-gratis/ilustracion-vectorial-diseno-grafico_24908-54512.jpg?semt=ais_hybrid&w=740&q=80" />
        </p>
      </Modal>}
    

      {isOpened && <Modal onClose={() => toggleModal(false)}>
        <Sugus color="blue" sabor="piña"></Sugus>
      </Modal>}
    
    </>
  )
}