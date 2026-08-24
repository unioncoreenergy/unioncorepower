import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertTriangle, CheckCircle, Phone, Shield,
  Zap, Clock, ArrowRight, Users, Activity, Battery
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────
   OUTAGE CENTER PAGE (NO REGIONAL ADDRESS REFERENCES)
────────────────────────────────── */
export default function OutageCenterPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HERO SECTION — CENTERED LAYOUT, NO IMAGE ─────────── */}
      <section className="relative min-h-[88vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 grid-overlay opacity-30" />

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-6">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>Outage Response & Grid Telemetry</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              When Power Outages Happen, <span className="text-amber-400">We Respond 24/7.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Report outages instantly, track real-time grid status, and view estimated restoration times. Dispatch crews are on call around the clock.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-md">
                <a href="tel:+18886085436">
                  <Phone className="mr-2 h-4 w-4 text-amber-400" />
                  Call 24/7 Outage Hotline: (888) 608-5436
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS STATS BAR ───────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, label: 'Customers Affected', value: '1,245', note: 'Active outages', color: 'text-amber-600' },
              { icon: AlertTriangle, label: 'Active Outage Events', value: '15', note: 'Across service territory', color: 'text-red-600' },
              { icon: CheckCircle, label: 'Restored (24h)', value: '8,932', note: 'Back online in last 24h', color: 'text-emerald-600' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className={`p-3 rounded-lg bg-slate-50 border border-slate-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-heading text-3xl font-extrabold text-slate-900">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-800">{stat.label}</p>
                  <p className="text-xs text-slate-500">{stat.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPORT FORM & MAP SPLIT ──────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Form: 2 Cols */}
            <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="label-tag mb-3">
                <AlertTriangle className="h-4 w-4" />
                Report Online
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Report an Outage</h2>
              <p className="text-xs text-slate-600 mb-6">
                Enter your service details to alert our dispatch team immediately.
              </p>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="address" className="text-xs font-bold text-slate-700 mb-1 block">Service Address</Label>
                  <Input id="address" placeholder="Your Service Address" className="bg-white border-slate-200 text-xs" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs font-bold text-slate-700 mb-1 block">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 000-0000" className="bg-white border-slate-200 text-xs" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-sm">
                  Submit Outage Report
                </Button>
                <Button asChild variant="outline" className="w-full border-slate-300 text-slate-800 hover:bg-white text-xs">
                  <a href="tel:+18886085436">Or Call (888) 608-5436</a>
                </Button>
              </form>
            </div>

            {/* Map & Field Crew Image: 3 Cols */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <div className="label-tag mb-2">
                  <Activity className="h-4 w-4" />
                  Live Grid Tracking
                </div>
                <h2 className="font-heading text-2xl font-bold text-slate-900">Interactive Outage Map</h2>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
                <Image
                  src="/hero-outage.jpg"
                  alt="City outage map telemetry visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">GIS Grid Monitoring</p>
                    <p className="text-sm font-bold">Real-Time Regional Power Status</p>
                  </div>
                  <span className="text-[11px] bg-emerald-500 text-white px-3 py-1 rounded-full font-bold">Updated Live</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RELEVANT SECTION WITH LINE WORKER IMAGE ────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image (5 cols) */}
            <div className="md:col-span-5 relative h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-premium">
              <Image
                src="/2.jpg"
                alt="Union Core power line workers restoring service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Restoration Crews</span>
                <p className="text-base font-bold">On Call 24 Hours A Day, 365 Days A Year</p>
              </div>
            </div>

            {/* Safety Guidance (7 cols) */}
            <div className="md:col-span-7">
              <div className="label-tag mb-4">
                <Shield className="h-4 w-4" />
                Safety Guidance
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Emergency Outage Safety</h2>
              
              <div className="space-y-4">
                {[
                  { title: 'Downed Power Lines', desc: 'Stay at least 35 feet away from any downed wire. Always assume downed lines are live and fatal. Call 911 immediately.' },
                  { title: 'Generator Safety', desc: 'Never operate portable fuel generators inside a home, garage, or enclosed space. Keep generators outdoors at least 20 feet from windows.' },
                  { title: 'Food Preservation', desc: 'Keep refrigerator and freezer doors closed. A sealed refrigerator keeps food cold for 4 hours; a full freezer maintains temperature for 48 hours.' },
                ].map((tip) => (
                  <div key={tip.title} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">{tip.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
