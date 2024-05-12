export const languages = {
  ja: '日本語',
  en: 'English',
};

export const defaultLang = 'ja';
export const showDefaultLang = false;

export const ui = {
  ja: {
    TITLE: '日本語',
    works: {
      '01': {
        LABELS: '2022 / Webデザイン / 顧客折衝',
        TITLE: '複合施設<0>La Tempo',
        colors: {
          LINE: '#564C3E',
          BG: '#B29780',
        },
      },
    },
  },
  en: {
    TITLE: 'English',
    works: {
      '01': {
        LABELS: '2022 / Web design / Customer negotiation',
        TITLE: 'Complex Facilities<0>La Tempo',
        colors: {
          LINE: '#564C3E',
          BG: '#B29780',
        },
      },
    },
  },
} as const;
