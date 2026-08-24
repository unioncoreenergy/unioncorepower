import Link from 'next/link';
import { Twitter, Facebook, Linkedin, Phone, Mail } from 'lucide-react';
import { LogoMark } from './logo-mark';

const footerLinks = {
  services: [
    { label: 'My Account', href: '/dashboard' },
    { label: 'Billing & Payments', href: '/billing' },
    { label: 'Start, Stop & Move', href: '/start-stop-move' },
    { label: 'Outage Center', href: '/outage-center' },
    { label: 'Customer Service', href: '/help-support' },
  ],
  solutions: [
    { label: 'Energy Savings', href: '/about#solutions' },
    { label: 'Solar Programs', href: 'tel:+18886085436' },
    { label: 'EV Charging', href: 'tel:+18886085436' },
    { label: 'Budget Billing', href: '/billing' },
    { label: 'AutoPay', href: '/billing' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: 'tel:+18886085436' },
    { label: 'Newsroom', href: 'tel:+18886085436' },
    { label: 'Foundation', href: '/about' },
    { label: 'Clean Energy', href: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms & Conditions', href: '/legal/terms-and-conditions' },
    { label: 'Refund Policy', href: '/legal/refund-policy' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <LogoMark />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Union Core
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400">Power</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Powering communities with reliable, affordable, and clean energy since 1923.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+18886085436"
                aria-label="Twitter"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="tel:+18886085436"
                aria-label="Facebook"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="tel:+18886085436"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Services</p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Solutions</p>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Company</p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:+18886085436"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                (888) 608-5436
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                support@unioncorepower.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {year} Union Core Power. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
