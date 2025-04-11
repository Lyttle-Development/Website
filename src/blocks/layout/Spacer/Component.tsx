import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface FlexibleRowProps {
  amount: number
  hideOnMobile?: boolean
}

export const SpacerBlock: React.FC<FlexibleRowProps> = (props) => {
  const { amount, hideOnMobile } = props
  return (
    <div
      className={classNames(styles.spacer, {
        [styles.hideOnMobile as string]: hideOnMobile,
      })}
      style={{
        height: `${amount}rem`,
      }}
    />
  )
}
