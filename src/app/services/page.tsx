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
      {/* LOGO JET-BLACK & CYAN HERO HEADER */}
      <section className="px-4 sm:px-8 pb-12">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-sapphire-hero bg-tech-grid-dark border-2 border-[#19A2E6]/50 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#19A2E6]/25 blur-[110px]" />
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <Network className="w-3.5 h-3.5 text-[#19A2E6]" />
              <span>Enterprise Connectivity &amp; Managed ICT Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Comprehensive{" "}
              <span className="text-[#19A2E6]">
                Optical Telecom &amp; ICT Solutions
              </span>
            </h1>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
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
