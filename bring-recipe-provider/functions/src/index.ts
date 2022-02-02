import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const recipe = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.contentType("application/json")
      .status(200)
      .send(`Sample
      baseUrl: ${request.baseUrl}
      body: ${JSON.stringify(request.body)}
      headers: ${JSON.stringify(request.headers)}
      method: ${request.method}
      route: ${JSON.stringify(request.route)}
      app: ${JSON.stringify(request.app)}
      cookies: ${JSON.stringify(request.cookies)}
      hostname: ${request.hostname}
      ip: ${request.ip}
      protocol: ${request.protocol}
      url: ${request.url}
      path: ${request.path}
      params: ${JSON.stringify(request.params)}
      query: ${JSON.stringify(request.query)}
      originalUrl: ${request.originalUrl}
      subdomains: ${JSON.stringify(request.subdomains)}
      secure: ${request.secure}
      ips: ${JSON.stringify(request.ips)}
      fresh: ${request.fresh}`);
});
