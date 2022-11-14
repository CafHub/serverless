// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'tsh6l4nap9'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-u5gyplo3btj8ixq4.us.auth0.com',
  domain: 'dev-u5gyplo3btj8ixq4.us.auth0.com',            // Auth0 domain
  clientId: 'fY5v75TJRRJiJG4C1V90SSXqS3JchXa2',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
