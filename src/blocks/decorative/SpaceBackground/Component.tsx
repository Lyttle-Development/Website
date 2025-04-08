'use client'
import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'
import { Rocket } from '@/components/Rocket'
import { RandomCircles } from '@/components/RandomCircles'

export interface SpaceBackgroundProps {}

export const SpaceBackgroundBlock: React.FC<SpaceBackgroundProps> = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280)
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Call it once to set the initial state
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={classNames(styles.spaceBackground)}>
      <img
        src={`/svgs/home/headerBackgroundBanner${isMobile ? 'Mobile' : ''}.svg`}
        alt="Header Background Banner"
        className={styles.backgroundBanner}
      />
      <RandomStars width="100vw" height={isMobile ? '50vh' : '90vh'} />
      <RandomCircles width="100vw" height={isMobile ? '50vh' : '90vh'} />
      <div className={styles.rocket}>
        <Rocket />
      </div>
    </div>
  )
}
