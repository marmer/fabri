import * as functions from 'firebase-functions'
import decode from './decode'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const recipes = functions.https.onRequest((request, response) => {
  // https://www.multiutil.com/text-to-deflate-compress/

  const encodedRecipe = request.params[0].startsWith('/') ?
    request.params[0].substring(1) :
    request.params[0]

  if (!encodedRecipe) {
    response.status(404).send()
    return
  }
  // TODO: marmer 09.02.2022 Handle decoding error!
  const r = decode(encodedRecipe)

  response.contentType('application/json')
      .status(200)
      .send(JSON.stringify({
        author: 'fabri',
        linkOutUrl: 'https://fabri.marmer.online',
        name: r.n,
        items: Object.entries(r.i).map(([itemId, spec]) => ({
          itemId,
          spec: spec || undefined,
        })),
      }))
})

// https://us-central1-bring-recipe-provider.cloudfunctions.net/recipe/Hummus%20mit%20R%C3%BCebli?Karotten=2-3&Sumach=1%20TL&Salz

// https://us-central1-bring-recipe-provider.cloudfunctions.net/recipe/q1bKU7JS8ijNLS1WyM0sUXAtSklKTS1KzVPSUcpUsqpW8s5MzgDyi5KKgWJWSkYGBulAqcPTcoAcc4PcHCAHocdKyVipthYA

// https://api.getbring.com/rest/bringrecipes/deeplink?url=            &source=web&baseQuantity=4&requestedQuantity=4

// https://api.getbring.com/rest/bringrecipes/deeplink?url=            &source=web&baseQuantity=4&requestedQuantity=4

// https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipe&source=web&baseQuantity=4&requestedQuantity=4


