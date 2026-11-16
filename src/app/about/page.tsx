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
      {/* LOGO JET-BLACK & CYAN HERO BANNER */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border-2 border-[#19A2E6]/50 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#19A2E6]/25 blur-[110px]" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <Radio className="w-3.5 h-3.5 text-[#19A2E6] animate-pulse" />
              <span>Corporate Profile &amp; Optical Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Architecting Next-Generation{" "}
              <span className="text-[#19A2E6]">
                Optical Fiber Infrastructure
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
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
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0B0D10]">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                  {stat.unit}
                </span>
              </div>
              <h2 className="text-base font-bold text-[#0B0D10] mt-3">{stat.label}</h2>
              <p className="text-xs text-[#757679] mt-1.5 leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALTERNATING SECTION 1: COMPANY INTRODUCTION & CARBON BACKBONE CARD */}
      <section className="px-4 sm:px-8 py-14 bg-sapphire-section bg-tech-grid-dark text-white border-y-2 border-[#19A2E6]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Our Foundation &amp; Telecom Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Built From the Ground Up for{" "}
              <span className="text-[#19A2E6]">
                Enterprise Resilience
              </span>
            </h2>
            {COMPANY_INFO.introduction.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {para}
              </p>
            ))}
            {COMPANY_INFO.background.map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#141820] border-2 border-[#19A2E6]/50 p-6 sm:p-8 space-y-5 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
                <div className="w-11 h-11 rounded-xl bg-[#0B0D10] border border-[#19A2E6]/50 flex items-center justify-center text-[#19A2E6]">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Optical Backbone Architecture
                  </h3>
                  <p className="text-xs text-[#757679]">
                    Subterranean Armored Metro Ring
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1,200+ km</strong> underground armored optical fiber core across major commercial zones.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">100 Gbps</strong> multi-ring optical core capacity with automated sub-50ms ring protection.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1:1 Uncontended</strong> symmetrical upload and download bandwidth guarantees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">24/7/365 NOC</strong> real-time optical attenuation and BGP routing telemetry.
                  </span>
                </li>
              </ul>

              <div className="pt-3 border-t border-neutral-800">
                <p className="text-xs font-bold uppercase tracking-wider text-[#19A2E6] mb-2">
                  Active Commercial Fiber Corridors
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CONTACT_INFO.coverageZones.map((zone) => (
                    <span
                      key={zone}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0B0D10] border border-neutral-700 text-[11px] font-medium text-neutral-300"
                    >
                      <MapPin className="w-3 h-3 text-[#19A2E6]" />
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
          <div className="rounded-3xl card-ice-slate p-8 space-y-4 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="w-1/3 bg-[#0B0D10]" />
              <div className="w-2/3 bg-[#19A2E6]" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#0B0D10] border border-[#19A2E6]/50 flex items-center justify-center text-[#19A2E6]">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B0D10]">Our Mission</h2>
            <p className="text-sm sm:text-base text-[#757679] font-medium leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          <div className="rounded-3xl card-ice-slate p-8 space-y-4 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="w-1/3 bg-[#0B0D10]" />
              <div className="w-2/3 bg-[#19A2E6]" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#0B0D10] border border-[#19A2E6]/50 flex items-center justify-center text-[#19A2E6]">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B0D10]">Our Vision</h2>
            <p className="text-sm sm:text-base text-[#757679] font-medium leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE & NETWORK OPERATIONS SHOWCASE */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B0D10]">
              <Layers className="w-4 h-4 text-[#19A2E6]" />
              Technical Capabilities &amp; Network Operations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D10]">
              Inside Our{" "}
              <span className="text-[#19A2E6]">
                Optical &amp; NOC Infrastructure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE_SHOWCASE.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl card-ice-slate p-6 flex flex-col justify-between transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-1/3 bg-[#0B0D10]" />
                  <div className="w-2/3 bg-[#19A2E6]" />
                </div>
                <div className="pt-1">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                      {item.category}
                    </span>
                    <Activity className="w-4 h-4 text-[#19A2E6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0D10]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#757679] font-medium mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-bold text-[#19A2E6]">
                  {item.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE ENGINEERING VALUES */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-section border-2 border-[#19A2E6]/50 p-8 sm:p-12 shadow-2xl text-white">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
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
                className="p-5 rounded-2xl bg-[#141820] border border-neutral-800 hover:border-[#19A2E6] transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0B0D10] border border-[#19A2E6]/45 flex items-center justify-center text-[#19A2E6] mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
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
