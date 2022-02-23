import { EncodedRecipe, Ingredient, Recipe } from './types'
import base64url from 'base64url'

function fromSmallString (smallStringRecipe: string): Recipe {
  const [name, ...ingredients] = smallStringRecipe.split(/\r?\n/)
  return {
    name,
    ingredients: ingredients.map(it => {
      const [ingredientName, quantity] = it.split('=')
      const result: Ingredient = {
        name: ingredientName,
        quantity
      }
      if (!result.quantity) {
        delete result.quantity
      }
      return result
    })
  }
}

/**
 * Decodes a an encoded Recipe
 * @param recipe Recipe to decode.
 */
export default (recipe: EncodedRecipe): Recipe => {
  const text = base64url.decode(recipe)
  return fromSmallString(text)
}
// TODO: marmer 23.02.2022 empty recipe
// TODO: marmer 23.02.2022 empty recipe name
// TODO: marmer 23.02.2022 empty recipe ingredient parts
// TODO: marmer 23.02.2022 empty recipe lines
