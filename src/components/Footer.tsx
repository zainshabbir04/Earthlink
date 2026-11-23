"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ShieldAlert,
  Wifi,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { BRAND_INFO, SERVICES_DATA } from "@/data/siteData";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    window.location.href = `mailto:${
      BRAND_INFO.contactDetails.sourceGeneralEmail
    }?subject=${encodeURIComponent(
      `[${BRAND_INFO.companyName}] Enterprise Connectivity Subscription`
    )}&body=${encodeURIComponent(
      `Please subscribe ${emailInput} to EARTHLINK Broadband enterprise network updates and SLA advisories.`
    )}`;
  };

  return (
    <>
      <footer className="relative bg-white text-slate-600 border-t border-slate-200/90 overflow-hidden shadow-[0_-12px_40px_rgba(15,23,42,0.04)]">
        {/* Top Vibrant Optical Gradient Hairline */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0F172A] via-[#008FFF] to-[#2EC1D9]" />

        {/* Subtle Ambient Light Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-[460px] h-[220px] rounded-full bg-[#008FFF]/8 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[420px] h-[220px] rounded-full bg-[#2EC1D9]/10 blur-[100px]" />

        {/* Top Live NOC Status Strip */}
        <div className="border-b border-slate-200/80 bg-[#F8FBFF]">
          <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                100G Metro Optical Core: Operational
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-[#0284C7] shadow-sm">
                <Wifi className="w-3.5 h-3.5 text-[#008FFF]" />
                1,200+ km Armored Fiber
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-[#0284C7] shadow-sm">
                <Activity className="w-3.5 h-3.5 text-[#008FFF]" />
                &lt;50ms Ring Failover
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 text-[#0284C7] shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008FFF]" />
                99.99% Enterprise SLA
              </span>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto pt-12 pb-10 px-[20px] lg:px-[50px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200/80">
            {/* Col 1: Increased Logo Size + Brand Bio + Social Media Icons */}
            <div className="md:col-span-12 lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-color.png"
                  className="h-16 sm:h-20 lg:h-[84px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  alt="EARTHLINK Broadband (Pvt.) Ltd. Logo"
                />
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                <strong className="text-slate-900">{BRAND_INFO.companyName}</strong> delivers 1:1 symmetrical DIA, MPLS VPNs, and 24/7 NOC-managed connectivity across 1,200+ km of subterranean armored optical fiber.
              </p>

              {/* Eye-Catching Social Media Icons (Facebook, LinkedIn, Instagram, X) */}
              <div className="pt-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  {/* Facebook Icon */}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EARTHLINK Broadband on Facebook"
                    className="w-10 h-10 rounded-full bg-[#F0F7FF] border border-sky-200 hover:bg-[#1877F2] hover:border-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-[0_8px_20px_rgba(24,119,242,0.35)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.403 0 22.675 0z" />
                    </svg>
                  </a>

                  {/* LinkedIn Icon */}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EARTHLINK Broadband on LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#F0F7FF] border border-sky-200 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-[0_8px_20px_rgba(10,102,194,0.35)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EARTHLINK Broadband on Instagram"
                    className="w-10 h-10 rounded-full bg-[#F0F7FF] border border-sky-200 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent text-[#0284C7] hover:text-white flex items-center justify-center shadow-sm hover:shadow-[0_8px_20px_rgba(221,42,123,0.3)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>

                  {/* X / Twitter Icon */}
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EARTHLINK Broadband on X"
                    className="w-10 h-10 rounded-full bg-[#F0F7FF] border border-sky-200 hover:bg-slate-900 hover:border-slate-900 text-slate-800 hover:text-white flex items-center justify-center shadow-sm hover:shadow-[0_8px_20px_rgba(15,23,42,0.28)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Company Links */}
            <div className="md:col-span-4 lg:col-span-2 space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#008FFF] after:rounded-full">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Why Choose Us", href: "/why-choose-us" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-[#008FFF] font-medium inline-flex items-center gap-1.5 group transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#008FFF]/70 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Core Optical Services */}
            <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-[#008FFF] after:rounded-full">
                Core Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {SERVICES_DATA.slice(0, 6).map((srv) => (
                  <li key={srv.id}>
                    <Link
                      href={`/services#${srv.id}`}
                      className="text-slate-600 hover:text-[#008FFF] font-medium inline-flex items-center gap-1.5 group transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#008FFF]/70 group-hover:translate-x-1 transition-transform" />
                      <span>{srv.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Frosted Enterprise Updates & 24/7 NOC Card */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="rounded-2xl bg-[#F4F9FF] border border-sky-200/90 p-5 space-y-4 shadow-sm">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  Enterprise Updates &amp; NOC
                </h3>

                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Corporate Email"
                    className="w-full min-w-0 px-3.5 py-2.5 rounded-full bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#008FFF] to-[#0FA4E8] hover:from-[#0284C7] hover:to-[#008FFF] text-white text-xs font-bold shadow-sm transition-all shrink-0"
                  >
                    Subscribe
                  </button>
                </form>

                <div className="space-y-2.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#008FFF] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">
                      {BRAND_INFO.contactDetails.headOfficeAddress}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#008FFF] shrink-0" />
                    <a
                      href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                        /\s+/g,
                        ""
                      )}`}
                      className="font-bold text-slate-900 hover:text-[#008FFF] transition-colors"
                    >
                      {BRAND_INFO.contactDetails.helplinePhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#008FFF] shrink-0" />
                    <a
                      href={`mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}`}
                      className="text-[#0284C7] hover:underline break-all font-medium"
                    >
                      {BRAND_INFO.contactDetails.sourceGeneralEmail}
                    </a>
                  </div>
                  <div className="flex items-start gap-1.5 text-[10px] text-amber-700 pt-1">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      Source address/helpline flagged for {BRAND_INFO.shortName} confirmation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back-to-Top Pill */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <strong className="text-slate-900">{BRAND_INFO.companyName}</strong>. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="hidden md:inline font-mono text-[11px] text-slate-500">
                100G Metro Core · 1,200+ km Armored Fiber · 99.99% SLA
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F0F7FF] hover:bg-[#008FFF] border border-sky-200 hover:border-[#008FFF] text-[#0284C7] hover:text-white font-bold transition-all shadow-sm"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
