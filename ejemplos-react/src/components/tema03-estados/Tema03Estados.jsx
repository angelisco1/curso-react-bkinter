import { useState } from "react"
import { Contador } from "./Contador"
import { ContadorSinEstado } from "./ContadorSinEstado"

export const Tema03Estados = () => {
  const [cuenta, setCuenta] = useState(0)

  return (
    <>
      <h2>Tema 03: estados</h2>

      {/* <Contador /> */}
      <ContadorSinEstado cuenta={cuenta} onChangeCuenta={setCuenta} />

    </>
  )
}