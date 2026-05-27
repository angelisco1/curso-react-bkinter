import { useEffect, useReducer, useState } from "react"
import { CmpA } from "./CmpA"
import { LangContext } from "./contexts/LangContext"
import { UsuarioContext } from "./contexts/UsuarioContext"

const reducer = (prevState, action) => {
  console.log('PASA POR EL REDUCER')
  switch (action.type) {
    case 'INICIALIZAR_USUARIO':
      return action.payload
    case 'ELIMINAR_USUARIO':
      return {nombre: '', email: ''}
    case 'ACTUALIZAR_NOMBRE':
      return {
        ...prevState,
        nombre: action.payload
      }
    default:
      return prevState
  }
}


export const Tema07ContextAPI = () => {
  const [lang, setLang] = useState('it')
  const [usuario, dispatch] = useReducer(reducer, {nombre: '', email: ''})

  useEffect(() => {
    const usuario = localStorage.getItem('usuario')
    if (usuario) {
      // setUsuario(JSON.parse(usuario))
      dispatch({type: 'INICIALIZAR_USUARIO', payload: JSON.parse(usuario)})
    } else {
      dispatch({type: 'INICIALIZAR_USUARIO', payload: {nombre: '', email: ''}})
    }
  }, [])

  const changeNombre = (event) => {
    event.preventDefault()

    const nombre = event.target[0].value
    localStorage.setItem('usuario', JSON.stringify({...usuario, nombre}))
    dispatch({type: 'ACTUALIZAR_NOMBRE', payload: nombre})
  }

  const deleteUsuario = () => {
    localStorage.removeItem('usuario')
    dispatch({type: 'ELIMINAR_USUARIO'})
  }


  return (
    <>
      <h2>Tema 07: context API y useContext</h2>

    <form onSubmit={changeNombre}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" defaultValue={usuario.nombre} />
      </div>
      <div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={deleteUsuario}>Eliminar</button>
      </div>
    </form>


      <div>
        <label htmlFor="lang">Selecciona el lenguaje de la app:</label>
        <select id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      {/* HOC: Higher Order Component */}
      <LangContext.Provider value={lang}>
        <UsuarioContext.Provider value={usuario}>
            <CmpA />
        </UsuarioContext.Provider>
      </LangContext.Provider>

    </>
  )
}