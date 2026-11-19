import React from "react";
import type { Metadata } from "next";
import { BRAND_INFO } from "@/data/siteData";
import ServicesExplorer from "@/components/ServicesExplorer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Enterprise Connectivity, Optical Fiber, Cloud & Cybersecurity Services",
  description:
    "Explore EARTHLINK Broadband's enterprise services: Corporate Internet, 1:1 Dedicated Internet Access (DIA), MPLS Connectivity, VPN Solutions, Point-to-Point Optical Fiber, Cloud & Hosting, Managed IT, Cybersecurity, and Digital Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Compact Services Hero */}
      <section className="relative py-12 lg:py-16 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-3.5 py-1">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                {BRAND_INFO.companyName} · Solutions
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug">
              Carrier-Grade{" "}
              <span className="text-brand_cyan">Optical &amp; ICT</span>{" "}
              Solutions
            </h1>
            <p className="text-base text-[#D3D3D3] leading-relaxed">
              Subterranean armored optical fiber circuits with 1:1 symmetrical
              bandwidth, contractual SLAs, and 24/7/365 NOC support.
            </p>
          </div>
        </div>
      </section>

      <ServicesExplorer />
      <CTASection />
    </div>
  );
}
