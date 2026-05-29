import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/crear-producto">Nuevo producto</Link>
        </li>
      </ul>
    </>
  )
}