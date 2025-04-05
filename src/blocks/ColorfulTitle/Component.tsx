import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface SpaceBackgroundProps {
  headingType: string // e.g., 'h1', 'h2', etc.
  title: string
  colorTitle: string
  reverseAlign: boolean
  reverseColor: boolean
}

export const ColorfulTitleBlock: React.FC<SpaceBackgroundProps> = (props) => {
  const { headingType, title, colorTitle, reverseAlign, reverseColor } = props
  console.log(headingType)
  return (
    <>
      {React.createElement(
        headingType || 'h1',
        {
          className: classNames(styles.colorfulTitle, {
            [styles.reverseAlign as string]: reverseAlign,
            [styles.reverseColor as string]: reverseColor,
          }),
        },
        <>
          <span>{title}</span>
          <span>{colorTitle}</span>
        </>,
      )}
    </>
  )
}
