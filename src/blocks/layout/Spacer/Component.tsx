import React from 'react'
import styles from './Component.module.scss'

export interface FlexibleRowProps {
  amount: number
}

export const SpacerBlock: React.FC<FlexibleRowProps> = (props) => {
  const { amount } = props
  return (
    <div
      className={styles.spacer}
      style={{
        height: `${amount}rem`,
      }}
    />
  )
}
