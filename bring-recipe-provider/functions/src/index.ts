import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const recipe = functions.https.onRequest((request, response) => {
  response.contentType('application/json')
      .status(200)
      .send(JSON.stringify({
        author: 'fabri - Fast Bring Recipe Importer',
        linkOutUrl: 'https://fabri.marmer.online',
        name: request.params[0].startsWith('/') ?
          request.params[0].substring(1) :
          request.params[0],
        items: Object.entries(request.query).map(([itemId, spec]) => ({
          itemId,
          spec: spec || undefined,
        })),
      }));
});

// https://us-central1-bring-recipe-provider.cloudfunctions.net/recipe/Schwarzw%C3%A4lder%20Kirschtorte?schokolade=200g&kirschwasser&banenen=1

// https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipe%2FSchwarzw%25C3%25A4lder%2520Kirschtorte%3Fschokolade%3D200g%26kirschwasser%26banenen%3D1&source=web&baseQuantity=4&requestedQuantity=4
