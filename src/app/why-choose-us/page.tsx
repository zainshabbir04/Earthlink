import React from "react";
import type { Metadata } from "next";
import {
  CheckCircle2,
  XCircle,
  Cpu,
  Activity,
  Radio,
  Server,
} from "lucide-react";
import {
  BRAND_INFO,
  WHY_CHOOSE_US_ADVANTAGES,
  COMPARISON_TABLE_DATA,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Why Choose Us — The EARTH I Broadband Optical Advantage",
  description:
    "Discover why enterprises choose EARTH I Broadband: 100% pure subterranean optical fiber, 1:1 symmetrical speeds, <50ms ring failover, zero FUP, and 24/7/365 NOC support.",
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Page Hero */}
      <section className="relative py-16 lg:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                The {BRAND_INFO.shortName} Advantage
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
              Carrier-Grade{" "}
              <span className="text-brand_cyan">Optical Engineering</span> Built
              for Zero Compromise
            </h1>
            <p className="text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
              Conventional broadband relies on oversubscribed aerial cables and
              asymmetrical copper last-mile drops.{" "}
              <strong className="text-white">{BRAND_INFO.companyName}</strong>{" "}
              delivers pure subterranean optical fiber with 1:1 uncontended
              throughput, sub-50ms ring protection, and 24/7/365 NOC telemetry.
            </p>
          </div>
        </div>
      </section>

      {/* Six Technical Differentiators */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl font-semibold text-brand_cyan mb-10">
            Six Pillars of Our Enterprise Optical Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_ADVANTAGES.map((adv) => (
              <div
                key={adv.id}
                className="p-7 rounded-2xl bg-[#000000] border border-[#272727] hover:border-[#1A545E] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                      <ServiceIcon name={adv.iconName} className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan text-xs font-mono font-bold">
                      {adv.highlightMetric}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {adv.title}
                  </h3>
                  <p className="text-xs font-mono text-brand_cyan mb-3">
                    {adv.subtitle}
                  </p>
                  <p className="text-sm text-[#9C9C9C] leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-16 lg:py-24 border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-4xl font-semibold text-brand_cyan mb-2">
              Enterprise Optical Fiber vs. Conventional Broadband
            </h2>
            <p className="text-[#D3D3D3] text-base">
              Verified architectural comparison between shared conventional ISPs
              and {BRAND_INFO.companyName}.
            </p>
          </div>

          <div className="bg-[#000000] rounded-2xl border border-[#272727] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D0D0D] border-b border-[#272727] text-white">
                    <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-[#9C9C9C] w-1/4">
                      Technical Parameter
                    </th>
                    <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-[#9C9C9C] w-1/3">
                      Conventional Shared Broadband
                    </th>
                    <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-brand_cyan bg-[#1591EE15] w-5/12">
                      {BRAND_INFO.companyName} (Enterprise Fiber)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a] text-sm">
                  {COMPARISON_TABLE_DATA.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-[#0A0A0A] transition-colors"
                    >
                      <td className="py-4 px-6 font-semibold text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-[#9C9C9C]">
                        <div className="flex items-start gap-2.5">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.conventional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 bg-[#1591EE08] font-medium text-white">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
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

      {/* NOC & Core Hardware Deep Dive */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
                <Activity className="w-3.5 h-3.5 text-brand_cyan" />
                <span className="text-brand_cyan text-xs font-semibold uppercase">
                  24/7/365 NOC &amp; Core Infrastructure
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white">
                Proactive Optical Telemetry &amp;{" "}
                <span className="text-brand_cyan">Multi-Terabit Routing</span>
              </h2>
              <p className="text-[#9C9C9C] text-base leading-relaxed">
                Our 24/7/365 Network Operations Center continuously polls
                optical transceivers and automated OTDR sensors across our
                1,200+ km metro core network.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-xl bg-[#000000] border border-[#272727] flex items-start gap-4">
                  <Cpu className="w-6 h-6 text-brand_cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Cisco, Juniper &amp; Huawei Core Routing Fabric
                    </h3>
                    <p className="text-xs text-[#9C9C9C] mt-1">
                      High-availability carrier chassis delivering line-rate
                      100G forwarding, BGP multi-homing, and deterministic MPLS
                      QoS queues.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-[#000000] border border-[#272727] flex items-start gap-4">
                  <Radio className="w-6 h-6 text-brand_cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Sub-50ms Self-Healing Ring Protection
                    </h3>
                    <p className="text-xs text-[#9C9C9C] mt-1">
                      Dual physical east/west underground fiber entries ensure
                      automatic optical path failover without dropping active
                      sessions.
                    </p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-[#000000] border border-[#272727] flex items-start gap-4">
                  <Server className="w-6 h-6 text-brand_cyan shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      &lt; 15-Minute Incident Response &amp; Rapid Field MTTR
                    </h3>
                    <p className="text-xs text-[#9C9C9C] mt-1">
                      Direct access to NOC tier-3 engineers and mobile fusion
                      splicing crews stationed across metropolitan corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VERIFIED_INFRASTRUCTURE_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="p-7 rounded-2xl bg-[#000000] border border-[#272727]"
                >
                  <div className="text-4xl font-bold text-brand_cyan mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#9C9C9C] leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
