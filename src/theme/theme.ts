export const theme = {
  color: {
    NEUTRAL: {
      200: "#dfdfdf",
      300: "#bfbfbf",
      400: "#9f9f9f",
    },

    PRIMARY: {
      200: "#DDDFF0",
      300: "#BBBFE2",
      400: "#999FD3",
    },

    SECONDARY: {
      200: "#d0c5ff",
      300: "#d0c5ff",
      400: "#b9a8ff",
    },
  },
  effect: {
    darkShadow: {
      4: "0px 0px 4px 1px rgba(139, 139, 139, 0.32)",
      6: "0px 1px 6px rgba(60, 60, 60, 0.2)",
    },
    lightShadow: {
      2: "0px 0px 2px 1px rgba(149, 178, 254, 0.2)",
      16: "0px 4px 16px rgba(153, 181, 255, 0.2)",
    },
  },
};

/* exportar un nuevo tipo Theme que sea igual al tipo de variables que tenga theme */
export type Theme = typeof theme;
