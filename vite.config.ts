import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "RSS Reader App",
    short_name: "RSS Reader",
    description: "An app that can show weather forecast for your city.",
    icons: [
      {
        src: "icon-144x144.webp",
        sizes: "144x144",
        type: "image/webp",
      }
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env': {} },
  plugins: [
    vue(),
    VitePWA(manifestForPlugin)

  ],


  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  }
})
