// color design tokens export

export const tokensDark = {
  yellow: {
    0: "#000000",
    10: "#141414",
    50: "#292929",
    100: "#3d3d3d",
    200: "#525252",
    300: "#666666",
    400: "#858585",
    500: "#a3a3a3",
    600: "#c2c2c2",
    700: "#e0e0e0",
    800: "#f0f0f0",
    900: "#ffffff",
    1000: "#ffffff",
  },

  primary: {
    // blue
    100: "#ffffffcc",
    200: "#ffffff99",
    300: "#ffffff66",
    400: "#ffffff33",
    500: "#141718",
    600: "#232627",
    700: "#00000066",
    800: "#00000099",
    900: "#000000cc",
  },

  secondary: {
    // yellow
    100: "#ffffff",
    200: "#ffffff",
    300: "#4F5152",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};

export const tokensLight = {
  yellow: {
    100: "#fffbdf",
    200: "#fff7bf",
    300: "#fff3a0",
    400: "#ffef80",
    500: "#ffeb60",
    600: "#ccbc4d",
    700: "#998d3a",
    800: "#665e26",
    900: "#332f13",
  },
  primary: {
    // blue
    100: "#ffffffcc",
    200: "#ffffff99",
    300: "#ffffff66",
    400: "#05331A",
    500: "#2C3333",
    600: "#7AA874",
    700: "#00000066",
    800: "#00000099",
    900: "#000000cc",
  },

  secondary: {
    // yellow
    100: "#ffffff",
    200: "#cccccc",
    300: "#609966",
    400: "#cccccc",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.yellow,
              main: tokensDark.yellow[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensLight.primary[400],
              light: tokensLight.primary[400],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[300],
            },
            neutral: {
              ...tokensLight.yellow,
              main: tokensLight.yellow[500],
            },
            background: {
              default: tokensLight.primary[400],
              alt: tokensLight.primary[400],
            },
          }),
    },
    typography: {
      fontFamily: ["Zen Dots", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 56,
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
      h2: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 40,
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
      h3: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 24,
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
      h4: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 20,
        lineHeight: "110%",
        letterSpacing: "-1%",
      },
      body_semibold: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "22.4px",
      },
      body1: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "160%",
        letterSpacing: "-2%",
      },
      subtitle1: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 600,
      },
      subtitle2: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontWeight: 700,
        fontSize: 18,
        lineHeight: "140%",
        letterSpacing: "0%",
        textDecoration: "underline",
      },
      button: {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "140%",
        letterSpacing: "0%",
      },
      caption: {
        fontFamily: ["Zen Dots", "sans-serif"].join(","),
        fontSize: 12,
      },
    },
  };
};
