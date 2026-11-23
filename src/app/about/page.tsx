import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Cpu,
  Network,
  Quote,
  Sparkles,
  TrendingUp,
  Users,
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
              <div className="relative rounded-[26px] overflow-hidden border-2 border-white shadow-[0_24px_60px_rgba(2,132,199,0.22)] h-[360px] sm:h-[440px] lg:h-[530px] bg-slate-900">
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

      {/* Unique "Visionary Leadership Driving Innovation" Executive Section */}
      <section className="relative py-16 lg:py-24 border-t border-slate-200/80 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full bg-[#008FFF]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
          {/* Centered Header */}
          <div className="flex flex-col items-center text-center mb-12 lg:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
              <Users className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                Executive Leadership Team
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-normal text-slate-900 leading-tight">
              Visionary Leadership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                Driving Innovation
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
              Meet the leaders spearheading {BRAND_INFO.companyName}&apos;s mission to deliver the fastest, most resilient carrier-grade optical infrastructure across enterprise corridors.
            </p>
          </div>

          {/* 2-Column Unique Executive Cards with Sapphire Top Ribbon & Overlapping Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                name: "Mudassar Riaz",
                role: "Chief Executive Officer (CEO) & Founder",
                badge: "CHIEF EXECUTIVE OFFICER",
                photo: "/leadership/mudasir-riaz-ceo.jpg",
                icon: Sparkles,
                metrics: [
                  { value: "1,200+ km", label: "Metro Optical Conduits" },
                  { value: "99.99% SLA", label: "Core Uptime Guarantee" },
                ],
                bio1: `As Chief Executive Officer and visionary founder of ${BRAND_INFO.companyName}, Mudassar Riaz has spearheaded the company's transformation into one of the region's most trusted carrier-grade optical ISPs.`,
                bio2: "With an extensive background in optical telecommunications engineering, transmission systems, and telecom regulatory governance, Mudassar champions a culture of uncompromising SLA delivery — overseeing more than 1,200+ kilometers of subterranean armored conduits across regional business corridors along M-0, M-1, and the GT Road.",
                quote: `“Our foundational promise at ${BRAND_INFO.companyName} has never wavered: to build a transmission network so resilient and fast that modern enterprises never have to compromise on bandwidth. Every kilometer of network infrastructure we lay is engineered for future generations.”`,
                attribution: "— Mudassar Riaz, CEO",
                domains: [
                  "Optical Network Architecture",
                  "DWDM Core Strategy",
                  "Telecom Regulatory Compliance",
                  "Enterprise SLA Accountability",
                ],
              },
              {
                name: "Mubashir Riaz",
                role: "Chief Financial Officer (CFO) & Co-Founder",
                badge: "CHIEF FINANCIAL OFFICER",
                photo: "/leadership/mubasir-riaz-cfo.jpg",
                icon: TrendingUp,
                metrics: [
                  { value: "100% Debt-Free", label: "Core Ring Infrastructure" },
                  { value: "Tier-1 Assets", label: "Cisco & Juniper Routing" },
                ],
                bio1: `As Chief Financial Officer and co-founder, Mubashir Riaz oversees financial strategy, capital investments in next-generation optical infrastructure, asset stewardship, and commercial risk management at ${BRAND_INFO.companyName}.`,
                bio2: `Mubashir has been instrumental in structuring strategic capital allocations that enabled ${BRAND_INFO.shortName} to acquire Tier-1 routing assets from Cisco and Juniper, deploy cutting-edge subscriber distribution, and maintain a robust, debt-efficient balance sheet with transparent enterprise pricing.`,
                quote: `“Sustainable telecommunications infrastructure demands disciplined capital allocation and long-term vision. At ${BRAND_INFO.shortName}, our financial strategy is directly aligned with engineering excellence — ensuring continuous reinvestment into network resilience and local customer support.”`,
                attribution: "— Mubashir Riaz, CFO",
                domains: [
                  "Capital Infrastructure Investment",
                  "Fiscal Governance & Sustainability",
                  "Optical Asset Procurement",
                  "Transparent Enterprise Pricing",
                ],
              },
            ].map((leader) => {
              const RoleIcon = leader.icon;
              return (
                <div
                  key={leader.name}
                  className="group relative rounded-[28px] bg-white border-2 border-sky-100 hover:border-[#008FFF]/50 shadow-[0_18px_48px_rgba(15,23,42,0.08)] hover:shadow-[0_26px_65px_rgba(0,143,255,0.2)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Signature Deep-Sapphire-to-Cyan Top Executive Banner Strip */}
                  <div className="relative bg-hubex-banner px-6 sm:px-8 pt-7 pb-6 overflow-hidden">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.1]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />
                    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
                      {/* Elevated Portrait Showcase Frame */}
                      <div className="relative w-40 sm:w-44 shrink-0">
                        <div className="relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.35)] border-2 border-cyan-300/60">
                          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={leader.photo}
                              alt={`${leader.name} - ${leader.role} at ${BRAND_INFO.companyName}`}
                              className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-sky-200 shadow-md flex items-center gap-1.5 whitespace-nowrap text-[10px] font-extrabold text-slate-900">
                          <span className="w-2 h-2 rounded-full bg-[#008FFF] animate-pulse" />
                          <span>Executive Board</span>
                        </div>
                      </div>

                      {/* Role Pill, Name, Title & Compact Frosted Metrics */}
                      <div className="flex-1 text-center sm:text-left space-y-2.5 pb-1">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-cyan-300/40 backdrop-blur-md">
                          <RoleIcon className="w-3.5 h-3.5 text-cyan-300" />
                          <span
                            style={{ color: "#FFFFFF" }}
                            className="text-[10.5px] font-extrabold uppercase tracking-[0.14em]"
                          >
                            {leader.badge}
                          </span>
                        </div>

                        <h3
                          style={{ color: "#FFFFFF" }}
                          className="text-2xl sm:text-3xl font-black tracking-tight"
                        >
                          {leader.name}
                        </h3>
                        <p
                          style={{ color: "#BAE6FD" }}
                          className="text-xs sm:text-sm font-semibold"
                        >
                          {leader.role}
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 pt-2">
                          {leader.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
                            >
                              <div
                                style={{ color: "#FFFFFF" }}
                                className="text-xs sm:text-sm font-extrabold font-mono"
                              >
                                {m.value}
                              </div>
                              <div
                                style={{ color: "#E0F2FE" }}
                                className="text-[10px] font-medium mt-0.5"
                              >
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean White Card Body: Bio, Signature Quote & Strategic Domain Chips */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-medium">
                      <p>{leader.bio1}</p>
                      <p className="text-slate-600 font-normal">{leader.bio2}</p>
                    </div>

                    {/* Signature Frosted Ice-Blue Quote Block */}
                    <div className="relative rounded-2xl bg-gradient-to-r from-[#F0F9FF] via-[#F7FBFF] to-white border border-sky-200/80 border-l-4 border-l-[#008FFF] p-5 space-y-2.5 shadow-sm">
                      <Quote className="w-5 h-5 text-[#008FFF]/60" />
                      <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                        {leader.quote}
                      </p>
                      <div className="text-xs font-extrabold text-[#0284C7]">
                        {leader.attribution}
                      </div>
                    </div>

                    {/* Strategic Domain Focus Tags */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.14em] block">
                        Strategic Domain Focus
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {leader.domains.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F0F9FF] text-[#0B1F3A] border border-sky-200/80 hover:border-[#008FFF] hover:text-[#008FFF] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
