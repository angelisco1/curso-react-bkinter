import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { ListaProductos } from './ListaProductos'
import { CrearProducto } from './CrearProducto'
import { Header } from './Header'
import { ProductoInfo } from './ProductoInfo'
import { PageNotFound } from './PageNotFound'

export const Tema09RoutingYZustand = () => {
  return (
    <>
      {/* Normalmente se pone en el main.jsx envolviendo el componente App */}
      <BrowserRouter>

        <h2>Tema 09: routing y zustand</h2>

        <Header />

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/productos' Component={ListaProductos}>
            <Route path=':id' Component={ProductoInfo} />
          </Route>
          {/* <Route path='/productos/:id' Component={ProductoInfo} /> */}
          <Route path='/crear-producto' Component={CrearProducto} />

          {/* <Route path='*' element={<Navigate to="/" />} /> */}
          <Route path='*' Component={PageNotFound} />
        </Routes>

      </BrowserRouter>
    </>
  )
}