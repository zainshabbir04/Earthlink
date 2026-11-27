import React from "react";
import type { Metadata } from "next";
import { BRAND_INFO, CAREERS_CULTURE } from "@/data/siteData";
import ServiceIcon from "@/components/ServiceIcon";
import CareersInteractive from "@/components/CareersInteractive";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Careers — Join Our NOC, Optical Engineering & Enterprise Teams",
  description:
    "Explore career opportunities at EARTHLINK Broadband (Pvt.) Ltd. Join our 24/7 Network Operations Center (NOC), optical fiber infrastructure teams, and B2B corporate sales division.",
};

export default function CareersPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Full-Width Careers Hero Image Banner (Hero Badge + Main Heading Only) */}
      <section className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] flex items-center">
        {/* Background Careers Banner Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/careers-hero-banner.jpg"
          alt="Careers at EARTHLINK Broadband — Optical Engineering & Future Growth"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Deep Dark-Navy Top & Left Scrims for Crystal-Clear Navbar & Hero Heading Visibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020812]/90 via-[#020812]/55 to-[#020812]/20" />
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
                Careers at {BRAND_INFO.companyName}
              </span>
            </div>

            <h1
              style={{ color: "#FFFFFF" }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-normal leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
            >
              Build the{" "}
              <span style={{ color: "#38BDF8" }}>Optical Backbone</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Redesigned Culture & Growth Highlights + Job Openings */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Soft Ambient Optical Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[#008FFF]/10 blur-[110px]" />
        <div className="pointer-events-none absolute top-1/3 right-0 w-[360px] h-[360px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-16 lg:space-y-20">
          {/* Centered Hero Badge + Eye-Catching Main Heading */}
          <div>
            <div className="flex flex-col items-center text-center mb-12 lg:mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
                  Life at {BRAND_INFO.shortName}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
                Why Engineers{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                  Thrive With Us
                </span>
              </h2>

              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]" />
            </div>

            {/* 6 Architectural Culture & Benefits Cards (3x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {CAREERS_CULTURE.verifiedGrowthHighlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-[26px] bg-white border border-sky-100 hover:border-[#008FFF]/60 p-7 sm:p-8 shadow-[0_14px_38px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(0,143,255,0.18)] hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Top Optical Gradient Accent Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4] opacity-70 group-hover:opacity-100 transition-opacity" />

                  {/* Subtle Corner Index Watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none select-none absolute top-4 right-5 text-5xl font-black font-mono text-sky-100/90 group-hover:text-[#008FFF]/15 transition-colors leading-none"
                  >
                    0{idx + 1}
                  </span>

                  <div>
                    {/* Floating Gradient Icon Medallion */}
                    <div className="relative mb-6 inline-flex items-center justify-center">
                      <div className="absolute -inset-1.5 rounded-2xl bg-[#008FFF]/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        style={{ color: "#FFFFFF" }}
                        className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-[#008FFF] to-[#0284C7] shadow-[0_10px_24px_rgba(0,143,255,0.32)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <ServiceIcon name={item.iconName} className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-[19px] font-extrabold text-slate-900 group-hover:text-[#008FFF] transition-colors leading-snug mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Tag & Sliding Signal Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-sky-200/80 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008FFF]" />
                      {item.tag}
                    </span>
                    <div className="h-1.5 w-10 group-hover:w-20 rounded-full bg-gradient-to-r from-[#008FFF] to-[#06B6D4] transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CareersInteractive />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
