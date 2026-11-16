import React, { Suspense } from "react";
import type { Metadata } from "next";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";
import ContactInteractive from "@/components/ContactInteractive";

export const metadata: Metadata = {
  title: "Contact Us — Enterprise Inquiries, 24/7 NOC & Optical Site Survey",
  description:
    "Contact EARTH I Broadband (Pvt.) Ltd. for Dedicated Internet Access (DIA), Point-to-Point optical links, MPLS VPNs, coverage inquiries, and on-site optical feasibility surveys.",
};

export default function ContactPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Contact Hero */}
      <section className="relative py-16 lg:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                24/7/365 NOC &amp; Enterprise Consultation
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
              Let&apos;s Connect With{" "}
              <span className="text-brand_cyan">{BRAND_INFO.shortName}</span>
            </h1>
            <p className="text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
              Request an on-site optical feasibility survey, configure a 1:1
              Dedicated Internet Access (DIA) or MPLS circuit, or reach our
              24/7/365 Network Operations Center.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-14">
          {/* Verification Advisory Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-amber-500/40 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1">
              <div className="font-semibold text-amber-300">
                Contact Information Verification Notice for{" "}
                {BRAND_INFO.companyName}
              </div>
              <p className="text-[#9C9C9C] leading-relaxed">
                The headquarters address (
                <span className="font-mono text-white">
                  {BRAND_INFO.contactDetails.headOfficeAddress}
                </span>
                ), 24/7 NOC helpline (
                <span className="font-mono text-white">
                  {BRAND_INFO.contactDetails.helplinePhone}
                </span>
                ), and email desks below are sourced from the reference business
                profile and explicitly flagged for confirmation by{" "}
                <strong className="text-white">{BRAND_INFO.companyName}</strong>{" "}
                prior to production launch.
              </p>
            </div>
          </div>

          {/* 4 Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#000000] border border-[#272727] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Corporate Headquarters
                </h2>
                <p className="text-sm text-[#9C9C9C] leading-relaxed">
                  {BRAND_INFO.contactDetails.headOfficeAddress}
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-[#1a1a1a] text-[11px] font-mono text-amber-400">
                ⚑ Flagged: Confirm registered office
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#000000] border border-[#272727] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center mb-4">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h2 className="text-base font-semibold text-white mb-1">
                  24/7 NOC &amp; Helpline
                </h2>
                <a
                  href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                    /\s+/g,
                    ""
                  )}`}
                  className="text-base font-mono font-bold text-brand_cyan hover:underline block"
                >
                  {BRAND_INFO.contactDetails.helplinePhone}
                </a>
                <p className="text-xs text-[#9C9C9C] mt-1">
                  &lt; 15-Minute SLA Incident Response Desk
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-[#1a1a1a] text-[11px] font-mono text-amber-400">
                ⚑ Flagged: Confirm official helpline
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#000000] border border-[#272727] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-base font-semibold text-white mb-1">
                  Official Email Desks
                </h2>
                <a
                  href={`mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}`}
                  className="text-xs sm:text-sm font-mono font-semibold text-brand_cyan hover:underline block break-all"
                >
                  {BRAND_INFO.contactDetails.sourceGeneralEmail}
                </a>
                <a
                  href={`mailto:${BRAND_INFO.contactDetails.sourceCareersEmail}`}
                  className="text-xs font-mono text-[#9C9C9C] hover:underline block mt-1 break-all"
                >
                  HR: {BRAND_INFO.contactDetails.sourceCareersEmail}
                </a>
              </div>
              <span className="mt-4 pt-3 border-t border-[#1a1a1a] text-[11px] font-mono text-amber-400">
                ⚑ Flagged: Confirm @earthibroadband
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#000000] border border-[#272727] flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-base font-semibold text-white mb-1">
                  NOC &amp; Field Support Hours
                </h2>
                <p className="text-sm text-[#9C9C9C] leading-relaxed">
                  {BRAND_INFO.contactDetails.operatingHours}
                </p>
              </div>
              <span className="mt-4 pt-3 border-t border-[#1a1a1a] text-[11px] font-mono text-emerald-400">
                ✓ 24/7/365 Continuous Monitoring
              </span>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="p-12 rounded-2xl bg-[#000000] border border-[#272727] text-center text-sm text-[#9C9C9C]">
                Loading interactive inquiry portal...
              </div>
            }
          >
            <ContactInteractive />
          </Suspense>

          {/* Google Maps Integration */}
          <div className="bg-[#000000] rounded-2xl border border-[#272727] overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                  Geographic Location &amp; NOC Hub
                </span>
                <h3 className="text-xl font-semibold text-white mt-0.5">
                  7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Pakistan
                </h3>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-amber-500/40 text-xs font-mono text-amber-300">
                Source Headquarters Map — Confirm for {BRAND_INFO.shortName}
              </span>
            </div>
            <div className="w-full h-[380px] bg-[#0D0D0D] relative">
              <iframe
                title="Corporate Headquarters Map - Main Boulevard Gulberg-III Lahore"
                src="https://www.google.com/maps?q=Main+Boulevard+Gulberg+III+Lahore+Pakistan&output=embed"
                className="w-full h-full border-0 opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
