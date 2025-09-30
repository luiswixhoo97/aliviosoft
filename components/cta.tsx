"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get('nombre') as string
    const servicio = formData.get('servicio') as string
    const proyecto = formData.get('proyecto') as string
    
    // Mapear valores del servicio
    const servicioMap: { [key: string]: string } = {
      'desarrollo': 'Desarrollo de Software',
      'consultoria': 'Consultoría Tecnológica',
      'capacitacion': 'Capacitación'
    }
    
    const servicioTexto = servicioMap[servicio] || servicio
    
    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Me interesa trabajar con AlvioSoft.

📋 *Información del cliente:*
• Nombre: ${nombre}
• Servicio de interés: ${servicioTexto}
• Descripción del proyecto: ${proyecto}

¿Podrían contactarme para más detalles?`
    
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje)
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/523312441250?text=${mensajeCodificado}`
    window.open(whatsappUrl, '_blank')
  }
  return (
    <section id="cta" className="py-12 sm:py-20 md:py-24 lg:py-32">
      <div className="container max-w-screen-xl px-3 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 p-6 sm:p-10 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute right-0 top-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                  ¿Listo para transformar tu idea en realidad?
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
                  Conversemos sobre tu proyecto. Sin compromiso, sin presión. Solo una charla honesta sobre cómo podemos
                  ayudarte a alcanzar tus objetivos.
                </p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-sm font-medium">
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    className="h-10 sm:h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="servicio" className="text-sm font-medium">
                    Servicio de interés
                  </Label>
                  <Select name="servicio" required>
                    <SelectTrigger className="h-10 sm:h-11">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="desarrollo">Desarrollo de Software</SelectItem>
                      <SelectItem value="consultoria">Consultoría Tecnológica</SelectItem>
                      <SelectItem value="capacitacion">Capacitación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="proyecto" className="text-sm font-medium">
                    Describe tu proyecto
                  </Label>
                  <Textarea
                    id="proyecto"
                    name="proyecto"
                    placeholder="Cuéntanos sobre tu idea, objetivos, tecnologías que te interesan o cualquier detalle que consideres relevante..."
                    className="min-h-[100px] resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base h-10 sm:h-12"
                >
                  Enviar por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </form>
            </div>
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
    </section>
  )
}
