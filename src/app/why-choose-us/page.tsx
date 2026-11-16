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
      {/* SAPPHIRE TWILIGHT HERO BANNER */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border border-brand_cyan/40 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand_cyan/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-brand_cyan/45 text-xs font-bold uppercase tracking-wider text-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-brand_cyan" />
              <span>The EARTH I Enterprise Advantage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Why Leading Organizations Trust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand_cyan to-sky-400">
                EARTH I Broadband
              </span>
            </h1>
            <p className="text-sky-100/85 text-base sm:text-lg leading-relaxed">
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
              className="rounded-2xl card-ice-slate p-7 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0C223D] border border-brand_cyan/40 flex items-center justify-center text-brand_cyan">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0C223D] text-sky-200 border border-brand_cyan/35">
                    {point.metricHighlight}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">{point.title}</h2>
                <p className="text-xs sm:text-sm text-slate-700 mt-2.5 leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-900/15 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <Activity className="w-3.5 h-3.5" />
                <span>Verified Enterprise Architecture</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL COMPARISON TABLE: SAPPHIRE TWILIGHT PANEL */}
      <section className="px-4 sm:px-8 py-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-section border border-brand_cyan/40 p-6 sm:p-10 lg:p-14 shadow-2xl text-white">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
              Architecture Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Enterprise Dedicated Fiber vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-brand_cyan">
                Conventional Shared Broadband
              </span>
            </h2>
            <p className="text-sm text-sky-100/80">
              See how dedicated optical transport and 1:1 uncontended DIA compare against standard best-effort broadband connections.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-sky-400/25 text-xs uppercase tracking-wider text-sky-200">
                  <th className="py-4 px-4 font-bold text-white">Technical Parameter</th>
                  <th className="py-4 px-4 font-bold text-sky-200/70">
                    Conventional Shared Broadband
                  </th>
                  <th className="py-4 px-4 font-bold text-brand_cyan bg-sky-500/15 rounded-t-xl">
                    EARTH I Enterprise Optical Fiber
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-400/20 text-xs sm:text-sm">
                {BROADBAND_COMPARISON.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-sky-500/10 transition-colors"
                  >
                    <td className="py-4 px-4 font-bold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-sky-200/75">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.conventionalBroadband}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white bg-sky-500/10 font-semibold">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
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
              className="rounded-2xl card-ice-slate p-6"
            >
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0A2540] to-brand_blue">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{stat.label}</h3>
              <p className="text-xs text-slate-700 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
