import React from "react";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { BRAND_INFO, CAREERS_CULTURE } from "@/data/siteData";
import ServiceIcon from "@/components/ServiceIcon";
import CareersInteractive from "@/components/CareersInteractive";

export const metadata: Metadata = {
  title: "Careers — Join Our NOC, Optical Engineering & Enterprise Teams",
  description:
    "Explore career opportunities at EARTH I Broadband (Pvt.) Ltd. Join our 24/7 Network Operations Center (NOC), optical fiber infrastructure teams, and B2B corporate sales division.",
};

export default function CareersPage() {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      {/* Careers Hero Banner */}
      <section className="relative py-16 lg:py-24 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                Careers at {BRAND_INFO.companyName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
              Build the{" "}
              <span className="text-brand_cyan">Optical Backbone</span> Powering
              Enterprise Innovation
            </h1>
            <p className="text-base sm:text-lg text-[#D3D3D3] leading-relaxed">
              {CAREERS_CULTURE.subheadline}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-brand_cyan">
              <MapPin className="w-4 h-4" />
              <span>
                Primary Operations: {BRAND_INFO.contactDetails.headOfficeAddress}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Working at EARTH I Broadband & Company Culture */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                Working at {BRAND_INFO.shortName}
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                An Engineering-First Culture Focused on{" "}
                <span className="text-brand_cyan">Optical Excellence</span>
              </h2>
              <p className="text-[#9C9C9C] text-base leading-relaxed">
                {CAREERS_CULTURE.cultureParagraph}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CAREERS_CULTURE.verifiedGrowthHighlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#000000] border border-[#272727] space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                    <ServiceIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9C9C9C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CareersInteractive />
        </div>
      </section>
    </div>
  );
}
