import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Power, PowerOff, Truck, CheckCircle, ArrowRight,
  Phone, Calendar, MapPin, ChevronRight, Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────
   START / STOP / MOVE PAGE (NO REGIONAL ADDRESS REFERENCES)
────────────────────────────────── */
export default function StartStopMovePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">

      {/* ── HERO SECTION — LEFT-ALIGNED LAYOUT WITH DARK OVERLAY ───────── */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Moving into a modern new American home"
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
          <div className="absolute inset-0 grid-overlay opacity-25" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <Truck className="h-3.5 w-3.5 text-blue-400" />
              <span>Service Connections & Transfers</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Moving? Let's Make Energy One Less <span className="text-amber-400">Thing to Worry About.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-8 leading-relaxed">
              Starting service at a new home, stopping service when you leave, or transferring across town — Union Core Power makes service changes fast and seamless.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md">
                <a href="tel:+18886085436">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  Call to Manage Service: (888) 608-5436
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 SERVICE ACTION PANELS ────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Start Service */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Power className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Start Service</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Moving into a home in Union Core service territory? Set up your new account in minutes.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Minimum 2 business days notice',
                    'Valid government photo ID & SSN',
                    'Service address & requested start date',
                    'Refundable deposit may apply'
                  ].map((req) => (
                    <div key={req} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-sm">
                <a href="tel:+18886085436">Call to Start Service</a>
              </Button>
            </div>

            {/* Stop Service */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-6">
                  <PowerOff className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Stop Service</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Moving out of our territory? Submit your stop request to finalize your meter reading and statement.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Account number & disconnect date',
                    'Forwarding address for final bill',
                    'Automatic deposit application to bill',
                    'Final meter read on stop date'
                  ].map((req) => (
                    <div key={req} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild variant="outline" className="w-full border-slate-300 text-slate-800 hover:bg-white shadow-sm">
                <a href="tel:+18886085436">Call to Stop Service</a>
              </Button>
            </div>

            {/* Move Service */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Move / Transfer</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Relocating to a new service location? Transfer your active account seamlessly in a single call.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    'Keep your existing account history',
                    'Transfer AutoPay & Budget Billing',
                    'Coordinate stop & start dates',
                    'Zero break in electrical service'
                  ].map((req) => (
                    <div key={req} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                      <span className="text-xs text-slate-700 font-medium">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-sm">
                <a href="tel:+18886085436">Call to Move Service</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── RELEVANT SECTION WITH RESIDENTIAL HOME IMAGE ───── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image (5 cols) */}
            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
                alt="Suburban residential home getting new power connection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Service Check</span>
                <p className="text-base font-bold">Fast Address Verification</p>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <MapPin className="h-4 w-4" />
                Territory Coverage
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Not Sure If Union Core Serves Your Address?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We provide electricity service to over 1.2 million homes and businesses. Give our team a call to quickly check whether your new home falls in our service area.
              </p>

              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-900">Instant Address Verification</p>
                  <p className="text-xs text-slate-500">Live service specialists ready to check your zip code</p>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shrink-0">
                  <a href="tel:+18886085436">Call (888) 608-5436</a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="label-tag mb-4">
            <Zap className="h-4 w-4" />
            Service FAQ
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="bg-slate-50 rounded-xl border border-slate-200 px-6">
            {[
              { q: 'How far in advance should I request service?', a: 'Please notify us at least 2 business days in advance. For month-end moves, 5 business days notice is recommended.' },
              { q: 'Is there a fee to transfer my service?', a: 'There is no service transfer fee. Standard deposit requirements apply only if credit criteria change.' },
              { q: 'Can I choose my service start date?', a: 'Yes, you can schedule service activation up to 30 days in advance.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-200 last:border-b-0">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-slate-600 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
