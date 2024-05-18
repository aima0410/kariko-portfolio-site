import { defineConfig } from "astro/config";
// ---- 【統合】lit / WEB Conponents ----
import lit from "@astrojs/lit";
// ---- 【統合】sitemap / サイトマップ自動生成 ----
import sitemap from "@astrojs/sitemap";
// ---- 【統合】robots-txt / robots.txt自動生成 ----
import robotsTxt from "astro-robots-txt";
// ---- 【統合】partytown / サードパーティ対策 ----
import partytown from "@astrojs/partytown";
// ---- 【統合】MDX / マークダウン拡張機能導入 ----
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    defaultLocaleRoute: '/',
  },
  site: "http://localhost:4321/",
  integrations: [lit(), sitemap(), robotsTxt(), partytown(), mdx()]
});