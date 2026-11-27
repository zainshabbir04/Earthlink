import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import {
  BRAND_INFO,
  WHY_CHOOSE_US_ADVANTAGES,
  COMPARISON_TABLE_DATA,
} from "@/data/siteData";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Choose Us — The EARTHLINK Broadband Optical Advantage",
  description:
    "Discover why enterprises choose EARTHLINK Broadband: 100% subterranean optical fiber, 1:1 symmetrical speeds, <50ms ring failover, zero FUP, and 24/7 NOC support.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Full-Width Why Choose Us Hero Image Banner (Hero Badge + Main Heading Only — Subheading Removed) */}
      <section className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] flex items-center">
        {/* Background Why Choose Us Banner Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/why-choose-us-hero-banner.jpg"
          alt="EARTHLINK Broadband Carrier-Grade Optical Fiber & Security Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Deep Dark-Navy Top & Left Scrims for Crystal-Clear Navbar & Hero Heading Visibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020812]/90 via-[#020812]/58 to-[#020812]/20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020812]/90 via-[#020812]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020812]/45 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2.5 bg-[#031226]/80 border border-cyan-300/50 backdrop-blur-md shadow-[0_6px_24px_rgba(0,143,255,0.28)] rounded-full px-4 py-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300" />
              </span>
              <span
                style={{ color: "#FFFFFF" }}
                className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em]"
              >
                The {BRAND_INFO.shortName} Advantage
              </span>
            </div>

            <h1
              style={{ color: "#FFFFFF" }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-normal leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
            >
              Carrier-Grade{" "}
              <span style={{ color: "#38BDF8" }}>Optical Engineering</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Six Technical Differentiators (Redesigned Dual-Tone Optical Telemetry Cards) */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Soft Ambient Optical Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[#008FFF]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[380px] h-[380px] rounded-full bg-[#06B6D4]/10 blur-[110px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          {/* Centered Hero Badge + Eye-Catching Main Heading */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                Why {BRAND_INFO.shortName}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
              Engineered Beyond{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                Ordinary Broadband
              </span>
            </h2>

            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]" />
          </div>

          {/* 6 Dual-Tone Optical Engineering Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {WHY_CHOOSE_US_ADVANTAGES.map((adv, idx) => (
              <div
                key={adv.id}
                className="group relative flex flex-col rounded-[26px] bg-white border border-sky-100 hover:border-[#008FFF]/60 shadow-[0_14px_38px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_60px_rgba(0,143,255,0.2)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Top Deep-Navy Optical Telemetry Header Strip */}
                <div className="relative bg-hubex-banner px-6 py-5 overflow-hidden">
                  {/* Subtle Watermark Index */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute -right-1 -bottom-3 text-[78px] font-black leading-none text-white/[0.08] font-mono"
                  >
                    0{idx + 1}
                  </span>

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div
                      style={{ color: "#FFFFFF" }}
                      className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center shadow-[0_8px_20px_rgba(0,143,255,0.3)] group-hover:scale-110 group-hover:bg-[#008FFF] group-hover:border-cyan-300/60 transition-all duration-300"
                    >
                      <ServiceIcon name={adv.iconName} className="w-5 h-5" />
                    </div>

                    <div className="text-right">
                      <span
                        style={{ color: "#BAE6FD" }}
                        className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em]"
                      >
                        Pillar 0{idx + 1}
                      </span>
                      <span
                        style={{ color: "#FFFFFF" }}
                        className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full bg-white/15 border border-cyan-300/40 backdrop-blur-sm text-xs font-mono font-extrabold shadow-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                        {adv.highlightMetric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Crisp White Card Body */}
                <div className="flex-1 flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0284C7] mb-2">
                      {adv.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-[19px] font-extrabold text-slate-900 group-hover:text-[#008FFF] transition-colors leading-snug mb-2.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-medium">
                      {adv.description}
                    </p>
                  </div>

                  {/* Animated Bottom Optical Signal Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="h-1.5 w-14 group-hover:w-full rounded-full bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4] transition-all duration-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#008FFF] shrink-0 transition-colors">
                      Verified SLA
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Comparison Matrix */}
      <section className="py-12 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand_cyan mb-6">
            Enterprise Optical Fiber vs. Conventional Broadband
          </h2>

          <div className="bg-[#000000] rounded-2xl border border-[#272727] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D0D0D] border-b border-[#272727] text-white">
                    <th className="py-3.5 px-5 text-xs font-mono uppercase tracking-wider text-[#9C9C9C]">
                      Parameter
                    </th>
                    <th className="py-3.5 px-5 text-xs font-mono uppercase tracking-wider text-[#9C9C9C]">
                      Conventional Broadband
                    </th>
                    <th className="py-3.5 px-5 text-xs font-mono uppercase tracking-wider text-brand_cyan bg-[#1591EE15]">
                      {BRAND_INFO.shortName} (Enterprise Fiber)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a] text-xs sm:text-sm">
                  {COMPARISON_TABLE_DATA.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-[#0A0A0A] transition-colors"
                    >
                      <td className="py-3.5 px-5 font-semibold text-white">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-5 text-[#9C9C9C]">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                          <span>{row.conventional}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 bg-[#1591EE08] font-medium text-white">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0" />
                          <span>{row.earthIBroadband}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
