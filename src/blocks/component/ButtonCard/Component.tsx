import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { ButtonBlock } from '@/blocks/component/Button/Component'

export interface ButtonCardProps {
  headingType?: string
  title: string
  text: string
  buttonText: string
  color: string
}

export const ButtonCardBlock: React.FC<ButtonCardProps> = (props) => {
  const { headingType, title, text, buttonText, color } = props
  return (
    <article className={styles.buttonCard}>
      {React.createElement(
        headingType || 'h1',
        {
          className: classNames(styles.title, {
            [styles.blue as string]: color === 'blue',
            [styles.orange as string]: color === 'orange',
          }),
        },
        <>{title}</>,
      )}
      <p className={styles.text}>{text}</p>
      <ButtonBlock
        className={classNames(styles.button, {
          [styles.blue as string]: color === 'blue',
          [styles.orange as string]: color === 'orange',
        })}
        text={buttonText}
        color={color}
      />
    </article>
  )
}
