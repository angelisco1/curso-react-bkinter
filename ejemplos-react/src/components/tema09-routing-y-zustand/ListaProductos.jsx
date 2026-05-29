import { useEffect, useState } from "react"
import { useProductosAPI } from "./hooks/useProductosAPI"
import { Link, Outlet, useSearchParams } from "react-router-dom"
import { Modal } from '../tema08-prop-children-y-portals/Modal'

export const ListaProductos = () => {
  const [queryParams] = useSearchParams()
  const { getProductos, loading } = useProductosAPI()
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    console.log(queryParams.get('_offset'))
    console.log(queryParams.get('_limit'))
    getProductos(queryParams)
      .then((productos) => {
        setProductos(productos)
      })
  }, [queryParams])
  
  
  return (
    <>
      <h3>Lista productos</h3>

      {
        productos.map(p => (
          <div key={p.id}>
            <span>{p.nombre}</span>
            <Link to={'/productos/' + p.id}>Ver producto</Link>
          </div>
        ))
      }

      <Outlet />
      {/* <Modal>
        <Outlet />
      </Modal> */}
    </>
  )
}