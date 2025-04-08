import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'
import { Rocket } from '@/components/Rocket'
import { RandomCircles } from '@/components/RandomCircles'

export interface SpaceBackgroundProps {}

export const SpaceBackgroundBlock: React.FC<SpaceBackgroundProps> = () => {
  return (
    <div className={classNames(styles.spaceBackground)}>
      <img
        src="/svgs/home/headerBackgroundBanner.svg"
        alt="Header Background Banner"
        className={styles.backgroundBanner}
      />
      <RandomStars width="100vw" height="60rem" />
      <RandomCircles width="100vw" height="60rem" />
      <div className={styles.rocket}>
        <Rocket />
      </div>
    </div>
  )
}
