import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import autoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    vuetify({
      styles: {
      configFile: 'src/styles/base.scss'
    }}),
    vueDevTools(),
    autoImport({

      imports: [
        'vue',
        'vue-router',
        {
          vuetify: ['useDisplay']
        }
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/base' as *;`
      }
    }
  },
  optimizeDeps: {
    exclude: [
      'vuetify'
    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
