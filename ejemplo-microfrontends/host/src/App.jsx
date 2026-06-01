import { Suspense, lazy, useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import { onNavigateToProduct, onNavigateToPath } from '@mf/shared'
import { ProductoInfoWrapper } from './components/ProductoInfoWrapper'

// import ProductosPage from '../../productos/src/components/ProductosPage'
// import { Header } from 'header_remote/Header'
const Header = lazy(() => import('header_remote/Header'))
const ProductosPage = lazy(() => import('productos_remote/ProductosPage'))


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    // La ruta se la podriamos pasar mejor al emitir el evento desde el botón de Ver + info
    const cleanNavigationToProduct = onNavigateToProduct((data) => navigate('/productos/' + data.productoId))
    const cleanNavigationToPath = onNavigateToPath((data) => navigate(data.path))

    return () => {
      cleanNavigationToProduct()
      cleanNavigationToPath()
    }
  }, [])

  return (
    <>
      <Suspense fallback={<div>Cargando el header...</div>}>
        <Header />
      </Suspense>

    <Routes>
      <Route path="/" element={
        <Navigate to="/productos" />
      } />

      <Route path="/productos" element={
        <Suspense fallback={<div>Cargando la lista de productos...</div>}>
          <ProductosPage />
        </Suspense>
      } />

      <Route path="/productos/:id" Component={ProductoInfoWrapper} />

    </Routes>

    </>
  )
}

export default App
