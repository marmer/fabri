import { EncodedRecipe, Recipe } from './types'
import * as fflate from 'fflate'

/**
 * Encodes a Recipe into an encoded Recipe
 * @param recipe Recipe to encode.
 */
export default (recipe: Recipe): EncodedRecipe => {
  console.log(recipe)
  return Buffer.from(
    fflate.deflateSync(
      fflate.strToU8(
        JSON.stringify(recipe))))
  .toString('base64url')
}
