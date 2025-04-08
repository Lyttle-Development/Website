import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import styles from './Component.module.scss'

import type { Footer } from '@/payload-types'
import { Logo } from '@/components/Logo'
import classNames from 'classnames'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className={classNames(styles.footer)}>
      <section className={classNames('container', styles.content)}>
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <article>
          <p>Damstraat 65</p>
          <p>9180 Lokeren</p>
        </article>

        <article>
          <a href="tel:+32470216421">+32 470 21 64 21</a>
          <a href="mailto:hello@lyttledevelopment.com">hello@lyttledevelopment.com</a>
        </article>

        <article>
          <a href="/">algemene voorwaarden</a>
          <a href="/">cookie policy</a>
        </article>

        <article>
          <a href="/">intragram</a>
          <a href="/">linkedin</a>
        </article>
      </section>
      <img
        src={`/svgs/blobs/footer.svg`}
        alt="Header Background Banner"
        className={styles.banner}
      />
    </footer>
  )
}
