import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface SpaceBackgroundProps {
  headingType: string // e.g., 'h1', 'h2', etc.
  title: string
  color: string
  colorTitle: string
  colorPadding: string
  reverseAlign: boolean
  reverseColor: boolean
}

function getGolor(color: string) {
  switch (color) {
    case 'blue':
      return '#6C63FF'
    case 'orange':
      return '#FF6363'
    default:
      return '#ffffff'
  }
}

export const ColorfulTitleBlock: React.FC<SpaceBackgroundProps> = (props) => {
  const { headingType, title, color, colorTitle, colorPadding, reverseAlign, reverseColor } = props
  return (
    <>
      {React.createElement(
        headingType || 'h1',
        {
          className: classNames(styles.colorfulTitle, {
            [styles.reverseAlign as string]: reverseAlign,
            [styles.reverseColor as string]: reverseColor,
            [styles.colorPaddingLight as string]: colorPadding === 'light',
            [styles.colorPaddingMedium as string]: colorPadding === 'medium',
            [styles.colorPaddingLarge as string]: colorPadding === 'large',
            [styles.colorPaddingAuto as string]: colorPadding === 'auto',
          }),
        },
        <>
          <span>{title}</span>
          <span
            className={styles.color}
            style={{
              color: getGolor(color),
            }}
          >
            {colorTitle}
          </span>
        </>,
      )}
    </>
  )
}
