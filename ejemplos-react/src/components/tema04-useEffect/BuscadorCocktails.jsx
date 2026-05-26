import { useEffect, useMemo, useState } from "react"
import { CocktailDetail } from "./CocktailDetail"
import { ListaCocktails } from "./ListaCocktails"

// Nos lo llevaríamos a otro archivo para separarlo del componente y poder usarlo en otros componentes
const getCocktails = async (filtro) => {
  const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + filtro)
  const data = await resp.json()
  console.log(data)
  const cocktailsBuscados = Array.isArray(data.drinks) ? data.drinks : []
  return cocktailsBuscados
}

export const BuscadorCocktails = () => {
  const [filtro, setFiltro] = useState('martini')
  const [cocktails, setCocktails] = useState([])
  const [loading, setLoading] = useState(true)
  // const [numCocktails, setNumCocktails] = useState(25)
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)


  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   setLoading(true)
    //   console.log('Haciendo la petición...')
    //   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + filtro)
    //     .then(resp => resp.json())
    //     .then(data => {
    //       console.log(data)

    //       const cocktailsBuscados = Array.isArray(data.drinks) ? data.drinks : []

    //       setCocktails(cocktailsBuscados)
    //     })
    //     .catch((err) => {
    //       alert('ERROR')
    //     })
    //     .finally(() => {  
    //       setLoading(false)
    //     })
    // }, 500)

    
    const timeoutId = setTimeout(() => {
      const getData = async () => {
        try {
          const cocktailsBuscados = await getCocktails(filtro)
          setCocktails(cocktailsBuscados)
        } catch (err) {
          alert('ERROR')
        } finally {
          setLoading(false)
        }
      }
      
      getData()
    }, 500)


    return () => {
      clearTimeout(timeoutId)
    }

  }, [filtro])

  // ESTE useEffect no sería necesario
  // useEffect(() => {
  //   console.log('Se está cambiando el numCocktails')
  //   setNumCocktails(cocktails.length)
  // }, [cocktails])
  const numCocktails = cocktails.length

  return (
    <>
      <h3>Buscador de cocktails</h3>
      
      <div>
        {/* EJERCICIO: Cambiar el estado del filtro al escribir en el input */}
        <label htmlFor="filtro">Filtrar por:</label>
        <input id="filtro" value={filtro} onChange={(event) => setFiltro(event.target.value)} />
      </div>

      <hr />
      
      {loading ? (
        <p>Cargando cocktails...</p>
      ) : (
        <>
          {/* <h4>Cockails encontrados: {cocktails.length}</h4> */}
          <h4>Cockails encontrados: {numCocktails}</h4>

          <ListaCocktails
            cocktails={cocktails}
            onSelectCocktail={setCocktailSeleccionado} />

          <hr />

          {cocktailSeleccionado ? (
            <CocktailDetail cocktail={cocktailSeleccionado} />
          ) : (
            <p>Selecciona un cocktail para ver como prepararlo</p>
          )}
        </>
      )}
    </>
  )
}