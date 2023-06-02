import { defineConfig, presetWebFonts, presetWind } from "unocss";

function convertToRem(value: string) {
  return `${(+value / 10).toLocaleString("en-PH", {
    maximumFractionDigits: 3,
  })}rem`;
}

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: { sans: "IBM Plex Sans:400,700" },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) =>
        `:root { font-size: 62.5%; font-family: 'IBM Plex Sans', sans-serif }`,
    },
  ],
  theme: {
    colors: {},
    breakpoints: {
      desktop: "1024px",
    },
  },
  shortcuts: {},
  rules: [],
});
