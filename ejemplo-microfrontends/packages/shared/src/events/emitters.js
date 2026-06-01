import { EVENTS } from "./events"

export const emitAddItemToCart = (producto, cantidad = 1) => {
  const event = new CustomEvent(EVENTS.ADD_ITEM_TO_CART, {
    detail: {
      ...producto,
      cantidad
    }
  })
  console.log('Emitiendo el evento: ', event)
  window.dispatchEvent(event)
}

export const emitNavigateToProduct = (productoId) => {
  const event = new CustomEvent(EVENTS.NAVIGATE_TO_PRODUCT, {
    detail: {
      productoId,
    }
  })
  console.log('Emitiendo el evento: ', event)
  window.dispatchEvent(event)
}

export const emitNavigateToPath = (path) => {
  const event = new CustomEvent(EVENTS.NAVIGATE_TO_PATH, {
    detail: {
      path,
    }
  })
  console.log('Emitiendo el evento: ', event)
  window.dispatchEvent(event)
}