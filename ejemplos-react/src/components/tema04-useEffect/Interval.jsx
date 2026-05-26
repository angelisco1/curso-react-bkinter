import { useEffect, useState } from 'react'


export const Interval = () => {
  const [cuenta, setCuenta] = useState(0)

  // setTimeout(() => {
  //   setCuenta(cuenta + 1)
  // }, 1000)
  console.log('[render] CUENTA: ', cuenta)
  
  useEffect(() => {
    console.log('Pasa por el useEffect')
    console.log('[useEffect] CUENTA: ', cuenta)

    const intervalId = setInterval(() => {
      console.log('Pasa por el setInterval')
      console.log('[setInterval] CUENTA: ', cuenta)
      setCuenta(cuenta + 1)
    }, 1000)

    return () => {
      console.log('[Return del effect] CUENTA: ', cuenta)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <p>{cuenta}</p>
    </>
  )
}