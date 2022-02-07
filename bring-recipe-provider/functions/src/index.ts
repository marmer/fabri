import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const recipe = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.contentType("application/json")
      .status(200)
      .send(JSON.stringify({
        author: "fabri",
        linkOutUrl: request.originalUrl,
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
          itemId: "Hähnchenkäulen",
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
          stock: true,
        }],
      }));
});
