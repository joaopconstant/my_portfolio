import { useEffect, useRef } from "react"

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
