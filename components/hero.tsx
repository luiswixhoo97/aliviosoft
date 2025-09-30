import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="container max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 sm:px-4 text-xs sm:text-sm font-medium text-primary">
              Desarrollo de Software
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-balance leading-tight">
              Construimos el{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                software
              </span>{" "}
              que tu negocio necesita
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Transformamos ideas en soluciones digitales. Desarrollo, consultoría y capacitación con tecnología
              adaptada a tu proyecto.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 w-full sm:w-auto"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 text-sm sm:text-base h-11 sm:h-12 px-6 sm:px-8 hover:bg-muted bg-transparent w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Right side - Visual element */}
        <div className="relative order-first lg:order-last">
          <div className="relative aspect-square w-full max-w-[500px] lg:max-w-[600px] mx-auto">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl sm:blur-3xl" />
            <div className="relative h-full w-full rounded-2xl sm:rounded-3xl border bg-card p-6 sm:p-8 shadow-2xl">
              <div className="flex h-full flex-col justify-between">
                {/* Code snippet visualization */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-2 sm:h-3 w-20 sm:w-24 rounded bg-primary/20" />
                  <div className="h-2 sm:h-3 w-full rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-full rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-3/4 rounded bg-muted" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-2 sm:h-3 w-full rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-5/6 rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-20 sm:w-24 rounded bg-accent/20" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-2 sm:h-3 w-full rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-2/3 rounded bg-muted" />
                  <div className="h-2 sm:h-3 w-20 sm:w-24 rounded bg-secondary/20" />
                </div>
              </div>
            </div>
            {/* Floating elements - hidden on mobile for cleaner look */}
            <div className="hidden sm:block absolute -right-4 top-1/4 h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-primary shadow-lg" />
            <div className="hidden sm:block absolute -left-4 bottom-1/4 h-12 w-12 lg:h-16 lg:w-16 rounded-2xl bg-secondary shadow-lg" />
            <div className="hidden sm:block absolute right-1/4 -top-4 h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-accent shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
