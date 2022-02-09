export interface Recipe {
  /**
   * Recipe Name
   */
  n: string,
  /**
   * Ingredient names to amount
   */
  i: {
    [key: string]: string | null
  }
}

/**
 * Base64 encoded String
 */
export type EncodedRecipe = string
