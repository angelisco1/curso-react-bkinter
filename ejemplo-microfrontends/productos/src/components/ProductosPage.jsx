import { useEffect, useState } from "react"
import { emitAddItemToCart, emitNavigateToProduct } from "@mf/shared"
// import { useProductosAPI } from "./hooks/useProductosAPI"

const ProductosPage = () => {
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    const getProductos = async () => {
      const resp = await fetch('http://localhost:4000/productos')
      const productos = await resp.json()
      setProductos(productos)
    }
    
    getProductos()
  }, [])
  
  
  return (
    <>
      <h3>Lista productos</h3>

      {
        productos.map(p => (
          <div key={p.id}>
            <span>{p.nombre}</span>
            {/* <Link to={'/productos/' + p.id}>Ver producto</Link> */}
            <button onClick={() => emitAddItemToCart(p)}>Añadir a la cesta</button>
            <button onClick={() => emitNavigateToProduct(p.id)}>Ver + info</button>
          </div>
        ))
      }
    </>
  )
}

export default ProductosPage