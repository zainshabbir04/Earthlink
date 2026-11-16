"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ChevronRight,
  ShieldCheck,
  Radio,
  Activity,
  Wifi,
} from "lucide-react";
import {
  COMPANY_INFO,
  NAV_LINKS,
  SERVICES,
  CONTACT_INFO,
} from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0B0D10] text-neutral-300 border-t-2 border-[#19A2E6] overflow-hidden">
      {/* Ambient Logo Cyan Glow */}
      <div className="pointer-events-none absolute -top-28 left-1/3 w-[520px] h-[240px] bg-[#19A2E6]/15 blur-[120px] rounded-full" />

      {/* Top ISP Network Status Strip */}
      <div className="border-b border-neutral-800 bg-[#12151B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19A2E6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#19A2E6]"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-white">
              EARTH I Broadband Optical Core Status: All Metro Rings Active (100 Gbps Capacity)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181C24] border border-[#19A2E6]/40 text-neutral-200 font-semibold">
              <Wifi className="w-3.5 h-3.5 text-[#19A2E6]" />
              1:1 Uncontended DIA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181C24] border border-[#19A2E6]/40 text-neutral-200 font-semibold">
              <Activity className="w-3.5 h-3.5 text-[#19A2E6]" />
              &lt;50ms Ring Protection
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181C24] border border-[#19A2E6]/40 text-neutral-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
              24/7/365 NOC Telemetry
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border-2 border-[#19A2E6]/50 shadow-[0_6px_20px_rgba(25,162,230,0.2)]">
                <Image
                  src="/logo-color.png"
                  alt="EARTH I Broadband (Pvt.) Ltd."
                  width={175}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              <strong className="text-white">{COMPANY_INFO.name}</strong> delivers pure enterprise optical fiber connectivity, 1:1 symmetrical Dedicated Internet Access (DIA), MPLS Layer-2/3 VPNs, and managed ICT infrastructure across metropolitan commercial corridors.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161A22] border border-[#19A2E6]/40 text-xs font-semibold text-white">
                <Radio className="w-3.5 h-3.5 text-[#19A2E6]" />
                1,200+ km Armored Fiber
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161A22] border border-neutral-700 text-xs font-semibold text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
                99.99% Enterprise SLA
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-[#19A2E6] transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#19A2E6] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: ISP & Enterprise Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Optical ISP &amp; ICT Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-neutral-400 hover:text-[#19A2E6] transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#19A2E6] group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & NOC Desk */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Headquarters &amp; 24/7 NOC
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#19A2E6] shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium">{CONTACT_INFO.address}</span>
                  <span className="text-[11px] text-[#757679] font-medium">
                    * Source reference address — confirm for EARTH I Broadband
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#19A2E6] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-white font-semibold hover:text-[#19A2E6] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#19A2E6] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.generalEmail}`}
                  className="text-neutral-300 hover:text-[#19A2E6] transition-colors break-all"
                >
                  {CONTACT_INFO.generalEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#757679]">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white">{COMPANY_INFO.name}</strong> All rights reserved. Enterprise Broadband &amp; Optical Fiber Telecommunications.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161A22] hover:bg-[#19A2E6] border border-[#19A2E6]/40 text-white transition-all font-semibold shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
