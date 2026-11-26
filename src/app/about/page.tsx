import React from "react";
import type { Metadata } from "next";
import {
  Activity,
  Award,
  CheckCircle2,
  Cpu,
  Network,
  ShieldCheck,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";
import CTASection from "@/components/CTASection";
import LeadershipShowcase from "@/components/LeadershipShowcase";

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

              {/* Main Rounded Looping Video Showcase (Exact 16:9 Aspect Ratio — 100% Full Video Visible, Zero Cropping) */}
              <div className="relative rounded-[26px] overflow-hidden border-2 border-white shadow-[0_24px_60px_rgba(2,132,199,0.22)] aspect-video w-full bg-slate-900">
                <video
                  src="/about-who-we-are.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
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
          {/* Redesigned Larger Interactive Mission & Vision Cards (Smooth Background & Text Color Transition on Hover) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {/* Our Mission Card */}
            <div className="group relative overflow-hidden p-9 sm:p-11 rounded-3xl bg-white border-2 border-sky-100 hover:border-[#008FFF]/60 shadow-[0_14px_38px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_60px_rgba(0,143,255,0.3)] transition-all duration-500 hover:-translate-y-1.5 min-h-[260px] flex flex-col justify-between cursor-pointer">
              {/* Smooth Crossfade Gradient Background on Hover */}
              <div className="pointer-events-none absolute inset-0 bg-hubex-banner opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full border border-[#008FFF]/15 group-hover:border-white/20 transition-colors duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#008FFF]/10 group-hover:bg-white/20 border border-[#008FFF]/25 group-hover:border-white/40 text-[#008FFF] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm">
                    <Network className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-[0.18em] text-[#0284C7] group-hover:!text-cyan-200 transition-colors duration-300">
                    01 · Mission
                  </span>
                </div>

                <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-slate-900 group-hover:!text-white transition-colors duration-300">
                  Our Mission
                </h3>

                <p className="text-slate-600 group-hover:!text-sky-100/95 text-base sm:text-[17px] leading-relaxed font-medium transition-colors duration-300">
                  {BRAND_INFO.mission} We engineer every dedicated fiber link with strict 1:1 symmetrical throughput, dual-path self-healing ring protection, and proactive 24/7/365 NOC monitoring so organizations never face downtime.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <div className="h-1 w-14 group-hover:w-28 rounded-full bg-gradient-to-r from-[#008FFF] to-[#06B6D4] group-hover:from-cyan-300 group-hover:to-white transition-all duration-500" />
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="group relative overflow-hidden p-9 sm:p-11 rounded-3xl bg-white border-2 border-sky-100 hover:border-[#008FFF]/60 shadow-[0_14px_38px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_60px_rgba(0,143,255,0.3)] transition-all duration-500 hover:-translate-y-1.5 min-h-[260px] flex flex-col justify-between cursor-pointer">
              {/* Smooth Crossfade Gradient Background on Hover */}
              <div className="pointer-events-none absolute inset-0 bg-hubex-banner opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full border border-[#008FFF]/15 group-hover:border-white/20 transition-colors duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#008FFF]/10 group-hover:bg-white/20 border border-[#008FFF]/25 group-hover:border-white/40 text-[#008FFF] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-[0.18em] text-[#0284C7] group-hover:!text-cyan-200 transition-colors duration-300">
                    02 · Vision
                  </span>
                </div>

                <h3 className="text-2xl sm:text-[28px] font-extrabold tracking-tight text-slate-900 group-hover:!text-white transition-colors duration-300">
                  Our Vision
                </h3>

                <p className="text-slate-600 group-hover:!text-sky-100/95 text-base sm:text-[17px] leading-relaxed font-medium transition-colors duration-300">
                  {BRAND_INFO.vision} By expanding our subterranean 100G optical backbone across commercial hubs, campuses, and industrial zones, we aim to set the regional benchmark for enterprise reliability and speed.
                </p>
              </div>

              <div className="relative z-10 pt-6">
                <div className="h-1 w-14 group-hover:w-28 rounded-full bg-gradient-to-r from-[#008FFF] to-[#06B6D4] group-hover:from-cyan-300 group-hover:to-white transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Interactive Executive Leadership Spotlight */}
      <LeadershipShowcase />

      {/* Dedicated "Four Uncompromised Pillars of Infrastructure" Section (Redesigned Architectural Pillar Cards) */}
      <section className="relative py-16 lg:py-22 border-t border-slate-200/80 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[280px] rounded-full bg-[#008FFF]/10 blur-[130px]" />

        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
          <div className="flex flex-col items-center text-center mb-12 lg:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                Our Foundation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-normal text-slate-900 leading-tight max-w-3xl">
              Four Uncompromised Pillars{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                of Infrastructure
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-medium">
              Engineered from the ground up for resilient, zero-downtime enterprise optical connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const pillarIcons = [ShieldCheck, Cpu, Activity, Award];
              const pillarTags = [
                "Dual-Path Ring",
                "Armored Conduits",
                "<15m Response",
                "99.99% Uptime",
              ];
              const PillarIcon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={val.title}
                  className="group relative overflow-hidden rounded-3xl bg-white border-2 border-sky-100 hover:border-[#008FFF]/60 p-7 shadow-[0_14px_36px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_55px_rgba(0,143,255,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
                >
                  {/* Top Gradient Accent Ribbon */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4] opacity-75 group-hover:opacity-100 transition-opacity" />

                  {/* Large Subtle Pillar Number Watermark */}
                  <span className="pointer-events-none absolute top-4 right-5 text-5xl font-black font-mono text-sky-100/90 group-hover:text-sky-200/80 transition-colors select-none">
                    0{idx + 1}
                  </span>

                  <div className="relative z-10 space-y-4 pt-1">
                    <div className="w-12 h-12 rounded-2xl bg-[#008FFF]/10 group-hover:bg-gradient-to-br group-hover:from-[#008FFF] group-hover:to-[#06B6D4] border border-[#008FFF]/20 group-hover:border-transparent text-[#008FFF] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110">
                      <PillarIcon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#008FFF] transition-colors leading-snug">
                      {val.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {val.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#F0F9FF] border border-sky-200/80 px-2.5 py-1 rounded-full">
                      {pillarTags[idx]}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#008FFF] transition-colors">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
