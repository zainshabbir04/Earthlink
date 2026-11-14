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
    <footer className="relative bg-slate-50 text-slate-700 border-t border-slate-200 overflow-hidden">
      {/* Subtle Top Optical Pulse Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-200 via-brand_cyan to-brand_blue" />

      {/* Ambient Light Radial Glow */}
      <div className="pointer-events-none absolute -top-28 left-1/3 w-[520px] h-[240px] bg-brand_cyan/10 blur-[110px] rounded-full" />

      {/* Top ISP Network Status Strip */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              EARTH I Broadband Optical Core Status: All Metro Rings Active (100 Gbps Capacity)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-brand_blue font-semibold">
              <Wifi className="w-3.5 h-3.5 text-brand_cyan" />
              1:1 Uncontended DIA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-brand_blue font-semibold">
              <Activity className="w-3.5 h-3.5 text-brand_cyan" />
              &lt;50ms Ring Protection
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-brand_blue font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-brand_cyan" />
              24/7/365 NOC Telemetry
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="inline-flex items-center px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Image
                  src="/logo-color.png"
                  alt="EARTH I Broadband (Pvt.) Ltd."
                  width={175}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              <strong className="text-slate-900">{COMPANY_INFO.name}</strong> delivers pure enterprise optical fiber connectivity, 1:1 symmetrical Dedicated Internet Access (DIA), MPLS Layer-2/3 VPNs, and managed ICT infrastructure across metropolitan commercial corridors.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-brand_blue shadow-sm">
                <Radio className="w-3.5 h-3.5 text-brand_cyan" />
                1,200+ km Armored Fiber
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                99.99% Enterprise SLA
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-brand_cyan transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand_cyan/70 group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: ISP & Enterprise Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Optical ISP &amp; ICT Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-slate-600 hover:text-brand_cyan transition-colors inline-flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand_cyan/70 group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & NOC Desk */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Headquarters &amp; 24/7 NOC
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand_cyan shrink-0 mt-1" />
                <div>
                  <span className="block text-slate-800 font-medium">{CONTACT_INFO.address}</span>
                  <span className="text-[11px] text-amber-700 font-medium">
                    * Source reference address — confirm for EARTH I Broadband
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand_cyan shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-slate-800 font-semibold hover:text-brand_cyan transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand_cyan shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.generalEmail}`}
                  className="text-slate-700 hover:text-brand_cyan transition-colors break-all"
                >
                  {CONTACT_INFO.generalEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-800">{COMPANY_INFO.name}</strong> All rights reserved. Enterprise Broadband &amp; Optical Fiber Telecommunications.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-brand_cyan/50 text-slate-700 hover:text-brand_blue transition-all font-semibold shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand_cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
}
