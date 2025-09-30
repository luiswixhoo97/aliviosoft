import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TechStack from "@/components/tech-stack"
import Process from "@/components/process"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Services from "@/components/services"
import Values from "@/components/values"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>

      <Navbar />
      <Hero />
      <Services/>
      <Values/>
      <CTA />
      <Process />
      <TechStack />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
