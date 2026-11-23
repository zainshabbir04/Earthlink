import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  Cpu,
  Network,
  MapPin,
} from "lucide-react";
import {
  BRAND_INFO,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import CTASection from "@/components/CTASection";
import AnimatedCounter from "@/components/AnimatedCounter";

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
      <section className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[560px] lg:min-h-[640px] flex items-center">
        {/* Background Hero Image (Sharp Original Image) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/about-hero-banner.jpg"
          alt="EARTHLINK Broadband Optical Fiber & Telecom Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Balanced Dark-Navy Gradient Scrims for Crisp Transparent Navbar Logo & High-Contrast Text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030B16]/88 via-[#030B16]/62 to-[#030B16]/35" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030B16]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030B16]/45 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-28 pb-24 lg:pt-32 lg:pb-28">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-sky-300/35 backdrop-blur-md shadow-[0_6px_20px_rgba(0,143,255,0.2)] rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
              </span>
              <span className="!text-sky-100 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em]">
                Corporate Profile · {BRAND_INFO.companyName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-normal leading-tight !text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
              Engineering the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A8FF] to-[#67E8F9]">
                Subterranean Optical
              </span>{" "}
              Backbone
            </h1>
            <p className="text-sm sm:text-base lg:text-[16.5px] !text-sky-100/90 font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              {BRAND_INFO.companyIntroduction}
            </p>
          </div>
        </div>
      </section>

      {/* Background & 4 Verified Stats */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                01 // Our Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Pure Optical Fiber —{" "}
                <span className="text-brand_cyan">Zero Legacy Copper</span>
              </h2>
              <p className="text-[#D3D3D3] text-sm sm:text-base leading-relaxed">
                {BRAND_INFO.companyBackground}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "1,200+ km armored metro fiber",
                  "100G core ring (<50ms failover)",
                  "1:1 symmetrical DIA bandwidth",
                  "Cisco, Juniper & Huawei core",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[#D3D3D3]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap gap-1.5">
                {BRAND_INFO.contactDetails.coverageCorridors.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#272727] text-xs text-[#D3D3D3]"
                  >
                    <MapPin className="w-3 h-3 text-brand_cyan" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {VERIFIED_INFRASTRUCTURE_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="p-5 rounded-2xl bg-[#000000] border border-[#272727]"
                >
                  <div className="text-3xl font-bold text-brand_cyan mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <p className="text-xs text-[#9C9C9C] mt-1">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-12 border-t border-[#1a1a1a]">
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
