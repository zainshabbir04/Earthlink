import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Activity,
  Radio,
} from "lucide-react";
import {
  COMPANY_INFO,
  WHY_CHOOSE_US_POINTS,
  BROADBAND_COMPARISON,
  INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Choose Us | Enterprise Optical Fiber vs. Conventional Broadband",
  description:
    "Discover why enterprises choose EARTH I Broadband (Pvt.) Ltd. — 100% pure optical fiber, 1:1 symmetrical speeds, <50ms ring failover, and 24/7/365 NOC support.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-10">
      {/* LOGO JET-BLACK & CYAN HERO BANNER */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border-2 border-[#19A2E6]/50 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#19A2E6]/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
              <span>The EARTH I Enterprise Advantage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Why Leading Organizations Trust{" "}
              <span className="text-[#19A2E6]">
                EARTH I Broadband
              </span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Conventional consumer broadband relies on contended GPON splitters and asymmetrical bandwidth. <strong className="text-white">{COMPANY_INFO.name}</strong> engineers dedicated subterranean optical fiber circuits with contractual SLA guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* 6 CORE ADVANTAGES GRID */}
      <section className="px-4 sm:px-8 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point) => (
            <div
              key={point.id}
              className="rounded-2xl card-ice-slate p-7 flex flex-col justify-between transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>
              <div className="pt-1">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0B0D10] border border-[#19A2E6]/50 flex items-center justify-center text-[#19A2E6]">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                    {point.metricHighlight}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#0B0D10]">{point.title}</h2>
                <p className="text-xs sm:text-sm text-[#757679] font-medium mt-2.5 leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs text-[#0B0D10] font-bold">
                <Activity className="w-3.5 h-3.5 text-[#19A2E6]" />
                <span>Verified Enterprise Architecture</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL COMPARISON TABLE IN LOGO JET-BLACK & CYAN */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-section border-2 border-[#19A2E6]/50 p-6 sm:p-10 lg:p-14 shadow-2xl text-white">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Architecture Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Enterprise Dedicated Fiber vs.{" "}
              <span className="text-[#19A2E6]">
                Conventional Shared Broadband
              </span>
            </h2>
            <p className="text-sm text-neutral-400">
              See how dedicated optical transport and 1:1 uncontended DIA compare against standard best-effort broadband connections.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-xs uppercase tracking-wider text-[#757679]">
                  <th className="py-4 px-4 font-bold text-white">Technical Parameter</th>
                  <th className="py-4 px-4 font-bold text-neutral-400">
                    Conventional Shared Broadband
                  </th>
                  <th className="py-4 px-4 font-bold text-[#19A2E6] bg-[#161A22] rounded-t-xl">
                    EARTH I Enterprise Optical Fiber
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm">
                {BROADBAND_COMPARISON.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#141820] transition-colors"
                  >
                    <td className="py-4 px-4 font-bold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-neutral-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.conventionalBroadband}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white bg-[#141820] font-semibold">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                        <span>{row.earthIEnterpriseFiber}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VERIFIED STATS RECAP */}
      <section className="px-4 sm:px-8 py-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFRASTRUCTURE_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl card-ice-slate p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>
              <span className="text-3xl font-extrabold text-[#19A2E6]">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold text-[#0B0D10] mt-2">{stat.label}</h3>
              <p className="text-xs text-[#757679] font-medium mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
