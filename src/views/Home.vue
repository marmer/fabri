<template>
  <a href="https://api.getbring.com/rest/bringrecipes/deeplink?url=http://localhost:8080/&source=web&baseQuantity=4&requestedQuantity=4">
    fancy Bring Import Button
  </a>
  <div itemtype="http://schema.org/Recipe">
    <h1 itemprop="name">Spiky spike</h1>
    <div itemprop="tagline">fancy</div>
    <div><span>By </span><span itemprop="author">nancy</span></div>

    <img src="../assets/logo.png" alt="logo" itemprop="image"/>
    <p>
      <div>
        <span>Category: </span>
        <span itemprop="recipeCategory">nice</span>
      </div>
      <div>
        <span>serves: </span><span itemprop="yield">1</span>
      </div>
      <div>
        <span>Cooking time: </span><span itemprop="prepTime">20 min.</span>
      </div>
      <div itemprop="nutrition" itemtype="https://schema.org/NutritionInformation">
        <span>provides:  </span>
        <span itemprop="calories">30</span>
      </div>
    </p>
    <ul>
      <li itemprop="ingredients">Erdbeeren</li>
      <li itemprop="ingredients">Brot</li>
    </ul>
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
