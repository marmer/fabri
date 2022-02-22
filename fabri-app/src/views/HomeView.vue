<template>
  <div class="home">
    <h1>Fast bring recipe importer</h1>
    <RecipeBuilder/>
    <!--    todo seperate components for different "export formats"-->
    Bring import URL:
    <!--      TODO dynamic Recipe generation by new recipeChanged Event-->
    <label>Bring import URL:
      <a
        href="https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVKVnmlOTk6SsGJOSVAKUOFgsy85Ayl2loA&source=web&baseQuantity=4&requestedQuantity=4">https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVKVnmlOTk6SsGJOSVAKUOFgsy85Ayl2loA&source=web&baseQuantity=4&requestedQuantity=4</a>
    </label>
  </div>
</template>

<script setup lang="ts">
import RecipeBuilder from '@/components/RecipeBuilder.vue'</script>
