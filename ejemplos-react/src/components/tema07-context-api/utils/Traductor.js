const TRADUCCIONES = {
  'es': {
    'bienvenido': 'Bienvenido'
  },
  'en': {
    'bienvenido': 'Welcome'
  },
  'it': {
    'bienvenido': 'Benvenuto'
  },
}

export class Traductor {
  static traducir(clave, lang = 'es') {
    return TRADUCCIONES[lang][clave]
  }
}