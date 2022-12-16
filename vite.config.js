import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import pluginRewriteAll from 'vite-plugin-rewrite-all';

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  define: {
  },
  server: {
    port: 8081
  },
  preview: {
    port: 8081
  },
  plugins: [
    vue(),

    // this automatically imports the Vuetify components and styles upon use (like vuetify-loader when using webpack/Vue-CLI)
    Components({
      resolvers: [VuetifyResolver()],
    }),

    // https://github.com/vitejs/vite/issues/2190
    // fixes a bug which causes any route containing a "." in the path to 404. In our case the route
    // '/invitations/:token?' will contain dots because token is an encoded JWT
    pluginRewriteAll()
  ],
  resolve: {

    // the following extensions can be omitted in import statements
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    // https://stackoverflow.com/questions/70656230/overriding-vuetify-variables-when-building-a-vue2vuetify-app-with-vite
    preprocessorOptions: {
      sass: {
        additionalData: [
          /*
          Override Vuetify variables values. To verify this is working check that for example the date picker's table
          height is 252px instead of the Vuetify default of 242px
           */
          '@import "./src/styles/vuetify-variable-overrides"',
          ''
        ].join('\n'),
      }
    }
  }
});