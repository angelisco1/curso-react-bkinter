import { useState } from "react"


export const ContadorSinEstado = ({ cuenta, onChangeCuenta }) => {

  // const handleClick = (nuevaCuenta) => {
  //   onChangeCuenta(nuevaCuenta)
  // }

  const decrementarCuenta = () => {
    if (cuenta > 0) {
      onChangeCuenta(cuenta - 1)
    }
  }
  
  const incrementarCuenta = () => {
    onChangeCuenta(cuenta + 1)
  }
  
  return (
    <>
      <button onClick={decrementarCuenta}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button onClick={incrementarCuenta}>+</button>
    </>
  )
}