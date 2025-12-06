// Generated constants from SCSS variables
// This file replaces the CSS Modules :export approach for better Turbopack compatibility

export const colors = {
  background: '#100429',
  backgroundAccent: '#252257',
  text: '#F2F2F2',
  primary: '#6C63FF',
  primaryGradient: 'linear-gradient(90deg, #6C62FF 0%, #271B5E 100%)',
  secondary: '#FF6363',
  secondaryGradient: 'linear-gradient(90deg, #E1575C 0%, #4B1B37 100%)',
} as const

export const fontSizes = {
  '2-extra-small': '0.625rem', // 10px
  'extra-small': '0.75rem', // 12px
  small: '0.875rem', // 14px
  base: '1rem', // 16px
  large: '1.125rem', // 18px
  'extra-large': '1.25rem', // 20px
  '2-extra-large': '1.5rem', // 24px
  '3-extra-large': '1.75rem', // 28px
} as const

export const fontWeights = {
  lightest: 100,
  'extra-light': 200,
  light: 300,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900,
} as const

export const breakpoints = {
  small: '40rem', // 640px
  medium: '48rem', // 768px
  large: '64rem', // 1024px
  'extra-large': '80rem', // 1280px
  '2-extra-large': '96rem', // 1536px
  '3-extra-large': '128rem', // 1920px
} as const

export const fonts = fontSizes
export const fontWeightValues = fontWeights
export const breakpointValues = breakpoints
