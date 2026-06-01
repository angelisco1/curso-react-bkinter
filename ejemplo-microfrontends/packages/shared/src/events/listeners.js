import { EVENTS } from "./events";



export const onAddItemToCart = (cb) => {
  const handleEvent = (event) => {
    cb(event.detail)
  }
  window.addEventListener(EVENTS.ADD_ITEM_TO_CART, handleEvent)

  return () => window.removeEventListener(EVENTS.ADD_ITEM_TO_CART, handleEvent)
}

export const onNavigateToProduct = (cb) => {
  const handleEvent = (event) => {
    cb(event.detail)
  }
  window.addEventListener(EVENTS.NAVIGATE_TO_PRODUCT, handleEvent)

  return () => window.removeEventListener(EVENTS.NAVIGATE_TO_PRODUCT, handleEvent)
}

export const onNavigateToPath = (cb) => {
  const handleEvent = (event) => {
    cb(event.detail)
  }
  window.addEventListener(EVENTS.NAVIGATE_TO_PATH, handleEvent)

  return () => window.removeEventListener(EVENTS.NAVIGATE_TO_PATH, handleEvent)
}