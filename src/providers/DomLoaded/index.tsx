'use client'

import React, { createContext, useContext } from 'react'
import { useDomLoaded } from '@/hooks/domLoaded'

const initialContext = {
  domLoaded: false,
}

const DomLoadedContext = createContext(initialContext)

export const DomLoadedProvider = ({ children }: { children: React.ReactNode }) => {
  const domLoaded = useDomLoaded()

  return <DomLoadedContext.Provider value={{ domLoaded }}>{children}</DomLoadedContext.Provider>
}

export const useDomLoadedContext = () => useContext(DomLoadedContext)
