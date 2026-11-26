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
      {/* Full-Width Services Hero Image Banner (Top Badge + Main Hero Heading Only — Subheading Removed) */}
      <section className="relative w-full overflow-hidden min-h-[440px] sm:min-h-[480px] lg:min-h-[540px] flex items-center">
        {/* Background Services Banner Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services-hero-banner.jpg"
          alt="EARTHLINK Broadband Optical Fiber, Cloud & Cybersecurity Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Deep Dark-Navy Top & Left Scrims for Crystal-Clear Navbar & Hero Heading Visibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020812]/90 via-[#020812]/62 to-[#020812]/28" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#020812]/90 via-[#020812]/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#020812]/45 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2.5 bg-[#031226]/80 border border-cyan-300/50 backdrop-blur-md shadow-[0_6px_24px_rgba(0,143,255,0.28)] rounded-full px-4 py-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300" />
              </span>
              <span
                style={{ color: "#FFFFFF" }}
                className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em]"
              >
                {BRAND_INFO.companyName} · Solutions
              </span>
            </div>

            <h1
              style={{ color: "#FFFFFF" }}
              className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black tracking-normal leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]"
            >
              Carrier-Grade{" "}
              <span style={{ color: "#38BDF8" }}>Optical &amp; ICT</span>{" "}
              Solutions
            </h1>
          </div>
        </div>
      </section>

      <ServicesExplorer />
      <CTASection />
    </div>
  );
}
