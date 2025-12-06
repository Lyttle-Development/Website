'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from 'src/components/CMSLink'

import styles from './styles.module.scss'
import classNames from 'classnames'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className={classNames(styles.nav)}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" />
      })}
      {/* TODO: Add Menu */}
      {/*<Link href="/">*/}
      {/*  <span>Menu</span>*/}
      {/*</Link>*/}
    </nav>
  )
}
