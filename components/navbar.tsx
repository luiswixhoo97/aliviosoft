"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, Facebook, Instagram } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 max-w-screen-2xl items-center justify-between px-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/alviosoft-logo-horizontal.png"
            alt="Alvio Soft"
            width={180}
            height={40}
            className="h-8 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center space-x-4 xl:space-x-6 text-sm font-medium">
          <Link href="#servicios" className="transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#valores" className="transition-colors hover:text-primary">
            Valores
          </Link>
          <Link href="#proceso" className="transition-colors hover:text-primary">
            Proceso
          </Link>
          <Link href="#tecnologias" className="transition-colors hover:text-primary">
            Tecnologías
          </Link>
          <Link href="#cta" className="transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com/alviosoft" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/alviosoft/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
            <a href="#cta">Empecemos</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                href="#servicios"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#valores"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Valores
              </Link>
              <Link
                href="#proceso"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="#tecnologias"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Tecnologías
              </Link>
              <Link
                href="#cta"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col space-y-3 pt-6 border-t">
                <div className="flex items-center space-x-4">
                  <a href="https://www.facebook.com/alviosoft" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/alviosoft/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 justify-start">
                  <a href="#cta" onClick={() => setOpen(false)}>Empecemos</a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
