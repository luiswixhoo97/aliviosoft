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
    <section id="tecnologias" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
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

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.category}
              className="group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background to-muted/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl transition-all duration-300 group-hover:scale-110" />
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all duration-300 group-hover:scale-110">
                  <tech.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold leading-tight">{tech.category}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                
                {/* Tools */}
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1.5 text-xs font-medium text-primary border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
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
