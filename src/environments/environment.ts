export const environment = {
  appVersion: 'v' + require('../../package.json').version,
  production: true,
  environment: 'PROD',

  url_web: 'https://brain.com',
  url_server: 'https://goldenbrain-api-production-0c64.up.railway.app/',
  api_url_server: 'https://goldenbrain-api-production-0c64.up.railway.app/api/v1',

  token_resource: '/authenticate',
  refresh_token_resource: '/token_refresh',
  logout: '/auth/logout',

  serverSocket: 'wss://goldenbrainapi.herokuapp.com'
};
