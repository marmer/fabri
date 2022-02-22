<template>
  <div>
    <h2>Recipe</h2>
    <form @submit.prevent>
      <label>
        Recipe Name:
        <input placeholder="Hot Sweet Sour Salty Something" v-model="currentRecipe.name">
      </label>
      <div v-for="(ingredient, ingredientIndex) in currentRecipe.ingredients"
           :key="ingredientIndex">
        <label>
          Ingredient {{ ingredientIndex + 1 }}:
          <input v-model="ingredient.name">
        </label>
        <label>
          Quantity {{ ingredientIndex + 1 }}:
          <input v-model="ingredient.quantity">
        </label>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./RecipeBuilder.ts">

</script>
