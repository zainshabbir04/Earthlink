import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Cpu,
  Activity,
  Network,
  MapPin,
  ShieldAlert,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import {
  BRAND_INFO,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — Corporate Profile & Optical Infrastructure",
  description:
    "Learn about EARTH I Broadband (Pvt.) Ltd., our 1,200+ km subterranean armored metro fiber network, 100G optical core ring, 24/7/365 NOC operations, mission, and vision.",
};

const CORE_VALUES = [
  {
    title: "Carrier-Grade Reliability",
    description:
      "We engineer every enterprise link for deterministic uptime—delivering 1:1 uncontended symmetrical bandwidth backed by dual-path self-healing optical rings.",
  },
  {
    title: "Technical Rigor & Precision",
    description:
      "From deep-trench armored conduit deployment and precision fusion splicing to BGP core routing and automated OTDR telemetry, we never cut engineering corners.",
  },
  {
    title: "24/7/365 Proactive Accountability",
    description:
      "Our Network Operations Center monitors optical light levels continuously, initiating incident response in under 15 minutes with transparent SLA governance.",
  },
  {
    title: "Zero-Compromise Transparency",
    description:
      "No hidden Fair Usage Policies (FUP), no artificial peak-hour throttling, and clear end-to-end SLA demarcation for every corporate subscriber.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Page Hero */}
      <section className="relative py-16 lg:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                Corporate Profile · {BRAND_INFO.companyName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
              Engineering the{" "}
              <span className="text-brand_cyan">Subterranean Optical</span>{" "}
              Backbone for Enterprise Growth
            </h1>
            <p className="text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
              {BRAND_INFO.companyIntroduction}
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Section 1: Company Background */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                01 // Company Background
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                Built on Pure Optical Fiber —{" "}
                <span className="text-brand_cyan">Zero Legacy Copper</span>
              </h2>
              <p className="text-[#D3D3D3] text-base leading-relaxed">
                {BRAND_INFO.companyIntroduction}
              </p>
              <p className="text-[#9C9C9C] text-base leading-relaxed">
                {BRAND_INFO.companyBackground}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "1,200+ km of subterranean armored metro core optical fiber conduits",
                  "100G core optical transport ring with <50ms automatic protection switching",
                  "Strict 1:1 (uncontended) symmetrical upload and download speeds",
                  "Native Dual-Stack IPv4/IPv6 routing and automated OTDR fault telemetry",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-sm text-[#D3D3D3]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand_cyan shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#000000] p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
                  alt="Subterranean Optical Fiber Conduit & Splicing Infrastructure"
                  className="w-full h-[360px] object-cover rounded-xl opacity-85"
                />
                <div className="mt-3 p-4 rounded-xl bg-[#0D0D0D] border border-[#272727]">
                  <div className="text-xs font-mono text-brand_cyan uppercase">
                    Subterranean Armored Architecture
                  </div>
                  <div className="text-sm text-[#D3D3D3] mt-1">
                    Deep-trench optical conduits immune to overhead weather
                    hazards and aerial cable disturbances.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#000000] border border-[#272727] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                <Network className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                Corporate Mission
              </span>
              <h3 className="text-2xl font-semibold text-white">
                Bridging Distances &amp; Fostering Dependable Communication
              </h3>
              <p className="text-[#9C9C9C] text-base leading-relaxed">
                {BRAND_INFO.mission}
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#000000] border border-[#1A545E] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                Corporate Vision
              </span>
              <h3 className="text-2xl font-semibold text-white">
                Ubiquitous, Empowering High-Speed Optical Connectivity
              </h3>
              <p className="text-[#9C9C9C] text-base leading-relaxed">
                {BRAND_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Section 2: NOC & Technical Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl border border-[#272727] bg-[#000000] p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {VERIFIED_INFRASTRUCTURE_STATS.map((stat) => (
                    <div
                      key={stat.id}
                      className="p-5 rounded-xl bg-[#0D0D0D] border border-[#272727]"
                    >
                      <div className="text-3xl font-bold text-brand_cyan mb-1">
                        {stat.value}
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

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                02 // Network Operations &amp; Core Hardware
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                100G Core Fabric, Multi-Vendor Silicon &amp;{" "}
                <span className="text-brand_cyan">24/7 NOC Assurance</span>
              </h2>
              <p className="text-[#D3D3D3] text-base leading-relaxed">
                Our core transport network is engineered around high-capacity
                routing and switching architectures from enterprise leaders
                including <strong className="text-white">Cisco, Juniper, and Huawei</strong>,
                paired with precision fusion-spliced optical distribution frames
                (ODFs).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#000000] border border-[#272727]">
                  <Activity className="w-5 h-5 text-brand_cyan mb-2" />
                  <h4 className="text-sm font-semibold text-white">
                    Automated OTDR Telemetry
                  </h4>
                  <p className="text-xs text-[#9C9C9C] mt-1">
                    Pinpoints physical fiber bend or splice anomalies along
                    underground conduits in real time.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#000000] border border-[#272727]">
                  <Layers className="w-5 h-5 text-brand_cyan mb-2" />
                  <h4 className="text-sm font-semibold text-white">
                    Dual-Stack IPv4 / IPv6 &amp; BGP
                  </h4>
                  <p className="text-xs text-[#9C9C9C] mt-1">
                    Full support for enterprise ASN peering, BGP multi-homing,
                    and clean static subnet routing.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#000000] border border-[#272727]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-brand_cyan mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Active Metropolitan &amp; Regional Optical Corridors</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BRAND_INFO.contactDetails.coverageCorridors.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#272727] text-xs text-[#D3D3D3]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Governance Flag */}
      <section className="py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <h2 className="text-2xl sm:text-4xl font-semibold text-brand_cyan mb-10">
            Core Corporate Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.title}
                className="p-7 rounded-2xl bg-[#000000] border border-[#272727] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#9C9C9C] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-amber-500/40 text-sm">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h4 className="font-semibold text-amber-300">
                  Corporate Governance, Licensing &amp; Address Verification Flag
                </h4>
                <p className="text-[#9C9C9C] text-xs sm:text-sm leading-relaxed">
                  Source entity registration numbers, APNIC ASN references, and
                  physical headquarters coordinates (
                  <span className="text-white font-mono">
                    {BRAND_INFO.contactDetails.headOfficeAddress}
                  </span>
                  ) are explicitly flagged for executive confirmation by{" "}
                  <strong className="text-white">{BRAND_INFO.companyName}</strong>{" "}
                  rather than silently transferred.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand_cyan hover:underline pt-1"
                >
                  <span>Review Contact &amp; Verification Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
