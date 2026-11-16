import React from "react";
import type { Metadata } from "next";
import { Users, Cpu, Radio, ShieldCheck } from "lucide-react";
import CareersInteractive from "@/components/CareersInteractive";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Careers | Join Our Optical Fiber & NOC Engineering Teams",
  description:
    "Explore career opportunities at EARTH I Broadband (Pvt.) Ltd. across Network Operations (NOC), Outside Plant (OSP) Fiber Engineering, Enterprise B2B Connectivity, and Managed IT.",
};

export default function CareersPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      {/* SAPPHIRE TWILIGHT HERO BANNER */}
      <section className="px-4 sm:px-8 pb-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border border-brand_cyan/40 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand_cyan/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-brand_cyan/45 text-xs font-bold uppercase tracking-wider text-sky-200">
              <Users className="w-3.5 h-3.5 text-brand_cyan" />
              <span>Careers at EARTH I Broadband</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Build the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand_cyan to-sky-400">
                Enterprise Fiber Telecommunications
              </span>
            </h1>
            <p className="text-sky-100/85 text-base sm:text-lg leading-relaxed">
              At <strong className="text-white">{COMPANY_INFO.name}</strong>, our network engineers, fiber splicing specialists, and enterprise solution architects design and maintain mission-critical optical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ENGINEERING CULTURE HIGHLIGHTS */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl card-ice-slate p-6">
            <Radio className="w-6 h-6 text-brand_cyan mb-3" />
            <h2 className="text-base font-bold text-slate-900">
              Carrier-Grade Optical Engineering
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
              Work hands-on with 100 Gbps metro optical rings, multi-homed BGP routing, MPLS traffic engineering, and subterranean armored fiber networks.
            </p>
          </div>
          <div className="rounded-2xl card-ice-slate p-6">
            <Cpu className="w-6 h-6 text-brand_cyan mb-3" />
            <h2 className="text-base font-bold text-slate-900">
              24/7/365 NOC &amp; SOC Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
              Collaborate inside a real-time telemetry environment monitoring optical attenuation, automated ring failovers, and enterprise firewall security.
            </p>
          </div>
          <div className="rounded-2xl card-ice-slate p-6">
            <ShieldCheck className="w-6 h-6 text-brand_cyan mb-3" />
            <h2 className="text-base font-bold text-slate-900">
              Merit-Driven Technical Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
              Advance your career across IP core routing, outside plant GIS planning, cloud virtualization, and B2B enterprise consulting.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CAREER TRACKS & APPLICATION FORM */}
      <section className="px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <CareersInteractive />
        </div>
      </section>
    </div>
  );
}
