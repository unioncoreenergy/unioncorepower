import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone, Mail, MessageSquare, CreditCard, AlertTriangle,
  Power, User, ChevronRight, ArrowRight, Clock, ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────
   CUSTOMER SERVICE / HELP PAGE (SPECIFIC CALL CENTER BG HERO)
────────────────────────────────── */

const faqItems = [
  { q: 'How do I pay my bill?', a: 'You can pay online through your portal account, by calling (888) 608-5436 (24/7 automated phone line), by mail, or in person at authorized payment locations.' },
  { q: 'What should I do if my power goes out?', a: 'Check your circuit breakers first. If fine, report your outage via our Outage Center or call (888) 608-5436. Always call 911 for downed power lines.' },
  { q: 'How can I lower my monthly energy bill?', a: 'Enroll in Budget Billing for flat monthly payments, sign up for paperless & AutoPay discounts, and check for home energy efficiency rebates.' },
  { q: 'How do I start, stop, or move service?', a: 'Call us at (888) 608-5436 or visit our Start/Stop/Move page. Please give at least 2 business days notice.' },
];

export default function HelpSupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION — LEFT-ALIGNED LAYOUT WITH DARK OVERLAY ── */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.jpg"
            alt="Friendly customer service representative wearing a headset at a support desk"
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
              <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
              <span>Customer Care Center</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Let's Get Your Question <span className="text-amber-400">Answered.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-8 leading-relaxed">
              Our customer care specialists are available Mon–Fri 7am–8pm ET, with 24/7 emergency and outage coverage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="tel:+18886085436"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white text-base font-bold rounded-lg shadow-md transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                Call (888) 608-5436
              </a>
              <span className="text-xs font-bold text-slate-300">
                Mon–Fri 7am–8pm ET • Emergencies 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM & OPTIONS SPLIT WITH TEAM IMAGE ──── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Form: 7 Cols */}
            <div className="md:col-span-7">
              <div className="label-tag mb-3">
                <Mail className="h-4 w-4" />
                Send Inquiry
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Contact Customer Service</h2>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-xs font-bold text-slate-700 mb-1 block">Full Name</Label>
                    <Input id="name" placeholder="Jane Smith" className="bg-slate-50 border-slate-200 text-xs" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-bold text-slate-700 mb-1 block">Email Address</Label>
                    <Input id="email" type="email" placeholder="jane@email.com" className="bg-slate-50 border-slate-200 text-xs" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-xs font-bold text-slate-700 mb-1 block">Subject</Label>
                  <Input id="subject" placeholder="Billing or Service question" className="bg-slate-50 border-slate-200 text-xs" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs font-bold text-slate-700 mb-1 block">Message</Label>
                  <Textarea id="message" rows={4} placeholder="How can we assist you today?" className="bg-slate-50 border-slate-200 text-xs" />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-8 shadow-sm">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Support Image & Direct Phone: 5 Cols */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
                <Image
                  src="/3.jpg"
                  alt="Union Core customer support representative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Scam Prevention</span>
                  <p className="text-sm font-bold">We Never Demand Immediate Phone Payments</p>
                </div>
              </div>

              <a href="tel:+18886085436" className="p-6 rounded-xl bg-slate-900 text-white block hover:bg-slate-800 transition-all">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Direct Toll-Free Customer Line</p>
                <p className="text-2xl font-bold text-white mb-1">(888) 608-5436</p>
                <p className="text-xs text-slate-400">Available Mon–Fri 7am–8pm ET • Outages 24/7</p>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="label-tag mb-4">
            <MessageSquare className="h-4 w-4" />
            Support FAQ
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="bg-white rounded-xl border border-slate-200 px-6">
            {faqItems.map((item, i) => (
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
