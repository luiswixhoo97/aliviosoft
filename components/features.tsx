import { Code2, Lightbulb, GraduationCap, Blocks, Zap, Users } from "lucide-react"

const features = [
  {
    number: "01",
    name: "Desarrollo de Software",
    description:
      "Aplicaciones web y móviles diseñadas específicamente para tu negocio. Desde MVPs hasta plataformas empresariales complejas.",
    icon: Code2,
  },
  {
    number: "02",
    name: "Consultoría Tecnológica",
    description:
      "Te guiamos en la elección de tecnologías, arquitectura y estrategia digital para maximizar el impacto de tu inversión.",
    icon: Lightbulb,
  },
  {
    number: "03",
    name: "Capacitación",
    description:
      "Formamos a tu equipo en las herramientas y mejores prácticas para que puedan mantener y evolucionar tu software.",
    icon: GraduationCap,
  },
]

const values = [
  {
    name: "Tecnología Flexible",
    description: "Adaptamos el stack tecnológico a las necesidades reales de cada proyecto.",
    icon: Blocks,
  },
  {
    name: "Entrega Ágil",
    description: "Iteraciones rápidas y feedback constante para ajustar el rumbo cuando sea necesario.",
    icon: Zap,
  },
  {
    name: "Enfoque Humano",
    description: "Entendemos que detrás de cada proyecto hay personas con sueños y objetivos.",
    icon: Users,
  },
]

export default function Features() {
  return (
    <>
      <section
        id="servicios"
        className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20 py-16 sm:py-20 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Nuestros Servicios</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Acompañamos tu proyecto en cada etapa, desde la idea inicial hasta el crecimiento.
          </p>
        </div>

        <div className="grid gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="grid gap-6 sm:gap-8 md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] items-start"
            >
              <div className="space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-primary/20">{feature.number}</div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3 pt-0 md:pt-2">
                <h3 className="text-xl sm:text-2xl font-bold">{feature.name}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Nuestra Forma de Trabajar
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Combinamos experiencia técnica con un enfoque centrado en las personas.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 sm:p-8 transition-all hover:shadow-xl hover:border-primary/50"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{value.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
