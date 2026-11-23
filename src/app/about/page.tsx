import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Cpu,
  Network,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — Corporate Profile & Optical Infrastructure",
  description:
    "Learn about EARTHLINK Broadband (Pvt.) Ltd., our 1,200+ km subterranean armored metro fiber network, 100G optical core ring, and 24/7/365 NOC operations.",
};

const CORE_VALUES = [
  {
    title: "Carrier-Grade Reliability",
    description: "1:1 uncontended symmetrical bandwidth backed by dual-path self-healing optical rings.",
  },
  {
    title: "Technical Precision",
    description: "Deep-trench armored conduits, precision fusion splicing, and multi-terabit core routing.",
  },
  {
    title: "24/7/365 Proactive NOC",
    description: "Continuous optical telemetry with automated OTDR fault pinpointing and <15m response.",
  },
  {
    title: "Zero-Compromise SLA",
    description: "No Fair Usage Policies (FUP), no peak-hour throttling, and 99.99% contractual uptime.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Full-Width About Us Hero Image Banner */}
      <section className="relative w-full overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[550px] flex items-center">
        {/* Background Hero Image (Subtle Blur + Slight Scale to Prevent Edge Bleed) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about-hero-banner.jpg"
          alt="EARTHLINK Broadband Optical Fiber & Telecom Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-[1.03]"
        />

        {/* Deep Dark-Navy Scrims so Navbar Logo, Links & Hero Text Are 100% Razor-Sharp */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020812]/95 via-[#020812]/82 to-[#020812]/45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020812]/92 via-[#020812]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020812]/55 to-transparent" />

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
                Corporate Profile · {BRAND_INFO.companyName}
              </span>
            </div>
            <h1
              style={{ color: "#FFFFFF" }}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black tracking-normal leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
            >
              Engineering the{" "}
              <span style={{ color: "#38BDF8" }}>Subterranean Optical</span>{" "}
              Backbone
            </h1>
            <p
              style={{ color: "#F0F9FF" }}
              className="text-base sm:text-[17px] font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
            >
              {BRAND_INFO.companyIntroduction}
            </p>
          </div>
        </div>
      </section>

      {/* Unique "Our Company — Who We Are" Editorial Showcase Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#008FFF]/10 blur-[130px]" />

        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Clean Layered Architectural Image Frame (No Overlays or Headings on Image) */}
            <div className="lg:col-span-6 relative group">
              {/* Decorative Offset Dashed Optical Frame */}
              <div className="pointer-events-none absolute -inset-3 rounded-[30px] border-2 border-dashed border-[#008FFF]/30 transition-transform duration-500 group-hover:scale-[1.01]" />
              <div className="pointer-events-none absolute -bottom-5 -left-5 w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#008FFF]/25 to-[#06B6D4]/15 blur-xl" />

              {/* Main Rounded Showcase Image */}
              <div className="relative rounded-[26px] overflow-hidden border-2 border-white shadow-[0_24px_60px_rgba(2,132,199,0.22)] aspect-[4/3] bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-who-we-are.jpg"
                  alt="EARTHLINK Broadband Enterprise Optical Fiber & Data Center Operations"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: "Our Company / Who We Are" Editorial Content */}
            <div className="lg:col-span-6 space-y-5 pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                  Our Company
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-normal text-slate-900 leading-tight">
                Who{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                  We Are
                </span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {BRAND_INFO.companyIntroduction}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {BRAND_INFO.companyBackground}
              </p>

              {/* 3 Crisp Enterprise Highlights */}
              <div className="pt-2 space-y-3">
                {[
                  {
                    title: "100% Subterranean Armored Optical Fiber",
                    desc: "Over 1,200+ km of deep-trench metro fiber connecting commercial and industrial corridors.",
                  },
                  {
                    title: "Uncontended 1:1 Symmetrical Connectivity",
                    desc: "Dedicated Internet Access (DIA) and private MPLS rings with <50ms self-healing failover.",
                  },
                  {
                    title: "Proactive 24/7/365 NOC Engineering",
                    desc: "Live OTDR telemetry monitoring and <15m incident response backed by a 99.99% uptime SLA.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-sky-100 hover:border-[#008FFF]/45 shadow-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#008FFF]/10 text-[#008FFF] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-12 lg:py-16 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-[#000000] border border-[#272727] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-[#9C9C9C] text-sm leading-relaxed">
                {BRAND_INFO.mission}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#000000] border border-[#1A545E] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-[#9C9C9C] text-sm leading-relaxed">
                {BRAND_INFO.vision}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="p-5 rounded-2xl bg-[#000000] border border-[#272727] space-y-2"
              >
                <span className="text-xs font-mono font-bold text-brand_cyan">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {val.title}
                </h3>
                <p className="text-xs text-[#9C9C9C] leading-relaxed">
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
