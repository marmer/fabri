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
  const searchParams = new URLSearchParams()
  if (recipe.name) {
    searchParams.set('n', recipe.name)
    recipe.ingredients.filter(it => it.name).forEach(ingredient => searchParams.append(encodeURIComponent(ingredient.name), encodeURIComponent(ingredient.quantity)))
  }
  const searchParamsWithoutUnecessaryEquals = searchParams.toString().replaceAll('=&', '&')
    .replace(/=$/g, '')

  window.history.replaceState(recipe.name, `fabri ${recipe.name}`, searchParamsWithoutUnecessaryEquals ? `?${searchParamsWithoutUnecessaryEquals}` : '/')
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
  setup: () => ({
    currentRecipe
  })
}
