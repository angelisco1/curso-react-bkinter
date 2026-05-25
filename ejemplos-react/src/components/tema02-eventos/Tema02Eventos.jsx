const handleClick = (event) => {
  alert('Has pulsado un botón')
}

const handleChange = (event) => {
  console.log(`El valor es: ${event.target.value}`)
  // console.log(`El valor es: ${event.nativeEvent.data}`)
}

const handleClickLink = (event) => {
  event.preventDefault()
}

export const Tema02Eventos = () => {
  
  const listaCompra = [
    { id: 1, texto: 'tomate' },
    { id: 2, texto: 'patata' },
    { id: 3, texto: 'lechuga' },
  ]
  
  const isLoggedIn = true
  

  let boton = <button type="button" onClick={(event) => console.log('Has pulsado el Login')}>Login</button>
  if (isLoggedIn) {
    boton = <button type="button" onClick={handleClick}>Logout</button>
  }

  const listaCompraCmps = listaCompra.map((item, pos) => {
    return <li key={item.id}>{item.texto}</li>
  })

  
  return (
    <>
      <h2>Tema 02: eventos, listas y condicionales</h2>

      {/* {isLoggedIn ? (
        <button type="button" onClick={handleClick}>Logout</button>
      ) : (
        <button type="button" onClick={(event) => console.log('Has pulsado el Login')}>Login</button>
      )} */}
      {boton}
      {isLoggedIn && <p>Bienvenido</p>}

      <ul>
        {listaCompraCmps}
      </ul>


      <input type="text" onChange={handleChange} />

      <a onClick={handleClickLink} href="https://google.com">Google</a>
    </>
  )
}