import { defineConfig } from "astro/config";
// ---- 【統合】lit / WEB Conponents ----
import lit from "@astrojs/lit";

export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },
  integrations: [lit()]
});