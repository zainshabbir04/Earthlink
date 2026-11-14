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
        <div className="relative rounded-3xl overflow-hidden border border-sky-200 bg-hubex-banner p-8 sm:p-14 lg:p-16 text-center shadow-[0_24px_60px_rgba(14,165,233,0.18)]">
          {/* Decorative animated optical rings */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/15 animate-rotateImage" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 w-96 h-96 rounded-full border border-dashed border-brand_cyan/35 animate-rotateReverse" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-sky-200">
              <Radio className="w-3.5 h-3.5 text-brand_cyan animate-pulse" />
              <span>{badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* ISP SLA & Telemetry Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/40 border border-white/15 text-xs text-white font-medium">
                <Wifi className="w-3.5 h-3.5 text-brand_cyan" />
                1:1 Symmetrical Fiber Bandwidth
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/40 border border-white/15 text-xs text-white font-medium">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                &lt;50ms Ring Failover
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/40 border border-white/15 text-xs text-white font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brand_cyan" />
                99.99% Uptime SLA
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-sky-50 font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 group"
              >
                <span>{primaryLabel}</span>
                <ChevronRight className="w-4 h-4 text-brand_cyan transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-900/50 hover:bg-slate-900/75 border border-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded-xl backdrop-blur-md transition-all"
              >
                <Phone className="w-4 h-4 text-brand_cyan" />
                <span>24/7 NOC: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
