import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/lib/hooks"
import { useRef } from "react"

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card || !glare) return

    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width // 0–1
      const y = (e.clientY - rect.top) / rect.height // 0–1

      const rotateX = (y - 0.5) * -14
      const rotateY = (x - 0.5) * 14

      card.style.transition = "box-shadow 200ms ease-out"
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
      card.style.boxShadow = `
        0 24px 60px rgba(0,0,0,0.40),
        0 0 0 1px rgba(255,255,255,0.10),
        inset 0 1px 0 rgba(255,255,255,0.12)
      `

      glare.style.opacity = "1"
      glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.05) 0%, transparent 65%)`
    })
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    const glare = glareRef.current
    cancelAnimationFrame(rafRef.current)
    if (!card || !glare) return

    card.style.transition =
      "transform 400ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms ease-out"
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    card.style.boxShadow = "0 8px 32px rgba(0,0,0,0.24)"
    glare.style.opacity = "0"
  }

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
    <section id="about" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-8">
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
                I’m a full-stack engineer focused on building clean, reliable
                web applications. With 2+ years working in the React ecosystem,
                I specialize in turning complex requirements into clear,
                well-structured user experiences.
              </p>

              <p
                ref={addRef(3)}
                className="reveal text-lg leading-relaxed text-white/50"
                data-reveal-delay="3"
              >
                My work combines solid experience with TypeScript, Node.js, and
                modern front-end architecture. I enjoy taking features
                end-to-end, from initial implementation to shipping production
                code used by real users.
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
                    Production Experience
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
                  <div className="grid grid-cols-2 gap-3">
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
