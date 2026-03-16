import bgProjects from "@/assets/bg-projects.png"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal, useTiltCard } from "@/lib/hooks"

const projects = [
  {
    title: "Finance Dashboard",
    description:
      "A real-time analytics platform for personal finance tracking — built with event-driven architecture and sub-100ms query times.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    href: "#",
    year: "2024",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack commerce solution with server-side rendering, Stripe integration, and an admin panel for inventory management.",
    tags: ["Next.js", "Prisma", "Stripe", "Tailwind"],
    href: "#",
    year: "2024",
  },
  {
    title: "DevOps Monitor",
    description:
      "Internal tooling for CI/CD pipeline observability — aggregates build metrics, surfaces regressions, and alerts on anomalies.",
    tags: ["React", "REST API", "Docker", "TypeScript"],
    href: "#",
    year: "2023",
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { cardRef, glareRef, handleMouseMove, handleMouseLeave } = useTiltCard({
    intensity: 10,
    scale: 1.015,
    hoverShadow: "0 24px 60px rgba(0,0,0,0.50)",
    resetShadow: "0 8px 32px rgba(0,0,0,0.24)",
  })

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: "16px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
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
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }} className="p-7">

        {/* Year */}
        <p className="mb-4 text-xs font-medium tracking-widest text-white/25 uppercase">
          {project.year}
        </p>

        {/* Title */}
        <h3
          className="mb-3 text-white"
          style={{
            fontSize: "1.375rem",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-white/45">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-[rgba(255,255,255,0.09)] px-2.5 py-0.5 text-xs font-normal text-white/45 [background:rgba(255,255,255,0.04)] hover:[background:rgba(255,255,255,0.04)]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Link */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="group w-fit gap-1.5 rounded-full px-0 text-white/40 hover:bg-transparent hover:text-white/80"
        >
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export function Projects() {
  const addRef = useScrollReveal(0.08)

  return (
    <section id="work" className="relative h-screen overflow-hidden py-40">
      {/* Background image — vertically flipped */}
      <img
        src={bgProjects}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.5 }}
      />
      {/* Fade in from top (blending with About's bottom fade) */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-transparent to-[oklch(0.145_0_0)]" />
      {/* Subtle dark scrim for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      {/* Bottom fade — merge into page background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-48 bg-linear-to-t from-[oklch(0.145_0_0)] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-8">
        {/* Heading */}
        <div ref={addRef(0)} className="reveal mb-16">
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              maxWidth: "20ch",
            }}
          >
            Projects built to ship and built to last.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={addRef(i + 1)}
              className="reveal h-full"
              data-reveal-delay={String(i + 1)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
