import Ingredient from "./Ingredient"

const BurgerStack = ({RemoveFromStack, Stack}) => {
    return <>
<ul>
{Stack.map((IngredientItem, index) =>
<Ingredient passedFunction={RemoveFromStack} IngredentItem={IngredientItem} index={index}
)}
</ul>
<h3>{!Stack.length?"Why Don't You Add Something?":""}</h3>
    </>
}

  export default BurgerStack;
  