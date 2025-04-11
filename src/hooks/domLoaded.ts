import { useEffect, useState } from 'react'

export function useDomLoaded() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    const handleDomContentLoaded = () => {
      setDomLoaded(true)
      document.body.classList.remove('loading')
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setDomLoaded(true)
      document.body.classList.remove('loading')
    } else {
      document.addEventListener('DOMContentLoaded', handleDomContentLoaded)
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomContentLoaded)
    }
  }, [])

  return domLoaded
}
