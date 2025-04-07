import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'

export interface PlanetsVisualProps {}

export const PlanetsVisualBlock: React.FC<PlanetsVisualProps> = (props) => {
  return (
    <div className={classNames(styles.planetsVisual)}>
      <img
        src="/svgs/home/headerBackgroundBanner.svg"
        alt="Header Background Banner"
        className={styles.backgroundBanner}
      />
      <RandomStars width="100vw" height="calc(100vh - 2rem)" />
    </div>
  )
}
