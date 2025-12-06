import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { body } from '@/styles/typography'

export interface ButtonProps {
  text: string
  color: string
  className?: string
  onClick?: () => void
  link?: string
}

export const ButtonBlock: React.FC<ButtonProps> = (props) => {
  const { text, color, className, onClick, link } = props

  if (link) {
    return (
      <a
        className={classNames(
          body.base,
          styles.button,
          {
            [styles.blue as string]: color === 'blue',
            [styles.orange as string]: color === 'orange',
          },
          className,
        )}
        href={link}
      >
        {text}
      </a>
    )
  }

  return (
    <button
      className={classNames(
        body.base,
        styles.button,
        {
          [styles.blue as string]: color === 'blue',
          [styles.orange as string]: color === 'orange',
        },
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
