import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, XCircle, MapPin } from "lucide-react";
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

      {/* Optical Footprint & Transmission Grid Section (Directly Below Banner) */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-sky-100/80">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[260px] rounded-full bg-[#008FFF]/10 blur-[110px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          {/* Centered Badge, Unique Main Heading & Description */}
          <div className="flex flex-col items-center text-center mb-10 lg:mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
              <MapPin className="w-3.5 h-3.5 text-[#008FFF]" />
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                Optical Footprint &amp; Transmission Grid
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
              Nationwide Optical Backbone{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                Across Major Cities
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-medium">
              Explore {BRAND_INFO.shortName}&apos;s optical fiber transmission grid
              spanning major metropolises and dense metro fiber rings connecting
              commercial, industrial, and enterprise corridors.
            </p>
          </div>

          {/* Full-Width 3D Pakistan Optical Fiber Map Showcase */}
          <div className="max-w-6xl mx-auto relative">
            {/* Subtle Dashed Offset Optical Frame */}
            <div className="pointer-events-none absolute -inset-2.5 rounded-[34px] border-2 border-dashed border-[#008FFF]/25" />

            <div className="relative rounded-[28px] overflow-hidden border-2 border-white bg-[#050D1A] shadow-[0_24px_70px_rgba(2,132,199,0.22)]">
              {/* Top-Left Live Optical Grid Status Pill */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#031226]/80 border border-cyan-300/40 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                </span>
                <span
                  style={{ color: "#E0F2FE" }}
                  className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.16em]"
                >
                  100G Optical Transmission Grid
                </span>
              </div>

              {/* 3D Pakistan Optical Fiber Map Visual */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pakistan-optical-grid.jpg"
                alt="EARTHLINK Broadband Nationwide Optical Fiber Transmission Grid Across Pakistan Cities"
                className="w-full h-auto block object-cover"
              />
            </div>
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

      {/* Redesigned Head-to-Head Optical Benchmark Comparison */}
      <section className="relative py-16 lg:py-24 border-t border-sky-100/80 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[340px] rounded-full bg-[#008FFF]/8 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          {/* Centered Hero Badge + Eye-Catching Main Heading */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                Performance Benchmark
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
              Enterprise Optical Connectivity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                vs. Conventional Broadband
              </span>
            </h2>

            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]" />
          </div>

          {/* Desktop Column Header Row */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-stretch mb-4">
            <div className="lg:col-span-3 rounded-2xl bg-white/95 border border-sky-200/80 px-6 py-4 flex items-center shadow-xs">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#0284C7]">
                  Core Metrics
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  Benchmark Parameter
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-white/90 border border-rose-200/70 px-6 py-4 flex items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-rose-500">
                  Legacy / Shared
                </span>
                <span className="text-sm font-extrabold text-slate-800">
                  Conventional Broadband
                </span>
              </div>
              <span className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </span>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl bg-hubex-banner px-6 py-4 flex items-center justify-between gap-3 shadow-[0_14px_34px_rgba(0,143,255,0.28)] overflow-hidden">
              <div className="relative z-10">
                <span
                  style={{ color: "#38BDF8" }}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                  Carrier-Grade Advantage
                </span>
                <span
                  style={{ color: "#FFFFFF" }}
                  className="block text-sm font-extrabold mt-0.5"
                >
                  {BRAND_INFO.shortName} (Enterprise Fiber)
                </span>
              </div>
              <span
                style={{ color: "#FFFFFF" }}
                className="relative z-10 w-8 h-8 rounded-full bg-white/15 border border-cyan-300/50 flex items-center justify-center shrink-0"
              >
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Row-by-Row Interactive Comparison Cards */}
          <div className="space-y-3.5">
            {COMPARISON_TABLE_DATA.map((row, idx) => (
              <div
                key={row.feature}
                className="group grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-white border border-sky-100 hover:border-[#008FFF]/60 shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_45px_rgba(0,143,255,0.16)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Parameter Cell */}
                <div className="lg:col-span-3 px-6 py-4 sm:py-5 flex items-center gap-3.5 border-b lg:border-b-0 lg:border-r border-slate-100">
                  <span
                    style={{ color: "#FFFFFF" }}
                    className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008FFF] to-[#0284C7] font-mono text-xs font-extrabold flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,143,255,0.28)]"
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-sm sm:text-[15px] font-extrabold text-slate-900">
                    {row.feature}
                  </span>
                </div>

                {/* Conventional Broadband Cell */}
                <div className="lg:col-span-4 px-6 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 border-b lg:border-b-0 border-slate-100 bg-slate-50/40">
                  <span className="lg:hidden text-[10px] font-mono font-bold uppercase tracking-wider text-rose-500">
                    Conventional Broadband
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-rose-50 border border-rose-200/80 text-rose-500 flex items-center justify-center shrink-0">
                      <XCircle className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
                      {row.conventional}
                    </span>
                  </div>
                </div>

                {/* EARTHLINK Broadband Highlighted Advantage Cell */}
                <div className="lg:col-span-5 px-6 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 bg-gradient-to-r from-[#F0F9FF] via-[#E0F2FE]/65 to-[#F0F9FF] lg:border-l-2 lg:border-[#008FFF]">
                  <span className="lg:hidden text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                    {BRAND_INFO.shortName} (Enterprise Fiber)
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      style={{ color: "#FFFFFF" }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#008FFF] to-[#0284C7] shadow-[0_4px_12px_rgba(0,143,255,0.35)] flex items-center justify-center shrink-0"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {row.earthIBroadband}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
