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
      {/* Compact Careers Hero Banner */}
      <section className="relative py-12 lg:py-16 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-3.5 py-1">
              <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                Careers at {BRAND_INFO.companyName}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-snug">
              Build the{" "}
              <span className="text-brand_cyan">Optical Backbone</span>
            </h1>
            <p className="text-base text-[#D3D3D3] leading-relaxed">
              {CAREERS_CULTURE.subheadline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-brand_cyan">
              <MapPin className="w-4 h-4" />
              <span>{BRAND_INFO.contactDetails.headOfficeAddress}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Culture Grid & Job Openings */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAREERS_CULTURE.verifiedGrowthHighlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-[#000000] border border-[#272727] space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                  <ServiceIcon name={item.iconName} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9C9C9C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <CareersInteractive />
        </div>
      </section>
    </div>
  );
}
