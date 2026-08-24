import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, ArrowRight, Lock, CheckCircle } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";

/* ──────────────────────────────────
   LOGIN PAGE (SPECIFIC SECURE PORTAL BG)
────────────────────────────────── */
export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex flex-col justify-center py-12 px-4 font-sans">
      <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-premium-lg">
        
        {/* Left: Secure Tech Brand Panel */}
        <div className="relative p-8 md:p-12 bg-slate-950 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
              alt="Encrypted cybersecurity data infrastructure"
              fill
              className="object-cover object-center opacity-30 scale-105"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
            <div className="absolute inset-0 grid-overlay opacity-20" />
          </div>

          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-2.5 mb-10 group">
              <LogoMark />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold text-white">Union Core</span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400">Power</span>
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
              <Shield className="h-3.5 w-3.5" />
              Customer Portal
            </div>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Manage Your Energy in One Secure Place.
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Log in to view bills, enroll in AutoPay, report outages, and manage your account details securely.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "256-Bit SSL Encrypted Security",
                "Instant online bill payments",
                "24/7 outage alerts & usage tracking"
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
            <Lock className="h-3.5 w-3.5 text-primary" />
            <span>Secure Enterprise Connection</span>
          </div>
        </div>

        {/* Right: Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h1 className="font-heading text-2xl font-bold text-slate-900 mb-1">Account Sign In</h1>
            <p className="text-xs text-slate-500">Enter your credentials to access your portal.</p>
          </div>

          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-xs font-bold text-slate-700 mb-1 block">
                Email Address or Account ID
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="customer@example.com"
                required
                className="bg-slate-50 border-slate-200 text-slate-900 text-xs"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <Label htmlFor="password" className="text-xs font-bold text-slate-700">
                  Password
                </Label>
                <a href="tel:+18886085436" className="text-xs text-primary font-bold hover:underline">
                  Forgot?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="bg-slate-50 border-slate-200 text-slate-900 text-xs"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-sm py-2.5" asChild>
              <Link href="/dashboard">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500 space-y-2">
            <p>
              Don't have an online account?{" "}
              <a href="tel:+18886085436" className="text-primary font-bold hover:underline">
                Call (888) 608-5436 to Register
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
