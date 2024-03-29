<template>
  <div>
    <h2>Recipe</h2>
    <form @submit.prevent>
      <label>
        Recipe Name:
        <input placeholder="Hot Sweet Sour Salty Something" v-model="currentRecipe.name">
      </label>
      <div v-for="(ingredient, ingredientIndex) in currentRecipe.ingredients"
           :key="ingredientIndex">
        <label>
          Ingredient {{ ingredientIndex + 1 }}:
          <input v-model="ingredient.name">
        </label>
        <label>
          Quantity {{ ingredientIndex + 1 }}:
          <input v-model="ingredient.quantity">
        </label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, reactive, watch } from 'vue'
import { buildShortRecipeQueryParameter, Ingredient, Recipe } from 'fabri-core'

// --- types ---
interface Emits {
  (eventName: 'recipeChanged', recipe: Recipe): void
}

// --- state ---
const emits = defineEmits<Emits>()

const currentRecipe = reactive<Recipe>({
  name: '',
  ingredients: []
})

const emptyIngredient: Ingredient = {
  name: '',
  quantity: ''
}

// --- Behavior ---
const tryAddNewIngredientRow = (newRecipe: Recipe) => {
  const hasNoIngredientYet = !newRecipe.ingredients.length
  const lastIngredient = newRecipe.ingredients[newRecipe.ingredients.length - 1]
  if (hasNoIngredientYet || lastIngredient?.name) {
    newRecipe.ingredients.push({ ...emptyIngredient })
  }
}

const getTitleForRecipe = (recipe: Recipe) =>
  recipe.name
    ? `fabri - ${recipe.name}`
    : 'fabri'

const updateQueryParameter = (recipe: Recipe) => {
  const searchParamsWithoutUnecessaryEquals = buildShortRecipeQueryParameter(recipe)

  const title = getTitleForRecipe(recipe)
  window.history.replaceState(recipe.name, title, searchParamsWithoutUnecessaryEquals ? `?${searchParamsWithoutUnecessaryEquals}` : null)
  document.title = title
}

const initializeRecipeByURL = () => {
  const searchParams = new URLSearchParams(window.location.search)

  currentRecipe.name = searchParams.get('n') || ''
  searchParams.delete('n')

  searchParams.forEach((quantity, name) => {
    currentRecipe.ingredients.push({
      name: name,
      quantity: quantity
    })
  })
  document.title = getTitleForRecipe(currentRecipe)
}

// --- Lifecycle Hooks ---
onMounted(() => {
  initializeRecipeByURL()
})

const withoutEmptyIngredients = (recipe: Recipe): Recipe => {
  return {
    ...recipe,
    ingredients: recipe?.ingredients?.filter(it => !!it.name) || []
  }
}

watch(currentRecipe, (newRecipe: Recipe) => {
  emits('recipeChanged', withoutEmptyIngredients(newRecipe))
  tryAddNewIngredientRow(newRecipe)
  updateQueryParameter(newRecipe)
}, {
  deep: true
})
</script>
