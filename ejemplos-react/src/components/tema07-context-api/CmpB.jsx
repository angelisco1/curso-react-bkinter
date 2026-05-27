import { useContext } from "react"
import { LangContext } from "./contexts/LangContext"
import { Traductor } from "./utils/Traductor"


export const CmpB = () => {
  const langSeleccionado = useContext(LangContext)

  return (
    <>
      <h4>Componente B</h4>
      <p>Lang: {langSeleccionado}</p>

      <p>{Traductor.traducir('bienvenido', langSeleccionado)} nombre</p>
    </>
  )
}