<template>
  <h2>QR Import</h2>
  <img :alt="imageDataUrl" :src="imageDataUrl"/>
</template>

<script setup lang="ts">
import { encode as encodeRecipe, Recipe } from 'fabri-core'
import * as QRCode from 'qrcode'

import { computed, defineProps, onBeforeUpdate, onMounted, ref } from 'vue'

const props = defineProps<{
  recipe: Recipe
}>()

const recipeProviderURL = computed(() =>
  `https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/${encodeRecipe(props.recipe)}`
)

const bringImportUrl = computed(() => `https://api.getbring.com/rest/bringrecipes/deeplink?url=${encodeURIComponent(recipeProviderURL.value)}&source=web&baseQuantity=4&requestedQuantity=4`)

const imageDataUrl = ref('')

async function updateQrCode () {
  const newimageDataUrl = await QRCode.toDataURL(bringImportUrl.value)
  if (imageDataUrl.value !== newimageDataUrl) {
    imageDataUrl.value = newimageDataUrl
  }
}

onMounted(() => {
  updateQrCode()
})

onBeforeUpdate(() => {
  updateQrCode()
})

</script>
