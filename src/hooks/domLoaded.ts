import { useEffect, useState } from 'react'

export function useDomLoaded() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    const handleDomContentLoaded = () => {
      setDomLoaded(true)
      document.body.classList.add('loaded')
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setDomLoaded(true)
      document.body.classList.add('loaded')
    } else {
      document.addEventListener('DOMContentLoaded', handleDomContentLoaded)
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomContentLoaded)
    }
  }, [])

  return domLoaded
}
