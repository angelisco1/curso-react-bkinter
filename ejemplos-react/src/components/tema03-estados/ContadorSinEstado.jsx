import { useState } from "react"


export const ContadorSinEstado = ({ cuenta }) => {

  const handleClick = () => {

  }
  
  return (
    <>
      <button onClick={handleClick}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button onClick={handleClick}>+</button>
    </>
  )
}