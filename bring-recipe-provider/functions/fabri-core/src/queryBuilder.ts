import { Recipe } from './types'
import 'url-search-params-polyfill'

export function buildShortRecipeQueryParameter (recipe: Recipe) {
  const searchParams = new URLSearchParams()
  if (recipe.name) {
    searchParams.set('n', recipe.name)
    recipe.ingredients
    .filter(it => it.name)
    .forEach(ingredient => searchParams.append(ingredient.name, ingredient.quantity || ''))
  }

  return searchParams.toString().replace('=&', '&')
  .replace(/=$/g, '')
}
