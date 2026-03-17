import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pt-5">
      <nav
        className={cn(
          "pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2",
          "transition-all duration-300 ease-out",
          scrolled
            ? "border border-[rgba(255,255,255,0.09)] shadow-[0_8px_32px_rgba(0,0,0,0.28)] [backdrop-filter:blur(5px)] [-webkit-backdrop-filter:blur(5px)] [background:rgba(255,255,255,0.07)]"
            : "border border-transparent [background:transparent]"
        )}
      >
        {/* Nav links */}
        {links.map(({ label, href }) => (
          <Button
            key={href}
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "h-8 rounded-full px-3.5 text-sm font-medium transition-colors duration-300",
              scrolled
                ? "text-white/55 hover:bg-white/8 hover:text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            )}
          >
            <a href={href}>{label}</a>
          </Button>
        ))}

        {/* Divider */}
        <span
          className={cn(
            "mx-1 h-4 w-px transition-all duration-300",
            scrolled ? "bg-white/12" : "bg-transparent"
          )}
        />

        {/* Hire Me */}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="h-8 rounded-full border-[rgba(255,255,255,0.14)] px-4 text-sm font-medium text-white backdrop-blur-md [background:rgba(255,255,255,0.10)] hover:text-white hover:[background:rgba(255,255,255,0.18)]"
        >
          <a href="mailto:joaoconstantdev@gmail.com">Hire Me</a>
        </Button>
      </nav>
    </header>
  )
}
