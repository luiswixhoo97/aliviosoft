import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 py-8 sm:py-10 md:flex-row md:py-12 lg:py-16">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/alviosoft-logo-icon.png"
              alt="Alvio Soft"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <h2 className="font-bold text-base sm:text-lg">Alvio Soft</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-[300px]">
            Soluciones de software creativas y a medida para emprendedores.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:gap-10 md:gap-12 sm:grid-cols-3">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium">Servicios</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="#desarrollo" className="text-muted-foreground transition-colors hover:text-primary">
                  Desarrollo
                </Link>
              </li>
              <li>
                <Link href="#consultoria" className="text-muted-foreground transition-colors hover:text-primary">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="#capacitacion" className="text-muted-foreground transition-colors hover:text-primary">
                  Capacitación
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="#nosotros" className="text-muted-foreground transition-colors hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-muted-foreground transition-colors hover:text-primary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-sm font-medium">Conecta</h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:hola@alviosoft.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://instagram.com/alviosoft"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/alviosoft"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 border-t py-6">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alvio Soft. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
