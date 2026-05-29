import { useEffect, useState } from "react"
import { useInputField } from "./hooks/useInputField"

export const Tema06Formularios = () => {
  // const [nombre, setNombre] = useState('')
  // const [erroresNombre, setErroresNombre] = useState([])
  const [nombre, setNombre, erroresNombre] = useInputField('Charly', {minLength: 3})
  
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [password, setPassword, erroresPassword] = useInputField('', {minLength: 8, simbolos: true})
  
  // useEffect(() => {
  //   const errores = []

  //   if (nombre.length < 3) {
  //     errores.push('Necesitas al menos 3 caracteres')
  //   }

  //   setErroresNombre(errores)
  // }, [nombre])

  const handleSubmit = (event) => {
    event.preventDefault()

    const datos = {
      nombre,
      email,
      password,
    }
    console.log(`Enviando datos al servidor: ${JSON.stringify(datos)}`)
  }
  
  return (
    <>
      <h2>Tema 06: formularios</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {/* ESTO PODRIAMOS LLEVARLO A UN COMPONENTE QUE MUESTRE LOS ERRORES */}
          {erroresNombre.length > 0 && (
            <ul>
              {erroresNombre.map((err, pos) => <li key={pos}>{err}</li>)}
            </ul>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
          
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* ESTO PODRIAMOS LLEVARLO A UN COMPONENTE QUE MUESTRE LOS ERRORES */}
          {erroresPassword.length > 0 && (
            <ul>
              {erroresPassword.map((err, pos) => <li key={pos}>{err}</li>)}
            </ul>
          )}
        </div>

        <button type="submit">Sign up</button>

      </form>
    </>
  )
}