import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap, Heart, Shield, Award, Leaf, Users, ArrowRight, Phone, CheckCircle, TrendingUp
} from "lucide-react";

/* ──────────────────────────────────
   ABOUT PAGE (NO REGIONAL ADDRESS REFERENCES)
────────────────────────────────── */
export default function AboutUsPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">

      {/* ── HERO SECTION — LEFT-ALIGNED LAYOUT WITH DARK OVERLAY ────────────────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/savings-and-soolutions.png"
            alt="Clean renewable wind turbines and solar power infrastructure"
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
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>Our Century of Progress</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              100 Years of Keeping Communities <span className="text-amber-400">Powered Forward.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mb-8 leading-relaxed">
              Founded in 1923, Union Core Power has grown alongside the communities we serve — evolving into a modern energy leader dedicated to reliability and clean innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md">
                <Link href="/help-support">Contact Customer Care</Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-900/90 hover:bg-slate-900 text-white border border-slate-700 font-bold px-8 shadow-md">
                <a href="tel:+18886085436">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  Call (888) 608-5436
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "1923", label: "Year Founded", sub: "100+ years of trust" },
              { value: "1.2M+", label: "Customers Served", sub: "Homes & businesses" },
              { value: "$30M+", label: "Community Support", sub: "Annual foundation grants" },
              { value: "99.98%", label: "Grid Uptime", sub: "Top tier US reliability" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 md:p-6 text-center md:text-left">
                <p className="font-heading text-3xl font-extrabold text-slate-900">{stat.value}</p>
                <p className="text-sm font-bold text-slate-800 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION WITH FIELD OPERATOR IMAGE ─────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-7">
              <div className="label-tag mb-3">
                <Shield className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Powering Communities with Integrity & Purpose
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                At Union Core Power, our mission is to deliver safe, reliable, and affordable power while advancing clean energy technologies for future generations.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We invest heavily in smart grid automation, battery storage, and local renewable solar developments to keep energy costs predictable.
              </p>

              <div className="space-y-2.5">
                {[
                  "24/7 dedicated grid monitoring and field dispatch",
                  "Investing in resilient intelligent power infrastructure",
                  "Active carbon-reduction & clean energy transition",
                  "Unwavering commitment to safety and customer support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="/2.jpg"
                alt="Union Core line technician"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── COMMUNITY GIVING WITH FOUNDATION IMAGE ────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium order-last md:order-first">
              <Image
                src="/1.png"
                alt="Union Core Foundation community giving"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Union Core Foundation</span>
                <p className="text-base font-bold">Over $30 Million Donated Annually</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <Heart className="h-4 w-4" />
                Community Impact
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Investing In The Communities We Call Home
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Through the Union Core Foundation, we support non-profit organizations, STEM education scholarships, and emergency aid funds.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: "STEM & Trade Scholarships", desc: "Supporting next-generation electrical engineers and utility technicians." },
                  { title: "Local Conservation", desc: "Partnering with forestry initiatives to protect natural habitats." },
                  { title: "Emergency Heating & Cooling Aid", desc: "Ensuring vulnerable senior citizens stay safe in extreme weather." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <div className="label-tag mb-2">
              <TrendingUp className="h-4 w-4" />
              Historical Milestones
            </div>
            <h2 className="font-heading text-3xl font-bold text-slate-900">A Century of Growth</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "1923", title: "Founded", desc: "Established to bring electricity to growing agricultural communities." },
              { year: "1970", title: "Grid Integration", desc: "Expanded high-voltage transmission lines to over 250,000 customers." },
              { year: "2010", title: "Smart Metering", desc: "Deployed digital meters and automatic fault-detection technology." },
              { year: "2024+", title: "Clean Energy Era", desc: "Accelerating solar grid integration and electric vehicle infrastructure." },
            ].map((milestone) => (
              <div key={milestone.year} className="p-6 rounded-xl bg-white border border-slate-200">
                <span className="font-heading text-3xl font-extrabold text-primary">{milestone.year}</span>
                <h4 className="font-heading text-base font-bold text-slate-900 mt-2 mb-1">{milestone.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
