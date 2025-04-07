'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t

const easeOutQuad = (t: number) => 1 - (1 - t) ** 2

export const Rocket: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement>(null)
  const [vh, setVh] = useState(1)

  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  function getPoint(t: number): [DOMPoint, number] {
    const point1 = pathRef!.current!.getPointAtLength(t * pathRef!.current!.getTotalLength())
    const point2 = pathRef!.current!.getPointAtLength(
      (t + 0.0001) * pathRef!.current!.getTotalLength(),
    )

    const dx = point2.x - point1.x
    const dy = point2.y - point1.y

    return [point1, Math.atan2(dy, dx)]
  }

  function setRocketPosition(t: number) {
    if (!rocketRef.current) return

    const [point, angle] = getPoint(t)
    rocketRef.current!.style.top = `calc(${point.y * 100}%)`
    rocketRef.current!.style.left = `calc(${point.x * 100}%)`

    rocketRef.current!.style.rotate = `${angle}rad`
  }

  const rocketPosRef = useRef<number>(0)

  const rocketStartAfterAnimation = 0.09
  const animationDurationMs = 2 * 1000

  function animateLerp(
    durationMs: number,
    rocketStartAfterAnimation: number,
    rocketPosRef: RefObject<number>,
  ) {
    const startTime = performance.now()
    const initialPosition = rocketPosRef.current

    function update() {
      const elapsed = performance.now() - startTime
      const linearT = Math.min(elapsed / durationMs, 1)
      const easedT = easeOutQuad(linearT) // Apply easing

      rocketPosRef.current = lerp(initialPosition, rocketStartAfterAnimation, easedT)
      setRocketPosition(rocketPosRef.current)

      if (linearT < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  useEffect(() => {
    setVh(document.documentElement.offsetHeight)

    animateLerp(animationDurationMs, rocketStartAfterAnimation, rocketPosRef)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rocketRef.current && svgRef.current) {
        const offset = (window.scrollY / vh) * window.innerHeight
        const scrollY = window.scrollY + offset

        setRocketPosition(scrollY / vh + rocketStartAfterAnimation)
      }
    }

    window.addEventListener('scroll', handleScroll)
    if (window.scrollY === 0) {
      handleScroll()
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [vh])

  const path =
    'M5.49902 1351.5C247.999 835 3011.91 -565.931 3022.5 261.001C3038.5 1510 1879.6 1352.95 1533 1315C1053.5 1262.5 5.49902 1240.63 5.49902 1907C5.49902 2783.5 3022.5 1907 3022.5 2636C3022.5 4757 2387 3539.5 1533 3017.5C962.187 2668.6 5.49767 2806.51 5.49902 3713.5C5.50098 5024.5 3022.5 3992.51 3022.5 5285.5'

  const width = 3028
  const height = 5286
  const split = path
    .split('C')
    .slice(1)
    .map((group) => {
      const splitOnSpace = group.split(' ')

      let str = ''
      for (let i = 0; i < splitOnSpace.length; i += 2) {
        const w = Number(splitOnSpace[i]!) / width
        const h = Number(splitOnSpace[i + 1]!) / height

        str += `${w} ${h} `
      }
      return `C${str}`
    })
    .join(' ')

  const mGroup = path.split('C')[0]!.slice(1).split(' ')

  let str = 'M'

  for (let i = 0; i < mGroup.length; i += 2) {
    const w = Number(mGroup[i]!) / width
    const h = Number(mGroup[i + 1]!) / height

    str += `${w} ${h} `
  }

  return (
    <>
      <div className={styles.positioner}>
        <div className={styles.rocket_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1 1"
            height={vh}
            className={styles.debug_path}
            // preserveAspectRatio="xMidYMax slice"
            preserveAspectRatio="none"
            ref={svgRef}
          >
            <path
              ref={pathRef}
              d={str + split}
              fill="none"
              stroke="transparent"
              // stroke="white"
              strokeWidth={0.01}
            />
          </svg>
          <div className={styles.rocket_parent} ref={rocketRef}>
            <img src="/svgs/rocket.svg" alt="Rocket" className={styles.rocket} />
          </div>
        </div>
      </div>
    </>
  )
}
