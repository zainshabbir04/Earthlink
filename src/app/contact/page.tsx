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
    "Contact EARTH I Broadband (Pvt.) Ltd. for Dedicated Internet Access (DIA), Point-to-Point optical links, MPLS VPNs, and on-site optical feasibility surveys.",
};

export default function ContactPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Compact Contact Hero */}
      <section className="relative py-12 lg:py-16 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-3.5 py-1">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                24/7/365 NOC &amp; Enterprise Desk
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug">
              Connect With{" "}
              <span className="text-brand_cyan">{BRAND_INFO.shortName}</span>
            </h1>
            <p className="text-base text-[#D3D3D3] leading-relaxed">
              Request an optical feasibility survey, configure a 1:1 DIA or MPLS
              circuit, or contact our 24/7 NOC.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-10">
          {/* Compact 4 Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#000000] border border-[#272727]">
              <MapPin className="w-5 h-5 text-brand_cyan mb-3" />
              <h2 className="text-sm font-semibold text-white mb-1">
                Headquarters
              </h2>
              <p className="text-xs text-[#9C9C9C]">
                {BRAND_INFO.contactDetails.headOfficeAddress}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#000000] border border-[#272727]">
              <PhoneCall className="w-5 h-5 text-brand_cyan mb-3" />
              <h2 className="text-sm font-semibold text-white mb-1">
                24/7 NOC Helpline
              </h2>
              <a
                href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                  /\s+/g,
                  ""
                )}`}
                className="text-sm font-mono font-bold text-brand_cyan hover:underline block"
              >
                {BRAND_INFO.contactDetails.helplinePhone}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#000000] border border-[#272727]">
              <Mail className="w-5 h-5 text-brand_cyan mb-3" />
              <h2 className="text-sm font-semibold text-white mb-1">
                Email Desks
              </h2>
              <a
                href={`mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}`}
                className="text-xs font-mono text-brand_cyan hover:underline block break-all"
              >
                {BRAND_INFO.contactDetails.sourceGeneralEmail}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-[#000000] border border-[#272727]">
              <Clock className="w-5 h-5 text-brand_cyan mb-3" />
              <h2 className="text-sm font-semibold text-white mb-1">
                Support Hours
              </h2>
              <p className="text-xs text-[#9C9C9C]">
                {BRAND_INFO.contactDetails.operatingHours}
              </p>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="p-8 rounded-2xl bg-[#000000] border border-[#272727] text-center text-sm text-[#9C9C9C]">
                Loading inquiry portal...
              </div>
            }
          >
            <ContactInteractive />
          </Suspense>

          {/* Compact Verification & Google Maps Card */}
          <div className="bg-[#000000] rounded-2xl border border-[#272727] overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#1a1a1a] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-white">
                {BRAND_INFO.contactDetails.headOfficeAddress}
              </span>
              <span className="inline-flex items-center gap-1.5 text-amber-300 font-mono">
                <ShieldAlert className="w-4 h-4" />
                Source contact details flagged for {BRAND_INFO.shortName} confirmation
              </span>
            </div>
            <div className="w-full h-[300px] bg-[#0D0D0D]">
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
