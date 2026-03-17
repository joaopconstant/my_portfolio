import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/lib/hooks"
import { ArrowUp } from "lucide-react"
import bgContact from "@/assets/bg-contact.webm"

export function Contact() {
  const addRef = useScrollReveal(0.15)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section id="contact" className="relative overflow-hidden px-8 py-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
        style={{ opacity: 0.35 }}
      >
        <source src={bgContact} type="video/webm" />
      </video>

      {/* Ambient glow behind card */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.546 0.245 262.881 / 20%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      {/* Fade in from top — rendered last so it covers the scrim at the edge */}
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
          <span className="text-blue-700">beautiful.</span>
        </h2>

        {/* Subtext */}
        <p
          ref={addRef(1)}
          className="reveal mb-12 text-base leading-relaxed text-white/40"
          data-reveal-delay="2"
        >
          Whether it's a new product, a complex interface, or an idea that
          needs a technical partner, I'm open to the conversation.
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

        {/* Back to top */}
        <div
          ref={addRef(3)}
          className="reveal mt-32 flex justify-center"
          data-reveal-delay="4"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="cursor-pointer h-12 w-12 rounded-full border border-white/5 text-white/30 transition-all hover:bg-white/5 hover:text-white/80"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
