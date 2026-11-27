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

      {/* Compact Culture Grid & Job Openings */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAREERS_CULTURE.verifiedGrowthHighlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#000000] border border-[#272727] space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                  <ServiceIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9C9C9C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <CareersInteractive />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
