import React from "react";
import type { Metadata } from "next";
import {
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

      {/* Mission, Vision & Core Values */}
      <section className="py-12 lg:py-16">
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
