import React from "react";
import Link from "next/link";
import { BRAND_INFO } from "@/data/siteData";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export default function CTASection({
  title = "SLA & Carrier Assurance",
  subtitle = "Engineered with a contractual 99.99% uptime SLA, 1,200+ km subterranean armored fiber, and 24/7/365 NOC telemetry.",
  primaryLabel = "Schedule Site Survey",
  primaryHref = "/contact#site-survey",
}: CTASectionProps) {
  return (
    <section className="py-[40px] md:py-[60px]">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] flex items-center justify-center">
        <div className="w-full rounded-[16px] border border-[#272727] overflow-hidden bg-hubex-banner px-6 md:px-[5rem] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-white text-center lg:text-start text-[24px] lg:text-[2.25rem] font-semibold mb-4">
                {title}
              </h2>
              <div className="text-center lg:text-start">
                <p className="text-[#FFFFFFE5] text-[16px] lg:text-[1.25rem] leading-8 max-w-xl">
                  {subtitle}
                </p>
                <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-4">
                  <Link
                    href={primaryHref}
                    className="inline-flex items-center justify-center bg-white text-[#000C0C] text-sm lg:text-[16px] font-semibold px-[24px] py-[10px] h-[44px] rounded-lg hover:text-black hover:bg-brand_cyan transition"
                  >
                    {primaryLabel}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border border-white/40 text-white text-sm lg:text-[16px] font-semibold px-[24px] py-[10px] h-[44px] rounded-lg hover:border-brand_cyan hover:text-brand_cyan transition"
                  >
                    Contact Enterprise Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center lg:items-end lg:col-span-4 relative">
              <div className="w-32 h-32 rounded-2xl bg-[#050505]/90 border-2 border-brand_cyan flex flex-col items-center justify-center p-4 shadow-2xl">
                <span className="text-[10px] font-mono text-brand_cyan uppercase">
                  {BRAND_INFO.shortName}
                </span>
                <span className="text-2xl font-extrabold text-white mt-1">
                  99.99%
                </span>
                <span className="text-[11px] text-[#D3D3D3] mt-1">
                  Uptime SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
