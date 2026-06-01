import { emitAddItemToCart } from "@mf/shared"
import { useCestaProductos } from "@mf/shared"
import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { useProductosAPI } from "./hooks/useProductosAPI"

const ProductoInfoPage = ({ productoId }) => {
  // const { id } = useParams()
  // const { getProducto, loading } = useProductosAPI()
  const [producto, setProducto] = useState(null)
  const [cantidad, setCantidad] = useState(1)

  const addProducto = useCestaProductos((state) => state.addProducto)

  useEffect(() => {
    const getProducto = async () => {
      const resp = await fetch('http://localhost:4000/productos/' + productoId)
      const producto = await resp.json()
      setProducto(producto)
    }
    
    getProducto()
  }, [productoId])

  if (!producto) return <p>Loading...</p>
  
  return (
    <>
      {/* {loading ? (
        <p>Loading producto {id}...</p>
      ) : (
        <div>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}€</p>
          <p>Quedan {producto.stock} unidades</p>
        </div>
      )} */}
      {producto && (
        <div>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}€</p>
          <p>Quedan {producto.stock} unidades</p>
          <input type="number" value={cantidad} onChange={(event) => setCantidad(Number(event.target.value))} />
          <button onClick={() => emitAddItemToCart(producto, cantidad)}>Añadir a la cesta</button>
          <button onClick={() => addProducto(producto, cantidad)}>Añadir a la cesta (zustand)</button>
        </div>
      )}
    </>
  )
}

export default ProductoInfoPage