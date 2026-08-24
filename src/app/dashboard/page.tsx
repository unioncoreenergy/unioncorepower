import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowUpRight, FileText, Settings, HelpCircle, Power, Zap, CreditCard, AlertTriangle, ArrowRight } from "lucide-react";
import EnergyUsageChart from "./components/energy-usage-chart";
import SmartRecommendations from "./components/smart-recommendations";

/* ──────────────────────────────────
   MY ACCOUNT DASHBOARD PAGE (NO REGIONAL ADDRESS REFERENCES)
────────────────────────────────── */
export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-4 sm:p-8 pt-6 bg-slate-50 min-h-screen text-slate-900 font-sans">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <div className="label-tag mb-1">
            <Zap className="h-4 w-4" />
            Account Overview
          </div>
          <h1 className="text-3xl font-heading font-bold text-slate-900">
            Welcome back, Alex
          </h1>
          <p className="text-xs text-slate-500 mt-1">Service Account ID #UC-8849201</p>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-sm">
            <Link href="/billing">Pay My Bill</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="border-slate-300 text-slate-800 hover:bg-slate-50">
            <a href="tel:+18886085436">Call Support</a>
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Balance Card */}
        <Card className="lg:col-span-2 bg-white border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Current Statement Balance
            </CardTitle>
            <CreditCard className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent className="pt-2">
            <div className="font-heading text-5xl font-extrabold text-slate-900">$145.45</div>
            <p className="text-xs font-bold text-amber-600 mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Payment due on July 31, 2024
            </p>
          </CardContent>
          <CardFooter className="pt-4 border-t border-slate-100">
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-sm">
              <Link href="/billing">
                Pay Bill Now
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Links */}
        <QuickLinkCard 
          icon={<FileText className="h-6 w-6 text-primary" />}
          title="Billing History"
          sub="View past 24 statements"
          href="/billing"
        />

        <QuickLinkCard 
          icon={<Power className="h-6 w-6 text-primary" />}
          title="Start / Stop / Move"
          sub="Transfer or update service"
          href="/start-stop-move"
        />

        <QuickLinkCard 
          icon={<AlertTriangle className="h-6 w-6 text-amber-500" />}
          title="Outage Status"
          sub="Report or track outages"
          href="/outage-center"
        />

        <QuickLinkCard 
          icon={<HelpCircle className="h-6 w-6 text-blue-600" />}
          title="Customer Support"
          sub="Mon–Fri 7am–8pm ET"
          href="/help-support"
        />

        {/* Usage Chart */}
        <Card className="lg:col-span-4 bg-white border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-heading font-bold text-slate-900">Electricity Usage Analysis</CardTitle>
            <CardDescription className="text-xs text-slate-500">Monthly kilowatt-hour (kWh) consumption over the past 6 months.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <EnergyUsageChart />
          </CardContent>
        </Card>

      </div>

      {/* Recommendations */}
      <div className="pt-4">
        <SmartRecommendations />
      </div>

    </div>
  );
}

function QuickLinkCard({ icon, title, sub, href }: { icon: React.ReactNode, title: string, sub: string, href: string }) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full bg-white hover:bg-slate-50 border-slate-200 transition-colors duration-200 shadow-sm flex flex-col justify-between">
        <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-base font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <p className="text-xs text-slate-500 mt-1">{sub}</p>
          </div>
          <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors shrink-0" />
        </CardHeader>
        <CardContent className="pt-4">
          {icon}
        </CardContent>
      </Card>
    </Link>
  );
}
