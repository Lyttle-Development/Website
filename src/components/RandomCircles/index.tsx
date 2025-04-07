'use client'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import RandomSeed from 'random-seed'

const colors = ['#6C63FF', '#AAA9B5']

const OPACITY_MIN = 0.1
const OPACITY_MAX = 0.2

const TRANSLATE_MIN = 1
const TRANSLATE_MAX = 1

const SCALE_MIN = 1
const SCALE_MAX = 10

const RAND_SEED = 'kMezNZqRnp7g6yt5hSjJrY'
const DISTANCE_BETWEEN = 300

function randomNegative(rand: RandomSeed.RandomSeed) {
  return rand.intBetween(0, 1) * -1
}

interface RandomCirclesProps {
  width?: string
  height?: string
}

export const RandomCircles: React.FC<RandomCirclesProps> = (props) => {
  const { width = '50rem', height = '50rem' } = props
  const [numStars, setNumStars] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setNumStars(Math.floor(window.innerWidth / DISTANCE_BETWEEN))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const rand = RandomSeed.create(RAND_SEED)

  return (
    <div
      className={classNames(styles.circles)}
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
          <div
            className={styles.circle}
            style={
              {
                backgroundColor: colors[rand.intBetween(0, colors.length - 1)],
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
