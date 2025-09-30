import { Code2, Smartphone, Database, Cloud, Palette, Zap } from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: Palette,
    description: "Interfaces modernas y responsivas",
    tools: ["React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Code2,
    description: "APIs robustas y escalables",
    tools: ["Node.js", "Python", ".NET", "Java"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    description: "Apps nativas y multiplataforma",
    tools: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Base de Datos",
    icon: Database,
    description: "Almacenamiento confiable",
    tools: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    description: "Infraestructura moderna",
    tools: ["AWS", "Azure", "Google Cloud", "Vercel"],
  },
  {
    category: "DevOps",
    icon: Zap,
    description: "Despliegue continuo",
    tools: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
]

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Tecnología que se Adapta a Ti
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            No nos casamos con un solo stack. Elegimos las herramientas correctas para cada proyecto, priorizando
            calidad, escalabilidad y facilidad de mantenimiento.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="group relative overflow-hidden rounded-xl border bg-background p-5 sm:p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <tech.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg">{tech.category}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-sm sm:text-base text-muted-foreground">
            ¿No ves la tecnología que buscas? No hay problema. Nos adaptamos a tus necesidades específicas.
          </p>
        </div>
      </div>
    </section>
  )
}
