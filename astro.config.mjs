import { defineConfig } from "astro/config";
// ---- 【統合】i18n / 多言語対応 ----
import astroI18next from "astro-i18next";
// ---- 【統合】lit / WEB Conponents ----
import lit from "@astrojs/lit";

export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"]
  },
  integrations: [astroI18next(), lit()]
});