import { moderateScale } from "../utils/helpers/metrics";

export const textBasicText = {
  regular: {
    fontWeight: "400",
  },
  semibold: {
    fontWeight: "600",
  },
  medium: {
    fontWeight: "700",
  },
  bold: {
    fontWeight: "800",
  },
  xxxs: {
    fontSize: moderateScale(8),
  },
  xxs: {
    fontSize: moderateScale(10),
  },
  xs: {
    fontSize: moderateScale(12),
  },
  sm: {
    fontSize: moderateScale(14),
  },
  md: {
    fontSize: moderateScale(16),
  },
  lg: {
    fontSize: moderateScale(18),
  },
  xl: {
    fontSize: moderateScale(20),
  },
};

export const colors  = {
  primary: {
    base: "#002A59",
    900: "#282929",
    800: "#282929",
    700: "#282929",
    600: "#282929",
    500: "#3f9ced",
    400: "#f0f0f0",
    300: "#f0f0f0",
    200: "#f0f0f0",
    100: "#f0f0f0",
    50: "#f1f7fc",
  },
  grayRgba: {
    900: "rgba(40, 41, 41,0.2)",
    800: "rgba(72, 128, 191)",
    700: "rgba(95, 158, 199)",
    600: "rgba(118, 172, 207,0.3)",
    500: "rgba(141, 186, 215,0.3)",
    400: "rgba(164, 200, 223)",
    300: "rgba(187, 214, 231)",
    200: "rgba(210, 227, 239)",
    100: "rgba(233, 241, 247)",
    50: "rgba(241, 247, 252)",
  },
  white: "#fff",
  black: "#000",
  transparent: "transparent",
  blue_Rgba_010: "rgba(0,255,247,0.1)",
  blue_Rgba_025: "rgba(0,255,247,0.25)",
  blue_Rgba_035: "rgba(0,255,247,0.35)",
  blue_Rgba_050: "rgba(0,255,247,0.5)",
  blue_Rgba_button: "rgba(82,250,230,0.7)",
  blue_Rgba_input: "rgba(235,255,253,1)",
};
