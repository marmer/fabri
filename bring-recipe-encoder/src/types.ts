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
