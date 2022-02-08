import * as functions from 'firebase-functions';
import * as fflate from 'fflate';

interface RecipeDescription {
  /**
   * Recipe Name
   */
  n: string,
  /**
   * Ingredient names to amount
   */
  i: {
    [key: string]: string
  }
}

// // Start writing Firebase Functions
const compress = (toCompress: RecipeDescription) => {
  return Buffer.from(
      fflate.deflateSync(
          fflate.strToU8(
              JSON.stringify(toCompress))))
      .toString('base64');
};

const decompress = (toDecompress: string) => {
  return JSON.parse(
      fflate.strFromU8(
          fflate.inflateSync(
              new Buffer(toDecompress, 'base64'))));
};

// // https://firebase.google.com/docs/functions/typescript
export const recipe = functions.https.onRequest((request, response) => {
  // https://www.multiutil.com/text-to-deflate-compress/

  const toCompress: RecipeDescription = {
    n: 'Humus mit Erdbeeren',
    i: {
      'Kichererbsen': '200g',
      'Öl': '70ml',
      'Erdbeeren': '3',
    },
  };

  console.log(JSON.stringify(toCompress));
  console.log('---');
  console.log(compress(toCompress));
  console.log('---');

  const r = decompress(request.params[0].startsWith('/') ?
    request.params[0].substring(1) :
    request.params[0]);

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
      }));

  // response.contentType('application/json')
  // .status(200)
  // .send({
  //   'author': 'Author Name',
  //   'linkOutUrl': 'https://www.myrecipe.com',
  //   'imageUrl': 'https://www.myrecipe.com/recipeImage.jpg',
  //   'name': 'Hummus mit Rüebli',
  //   'tagline': '',
  //   'yield': '',
  //   'time': '',
  //   'nutrition': {
  //     'calories': '500 kcal',
  //   },
  //   'items': [{
  //     'itemId': 'Karotten',
  //     'spec': '2-3',
  //   }, {
  //     'itemId': 'Sumach',
  //     'spec': '1/4 TL',
  //     'altIcon': 'Rosmarin',
  //     'altSection': 'Früchte & Gemüse',
  //   }, {
  //     'itemId': 'Salz',
  //     'stock': true,
  //   }],
  // })
});

// https://us-central1-bring-recipe-provider.cloudfunctions.net/recipe/Hummus%20mit%20R%C3%BCebli?Karotten=2-3&Sumach=1%20TL&Salz

// https://us-central1-bring-recipe-provider.cloudfunctions.net/recipe/Hummus mit Hummus mit Rüebli?Karotten=2-3&Sumach=1 TL&Salz

// https://api.getbring.com/rest/bringrecipes/deeplink?url=            &source=web&baseQuantity=4&requestedQuantity=4

// https://api.getbring.com/rest/bringrecipes/deeplink?url=            &source=web&baseQuantity=4&requestedQuantity=4

// https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipe&source=web&baseQuantity=4&requestedQuantity=4


