'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { LogoMark } from './logo-mark';

const navLinks = [
  { name: 'My Account', href: '/dashboard' },
  { name: 'Billing & Payments', href: '/billing' },
  { name: 'Savings & Solutions', href: '/about#solutions' },
  { name: 'Start, Stop & Move', href: '/start-stop-move' },
  { name: 'Outages', href: '/outage-center' },
  { name: 'Customer Service', href: '/help-support' },
];

// Routes whose hero section is a full-bleed dark background —
// the header floats transparently over these until the user scrolls.
const heroRoutes = ['/', '/billing', '/about', '/start-stop-move', '/outage-center', '/help-support'];

function Logo({ className, dark = true }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <LogoMark className="group-hover:scale-105 transition-transform duration-200" />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-xl font-bold tracking-tight transition-colors duration-200",
            dark ? "text-slate-900 group-hover:text-primary" : "text-white group-hover:text-amber-300"
          )}
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Union Core
        </span>
        <span className={cn("text-[10px] font-semibold tracking-widest uppercase", dark ? "text-slate-500" : "text-slate-200")}>
          Power
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHeroRoute = heroRoutes.includes(pathname);
  const transparent = isHeroRoute && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-all duration-300",
        isHeroRoute ? "fixed" : "sticky",
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-4">
        {/* Logo */}
        <Logo dark={!transparent} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3.5 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap relative group",
                transparent ? "text-white hover:text-amber-300" : "text-slate-700 hover:text-primary"
              )}
            >
              {link.name}
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18886085436"
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200",
              transparent ? "text-white hover:text-amber-300" : "text-slate-700 hover:text-primary"
            )}
          >
            <Phone className={cn("h-3.5 w-3.5", transparent ? "text-amber-400" : "text-primary")} />
            <span>(888) 608-5436</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5 shadow-sm transition-all duration-200"
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden hover:bg-white/10", transparent ? "text-white" : "text-slate-900 hover:bg-slate-100")}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white border-slate-200 w-80 p-0"
          >
            <div className="flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <Logo />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-500"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile nav links */}
              <nav className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-6 py-3.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors duration-150 group"
                  >
                    {link.name}
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </Link>
                ))}
              </nav>

              {/* Mobile footer */}
              <div className="px-6 py-4 border-t border-slate-100 space-y-3 bg-slate-50">
                <a
                  href="tel:+18886085436"
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  (888) 608-5436
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm">
                  <Link href="/login" onClick={() => setMobileOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
