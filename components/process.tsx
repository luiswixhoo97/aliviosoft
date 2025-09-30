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
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="mx-auto max-w-[800px] text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Cómo Trabajamos</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Un proceso transparente y colaborativo, diseñado para que te sientas seguro en cada paso.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - hidden on mobile and small tablets */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-border hidden lg:block" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid gap-4 sm:gap-6 md:grid-cols-[auto_1fr] md:gap-8 lg:gap-12"
              >
                {/* Icon circle */}
                <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg shrink-0">
                  <step.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3 pb-4 sm:pb-6 lg:pb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-3xl sm:text-4xl font-bold text-muted-foreground/30">{step.number}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
