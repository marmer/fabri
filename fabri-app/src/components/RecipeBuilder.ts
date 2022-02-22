import { onMounted, reactive, watch } from 'vue'

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

const tryAddNewIngredientRow = (newRecipe: Recipe) => {
  const hasNoIngredientYet = !newRecipe.ingredients.length
  const lastIngredient = newRecipe.ingredients[newRecipe.ingredients.length - 1]
  if (hasNoIngredientYet || lastIngredient?.name) {
    newRecipe.ingredients.push({ ...emptyIngredient })
  }
}

function getTitleForRecipe (recipe: Recipe) {
  return recipe.name
    ? `fabri - ${recipe.name}`
    : 'fabri'
}

const updateQueryParameter = (recipe: Recipe) => {
  const searchParams = new URLSearchParams()
  if (recipe.name) {
    searchParams.set('n', recipe.name)
    recipe.ingredients.filter(it => it.name).forEach(ingredient => searchParams.append(encodeURIComponent(ingredient.name), encodeURIComponent(ingredient.quantity)))
  }
  const searchParamsWithoutUnecessaryEquals = searchParams.toString().replaceAll('=&', '&')
    .replace(/=$/g, '')

  const title = getTitleForRecipe(recipe)
  window.history.replaceState(recipe.name, title, searchParamsWithoutUnecessaryEquals ? `?${searchParamsWithoutUnecessaryEquals}` : null)
  document.title = title
}

const processRecipeChange = (newRecipe: Recipe) => {
  console.log('Some Change occured:')
  console.log(JSON.stringify(newRecipe))
  tryAddNewIngredientRow(newRecipe)
  updateQueryParameter(newRecipe)
}

const initializeRecipeByURL = () => {
  const searchParams = new URLSearchParams(window.location.search)

  currentRecipe.name = searchParams.get('n') || ''
  searchParams.delete('n')

  searchParams.forEach((quantity, name) => {
    currentRecipe.ingredients.push({
      name,
      quantity
    })
  })
  document.title = getTitleForRecipe(currentRecipe)
}

export default {
  setup () {
    onMounted(() => {
      initializeRecipeByURL()
    })

    watch(currentRecipe, processRecipeChange, {
      deep: true
    })

    return {
      currentRecipe
    }
  }
}
