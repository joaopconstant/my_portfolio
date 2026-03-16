import { useEffect, useRef } from "react"

export function useTiltCard({
  intensity = 14,
  scale = 1.02,
  hoverShadow = "0 24px 60px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.10), inset 0 1px 0 rgba(255,255,255,0.12)",
  resetShadow = "0 8px 32px rgba(0,0,0,0.24)",
}: {
  intensity?: number
  scale?: number
  hoverShadow?: string
  resetShadow?: string
} = {}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateX = (y - 0.5) * -intensity
      const rotateY = (x - 0.5) * intensity

      card.style.transition = "box-shadow 200ms ease-out"
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
      card.style.boxShadow = hoverShadow

      glare.style.opacity = "1"
      glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.07) 0%, transparent 65%)`
    })
  }

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafRef.current)
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    card.style.transition =
      "transform 400ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms ease-out"
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    card.style.boxShadow = resetShadow
    glare.style.opacity = "0"
  }

  return { cardRef, glareRef, handleMouseMove, handleMouseLeave }
}

export function useScrollReveal(threshold = 0.05) {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    revealRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  const addRef = (index: number) => (el: HTMLElement | null) => {
    if (el) revealRefs.current[index] = el
  }

  return addRef
}
