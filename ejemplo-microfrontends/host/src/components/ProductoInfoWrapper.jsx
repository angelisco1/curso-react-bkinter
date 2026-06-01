import { Suspense, lazy } from 'react'
import { useParams } from "react-router-dom"

const ProductoInfoPage = lazy(() => import('productos_remote/ProductoInfoPage'))

export const ProductoInfoWrapper = () => {
  const { id } = useParams()
  
  return (
    <Suspense fallback={<div>Cargando la info del producto seleccionado...</div>}>
      <ProductoInfoPage productoId={id} />
    </Suspense>
  )
}