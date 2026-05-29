import { useNavigate } from "react-router-dom"


export const CrearProducto = () => {
  const navigate = useNavigate()

  const guardar = () => {
    console.log('Guardando producto...')
    setTimeout(() => {
      console.log('Nuevo producto guardado...')
      navigate('/productos')
    }, 1000)
  }
  
  
  return (
    <>
      <h3>Crear producto</h3>

      <button type="button" onClick={guardar}>Guardar</button>
    </>
  )
}