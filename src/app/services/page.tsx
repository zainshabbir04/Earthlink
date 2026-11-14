import React from "react";
import type { Metadata } from "next";
import { BRAND_INFO, SERVICES_DATA } from "@/data/siteData";
import ServicesExplorer from "@/components/ServicesExplorer";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Enterprise Connectivity, Optical Fiber, Cloud & Cybersecurity Services",
  description:
    "Explore EARTH I Broadband's enterprise services: Corporate Internet, 1:1 Dedicated Internet Access (DIA), MPLS Connectivity, VPN Solutions, Point-to-Point Optical Fiber, Cloud & Hosting, Managed IT, Cybersecurity, and Digital Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Services Hero */}
      <section className="relative py-16 lg:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                {BRAND_INFO.companyName} · Service Portfolio
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
              Carrier-Grade{" "}
              <span className="text-brand_cyan">Optical Connectivity</span> &amp;
              Managed Enterprise Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
              Every circuit and managed solution is delivered over our
              subterranean armored optical fiber network with contractual SLAs,
              1:1 symmetrical bandwidth options, and 24/7/365 NOC engineering
              support.
            </p>

            {/* Quick Jump Anchors */}
            <div className="pt-3 flex flex-wrap gap-2">
              {SERVICES_DATA.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#000000] hover:bg-brand_cyan hover:text-black border border-[#272727] text-xs font-mono text-[#D3D3D3] transition-colors"
                >
                  {s.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesExplorer />
      <CTASection />
    </div>
  );
}
