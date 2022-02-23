import { EncodedRecipe, Recipe } from './types'
import base64url from 'base64url'

function toSmallString (recipe: Recipe) {
  return recipe.ingredients
  .map(it => it.name + (it.quantity ? '=' + it.quantity : ''))
  .reduce((a, b) => a + '\n' + b, recipe.name)
}

/**
 * Encodes a Recipe into an encoded Recipe
 * @param recipe Recipe to encode.
 */
export default (recipe: Recipe): EncodedRecipe => base64url(toSmallString(recipe))
