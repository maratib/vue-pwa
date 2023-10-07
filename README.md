# Vue 3 + PWA + TailwindCSS TypeScript + Vite

```bash
# Add required dependencies
yarn add -D vite-plugin-pwa
```
```javascript
// # Update vite.config.ts

import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "RSS Reader App",
    short_name: "RSS Reader",
    description: "An app that can read RSS and Atom feeds",
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


// and then 
 plugins: [
    vue(),
    VitePWA(manifestForPlugin)
  ],
```

Now build and preview to see the PWA