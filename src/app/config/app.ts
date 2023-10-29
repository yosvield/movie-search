export class App {

  static ROUTES = {
    BASE: '/',
    ACCESS_TOKEN: 'token-acceso',
    MOVIE: 'pelicula'
  }


  static LANGUAGE = {
    AVAILABLES: [{code: 'en', name: 'LABEL.ENGLISH'}, {code: 'es', name: 'LABEL.SPANISH'}],
    toggle: (lang) => lang === 'es' ? 'en' : 'es'
  }
}
