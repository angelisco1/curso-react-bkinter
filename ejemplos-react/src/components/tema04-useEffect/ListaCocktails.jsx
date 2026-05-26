export const ListaCocktails = ({ cocktails, onSelectCocktail }) => {
  return (
    <ul>
      {cocktails.map(c => (
        <li
          key={c.idDrink}
          onClick={() => onSelectCocktail(c)}
        >{c.strDrink}</li>
      ))}
    </ul>
  )
}