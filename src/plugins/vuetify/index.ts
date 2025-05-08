import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from '../../App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')

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
