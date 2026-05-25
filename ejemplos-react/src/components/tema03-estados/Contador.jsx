import { useState } from "react"


export const Contador = () => {
  
  const [cuenta, setCuenta] = useState(10)
  
  /*
  if (cuenta != 10) {
    const [a, setA] = useState(1)
  }
    
  const [b, setB] = useState(100)

  ----
  1. useState -> [10] ... [11]
  2. useState -> [100] ... [1]
  ---
  3. useState ->  ... [100]
  */

  
  

  const handleClick = () => {
    if (cuenta > 0) {
      // setCuenta(cuenta - 1)
      setCuenta((prevCuenta) => {
        return prevCuenta - 1
      })
    }
  }
  
  return (
    <>
      <button onClick={handleClick}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button onClick={() => setCuenta(cuenta + 1)}>+</button>
    </>
  )
}