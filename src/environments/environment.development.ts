export const environment = {
  appVersion: 'v' + require('../../package.json').version + '-dev',
  production: false,
  environment: 'DEV',

  url_web: 'https://brain.com',
  url_server: 'http://localhost:9001/',
  api_url_server: 'http://localhost:9001/api/v1',

  token_resource: '/authenticate',
  refresh_token_resource: '/token_refresh',
  logout: '/auth/logout',

  serverSocket: 'ws://localhost:9001'
};
