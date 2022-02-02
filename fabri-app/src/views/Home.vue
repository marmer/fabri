<template>
<!--  <a href="https://api.getbring.com/rest/bringrecipes/deeplink?url=https://fabri.marmer.online/&source=web&baseQuantity=4&requestedQuantity=4">-->
<!--    fancy Bring Import Button-->
<!--  </a>-->
  <div data-bring-import style="display:none">
    <a href="https://www.getbring.com">Bring! Einkaufsliste App f&uuml;r iPhone und Android</a>
  </div>
  <div itemscope itemtype="https://schema.org/Recipe">
  <span itemprop="name">Mom's World Famous Banana Bread</span>
  By <span itemprop="author">Fabri</span>,
  <span itemprop="description">Fabri generated Recipe page for imports  to Bring!</span>

  Prep Time: <meta itemprop="prepTime" content="PT15M">15 minutes
  Cook time: <meta itemprop="cookTime" content="PT1H">1 hour
  Yield: <span itemprop="recipeYield">1 loaf</span>
  Tags: <link itemprop="suitableForDiet" href="https://schema.org/LowFatDiet" />Low fat

  <div itemprop="nutrition"
    itemscope itemtype="https://schema.org/NutritionInformation">
    Nutrition facts:
    <span itemprop="calories">240 calories</span>,
    <span itemprop="fatContent">9 grams fat</span>
  </div>

  Ingredients:
  - <span itemprop="recipeIngredient">3 or 4 ripe bananas, smashed</span>
  - <span itemprop="recipeIngredient">1 egg</span>
  - <span itemprop="recipeIngredient">3/4 cup of sugar</span>
  ...

  Instructions:
  <span itemprop="recipeInstructions">
  Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add
  the flour last. Pour the mixture into a loaf pan and bake for one hour.
  </span>

  140 comments:
  <div itemprop="interactionStatistic" itemscope itemtype="https://schema.org/InteractionCounter">
    <meta itemprop="interactionType" content="https://schema.org/CommentAction" />
    <meta itemprop="userInteractionCount" content="140" />
  </div>
  From Janel, May 5 -- thank you, great recipe!
  ...
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
