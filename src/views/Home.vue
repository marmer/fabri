<template>
  <!--  <a href="https://api.getbring.com/rest/bringrecipes/deeplink?url=https://fabri.marmer.online/&source=web&baseQuantity=4&requestedQuantity=4">-->
  <!--    fancy Bring Import Button-->
  <!--  </a>-->
  <div data-bring-import style="display:none">
    <a href="https://www.getbring.com">Bring! Einkaufsliste App f&uuml;r iPhone und Android</a>
  </div>
  <div itemscope itemtype="https://schema.org/Recipe">
    <span itemprop="name">Spiky recipe</span>
    By <span itemprop="author">Fabri</span>,
    <span itemprop="description">Fabri generated Recipe page for imports  to Bring!</span>

    Yield: <span itemprop="recipeYield">4 portions</span>

    <p>
      Ingredients:

      <ul>
        <li itemprop="recipeIngredient">1 Banene</li>
        <li itemprop="recipeIngredient">3 Erdbeeren</li>
        <li itemprop="recipeIngredient">15g Mischhack</li>
        <li itemprop="recipeIngredient">1pck TK Himbeeren</li>
      </ul>
    </p>
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
export default class Home extends Vue {
}
</script>
