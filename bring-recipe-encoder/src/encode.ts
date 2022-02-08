import { EncodedRecipe, Recipe } from './types'
import * as fflate from 'fflate'

/**
 * Encodes a Recipe into an encoded Recipe
 * @param recipe Recipe to encode.
 */
export default (recipe: Recipe): EncodedRecipe => {
  return Buffer.from(
    fflate.deflateSync(
      fflate.strToU8(
        JSON.stringify(recipe))))
  .toString('base64')

}
