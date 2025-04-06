'use client'
import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'

export const Rocket: React.FC = () => {
  const rocketRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rocketRef.current) {
        const scrollY = window.scrollY
        const vh = window.innerHeight

        if (scrollY === 0) {
          // Reset styles when at the top of the page
          rocketRef.current.style = ''
          return
        }

        if (scrollY < vh) {
          // Phase 1: initial animation before 100vh scroll.
          rocketRef.current.style.setProperty('bottom', `${45 + scrollY * 0.2}%`, 'important')
          rocketRef.current.style.setProperty('left', `${40 + scrollY * 0.1}%`, 'important')
          rocketRef.current.style.setProperty(
            'transform',
            'translate(-50%, -50%) rotate(0deg)',
            'important',
          )
        } else {
          // Phase 2: once scroll reaches or exceeds 100vh
          // Calculate progress from 0 (at 100vh) to 1 (at 200vh)
          const progress = Math.min((scrollY - vh) / vh, 1)
          // At progress 0: start at top-right (outside the screen)
          // At progress 1: end off-screen at the left-bottom.
          // For example, left: 100% to -20%, bottom: 100% to -20%
          const left = 100 - 120 * progress // 100% at progress=0, -20% at progress=1
          const bottom = 100 - 120 * progress // 100% at progress=0, -20% at progress=1

          rocketRef.current.style.setProperty('left', `${left}%`, 'important')
          rocketRef.current.style.setProperty('bottom', `${bottom}%`, 'important')
          // Immediately set rotation to 180° (no further rotation during movement)
          rocketRef.current.style.setProperty('transform', 'rotate(180deg)', 'important')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    if (window.scrollY !== 0) {
      handleScroll()
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <img src="/svgs/rocket.svg" alt="Rocket" ref={rocketRef} className={styles.rocket} />
}
