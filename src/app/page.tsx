import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  CreditCard, Power, AlertTriangle, Sun, Car,
  ArrowRight, ArrowUpRight, CheckCircle, Shield,
  Zap, Leaf, TrendingDown, Users, Activity, ChevronRight,
  ShieldCheck, Sparkles, Phone, Radio, Flame, Lock
} from 'lucide-react';

/* ──────────────────────────────────
   HOME PAGE (NEW FRESH HERO IMAGE + LIGHT SUBTLE OVERLAY)
────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION — FULL-SCREEN, ACTIONS DOCKED AT THE BOTTOM ───────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden border-b border-slate-200">

        {/* Full-Bleed Motion Background: Live Energy Infrastructure Video */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center scale-105"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Brand Overlay: unified across every page hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-900/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
          <div className="absolute inset-0 grid-overlay opacity-25" />
        </div>

        {/* Left-Aligned Content, offset for the transparent fixed header */}
        <div className="relative z-10 flex-1 flex items-center container mx-auto px-4 pt-28 sm:pt-32">
          <div className="max-w-2xl flex flex-col items-start">

            {/* Live Operational Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider uppercase mb-7 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span>Intelligent Power Infrastructure &nbsp;•&nbsp; 99.98% Grid Reliability</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.03] mb-6 drop-shadow-md">
              Powering <span className="text-amber-400">What Matters</span> Most To You.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-xl mb-10 leading-relaxed font-normal drop-shadow">
              Reliable electricity, transparent billing, and clean energy solutions for over 1.2 million homes and businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 py-6 rounded-xl shadow-lg">
                <Link href="/login">
                  Access My Account
                  <ArrowRight className="ml-2.5 h-5 w-5 text-white" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-900/80 hover:bg-slate-900 text-white border border-white/30 backdrop-blur-sm font-bold text-base px-8 py-6 rounded-xl shadow-md">
                <a href="tel:+18886085436">
                  <Phone className="mr-2.5 h-4 w-4 text-amber-400" />
                  Call (888) 608-5436
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick-Action Cards docked at the hero's bottom — contained, no overlap */}
        <div className="relative z-10 container mx-auto px-4 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">

            <Link
              href="/billing"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 rounded-xl bg-primary text-white shrink-0 shadow-sm">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">Pay My Bill</p>
                <p className="text-xs text-slate-500 truncate">Fast online payment portal</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-primary transition-all shrink-0" />
            </Link>

            <Link
              href="/start-stop-move"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 rounded-xl bg-blue-600 text-white shrink-0 shadow-sm">
                <Power className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Start / Stop / Move</p>
                <p className="text-xs text-slate-500 truncate">Service address transfer</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all shrink-0" />
            </Link>

            <Link
              href="/outage-center"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0 shadow-sm">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Report an Outage</p>
                <p className="text-xs text-slate-500 truncate">Check restoration map</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition-all shrink-0" />
            </Link>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: '100+', label: 'Years of Service', sub: 'Serving communities since 1923' },
              { value: '1.2M', label: 'Customers Served', sub: 'Homes & businesses' },
              { value: '99.98%', label: 'Grid Uptime', sub: 'Top-tier reliability' },
              { value: '$30M+', label: 'Foundation Grants', sub: 'Annual community investment' },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center md:text-left">
                <p className="font-heading text-3xl font-extrabold text-slate-900">{stat.value}</p>
                <p className="text-sm font-bold text-slate-800 mt-1">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL SECTION: ENERGY SIMPLIFIED ─────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div>
              <div className="label-tag mb-4">
                <ShieldCheck className="h-4 w-4" />
                Our Commitment
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Energy, <br />
                <span className="text-primary">Simplified</span> <br />
                For Your Home.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                We believe managing your electricity should be effortless. From straightforward billing to 24/7 customer support, Union Core Power delivers transparent, dependable power every day.
              </p>
              
              <div className="space-y-3.5 mb-8">
                {[
                  { icon: Shield, text: 'Transparent rates with zero hidden fees' },
                  { icon: Activity, text: '24/7 automated & live outage monitoring' },
                  { icon: Leaf, text: 'Growing clean energy portfolio' },
                  { icon: TrendingDown, text: 'Smart-home savings & rebate programs' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-sm">
                <Link href="/help-support">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right Column (Image) */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="/2.jpg"
                alt="Union Core utility technician at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 block">Grid Operations</span>
                <p className="text-lg font-bold">Invested in Modern Energy Infrastructure</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUTAGE & SUPPORT SPLIT SECTION ───────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Outage Card */}
            <div className="p-8 md:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-6">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Outage Center
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4 text-white">Experiencing a Power Outage?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Report outages instantly online or call our 24/7 outage hotline. Track real-time restoration progress in your area.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm">
                  <Link href="/outage-center">Report Outage</Link>
                </Button>
                <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-6 py-2.5 rounded-lg">
                  <Link href="/outage-center">Outage Map</Link>
                </Button>
              </div>
            </div>

            {/* Support Card */}
            <div className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-6">
                  <CreditCard className="h-3.5 w-3.5" />
                  Billing & Account
                </div>
                <h3 className="font-heading text-3xl font-bold text-slate-900 mb-4">Need Help With Your Bill?</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Discover payment assistance programs, levelized Budget Billing, and convenient automatic payment options.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg">
                  <Link href="/billing">View Payment Options</Link>
                </Button>
                <Button asChild className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold px-6 py-2.5 rounded-lg shadow-sm">
                  <a href="tel:+18886085436">Call Billing Support</a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SUMMER SAVINGS SECTION ───────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image Col: 5 Cols */}
            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="/discover summer saving.jpg"
                alt="Energy efficient home"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-sm text-center">
                <p className="font-heading text-2xl font-extrabold text-primary">Up to 30%</p>
                <p className="text-xs font-semibold text-slate-600">Lower Energy Bills</p>
              </div>
            </div>

            {/* Content Col: 7 Cols */}
            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <Sparkles className="h-4 w-4" />
                Savings & Efficiency
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Discover Summer Savings & Smart Solutions.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                Take charge of your electricity usage. Our energy efficiency tools and smart home rebates help you cut costs while keeping your home comfortable.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Budget Billing — Flat monthly payments",
                  "AutoPay & Paperless billing discounts",
                  "Free home energy audit guides",
                  "Rebates for energy-efficient AC & heat pumps"
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{tip}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-sm">
                <Link href="/billing">
                  Learn How to Save
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ── CLEAN ENERGY (SOLAR & EV) ────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="label-tag justify-center mb-3">
              <Leaf className="h-4 w-4" />
              Sustainable Innovations
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
              Clean Energy Solutions
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Building a greener grid with renewable solar options and EV charging support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solar */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Sun className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Interested in Solar Power?</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Explore rooftop solar integration, net metering options, and community solar programs for your home.
              </p>
              <a
                href="tel:+18886085436"
                className="inline-flex items-center text-sm font-bold text-primary hover:underline"
              >
                Call for Solar Information <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* EV */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Driving an Electric Vehicle?</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Get specialized EV off-peak charging rates, home charger rebates, and public station maps.
              </p>
              <a
                href="tel:+18886085436"
                className="inline-flex items-center text-sm font-bold text-primary hover:underline"
              >
                Call for EV Rebate Info <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY STORY GRID ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="label-tag mb-3">
                <Users className="h-4 w-4" />
                Our Company
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Stories from Illumination
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center text-sm font-bold text-primary hover:underline mt-4 md:mt-0">
              View About Us <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '/1.png', title: 'Union Core Foundation', desc: 'Over $30M in annual community grants and scholarships.', href: '/about' },
              { img: '/2.jpg', title: 'Smarter Grid Investment', desc: 'Advanced sensors reducing outages across our network.', href: 'tel:+18886085436' },
              { img: '/3.jpg', title: 'Scam & Fraud Awareness', desc: 'Protecting customers from phone and billing imposter scams.', href: 'tel:+18886085436' },
              { img: '/4.webp', title: 'Clean Tech Innovations', desc: 'Delivering cleaner, smarter, and more reliable power.', href: 'tel:+18886085436' },
            ].map((story) => (
              <Link key={story.title} href={story.href} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="300px"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{story.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{story.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARD TYPE FLOATING CTA SECTION WITH PADDING ON ALL SIDES ─────────── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <Lock className="h-3.5 w-3.5 text-blue-400" />
                <span>24/7 Secure Customer Portal</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Manage Your Energy Account?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Log in to pay your bill, track consumption, update contact details, or request service changes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-9 py-6 rounded-xl shadow-lg w-full sm:w-auto">
                  <Link href="/login">
                    Access Account Portal
                    <ArrowRight className="ml-2.5 h-5 w-5 text-white" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-base px-9 py-6 rounded-xl shadow-md w-full sm:w-auto">
                  <a href="tel:+18886085436">
                    <Phone className="mr-2.5 h-4 w-4 text-amber-400" />
                    Call (888) 608-5436
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
