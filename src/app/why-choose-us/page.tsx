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

      {/* Six Technical Differentiators */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US_ADVANTAGES.map((adv) => (
              <div
                key={adv.id}
                className="p-6 rounded-2xl bg-[#000000] border border-[#272727] hover:border-[#1A545E] transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                    <ServiceIcon name={adv.iconName} className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan text-xs font-mono font-bold">
                    {adv.highlightMetric}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {adv.title}
                </h3>
                <p className="text-xs text-[#9C9C9C] leading-relaxed">
                  {adv.description}
                </p>
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
