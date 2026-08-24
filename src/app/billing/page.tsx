import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CreditCard, Smartphone, Calendar, Phone, Building,
  Mail, Download, Calculator, Shield, ArrowRight, CheckCircle, Zap, ChevronRight, Lock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────
   BILLING & PAYMENTS PAGE (SUBTLE LIGHT OVERLAY)
────────────────────────────────── */
export default function BillingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION — LEFT-ALIGNED LAYOUT WITH DARK OVERLAY ───────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/payment-and-billings.png"
            alt="Person securely paying a bill online with a credit card and laptop"
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
          <div className="absolute inset-0 grid-overlay opacity-25" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-6">
              <CreditCard className="h-3.5 w-3.5 text-amber-400" />
              <span>Billing & Payments Portal</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Your Energy. Your Account. <span className="text-amber-400">Your Way.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 max-w-xl mb-8 leading-relaxed drop-shadow">
              Manage your monthly electric statement, choose from 6 secure payment methods, or set up automated Budget Billing in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md">
                <Link href="/login">Access Account Portal</Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-900/80 hover:bg-slate-900 text-white border border-white/30 backdrop-blur-sm font-bold px-8 shadow-md">
                <a href="tel:+18886085436">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  Call Pay-by-Phone: (888) 608-5436
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT METHODS GRID ────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="label-tag mb-2">
                <Zap className="h-4 w-4" />
                Payment Channels
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-900">
                6 Convenient Ways to Pay
              </h2>
            </div>
            <p className="text-xs font-semibold text-slate-500 max-w-xs mt-2 md:mt-0">
              All payment methods are encrypted with 256-bit SSL security.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: CreditCard, label: 'Pay Online', sub: 'Credit, debit, or bank', href: '/login' },
              { icon: Smartphone, label: 'Mobile App', sub: 'Quick payment on go', href: 'tel:+18886085436' },
              { icon: Calendar, label: 'AutoPay', sub: 'Never miss due date', href: 'tel:+18886085436' },
              { icon: Phone, label: 'By Phone', sub: '24/7 automated line', href: 'tel:+18886085436' },
              { icon: Building, label: 'In Person', sub: 'Authorized centers', href: 'tel:+18886085436' },
              { icon: Mail, label: 'By Mail', sub: 'Check or money order', href: 'tel:+18886085436' },
            ].map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <method.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-slate-900 mb-1">{method.label}</p>
                <p className="text-xs text-slate-500">{method.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BILLING FEATURES WITH RELEVANT IMAGE ──────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left: Feature List (7 cols) */}
            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <Calculator className="h-4 w-4" />
                Account Flexibility
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Billing Features Designed Around You
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Mail, title: 'Paperless e-Bills', desc: 'Receive digital statements via email. Access past invoices 24/7.' },
                  { icon: Calculator, title: 'Budget Billing Plan', desc: 'Eliminate winter & summer bill spikes with fixed monthly payments.' },
                  { icon: Download, title: '24-Month Statements', desc: 'Download PDF tax records and export usage breakdown data.' },
                  { icon: Calendar, title: 'Custom Due Dates', desc: 'Align your payment due date with your monthly paycheck schedule.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Relevant Image Card (5 cols) */}
            <div className="md:col-span-5 relative h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                alt="Digital billing tablet and paperless accounting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Paperless Portal</span>
                <p className="text-base font-bold">100% Secure Digital Invoicing</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PAYMENT ASSISTANCE WITH FAMILY HOME IMAGE ─────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image (5 cols) */}
            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium order-last md:order-first">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Comfortable American family home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Customer Relief</span>
                <p className="text-base font-bold">Keeping Every Home Warm & Powered</p>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <Shield className="h-4 w-4" />
                Payment Assistance
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Facing Financial Hardship? We're Here to Help.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Union Core Power provides payment extensions, levelized bill arrangements, and direct connection to state emergency aid programs (LIEAP).
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Low Income Energy Assistance Program (LIEAP) application support",
                  "Medical Baseline rate discounts for qualified equipment",
                  "Flexible payment arrangement options prior to due date",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 shadow-sm">
                <a href="tel:+18886085436">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  Call Assistance Hotline (888) 608-5436
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="label-tag mb-4">
            <Zap className="h-4 w-4" />
            Billing FAQ
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="bg-white rounded-xl border border-slate-200 px-6">
            {[
              { q: 'When is my payment due?', a: 'Due dates are printed on your monthly statement, typically 21 days after billing cycle close. You can also view due dates anytime in your online portal.' },
              { q: 'How do I set up AutoPay?', a: 'Log in to your account or call (888) 608-5436 to link your checking account or credit card for automatic monthly payments.' },
              { q: 'What if I cannot pay by the due date?', a: 'Contact us before your due date. We offer payment extensions and customized payment plans to prevent service interruption.' },
              { q: 'Why did my bill increase this month?', a: 'Weather extremes (summer AC or winter heat) are the most common cause. Log in to compare your monthly kWh consumption history.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-100 last:border-b-0">
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
