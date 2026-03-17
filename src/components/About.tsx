import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react"
import { useScrollReveal, useTiltCard } from "@/lib/hooks"

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const { cardRef, glareRef, handleMouseMove, handleMouseLeave } = useTiltCard()

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "16px",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px) saturate(160%)",
        WebkitBackdropFilter: "blur(12px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          transition: "opacity 200ms ease-out",
          pointerEvents: "none",
          borderRadius: "inherit",
          zIndex: 1,
        }}
      />
      {/* Content sits above glare */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  )
}

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/joaopconstant",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/joaopconstant",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/joaopconstant",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:joaoconstantdev@gmail.com",
  },
]

export function About() {
  const addRef = useScrollReveal(0.08)

  return (
    <section id="about" className="relative h-auto py-24 lg:py-40">
      {/* Gradient mesh — local light source for this section */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.546 0.245 262.881 / 5%) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 50% at 85% 85%, oklch(0.424 0.199 265.638 / 4%) 0%, transparent 55%)",
          ].join(", "),
        }}
      />
      {/* Top fade — match Hero's bottom edge */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-48 bg-linear-to-b from-[oklch(0.145_0_0)] to-transparent" />
      {/* Bottom fade — match Projects' top edge */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-48 bg-linear-to-t from-[oklch(0.145_0_0)] to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-8">
        {/* Heading */}
        <h2
          ref={addRef(1)}
          className="reveal mb-16 text-white"
          data-reveal-delay="1"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            maxWidth: "22ch",
          }}
        >
          Architecting digital products with precision and purpose.
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_380px]">
          {/* Left: Bio + contact */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p
                ref={addRef(2)}
                className="reveal text-lg leading-relaxed text-white/50"
                data-reveal-delay="2"
              >
                Hi, my name is João Constant. I’m a front-end engineer from Brazil with 2+ years of experience building
                production web applications with React, Next.js and TypeScript.
              </p>

              <p
                ref={addRef(3)}
                className="reveal text-lg leading-relaxed text-white/50"
                data-reveal-delay="3"
              >
                I focus on creating clean, reliable interfaces that translate
                complex product requirements into clear user experiences.
              </p>

              <p
                ref={addRef(4)}
                className="reveal text-lg leading-relaxed text-white/50"
                data-reveal-delay="4"
              >
                While my main work is on the front end, I regularly collaborate
                with back-end engineers and work with APIs, Node.js services,
                and application data flows to deliver complete features to
                production.
              </p>
            </div>
          </div>

          {/* Right: Tilt card */}
          <div ref={addRef(5)} className="reveal" data-reveal-delay="3">
            <TiltCard>
              <div className="space-y-7 p-7">
                {/* Experience stat */}
                <div>
                  <p className="mb-1 text-xs font-medium tracking-widest text-white/25 uppercase">
                    Experience
                  </p>
                  <p
                    className="text-3xl font-semibold text-white"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    2+ Years
                  </p>
                  <p className="mt-0.5 text-sm text-white/35">
                    Building and shipping production web applications used by
                    real users.
                  </p>
                </div>

                <div className="h-px bg-white/6" />

                {/* Stack */}
                <div>
                  <p className="mb-3.5 text-xs font-medium tracking-widest text-white/25 uppercase">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-[rgba(255,255,255,0.09)] px-3 py-1 text-xs font-normal text-white/55 [background:rgba(255,255,255,0.05)] hover:[background:rgba(255,255,255,0.05)]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/6" />

                {/* Social Connect */}
                <div>
                  <p className="mb-4 text-xs font-medium tracking-widest text-white/25 uppercase">
                    Connect
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg border-white/4 bg-white/2 p-2.5 transition-all hover:border-white/10 hover:bg-white/6"
                      >
                        <div className="flex items-center gap-2.5">
                          <social.icon className="h-4 w-4 text-white/40 transition-colors group-hover:text-white/80" />
                          <span className="text-sm text-white/45 transition-colors group-hover:text-white/80">
                            {social.name}
                          </span>
                        </div>
                        <ArrowUpRight className="h-3 w-3 -translate-x-0.5 translate-y-0.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
