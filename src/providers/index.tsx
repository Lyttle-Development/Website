import React from 'react'
import { DomLoadedProvider } from '@/providers/DomLoaded'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <DomLoadedProvider>{children}</DomLoadedProvider>
}
