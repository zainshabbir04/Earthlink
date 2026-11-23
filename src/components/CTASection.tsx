import React from "react";
import Link from "next/link";
import { Phone, Compass, Cable, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to build resilient",
  highlight = "optical connectivity?",
  subtitle = "Talk to our experts about your enterprise fiber internet, MPLS networking, or IT infrastructure project.",
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Services",
  secondaryHref = "/services",
}: CTASectionProps) {
  return (
    <section className="pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative">
        <div className="mx-auto w-full max-w-[74rem] py-12 md:py-16 px-6 sm:px-10 lg:px-14 rounded-3xl border border-sky-300/35 bg-hubex-banner relative overflow-hidden shadow-[0_24px_60px_rgba(2,132,199,0.28)]">
          {/* Subtle Architectural Grid + Animated Orbital Rings + Soft Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
          <div className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full border border-white/15 animate-rotateImage" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 w-72 h-72 rounded-full border-2 border-dashed border-sky-300/25 animate-rotateImage" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-sky-400/15 blur-[120px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Bold Editorial Heading, Subtitle & Dual CTA Buttons */}
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
                </span>
                <span
                  style={{ color: "#E0F2FE" }}
                  className="text-[11px] font-bold uppercase tracking-[0.16em]"
                >
                  Enterprise Optical Consultation • 24/7 NOC
                </span>
              </div>

              <h2
                style={{ color: "#FFFFFF" }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.12]"
              >
                {title}{" "}
                {highlight && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67E8F9] via-[#BAE6FD] to-white">
                    {highlight}
                  </span>
                )}
              </h2>

              <p
                style={{ color: "#E0F2FE" }}
                className="text-sm sm:text-base max-w-xl leading-relaxed font-medium opacity-95"
              >
                {subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#00B4D8] !text-[#0A192F] hover:!text-white text-sm sm:text-[15px] font-extrabold px-7 h-[48px] rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>{primaryLabel}</span>
                  <span>→</span>
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/40 hover:border-white !text-white text-sm sm:text-[15px] font-bold px-7 h-[48px] rounded-xl backdrop-blur-md transition-all duration-300"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>

            {/* Right Column: Attractive Brand Optical Hub Emblem + 3-Step Fast Provisioning Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white/10 border border-white/25 backdrop-blur-xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)] space-y-5 overflow-hidden">
                {/* Glowing Brand Hub Centerpiece with Animated Concentric Signal Rings */}
                <div className="relative flex flex-col items-center justify-center pt-2 pb-1">
                  <div className="relative flex items-center justify-center w-28 h-28">
                    <span className="absolute inset-0 rounded-full border border-cyan-300/40 animate-ping [animation-duration:3s]" />
                    <span className="absolute -inset-2.5 rounded-full border border-dashed border-sky-200/35 animate-rotateImage" />
                    <div className="relative w-24 h-24 rounded-full bg-white shadow-[0_12px_32px_rgba(0,143,255,0.4)] border-2 border-cyan-300/70 flex items-center justify-center p-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logo-color.png"
                        alt={BRAND_INFO.companyName}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Sleek 3-Step Optical Deployment Flow */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    {
                      icon: Compass,
                      step: "01",
                      label: "Site Survey",
                      sub: "Free Feasibility",
                    },
                    {
                      icon: Cable,
                      step: "02",
                      label: "Fiber Drop",
                      sub: "Armored Splice",
                    },
                    {
                      icon: ShieldCheck,
                      step: "03",
                      label: "24/7 Live",
                      sub: "99.99% SLA",
                    },
                  ].map((item) => {
                    const StepIcon = item.icon;
                    return (
                      <div
                        key={item.step}
                        className="flex flex-col items-center text-center p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#00B4D8]/30 border border-cyan-300/40 text-cyan-200 flex items-center justify-center mb-2">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <span
                          style={{ color: "#FFFFFF" }}
                          className="text-xs font-extrabold leading-tight"
                        >
                          {item.label}
                        </span>
                        <span
                          style={{ color: "#BAE6FD" }}
                          className="text-[10px] font-medium mt-0.5"
                        >
                          {item.sub}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Direct 24/7 NOC Desk Contact Strip */}
                <a
                  href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                    /\s+/g,
                    ""
                  )}`}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#031226]/55 hover:bg-[#031226]/75 border border-cyan-300/30 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-[#008FFF] text-white flex items-center justify-center shadow-sm">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <div
                        style={{ color: "#BAE6FD" }}
                        className="text-[10px] font-bold uppercase tracking-wider"
                      >
                        Direct 24/7 NOC Desk
                      </div>
                      <div
                        style={{ color: "#FFFFFF" }}
                        className="text-sm font-extrabold font-mono tracking-tight"
                      >
                        {BRAND_INFO.contactDetails.helplinePhone}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{ color: "#67E8F9" }}
                    className="text-xs font-bold group-hover:translate-x-1 transition-transform"
                  >
                    Call →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
