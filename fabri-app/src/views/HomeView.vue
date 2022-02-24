<template>
  <div class="home">
    <h1>Fast bring recipe importer</h1>
    <!-- todo use vmodel for two way binding here instead of just listening for events! -->
    <RecipeBuilder @recipeChanged="printRecipeChange"/>
    <!--    todo seperate components for different "export formats"-->

    <a :href="getDirectImportUrl">Import to bring</a>
  </div>
</template>

<script lang="ts" setup>
import RecipeBuilder from '@/components/RecipeBuilder.vue'
import { computed, ref } from 'vue'
import { encode as encodeRecipe } from 'fabri-core'
import { Recipe } from 'fabri-core/lib/types'

const currentRecipe = ref<Recipe>({
  name: '',
  ingredients: []
})

const recipeProviderURL = computed(() => `https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/${encodeRecipe(withoutEmptyIngredients(currentRecipe.value))}`)
const printRecipeChange = (recipe: Recipe) => {
  currentRecipe.value = {
    ...recipe,
    ingredients: [...recipe.ingredients]
  }
}

function withoutEmptyIngredients (recipe: Recipe): Recipe {
  return {
    ...recipe,
    ingredients: recipe?.ingredients?.filter(it => !!it.name) || []
  }
}

const getDirectImportUrl = computed(() =>
  `https://api.getbring.com/rest/bringrecipes/deeplink?url=${encodeURIComponent(recipeProviderURL.value)}&source=web&baseQuantity=4&requestedQuantity=4`
)</script>
