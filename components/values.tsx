import { Blocks, Zap, Users } from "lucide-react"

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

export default function Values() {
  return (
    <section id="valores" className="border-y bg-muted/30 py-16 sm:py-20 md:py-24 lg:py-32">
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
              <div className="space-y-3 sm:space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
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
  )
}
