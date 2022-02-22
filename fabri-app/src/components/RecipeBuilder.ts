import { reactive, watch } from 'vue'

interface Ingredient {
  name: string,
  quantity: string
}

interface Recipe {
  name: string,
  ingredients: Array<Ingredient>
}

const emptyIngredient: Ingredient = {
  name: '',
  quantity: ''
}

const currentRecipe = reactive<Recipe>({
  name: '',
  ingredients: []
})

function tryAddNewIngredientRow (newRecipe: Recipe) {
  const hasNoIngredientYet = !newRecipe.ingredients.length
  const lastIngredient = newRecipe.ingredients[newRecipe.ingredients.length - 1]
  if (hasNoIngredientYet || lastIngredient?.name) {
    newRecipe.ingredients.push({ ...emptyIngredient })
  }
}

const updateQueryParameter = (recipe: Recipe) => {
  const ingredientPart = recipe.ingredients
    .filter(it => it.name)
    .map(it => `${encodeURIComponent(it.name)}` + (it.quantity ? `=${encodeURIComponent(it.quantity)}` : ''))
    .reduce((a, b) => `${a}&${b}`, `?n=${encodeURIComponent(recipe.name)}`)
  window.history.replaceState(recipe.name, `fabri ${recipe.name}`, recipe.name ? ingredientPart : '/')
}

const processRecipeChange = (newRecipe: Recipe) => {
  console.log('Some Change occured:')
  console.log(JSON.stringify(newRecipe))
  tryAddNewIngredientRow(newRecipe)
  updateQueryParameter(newRecipe)
}

watch(currentRecipe, processRecipeChange, {
  deep: true
})

export default {
  setup () {
    return {
      currentRecipe
    }
  }
}
