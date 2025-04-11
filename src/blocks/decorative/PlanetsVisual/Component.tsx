'use client'
import React, { useRef } from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'

export interface PlanetsVisualProps {}

const seed = 'L284ngsYHaFrAPDQz5ymfS'

export const PlanetsVisualBlock: React.FC<PlanetsVisualProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div className={classNames(styles.planetsVisual)} ref={ref}>
      <img src="/svgs/blobs/roundish.svg" alt="Roundish Blob" className={styles.blob} />
      <img src="/svgs/planet-1.svg" alt="A planet" className={styles.planetA} />
      <img src="/svgs/planet-2.svg" alt="A planet" className={styles.planetB} />
      <RandomStars width="45rem" height="45rem" seed={seed} containerRef={ref} density={50} />
    </div>
  )
}
