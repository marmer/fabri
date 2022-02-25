<template>
  <h2>NFC Import</h2>
  <div v-if="isNFCCapable">
    <div>
      <button @click="doScan()">scan</button>
    </div>
    <div>
      <button @click="doWrite()">write</button>
    </div>
  </div>
  <div v-else>Your device does not know anything about NFC</div>
</template>

<script lang="ts" setup>

import { computed, defineProps } from 'vue'
import { Recipe } from 'fabri-core/lib/types'
import { encode as encodeRecipe } from 'fabri-core'
/* global NDEFReader */

const isNFCCapable = computed(() => 'NDEFReader' in window)
const props = defineProps<{
  recipe: Recipe
}>()

const recipeProviderURL = computed(() =>
  `https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/${encodeRecipe(props.recipe)}`
)

const bringImportUrl = computed(() => `https://api.getbring.com/rest/bringrecipes/deeplink?url=${encodeURIComponent(recipeProviderURL.value)}&source=web&baseQuantity=4&requestedQuantity=4`)

const ndef = new NDEFReader()
const doScan = () => {
  ndef.scan().then(() => {
    alert('Scan started successfully.')
    ndef.onreadingerror = () => {
      alert('Cannot read data from the NFC tag. Try another one?')
    }
    ndef.onreading = event => {
      event.message.records.forEach(it => alert(JSON.stringify(it)))
    }
  }).catch(error => {
    alert(`Error! Scan failed to start: ${error}.`)
  })
}

const doWrite = async () => {
  try {
    await ndef.write(bringImportUrl.value, { overwrite: true })
  } catch (error) {
    alert(`Error! Scan failed to start: ${error}.`)
  }
}

</script>
