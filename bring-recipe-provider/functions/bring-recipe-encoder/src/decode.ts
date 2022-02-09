import { EncodedRecipe, Recipe } from './types'
// import * as fflate from 'fflate'

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
  // return JSON.parse(
  //   fflate.strFromU8(
  //     fflate.inflateSync(
  //       Buffer.from(recipe, 'base64'))))
}
