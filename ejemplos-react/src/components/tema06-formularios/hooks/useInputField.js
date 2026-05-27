import { useEffect, useState } from "react"

export const useInputField = (valorInicial, validations = {}) => {
  const [value, setValue] = useState(valorInicial)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const errores = []

    // if (value.length < 3) {
    //   errores.push('Necesitas al menos 3 caracteres')
    // }

    if (Object.keys(validations) === 0) {
      return
    }

    Object.entries(validations).forEach((entry) => {
      // entry -> [minLength, 3]
      const [validationName, validationData] = entry

      if (validationName === 'minLength' && value.length < validationData) {
        errores.push(`Necesitas al menos ${validationData} caracteres`)
      }

      if (validationName === 'simbolos' && !/[\-.,_!$]{1,}/.test(value)) {
        errores.push(`Necesitas al menos que tenga un símbolo de los siguientes: -.,_!$`)
      }

    })

    setErrors(errores)

  }, [value])

  return [
    value,
    setValue,
    errors,
  ]
}