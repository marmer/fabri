import * as functions from 'firebase-functions'
import {decode} from 'fabri-core'
import {Ingredient} from 'fabri-core/lib/types' // // Start writing Firebase Functions

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const recipes = functions.https.onRequest((request, response) => {
  const encodedRecipe = request.params[0].startsWith('/') ?
    request.params[0].substring(1) :
    request.params[0]

  if (!encodedRecipe) {
    response.status(404).send()
    return
  }

  try {
    const recipe = decode(encodedRecipe)

    response.contentType('application/json')
        .status(200)
        .send(JSON.stringify({
          author: 'fabri',
          linkOutUrl: 'https://fabri.marmer.online',
          name: recipe.name,
          items: recipe.ingredients.map((it: Ingredient) => ({
            itemId: it.name,
            spec: it.quantity || undefined,
          })),
        }))
  } catch (e) {
    response.contentType('application/json')
        .status(400)
        .send(JSON.stringify(e))
  }
})
