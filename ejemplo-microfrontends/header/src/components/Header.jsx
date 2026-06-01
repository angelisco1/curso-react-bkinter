// import { Link } from "react-router-dom"

import { emitNavigateToProduct, emitNavigateToPath, onAddItemToCart } from "@mf/shared"
import { useCestaProductos } from "@mf/shared/src/store/useCestaProductos"
import { useEffect } from "react"
import { useState } from "react"

const Header = () => {
  const [itemsEnCesta, setItemsEnCesta] = useState(0)
  const totalProductosEnCesta = useCestaProductos((state) => state.getTotalProductos())

  const handleAddItemToCart = (productoAñadido) => {
    console.log('Recibido el producto añadido: ', productoAñadido)
    setItemsEnCesta((prevItems) => prevItems + productoAñadido.cantidad)
  }

  useEffect(() => {
    const cleanOnAddItemToCart = onAddItemToCart(handleAddItemToCart)

    return () => {
      cleanOnAddItemToCart()
    }
  }, [])
  
  return (
    <>
      <span>Tienda 3000</span>
      <ul>
        <li onClick={() => emitNavigateToPath('/')}>
          {/* <Link to="/">Inicio</Link> */}
          Inicio
        </li>
        <li onClick={() => emitNavigateToPath('/productos')}>
          {/* <Link to="/productos">Productos</Link> */}
          Productos
        </li>
        <li>
          {/* <Link to="/crear-producto">Nuevo producto</Link> */}
          Nuevo producto
        </li>
        <li>
          🛒 {itemsEnCesta}
        </li>
        <li>
          🛒 {totalProductosEnCesta} (zustand)
        </li>
      </ul>
    </>
  )
}

export default Header