import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://projects.naveenmk.me",
  integrations: [
    mdx(),
    sitemap(),
    solidJs({
      include: ["**"],
      exclude: ["**/react/*"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      include: ["**/react/*"],
      exclude: ["**"],
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
