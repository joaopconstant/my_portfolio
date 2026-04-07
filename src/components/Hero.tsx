import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GradientBlinds from "./background/GradientBlinds"
import { useScrollReveal } from "@/lib/hooks"

export function Hero() {
  const addRef = useScrollReveal(0.05)

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0">
        <GradientBlinds
          className=""
          gradientColors={["#9eb6ff", "#294cff"]}
          angle={0}
          noise={0.3}
          blindCount={16}
          blindMinWidth={60}
          mouseDampening={0.15}
          mirrorGradient={false}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={0.5}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>

      {/* Left scrim — text readability */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />
      {/* Edge vignette — top */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/15 to-transparent" />
      {/* Bottom fade — merge into page background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-48 bg-linear-to-t from-[oklch(0.145_0_0)] to-transparent" />
      {/* Hero content */}
      <div className="pointer-events-none relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-8">
          {/* Role badge */}
          <Badge
            ref={addRef(0)}
            variant="outline"
            className="reveal mb-8 h-auto gap-2.5 rounded-full border-[rgba(255,255,255,0.12)] px-4 py-1.5 text-xs font-medium tracking-widest text-white/60 uppercase backdrop-blur-md [background:rgba(255,255,255,0.07)] hover:[background:rgba(255,255,255,0.07)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            Front End Engineer
          </Badge>

          {/* Name */}
          <h1
            ref={addRef(1)}
            className="reveal mb-6 text-white"
            data-reveal-delay="1"
            style={{
              fontSize: "clamp(4.5rem, 11vw, 10rem)",
              fontWeight: 600,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            Constant
          </h1>

          {/* Tagline */}
          <p
            ref={addRef(2)}
            className="reveal mb-10 max-w-sm text-lg leading-relaxed text-white/45"
            data-reveal-delay="2"
          >
            I build scalable full-stack applications with a focus on clean
            architecture, high-performance UI, and seamless user experiences.
          </p>

          {/* CTAs */}
          <div
            ref={addRef(3)}
            className="reveal pointer-events-auto flex items-center gap-3"
            data-reveal-delay="3"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-11 rounded-full border-[rgba(255,255,255,0.14)] px-6 text-white backdrop-blur-md [background:rgba(255,255,255,0.10)] hover:text-white hover:[background:rgba(255,255,255,0.16)]"
            >
              <a href="#work">View Work</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="h-11 rounded-full px-6 text-white/45 hover:bg-transparent hover:text-white/80"
            >
              <a href="#contact">Get in Touch →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
