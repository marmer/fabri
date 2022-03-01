<template>
  <div class="home">
    <h1>Fast bring recipe importer</h1>
    <LinkImportSource v-if="recipeImporable"
                      :recipe="currentRecipe"/>
    <RecipeBuilder @recipeChanged="updateRecipe"/>
    <QRImportSource v-if="recipeImporable"
                    :recipe="currentRecipe"/>
    <NFCImportSource v-if="recipeImporable"/>
  </div>
</template>

<script lang="ts" setup>
import RecipeBuilder from '@/components/RecipeBuilder.vue'
import { computed, ref } from 'vue'
import { Recipe } from 'fabri-core'
import LinkImportSource from '@/components/LinkImportSource.vue'
import QRImportSource from '@/components/QRImportSource.vue'
import NFCImportSource from '@/components/NFCImportSource.vue'

const currentRecipe = ref<Recipe>({
  name: '',
  ingredients: []
})

// TODO: marmer 25.02.2022 App Icon

// TODO: marmer 25.02.2022 Add description what this page is, before recipe has been entered
// TODO: marmer 25.02.2022 add styles
// TODO: marmer 25.02.2022 explain why importing only works with the singular of german ingredients (e.g. Erdbeere 1kg works. Erdbeeree 1kg does remove the weight)
// TODO: marmer 25.02.2022 Ad ability to change servings
// TODO: marmer 01.03.2022 Optional image-url for the imported recipe

const recipeImporable = computed(() => currentRecipe.value.name && currentRecipe.value.ingredients?.length)

const updateRecipe = (recipe: Recipe) => {
  currentRecipe.value = {
    ...recipe,
    ingredients: [...recipe.ingredients]
  }
}

</script>
