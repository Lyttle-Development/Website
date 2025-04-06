'use client'
import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'

export const Rocket: React.FC = () => {
  const rocketRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rocketRef.current) {
        const scrollY = window.scrollY
        rocketRef.current.style.setProperty('bottom', `${45 + scrollY * 0.1}%`, 'important')
        rocketRef.current.style.setProperty('left', `${40 + scrollY * 0.1}%`, 'important')
        rocketRef.current.style.setProperty('transform', 'translate(-50%, -50%)', 'important')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <img src="/svgs/rocket.svg" alt="Rocket" ref={rocketRef} className={styles.rocket} />
}
