import styles from './typography.module.scss'
import classNames from 'classnames'
import { poppins } from '@/styles/fonts'

export const body = {
  base: classNames(styles.body_base, styles.font_weight_normal, poppins.className),
}

export const heading = {
  base: classNames(styles.heading_base, styles.font_weight_normal, poppins.className),
}
