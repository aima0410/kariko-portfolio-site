import '@fontsource-variable/noto-sans-jp'; // Supports weights 100-900
import '@fontsource-variable/outfit'; // Supports weights 100-900

// 種類
const fontFamily = {
  JA: "'Noto Sans JP Variable', sans-serif",
  EN: "'Outfit Variable', sans-serif",
};

// サイズ
const fontSize = {
  text: {
    SMALL: 'clamp(10px, 1.5vw, 12px)',
    MEDIUM: 'clamp(13px, 2vw, 16px)',
    LARGE: 'clamp(16px, 2.5vw, 20px)',
  },
  heading: {
    SMALL: 'clamp(20px, 3vw, 36px)',
    MEDIUM: 'clamp(36px, 4vw, 56px)',
    LARGE: 'clamp(56px, 5vw, 96px)',
  },
};

// まとめる
const fonts = {
  fontFamily: fontFamily,
  fontSize: fontSize,
};

export default fonts;
