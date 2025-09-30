import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Conversación Inicial",
    description:
      "Nos reunimos para entender tu visión, objetivos y desafíos. Sin tecnicismos innecesarios, solo una charla honesta.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Propuesta y Planificación",
    description:
      "Diseñamos una solución técnica adaptada a tu presupuesto y tiempos. Te explicamos cada decisión de forma clara.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Desarrollo Iterativo",
    description:
      "Construimos tu software en sprints cortos con entregas frecuentes. Ves el progreso y puedes ajustar el rumbo.",
    icon: Code,
  },
  {
    number: "04",
    title: "Lanzamiento y Soporte",
    description:
      "Desplegamos tu solución y te acompañamos en el lanzamiento. Seguimos disponibles para mejoras y mantenimiento.",
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Cómo Trabajamos</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Un proceso transparente y colaborativo, diseñado para que te sientas seguro en cada paso.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background to-muted/20 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl transition-all duration-300 group-hover:scale-110" />
              
              {/* Number badge */}
              <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 transition-all duration-300 group-hover:scale-110">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold leading-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
