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
      fonts: { sans: "Karla:400,700" },
    }),
  ],
  preflights: [
    {
      getCSS: () =>
        `:root { font-size: 62.5%; font-family: 'Karla', sans-serif }`,
    },
  ],
  theme: {
    colors: {
      "alice-blue": "#E6EFF5",
      "light-sea-green": "#2AB3B1",
      "las-palmas": "#C0DF33",
      "rock-blue": "#9AA7BE",
    },
    breakpoints: {
      desktop: "1024px",
    },
  },
  shortcuts: {},
  rules: [
    [
      /^px-([\d.-]+)$/,
      ([, value]) => ({
        "padding-inline": convertToRem(value),
      }),
    ],
    [
      "shadow-card",
      {
        "box-shadow": "0 1.5rem 3rem rgba(0, 81, 171, 0.15)",
      },
    ],
    [
      /^rounded-([\d.-]+)$/,
      ([, value]) => ({
        "border-radius": convertToRem(value),
      }),
    ],
    [
      /^p-([\d.-]+)\/([\d.-]+)\/([\d.-]+)\/([\d.-]+)$/,
      ([, topValue, rightValue, bottomValue, leftValue]) => ({
        padding: `${convertToRem(topValue)} ${convertToRem(
          rightValue
        )} ${convertToRem(bottomValue)} ${convertToRem(leftValue)}`,
      }),
    ],
    [
      /^fs-([\d.-]+)$/,
      ([, value]) => ({
        "font-size": convertToRem(value),
      }),
    ],
    [
      /^leading-([\d.-]+)$/,
      ([, value]) => ({
        "line-height": convertToRem(value),
      }),
    ],
    [
      /^tracking-([\d.-]+)$/,
      ([, value]) => ({
        "letter-spacing": convertToRem(value),
      }),
    ],
    [
      /^mt-([\d.-]+)$/,
      ([, value]) => ({
        "margin-top": convertToRem(value),
      }),
    ],
    [
      /^p-([\d.-]+)$/,
      ([, value]) => ({
        padding: convertToRem(value),
      }),
    ],
    [
      /^gap-y-([\d.-]+)$/,
      ([, value]) => ({
        "column-gap": convertToRem(value),
      }),
    ],
    [
      /^pt-([\d.-]+)$/,
      ([, value]) => ({
        "padding-top": convertToRem(value),
      }),
    ],
    [
      /^pb-([\d.-]+)$/,
      ([, value]) => ({
        "padding-bottom": convertToRem(value),
      }),
    ],
    [
      "shadow-button",
      {
        "box-shadow": "0 1rem 1rem rgba(0, 0, 0, 0.1)",
      },
    ],
    [
      /^max-w-([\d.-]+)$/,
      ([, value]) => ({
        "max-width": convertToRem(value),
      }),
    ],
  ],
});
