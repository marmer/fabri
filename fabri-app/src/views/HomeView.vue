<template>
  <div class="home">
    <h1>Fast bring recipe importer</h1>
    <RecipeBuilder @recipeChanged="updateRecipe"/>
    <LinkImportSource :recipe="currentRecipe"/>
  </div>
</template>

<script lang="ts" setup>
import RecipeBuilder from '@/components/RecipeBuilder.vue'
import { ref } from 'vue'
import { Recipe } from 'fabri-core'
import LinkImportSource from '@/components/LinkImportSource.vue'

const currentRecipe = ref<Recipe>({
  name: '',
  ingredients: []
})

const updateRecipe = (recipe: Recipe) => {
  currentRecipe.value = {
    ...recipe,
    ingredients: [...recipe.ingredients]
  }
}

</script>
