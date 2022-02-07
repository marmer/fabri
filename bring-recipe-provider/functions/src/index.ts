import * as functions from 'firebase-functions';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const recipe = functions.https.onRequest((request, response) => {
  response.contentType('application/json')
      .status(200)
      .send(JSON.stringify({
        author: 'fabri - Fast Bring Recipe Importer',
        linkOutUrl: 'https://fabri.marmer.online',
        name: request.params[0].substring(1),
        items: Object.entries(request.query).map(([itemId, spec]) => ({
          itemId,
          spec: spec || undefined,
        })),
      }));
});
