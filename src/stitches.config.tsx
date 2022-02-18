import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      primaryColor: "#2b004f",
      secondaryColor: "#00eb84",
      ternaryColor: "#180b29",
      quaternaryColor: "#e5e5e5",
      trasmparent: "trasnparent",
    },
    space: {
      1: "0.25rem", //4px
      2: "0.5rem", //8px
      3: "0.75rem", //12px
      4: "1rem", //16px
    },
    fontSizes: {
      xs: "0.5rem", //8px
      sm: "0.75rem", //12px
      md: "1rem", //16px
      lg: "1.25rem", //20px
    },
    radii: {
      //borderRadius
      xs: "0.5rem", //8px
      sm: "0.75rem", //12px
      md: "1rem", //16px
      lg: "1.25rem", //20px
    },
    borderWidths: {
      xxxs: "0.125rem", //2px
      xxs: "0.25rem", //4px
      xs: "0.5rem", //8px
      ssm: "0.75rem", //12px
      sm: "1rem", //16px
      mmd: "1.25rem", //20px
      md: "1.5rem", //24px
      llg: "1.75rem", //28px
      lg: "2rem", //32px
    },
    fonts: {
      system: "system-ui",
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },

    borderStyles: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});
