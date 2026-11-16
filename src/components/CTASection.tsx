"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Phone, Radio, ShieldCheck, Activity, Wifi } from "lucide-react";
import { CONTACT_INFO } from "@/data/siteData";

interface CTASectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  badge = "Enterprise Optical Fiber & ISP Deployment",
  title = "Where Pure Optical Technology Connects Your Enterprise.",
  subtitle = "Partner with EARTH I Broadband (Pvt.) Ltd. for 1:1 symmetrical Dedicated Internet Access, MPLS Layer-2/3 interconnectivity, and 24/7/365 NOC-backed optical links across metropolitan commercial corridors.",
  primaryLabel = "Request Site Feasibility Survey",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#19A2E6]/50 bg-hubex-banner p-8 sm:p-14 lg:p-16 text-center shadow-[0_24px_60px_rgba(11,13,16,0.3)]">
          {/* Top Signature Dual-Tone Bar (Jet Black + Logo Cyan) */}
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>

          {/* Decorative animated optical rings */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/10 animate-rotateImage" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 w-96 h-96 rounded-full border border-dashed border-[#19A2E6]/40 animate-rotateReverse" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141820] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <Radio className="w-3.5 h-3.5 text-[#19A2E6] animate-pulse" />
              <span>{badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* ISP SLA & Telemetry Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/70 border border-neutral-700 text-xs text-white font-medium">
                <Wifi className="w-3.5 h-3.5 text-[#19A2E6]" />
                1:1 Symmetrical Fiber Bandwidth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/70 border border-neutral-700 text-xs text-white font-medium">
                <Activity className="w-3.5 h-3.5 text-[#19A2E6]" />
                &lt;50ms Ring Failover
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B0D10]/70 border border-neutral-700 text-xs text-white font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
                99.99% Uptime SLA
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 bg-[#19A2E6] hover:bg-white text-white hover:text-[#0B0D10] font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 group"
              >
                <span>{primaryLabel}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#0B0D10] hover:bg-[#161A22] border border-[#19A2E6]/50 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#19A2E6]" />
                <span>24/7 NOC: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
