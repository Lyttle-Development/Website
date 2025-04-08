import React from 'react'
import styles from './Component.module.scss'

export interface ButtonProps {}

export const PreviewBlock: React.FC<ButtonProps> = (props) => {
  return <article className={styles.preview}></article>
}
