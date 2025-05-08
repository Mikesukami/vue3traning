import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

import { createVuetify, type ThemeDefinition } from 'vuetify'

const light: ThemeDefinition = {

  dark: false,

  colors: {

    primary: '#5AB685',

    secondary: '#EEEEEE',

    surface: '#FFFFFF',

    tertiary: '#71B5D8',

    error: '#FF686b'

  }

}

const dark: ThemeDefinition = {

  dark: true,

  colors: {

    background: '#1A1A1A',

    primary: '#5AB685',

    secondary: '#242424',

    surface: '#EDEDED',

    tertiary: '#71B5D8',

    error: '#FF686b'

  }

}

export default createVuetify({

  theme: {

    defaultTheme: 'light',

    themes: { light, dark }

  }

})