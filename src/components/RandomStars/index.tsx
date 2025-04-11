'use client'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import RandomSeed from 'random-seed'

const stars = ['blue', 'gray', 'large', 'orange', 'small'].map((t) => `/svgs/stars/${t}.svg`)

const OPACITY_MIN = 0.3
const OPACITY_MAX = 1

const TRANSLATE_MIN = 25
const TRANSLATE_MAX = 50

const SCALE_MIN = 0.5
const SCALE_MAX = 0.8

const RAND_SEED = 'DXdQ2q3TeBcWknF4VY9xCU'
const DISTANCE_BETWEEN = 85

function randomNegative(rand: RandomSeed.RandomSeed) {
  return rand.intBetween(0, 1) * -1
}

interface RandomStarsProps {
  width?: string
  height?: string
  seed?: string
  className?: string
  density?: number
  containerRef?: React.RefObject<any>
}

export const RandomStars: React.FC<RandomStarsProps> = (props) => {
  const {
    width = '50rem',
    height = '50rem',
    seed = RAND_SEED,
    className,
    density = DISTANCE_BETWEEN,
    containerRef = null,
  } = props
  const [numStars, setNumStars] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      let innerWidth = 0
      if (containerRef && 'current' in containerRef && 'clientWidth' in containerRef.current) {
        innerWidth = containerRef.current.clientWidth as number
      } else {
        innerWidth = window.innerWidth
      }
      setNumStars(Math.floor(innerWidth / density))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const rand = RandomSeed.create(seed)

  return (
    <div
      className={classNames(styles.stars, className)}
      style={{
        width,
        height,
      }}
    >
      {[...new Array(numStars)].map((_, index) => {
        const scale = rand.floatBetween(SCALE_MIN, SCALE_MAX)
        const translateX = rand.floatBetween(TRANSLATE_MIN, TRANSLATE_MAX) * randomNegative(rand)
        const translateY = rand.floatBetween(TRANSLATE_MIN, TRANSLATE_MAX) * randomNegative(rand)
        const animationDuration = `${rand.floatBetween(3, 7)}s`
        const rotation = rand.floatBetween(0, 360)
        return (
          <img
            src={stars[rand.intBetween(0, stars.length - 1)]}
            className={styles.star}
            style={
              {
                top: `${rand.floatBetween(0, 90)}%`,
                left: `${rand.floatBetween(0, 100)}%`,
                opacity: rand.floatBetween(OPACITY_MIN, OPACITY_MAX),
                transform: `translate(0, 0) scale(1) rotate(${rotation}deg)`,
                width: `${30 * scale}px`,
                height: `${30 * scale}px`,
                '--translate-x': `${translateX}%`,
                '--translate-y': `${translateY}%`,
                animationDuration,
              } as React.CSSProperties
            }
            key={index}
            aria-hidden
          />
        )
      })}
    </div>
  )
}
