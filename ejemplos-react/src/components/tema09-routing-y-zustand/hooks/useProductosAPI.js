import { useState } from "react"

export const useProductosAPI = () => {
  const [loading, setLoading] = useState(true)

  const getProductos = async (queryParams) => {
    const offset = queryParams.get('_offset')
    const limit = queryParams.get('_limit')
    let searchParams = []
    if (offset) {
      searchParams.push(`_page=${offset}`)
    }
    if (limit) {
      searchParams.push(`_limit=${limit}`)
    }

    let url = 'http://localhost:3000/productos'
    if (searchParams.length > 0) {
      url += '?' + searchParams.join('&')
    }
    
    setLoading(true)
    const resp = await fetch(url)
    const productos = await resp.json()
    setLoading(false)
    return productos
  }

  const getProducto = async (id) => {
    setLoading(true)
    const resp = await fetch('http://localhost:3000/productos/' + id)
    const producto = await resp.json()
    setLoading(false)
    return producto
  }
  

  return {
    getProductos,
    getProducto,
    loading
  }
}