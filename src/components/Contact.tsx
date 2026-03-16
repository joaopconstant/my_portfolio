import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/lib/hooks"

export function Contact() {
  const addRef = useScrollReveal(0.15)

  return (
    <section id="contact" className="relative px-8 py-40">
      {/* Ambient glow behind card */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.546 0.245 262.881 / 20%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Fade in from top (blending with About's bottom fade) */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-transparent to-[oklch(0.145_0_0)]" />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Heading */}
        <h2
          ref={addRef(0)}
          className="reveal mb-6 text-white"
          data-reveal-delay="1"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Let's build something
          <br />
          <span className="text-chart-3">meaningful.</span>
        </h2>

        {/* Subtext */}
        <p
          ref={addRef(1)}
          className="reveal mb-12 text-base leading-relaxed text-white/40"
          data-reveal-delay="2"
        >
          Whether it's a new product, a performance problem, or an idea that
          needs a technical partner — I'm open to the conversation.
        </p>

        {/* CTA card */}
        <div
          ref={addRef(2)}
          className="reveal glass-card rounded-2xl p-8"
          data-reveal-delay="3"
        >
          <p className="mb-1 text-sm text-white/30">Reach me directly at</p>
          <p className="mb-6 text-xl font-medium tracking-tight text-white/80">
            joaoconstantdev@gmail.com
          </p>
          <Button
            size="lg"
            asChild
            className="h-11 rounded-full border border-[rgba(255,255,255,0.14)] px-8 font-medium text-white shadow-none [background:rgba(255,255,255,0.10)] hover:text-white hover:[background:rgba(255,255,255,0.16)]"
          >
            <a href="mailto:joaoconstantdev@gmail.com">Send an email →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
