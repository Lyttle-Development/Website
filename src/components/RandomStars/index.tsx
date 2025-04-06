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

const RAND_SEED = 'Yb6zD94tLTyWQqM8SunVx5'
const DISTANCE_BETWEEN = 60

function randomNegative(rand: RandomSeed.RandomSeed) {
  return rand.intBetween(0, 1) * -1
}

export const RandomStars: React.FC = () => {
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
    <div className={classNames(styles.stars)}>
      {[...new Array(numStars)].map((_, index) => {
        const scale = rand.floatBetween(SCALE_MIN, SCALE_MAX)
        return (
          <img
            src={stars[rand.intBetween(0, stars.length - 1)]}
            className={styles.star}
            style={{
              top: `${rand.floatBetween(0, 90)}%`,
              left: `${rand.floatBetween(0, 100)}%`,
              opacity: rand.floatBetween(OPACITY_MIN, OPACITY_MAX),
              transform: `translate(${rand.floatBetween(TRANSLATE_MIN, TRANSLATE_MAX) * randomNegative(rand)}%, 0) scale(${scale})`,
              width: `${30 * scale}px`,
              height: `${30 * scale}px`,
            }}
            key={index}
            aria-hidden
          />
        )
      })}
    </div>
  )
}
