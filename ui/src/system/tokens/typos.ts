// fs 50, lh 22, fw 700 -> h1 > heading > size 1
// fs 28, lh 30, fw 700 -> hero text > heading > size 2,
// fs 18, lh 22, fw 600 -> h3 > heading > size 3
// fs 16, lh 22, fw 700 -> title > heading > size 4
// fs 12, lh 14, fw 400 -> placeholder > p > size 1
// fs 11, lh 12, fw 400 -> h3 p > size 2
// fs 10, lh 18, fw 400 -> badge text > p > size 3

const fonts = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const fontSizes = {
  xs: "10px",
  sm: "11px",
  base: "12px",
  md: "16px",
  lg: "18px",
  xl: "28px",
  xxl: "50px",
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: "12px",
  short: "14px",
  base: "18px",
  tall: "22px",
  taller: "30px",
};

const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export { fonts, fontSizes, fontWeights, letterSpacings, lineHeights };
