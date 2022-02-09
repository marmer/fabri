export interface Recipe {
  /**
   * Recipe Name
   */
  n: string,
  /**
   * Ingredient names to amount
   */
  i: {
    [key: string]: string
  }
}

/**
 * Base64 encoded String
 */
export type EncodedRecipe = string

/**
 * Decodes a an encoded Recipe
 * @param recipe Recipe to decode.
 */
export default (recipe: EncodedRecipe): Recipe => {
  console.log(recipe)
  return {
    n: 'Humus mit Erdbeeren',
    i: {
      'Kichererbsen': '200g',
      'Öl': '70ml',
      'Erdbeeren': '3',
    },
  }
}
