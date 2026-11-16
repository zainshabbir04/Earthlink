import React from "react";
import type { Metadata } from "next";
import { PhoneCall } from "lucide-react";
import ContactInteractive from "@/components/ContactInteractive";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Request Optical Fiber Feasibility & 24/7 NOC Support",
  description:
    "Contact EARTH I Broadband (Pvt.) Ltd. for enterprise Dedicated Internet Access (DIA), MPLS connectivity, optical fiber site surveys, and 24/7/365 NOC support.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16">
      {/* LOGO JET-BLACK & CYAN HERO BANNER */}
      <section className="px-4 sm:px-8 pb-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border-2 border-[#19A2E6]/50 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#19A2E6]/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <PhoneCall className="w-3.5 h-3.5 text-[#19A2E6]" />
              <span>Enterprise Feasibility &amp; 24/7 NOC Desk</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Get Connected With{" "}
              <span className="text-[#19A2E6]">
                EARTH I Broadband
              </span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Request an underground optical fiber feasibility survey, configure a dedicated 1:1 symmetrical internet circuit, or reach our 24/7/365 Network Operations Center at <strong className="text-white">{COMPANY_INFO.name}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT & SITE SURVEY SECTION */}
      <section className="px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <ContactInteractive />
        </div>
      </section>
    </div>
  );
}
