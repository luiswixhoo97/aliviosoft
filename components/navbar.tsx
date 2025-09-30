"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/alviosoft-logo-horizontal.png"
            alt="Alvio Soft"
            width={140}
            height={32}
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link href="#servicios" className="transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#proyectos" className="transition-colors hover:text-primary">
            Proyectos
          </Link>
          <Link href="#nosotros" className="transition-colors hover:text-primary">
            Nosotros
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Contáctanos
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Empecemos
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                href="#servicios"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#nosotros"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Nosotros
              </Link>
              <div className="flex flex-col space-y-3 pt-6 border-t">
                <Button variant="ghost" className="justify-start">
                  Contáctanos
                </Button>
                <Button className="bg-primary hover:bg-primary/90 justify-start">Empecemos</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
