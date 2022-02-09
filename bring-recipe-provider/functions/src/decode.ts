import * as fflate from 'fflate'

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
  return JSON.parse(
      fflate.strFromU8(
          fflate.inflateSync(
              Buffer.from(recipe, 'base64'))))
}
