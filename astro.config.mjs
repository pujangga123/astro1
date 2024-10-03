import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://neon-pavlova-f6c1ac.netlify.app/",
  integrations: [preact()]
});