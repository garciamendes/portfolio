import { useEffect, useState } from 'react'

interface TransitionOverlayProps {
  trigger: boolean
}

export const TransitionOverlay = ({ trigger }: TransitionOverlayProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (trigger) {
      setShow(true)
      const timeout = setTimeout(() => setShow(false), 1000)
      return () => clearTimeout(timeout)
    }
  }, [trigger])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black animate-slide-up-fade pointer-events-none" />
  )
}
