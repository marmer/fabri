import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const recipe = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  // Import URL Sample
  // https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipe&source=web&baseQuantity=4&requestedQuantity=4
  response.contentType("application/json")
      .status(200)
      .send(JSON.stringify({
        author: "fabri - Fast Bring Recipe Importer",
        linkOutUrl: "https://fabri.marmer.online",
        // imageUrl: "https://www.myrecipe.com/recipeImage.jpg",
        name: "Fancy Nancies Feuernudeln",
        // tagline: "",
        // yield: "",
        // time: "",
        // nutrition: {
        //   calories: "500 kcal",
        // },
        items: [{
          itemId: "Karotten",
          spec: "2-3",
        }, {
          itemId: "Hähnchenkeulen",
          spec: "4",
        }, {
          itemId: "Mehl",
          spec: "250g",
        }, {
          itemId: "Sumach",
          spec: "1/4 TL",
          altIcon: "Rosmarin",
          altSection: "Früchte & Gemüse",
        }, {
          itemId: "Salz",
          spec: "1 TL",
        }],
      }));
});