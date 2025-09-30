import { Code2, Lightbulb, GraduationCap } from "lucide-react"

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

export default function Services() {
  return (
    <section
      id="servicios"
      className="container max-w-screen-xl px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 lg:space-y-20 py-12 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Nuestros Servicios</h2>
        <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
          Acompañamos tu proyecto en cada etapa, desde la idea inicial hasta el crecimiento.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-10 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className="group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background to-muted/20 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
          >
            {/* Background decoration */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl transition-all duration-300 group-hover:scale-110" />
            

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 text-center">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">{feature.name}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover effect line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}
