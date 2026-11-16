import React from "react";
import type { Metadata } from "next";
import {
  Radio,
  Activity,
  Network,
  CheckCircle2,
  Target,
  Eye,
  Cpu,
  Layers,
  MapPin,
} from "lucide-react";
import {
  COMPANY_INFO,
  INFRASTRUCTURE_STATS,
  INFRASTRUCTURE_SHOWCASE,
  COMPANY_VALUES,
  CONTACT_INFO,
} from "@/data/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Optical Fiber Backbone & NOC Operations",
  description:
    "Learn about EARTH I Broadband (Pvt.) Ltd. — operating a 1,200+ km subterranean armored metro fiber-optic network, 100 Gbps optical core ring, and 24/7/365 NOC.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-10">
      {/* SAPPHIRE TWILIGHT HERO BANNER */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border border-brand_cyan/40 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand_cyan/25 blur-[110px]" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-brand_cyan/45 text-xs font-bold uppercase tracking-wider text-sky-200">
              <Radio className="w-3.5 h-3.5 text-brand_cyan animate-pulse" />
              <span>Corporate Profile &amp; Optical Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Architecting Next-Generation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand_cyan to-sky-400">
                Optical Fiber Infrastructure
              </span>
            </h1>

            <p className="text-sky-100/85 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">{COMPANY_INFO.name}</strong> is a premier enterprise broadband and ICT infrastructure provider delivering pure subterranean optical fiber connectivity, symmetrical Dedicated Internet Access (DIA), and multi-site Layer-2/Layer-3 network architectures.
            </p>
          </div>
        </div>
      </section>

      {/* VERIFIED INFRASTRUCTURE STATS */}
      <section className="px-4 sm:px-8 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFRASTRUCTURE_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl card-ice-slate p-6 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand_cyan to-brand_blue" />
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] via-brand_blue to-brand_cyan">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-[#0C223D] text-sky-200 border border-brand_cyan/40">
                  {stat.unit}
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mt-3">{stat.label}</h2>
              <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALTERNATING SECTION 1: COMPANY INTRODUCTION & SAPPHIRE BACKBONE CARD */}
      <section className="px-4 sm:px-8 py-14 bg-sapphire-section bg-tech-grid-dark text-white border-y border-sky-400/30">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
              Our Foundation &amp; Telecom Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Built From the Ground Up for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-brand_cyan">
                Enterprise Resilience
              </span>
            </h2>
            {COMPANY_INFO.introduction.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-sky-100/85 leading-relaxed">
                {para}
              </p>
            ))}
            {COMPANY_INFO.background.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-sky-100/85 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#102746]/95 border border-brand_cyan/45 p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-sky-400/20">
                <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-brand_cyan/40 flex items-center justify-center text-brand_cyan">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Optical Backbone Architecture
                  </h3>
                  <p className="text-xs text-sky-200/75">
                    Subterranean Armored Metro Ring
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-sky-100/90">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1,200+ km</strong> underground armored optical fiber core across major commercial zones.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">100 Gbps</strong> multi-ring optical core capacity with automated sub-50ms ring protection.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1:1 Uncontended</strong> symmetrical upload and download bandwidth guarantees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">24/7/365 NOC</strong> real-time optical attenuation and BGP routing telemetry.
                  </span>
                </li>
              </ul>

              <div className="pt-3 border-t border-sky-400/20">
                <p className="text-xs font-bold uppercase tracking-wider text-brand_cyan mb-2">
                  Active Commercial Fiber Corridors
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CONTACT_INFO.coverageZones.map((zone) => (
                    <span
                      key={zone}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/15 border border-sky-400/30 text-[11px] font-medium text-sky-100"
                    >
                      <MapPin className="w-3 h-3 text-brand_cyan" />
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="px-4 sm:px-8 py-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl card-ice-slate p-8 space-y-4 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#0C223D] border border-brand_cyan/40 flex items-center justify-center text-brand_cyan">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Mission</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          <div className="rounded-3xl card-ice-slate p-8 space-y-4 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#0C223D] border border-brand_cyan/40 flex items-center justify-center text-brand_cyan">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Vision</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE & NETWORK OPERATIONS SHOWCASE */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand_blue">
              <Layers className="w-4 h-4 text-brand_cyan" />
              Technical Capabilities &amp; Network Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Inside Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_blue to-brand_cyan">
                Optical &amp; NOC Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE_SHOWCASE.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl card-ice-slate p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C223D] text-sky-200 border border-brand_cyan/40">
                      {item.category}
                    </span>
                    <Activity className="w-4 h-4 text-brand_cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-sky-900/15 text-xs font-bold text-brand_blue">
                  {item.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING VALUES */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-section border border-brand_cyan/40 p-8 sm:p-12 shadow-2xl text-white">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
              Operating Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our Core Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#102746]/90 border border-sky-400/30 hover:border-brand_cyan transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-brand_cyan/35 flex items-center justify-center text-brand_cyan mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-xs text-sky-100/80 mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
