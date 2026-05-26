export const CocktailDetail = ({ cocktail }) => {
  return (
    <div>
      <img width="50" src={cocktail.strDrinkThumb} alt={"Imagen del cocktail " + cocktail.strDrink} />
      <h5>{cocktail.strDrink}</h5>
      <p>{cocktail.strInstructionsES ? cocktail.strInstructionsES : cocktail.strInstructions}</p>
    </div>
  )
}