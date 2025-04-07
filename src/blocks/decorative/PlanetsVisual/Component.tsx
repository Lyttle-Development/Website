import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface PlanetsVisualProps {}

export const PlanetsVisualBlock: React.FC<PlanetsVisualProps> = (props) => {
  return <div className={classNames(styles.planetsVisual)}></div>
}
