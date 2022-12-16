import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    options: {
      // Generate CSS variables for our theme colors https://vuetifyjs.com/en/features/theme/#custom-properties
      customProperties: true
    },
    themes: {
      light: {
        /*
        These are the default property values of the default (light) theme. The theme is accessible at runtime via:
        $vuetify.theme.themes.light
         */
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  },
  icons: {
    iconfont: 'mdiSvg'
  }
})


export default vuetify
