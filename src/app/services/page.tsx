import React from "react";
import type { Metadata } from "next";
import { Network } from "lucide-react";
import ServicesExplorer from "@/components/ServicesExplorer";
import CTASection from "@/components/CTASection";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Enterprise Services | Optical Fiber, DIA, MPLS, Cloud & Cybersecurity",
  description:
    "Explore EARTH I Broadband (Pvt.) Ltd.'s 9 enterprise connectivity and ICT services: Corporate Fiber Internet, 1:1 Symmetrical DIA, MPLS VPN, Point-to-Point Optical Wave, Cloud, Managed IT, and Cybersecurity.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-10">
      {/* SAPPHIRE TWILIGHT HERO HEADER */}
      <section className="px-4 sm:px-8 pb-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border border-brand_cyan/40 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand_cyan/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-brand_cyan/45 text-xs font-bold uppercase tracking-wider text-sky-200">
              <Network className="w-3.5 h-3.5 text-brand_cyan" />
              <span>Enterprise Connectivity &amp; Managed ICT Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-brand_cyan to-sky-400">
                Optical Telecom &amp; ICT Solutions
              </span>
            </h1>
            <p className="text-sky-100/85 text-base sm:text-lg leading-relaxed">
              From 1:1 uncontended Dedicated Internet Access (DIA) and Layer-2/3 MPLS interconnectivity to managed SOC cybersecurity and cloud infrastructure, <strong className="text-white">{COMPANY_INFO.name}</strong> delivers end-to-end enterprise reliability.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICES EXPLORER */}
      <section className="px-4 sm:px-8 pb-14">
        <div className="max-w-[1440px] mx-auto">
          <ServicesExplorer />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
