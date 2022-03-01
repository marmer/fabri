<template>
  <h2>NFC Import</h2>
  <div v-if="isNFCCapable">
    <div>To write the bring Import Link to an NFC Tag, simply click the button, place the Tag close
      to the device and wait until a redirect to the Import occurs.
      <string>warning, the Tag will be overridden if it's not readonly!</string>
    </div>
    <button @click="doWrite()">Write to NFC Chip</button>
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

const doWrite = async () => {
  const ndef = new NDEFReader()

  try {
    await ndef.write(bringImportUrl.value, { overwrite: true })
    await ndef.write({
      records: [{
        recordType: 'url',
        data: bringImportUrl.value
      }]
    }, { overwrite: true })
  } catch (error) {
    alert(`Error! Scan failed to start: ${error}.`)
  }
}
</script>
