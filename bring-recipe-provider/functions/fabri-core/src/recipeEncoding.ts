import { EncodedRecipe, Recipe } from './types'
import base64url from 'base64url'

interface RecipeDTO {
  n: string
  i: { [key: string]: string }
}

const toDto = (recipe: Recipe): RecipeDTO => ({
    n: recipe.name,
    i: recipe.ingredients
    .map(it => ({ [it.name]: (it.quantity ? it.quantity : '') }))
    .reduce((a, b) => ({ ...a, ...b }), {})
  }
)

const fromDto = (recipe: RecipeDTO): Recipe => {
  return {
    name: recipe.n,
    ingredients: Object.entries(recipe.i)
    .map(([name, quantity]) =>
      quantity ? {
        name,
        quantity
      } : { name })
  }
}

/**
 * Encodes a Recipe into an encoded Recipe
 * @param recipe Recipe to recipeEncoding.
 */
export const encode = (recipe: Recipe): EncodedRecipe =>
  base64url(JSON.stringify(toDto(recipe)))

/**
 * Decodes a an encoded Recipe
 * @param recipe Recipe to decode.
 */
export const decode = (recipe: EncodedRecipe): Recipe =>
  fromDto(JSON.parse(base64url.decode(recipe)))
