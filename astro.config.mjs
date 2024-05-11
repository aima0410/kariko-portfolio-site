import { defineConfig } from "astro/config";
// ---- i18n 多言語対応 ----
import astroI18next from "astro-i18next";

export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },
  integrations: [astroI18next()],
});
