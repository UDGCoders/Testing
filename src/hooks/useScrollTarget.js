import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const normalizeTargetId = (value) => {
  if (typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.startsWith('#') ? trimmed.slice(1) : trimmed
}

const useScrollTarget = () => {
  const location = useLocation()

  const targetId = useMemo(() => {
    const stateTarget =
      location.state &&
      (location.state.scrollTargetId || location.state.targetId)
    return normalizeTargetId(stateTarget || location.hash)
  }, [location.hash, location.state])

  useEffect(() => {
    if (!targetId) return
    const raf = requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
    return () => cancelAnimationFrame(raf)
  }, [targetId])

  return targetId
}

export default useScrollTarget
