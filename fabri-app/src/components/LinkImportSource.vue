<template>
  <h2>Link Import</h2>
  <div>
    <a :href="bringImportUrl">Import to bring</a>
  </div>
  <div>
    <button @click="copyImportLinkToClipboard">copy link to clipboard</button>
  </div>
</template>

<script lang="ts">
import { prop, Vue } from 'vue-class-component'
import { encode as encodeRecipe, Recipe } from 'fabri-core'

export default class LinkImportSource extends Vue.with(class {
  recipe = prop<Recipe>({ required: true })
}) {
  get recipeProviderURL () {
    return `https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/${encodeRecipe(this.recipe)}`
  }

  get bringImportUrl () {
    return `https://api.getbring.com/rest/bringrecipes/deeplink?url=${encodeURIComponent(this.recipeProviderURL)}&source=web&baseQuantity=4&requestedQuantity=4`
  }

  copyImportLinkToClipboard () {
    window.navigator.clipboard.writeText(this.bringImportUrl)
  }
}
</script>
