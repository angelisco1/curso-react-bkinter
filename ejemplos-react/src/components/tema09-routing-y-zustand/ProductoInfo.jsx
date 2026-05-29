import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useProductosAPI } from "./hooks/useProductosAPI"

export const ProductoInfo = () => {
  const { id } = useParams()
  const { getProducto, loading } = useProductosAPI()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    getProducto(id)
      .then(producto => {
        setProducto(producto)
      })
  }, [id])
  
  return (
    <>
      {loading ? (
        <p>Loading producto {id}...</p>
      ) : (
        <div>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}€</p>
          <p>Quedan {producto.stock} unidades</p>
        </div>
      )}
    </>
  )
}