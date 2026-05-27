import { useState } from "react"
import { CmpA } from "./CmpA"
import { LangContext } from "./contexts/LangContext"

export const Tema07ContextAPI = () => {
  const [lang, setLang] = useState('it')


  return (
    <>
      <h2>Tema 07: context API y useContext</h2>

      <div>
        <label htmlFor="lang">Selecciona el lenguaje de la app:</label>
        <select id="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      {/* HOC: Higher Order Component */}
      <LangContext.Provider value={lang}>
        <CmpA />
      </LangContext.Provider>

    </>
  )
}