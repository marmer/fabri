<template>
  <h2>Here we are!</h2>
  <div>
    {{ JSON.stringify(this.recipe) }}
  </div>

  <a :href="bringImportUrl">Import to bring</a>
  <button @click="copyImportLinkToClipboard">copy link to clipboard</button>
</template>

<script lang="ts">
import { prop, Vue } from 'vue-class-component'
import { encode as encodeRecipe, Recipe } from 'fabri-core'

export default class LinkImportSource extends Vue.with(class {
  recipe = prop<Recipe>({ required: true })
}) {
  get recipeProviderURL () {
    const url = `https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/${encodeRecipe(this.recipe)}`
    console.log('RecipeProvider: ' + url)
    return url
  }

  get bringImportUrl () {
    const url = `https://api.getbring.com/rest/bringrecipes/deeplink?url=${encodeURIComponent(this.recipeProviderURL)}&source=web&baseQuantity=4&requestedQuantity=4`
    console.log('Import: ' + url)
    return url
  }

  copyImportLinkToClipboard () {
    const url = this.bringImportUrl
    console.log('Value for Clipboard Copy: ' + url)
    window.navigator.clipboard.writeText(url).then(console.log)
  }
}
</script>
