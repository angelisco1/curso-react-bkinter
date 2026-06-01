import { create } from 'zustand'

export const useCestaProductos = create(
  (set, get) => {
    return {
      productosEnCarrito: [],

      addProducto: (producto, cantidad = 1) => {
        console.log('Z', producto, cantidad)
        
        set((state) => {
          const estaEnCarrito = state.productosEnCarrito.find(p => p.id === producto.id)
          console.log('1', estaEnCarrito)

          if (!estaEnCarrito) {
            const productosActualizados = [
              ...state.productosEnCarrito,
              {
                ...producto,
                cantidad
              }
            ]
            console.log('2', productosActualizados)
            
            return {
              productosEnCarrito: productosActualizados
            }
          }
          
          const productosActualizados = state.productosEnCarrito.map(p => {
            if (p.id === producto.id) {
              return {
                ...p,
                cantidad: p.cantidad + cantidad
              }
            }
            return p
          })

          console.log('3', productosActualizados)

          return {
            productosEnCarrito: productosActualizados
          }
        })
      },
      
      getTotalProductos() {
        const listaProductos = get().productosEnCarrito
        console.log('TOTAL: ', listaProductos)
        const cantidadTotal = 0
        listaProductos.forEach(element => {
          cantidadTotal += element.cantidad
        })
        console.log('TOTAL CANTIDAD: ', cantidadTotal)
        return cantidadTotal
      }
    }
  }
)