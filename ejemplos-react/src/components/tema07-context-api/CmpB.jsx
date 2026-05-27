import { useContext } from "react"
import { LangContext } from "./contexts/LangContext"
import { Traductor } from "./utils/Traductor"
import { UsuarioContext } from "./contexts/UsuarioContext"


export const CmpB = () => {
  const langSeleccionado = useContext(LangContext)
  const usuario = useContext(UsuarioContext)

  return (
    <>
      <h4>Componente B</h4>
      <p>Lang: {langSeleccionado}</p>

      <p>{Traductor.traducir('bienvenido', langSeleccionado)} {usuario.nombre}</p>
    </>
  )
}