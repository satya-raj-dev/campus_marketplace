import { useEffect, useState } from 'react'

export function useScrollShadow(offset = 12) {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const updateShadow = () => {
      setHasShadow(window.scrollY > offset)
    }

    updateShadow()
    window.addEventListener('scroll', updateShadow, { passive: true })

    return () => window.removeEventListener('scroll', updateShadow)
  }, [offset])

  return hasShadow
}
