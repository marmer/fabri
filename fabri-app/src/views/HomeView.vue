<template>
  <div class="home">
    <h1>Fast bring recipe importer</h1>
    <!-- todo use vmodel for two way binding here instead of just listening for events! -->
    <RecipeBuilder @recipeChanged="printRecipeChange"/>
    <!--    todo seperate components for different "export formats"-->
    <label>Bring import URL:
      <a :href="getDirectImportUrl">{{ getDirectImportUrl }}</a>
    </label>
    <div>
      {{ JSON.stringify(currentRecipe) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import RecipeBuilder from '@/components/RecipeBuilder.vue'
import { Recipe } from '@/service/domain/models'
import { computed, ref } from 'vue'
import { encode } from 'fabri-core'

const currentRecipe = ref<Recipe>({
  name: '',
  ingredients: []
})

const printRecipeChange = (recipe: Recipe) => {
  currentRecipe.value = { ...recipe, ingredients: [...recipe.ingredients] }
}

const getDirectImportUrl = computed(() =>

  `https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2${encode({
    n: currentRecipe.value.name,
    i: currentRecipe.value.ingredients.reduce((previousValue, { name, quantity }) => ({
      ...previousValue, [name]: quantity
    }), {})
  })}&source=web&baseQuantity=4&requestedQuantity=4`
)</script>
