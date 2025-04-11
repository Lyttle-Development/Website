import variables from './detail/variables-exports.module.scss'

export const colors = {
  background: variables.color_background,
  backgroundAccent: variables.color_backgroundAccent,
  text: variables.color_text,
  primary: variables.color_primary,
  primaryGradient: variables.color_primaryGradient,
  secondary: variables.color_secondary,
  secondaryGradient: variables.color_secondaryGradient,
} as const

export const fontSizes = {
  '2-extra-small': variables.font_size_2_extra_small,
  'extra-small': variables.font_size_extra_small,
  small: variables.font_size_small,
  base: variables.font_size_base,
  large: variables.font_size_large,
  'extra-large': variables.font_size_extra_large,
  '2-extra-large': variables.font_size_2_extra_large,
  '3-extra-large': variables.font_size_3_extra_large,
} as const

export const fontWeights = {
  lightest: variables.font_weight_lightest,
  'extra-light': variables.font_weight_extra_light,
  light: variables.font_weight_light,
  normal: variables.font_weight_normal,
  medium: variables.font_weight_medium,
  'semi-bold': variables.font_weight_semi_bold,
  bold: variables.font_weight_bold,
  'extra-bold': variables.font_weight_extra_bold,
  black: variables.font_weight_black,
} as const

export const breakpoints = {
  small: variables.breakpoint_small,
  medium: variables.breakpoint_medium,
  large: variables.breakpoint_large,
  extraLarge: variables.breakpoint_extra_large,
  '2-extra-large': variables.breakpoint_2_extra_large,
  '3-extra-large': variables.breakpoint_3_extra_large,
} as const
