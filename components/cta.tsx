import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-8 sm:p-10 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-[800px] text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                ¿Listo para transformar tu idea en realidad?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mx-auto max-w-[600px]">
                Conversemos sobre tu proyecto. Sin compromiso, sin presión. Solo una charla honesta sobre cómo podemos
                ayudarte a alcanzar tus objetivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 bg-transparent w-full sm:w-auto"
              >
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>Respuesta en 24h</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                <span>Consulta sin costo</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                <span>Presupuesto transparente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
