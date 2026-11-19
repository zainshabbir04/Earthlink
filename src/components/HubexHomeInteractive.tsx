"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BRAND_INFO,
  SERVICES_DATA,
  WHY_CHOOSE_US_ADVANTAGES,
  PORTFOLIO_PROJECTS,
  INDUSTRIES_AND_SECTORS,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";

const FiberNetworkCanvas = dynamic(() => import("./FiberNetworkCanvas"), {
  ssr: false,
});

const TIER_SPECS: Record<
  string,
  {
    headline: string;
    subline: string;
    conventional: string;
    earthI: string;
  }
> = {
  corporate: {
    headline: "100 Mbps – 250 Mbps",
    subline: "99.9% SLA · Pure Subterranean Fiber · Zero FUP",
    conventional: "Shared 1:8 Aerial / FUP Caps",
    earthI: "Dedicated Optical / Static IPs",
  },
  dia: {
    headline: "500 Mbps – 1 Gbps",
    subline: "99.99% SLA · 1:1 Symmetrical DIA · <50ms Failover",
    conventional: "Asymmetrical / Peak Throttling",
    earthI: "1:1 Uncontended / BGP Ready",
  },
  p2p: {
    headline: "1 Gbps – 10 Gbps",
    subline: "< 1ms Intra-Metro Latency · Layer-2 Optical Wave",
    conventional: "Public Internet Hop Routing",
    earthI: "Air-Gapped Subterranean Ring",
  },
  dwdm: {
    headline: "10 Gbps – 100 Gbps",
    subline: "100G Core Ring · Multi-Branch MPLS & Colocation",
    conventional: "Best-Effort Ticket Queue",
    earthI: "24/7 NOC · <15m MTTR Dispatch",
  },
};

export default function HubexHomeInteractive() {
  const [selectedTier, setSelectedTier] = useState<string>("dia");
  const currentTier = TIER_SPECS[selectedTier] || TIER_SPECS.dia;

  // Radial hub-and-spoke nodes (8 nodes around the center hub, matching HubexTech)
  const hubServices = SERVICES_DATA.slice(0, 8);

  return (
    <div className="bg-black-gradient text-white">
      {/* =====================================================================
          SECTION 2: HERO SECTION (Exact HubexTech 2-Column Layout + Rotating Ring + 5 Floating Pills)
         ===================================================================== */}
      <section className="relative lg:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background Tech Grid & Cyan Glow */}
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-[#008FFF]/15 blur-[130px] pointer-events-none" />

        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-[40px] pb-[60px] lg:py-[70px]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            {/* Left Column: Headline, Z COM Context & Dual Buttons */}
            <div className="relative flex flex-col justify-center items-start w-full">
              <div className="relative z-10 text-white">
                <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE44] rounded-full px-3.5 py-1 mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand_cyan animate-pulse" />
                  <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                    {BRAND_INFO.companyName}
                  </span>
                </div>

                <h1 className="text-[28px] md:text-4xl xl:text-[2.75rem] leading-snug font-semibold">
                  Connecting Businesses. <br />
                  <span className="text-brand_cyan">
                    Empowering Possibilities
                  </span>{" "}
                  Nationwide
                </h1>

                <p className="text-[16px] lg:text-[18px] text-[#D3D3D3] mt-4 md:mt-5 font-normal leading-relaxed max-w-xl">
                  Carrier-grade subterranean optical fiber for enterprises — 1:1
                  symmetrical DIA, MPLS VPNs, Cloud, and 24/7 NOC support across
                  a <strong className="text-white">1,200+ km armored metro core</strong> with{" "}
                  <strong className="text-white">99.99% uptime SLA.</strong>
                </p>

                {/* Exact HubexTech Dual Buttons */}
                <div className="mt-6 md:mt-10 flex flex-wrap gap-4 sm:gap-5">
                  <Link
                    href="/services"
                    className="text-white text-[16px] border border-[#008FFF] rounded-lg font-semibold hover:bg-brand_cyan hover:border-brand_cyan hover:text-black transition-all h-[44px] px-6 sm:w-[11.375rem] flex items-center justify-center"
                  >
                    Explore Services
                  </Link>

                  <Link
                    href="/contact"
                    className="bg-[#008FFF] text-white text-[16px] hover:bg-brand_cyan hover:text-black transition-all rounded-lg font-semibold h-[44px] px-6 sm:w-[11.375rem] flex items-center justify-center"
                  >
                    Contact Our Team
                  </Link>
                </div>

                {/* Exact HubexTech 5 Gold Stars Rating Row */}
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#FFB800"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-white text-[13px] font-semibold ml-1.5">
                      99.99% Contractual SLA · 24/7/365 NOC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact HubexTech Rotating Cybernetic Ring + Breathing Center + 5 Floating Pills */}
            <div className="relative flex items-center justify-center w-full py-6">
              <div className="relative flex items-center justify-center w-[345px] md:w-[430px] h-[430px] md:h-[510px]">
                {/* 3D React Three Fiber Canvas inside the Orbital Ring */}
                <div className="absolute inset-0 z-0 opacity-85">
                  <FiberNetworkCanvas />
                </div>

                {/* Rotating Outer Cybernetic HUD Ring (matching HubexTech Rotate.png) */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-[330px] md:w-[410px] h-[330px] md:h-[410px] animate-rotateImage pointer-events-none z-10"
                >
                  <defs>
                    <linearGradient
                      id="hubexRingGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#008FFF" stopOpacity="0.9" />
                      <stop
                        offset="50%"
                        stopColor="#2EC1D9"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="#008FFF"
                        stopOpacity="0.85"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="200"
                    cy="200"
                    r="182"
                    fill="none"
                    stroke="url(#hubexRingGrad)"
                    strokeWidth="2"
                    strokeDasharray="28 14 8 14"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="154"
                    fill="none"
                    stroke="#2EC1D9"
                    strokeWidth="1.2"
                    strokeDasharray="6 12"
                    strokeOpacity="0.55"
                  />
                  <circle
                    cx="200"
                    cy="18"
                    r="5"
                    fill="#2EC1D9"
                  />
                  <circle
                    cx="382"
                    cy="200"
                    r="5"
                    fill="#008FFF"
                  />
                  <circle
                    cx="200"
                    cy="382"
                    r="5"
                    fill="#2EC1D9"
                  />
                  <circle
                    cx="18"
                    cy="200"
                    r="5"
                    fill="#008FFF"
                  />
                </svg>

                {/* Center Breathing Core Emblem with Official Transparent EARTH I Broadband Logo */}
                <div className="absolute z-10 flex items-center justify-center">
                  <div className="w-[175px] md:w-[215px] h-[175px] md:h-[215px] rounded-full bg-gradient-to-br from-[#008FFF]/25 via-[#050505]/95 to-[#2EC1D9]/25 border border-brand_cyan/50 shadow-[0_0_50px_rgba(46,193,217,0.35)] animate-breathe flex items-center justify-center p-6 backdrop-blur-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo-dark.png"
                      alt="EARTH I Broadband (Pvt.) Ltd."
                      className="w-full h-auto object-contain drop-shadow-[0_2px_12px_rgba(46,193,217,0.3)]"
                    />
                  </div>
                </div>

                {/* 5 Floating Cyan-Bordered Pills (Exact HubexTech Positions & Styling) */}
                {/* Pill 1: Top-Left */}
                <div className="absolute left-0 sm:left-[-12px] top-[78px] bg-[#050505CC] backdrop-blur-md border border-cyan-500 text-[10px] xl:text-[13px] px-2.5 py-1.5 rounded-md animate-fadeInOutSmooth z-20">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand_cyan shadow-[0_0_8px_#2EC1D9]" />
                    Dedicated Internet (1:1 DIA)
                  </span>
                </div>

                {/* Pill 2: Mid-Left */}
                <div
                  className="absolute bottom-[165px] left-0 sm:left-[-35px] xl:left-[-75px] bg-[#050505CC] backdrop-blur-md text-white border border-cyan-500 text-[10px] xl:text-[13px] px-2.5 py-1.5 rounded-md animate-fadeInOutSmooth z-20"
                  style={{ animationDelay: "0.8s" }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#008FFF] shadow-[0_0_8px_#008FFF]" />
                    MPLS &amp; Multi-Branch VPN
                  </span>
                </div>

                {/* Pill 3: Bottom-Left */}
                <div
                  className="absolute bottom-[55px] left-[16px] xl:left-[5px] text-white bg-[#050505CC] backdrop-blur-md border border-cyan-500 text-[10px] xl:text-[13px] px-2.5 py-1.5 rounded-md animate-fadeInOutSmooth z-20"
                  style={{ animationDelay: "1.6s" }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand_cyan shadow-[0_0_8px_#2EC1D9]" />
                    Point-to-Point Optical (&lt;1ms)
                  </span>
                </div>

                {/* Pill 4: Top-Right */}
                <div
                  className="absolute top-[60px] right-0 xl:right-[-28px] bg-[#050505CC] backdrop-blur-md text-white border border-cyan-500 text-[10px] xl:text-[13px] px-2.5 py-1.5 rounded-md animate-fadeInOutSmooth z-20"
                  style={{ animationDelay: "1.2s" }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand_cyan shadow-[0_0_8px_#2EC1D9]" />
                    Cloud &amp; Managed IT
                  </span>
                </div>

                {/* Pill 5: Bottom-Right */}
                <div
                  className="absolute bottom-[130px] right-0 sm:right-[-30px] xl:right-[-85px] bg-[#050505CC] backdrop-blur-md text-white border border-cyan-500 text-[10px] xl:text-[13px] px-2.5 py-1.5 rounded-md animate-fadeInOutSmooth z-20"
                  style={{ animationDelay: "2.1s" }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#008FFF] shadow-[0_0_8px_#008FFF]" />
                    Cybersecurity &amp; 24/7 NOC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: MARQUEE STRIP ("Powering the next generation of companies")
         ===================================================================== */}
      <section className="py-[30px] md:py-[60px] border-t border-b border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 lg:px-[50px]">
          <div className="flex justify-center">
            <p className="text-brand_cyan text-[20px] lg:text-[28px] leading-[32px] font-normal text-center mb-8 md:mb-[50px]">
              Powering mission-critical enterprises &amp; metropolitan optical
              corridors
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[
                ... BRAND_INFO.contactDetails.coverageCorridors,
                "Tertiary Hospitals & Diagnostic Hubs",
                "Banking & FinTech Clearing Houses",
                "Software Export Parks & BPOs",
                "Multi-Campus Research Universities",
                ...BRAND_INFO.contactDetails.coverageCorridors,
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#080808] border border-[#272727] text-[#D3D3D3] text-sm font-medium shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-brand_cyan" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: OUR SERVICES (Exact HubexTech Radial Hub-and-Spoke Diagram + Mobile List + Full Grid)
         ===================================================================== */}
      <section className="py-[50px] lg:py-[90px]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="w-full text-start mb-10 lg:mb-16">
            <h2 className="text-[1.5rem] lg:text-[2.25rem] font-semibold mb-1.5 text-brand_cyan">
              Our Services
            </h2>
            <p className="text-[#D3D3D3] font-normal text-[1rem] max-w-xl">
              Carrier-grade optical connectivity, cloud, and cybersecurity
              engineered for enterprise uptime.
            </p>
          </div>

          {/* Desktop Radial Hub-and-Spoke Diagram (Exact HubexTech Design) */}
          <div className="hidden lg:block relative py-28 mb-20">
            <div className="relative max-w-5xl mx-auto h-[460px] flex items-center justify-center">
              {/* SVG Connector Lines from Center Hub to 8 Service Nodes */}
              <svg
                viewBox="0 0 1000 460"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <g
                  stroke="#1A545E"
                  strokeWidth="1.8"
                  fill="none"
                  strokeDasharray="5 5"
                >
                  {/* Top Center */}
                  <path d="M500 230 L500 55" />
                  {/* Bottom Center */}
                  <path d="M500 230 L500 405" />
                  {/* Left Top */}
                  <path d="M500 230 L340 110 L210 110" />
                  {/* Left Middle */}
                  <path d="M500 230 L175 230" />
                  {/* Left Bottom */}
                  <path d="M500 230 L340 350 L210 350" />
                  {/* Right Top */}
                  <path d="M500 230 L660 110 L790 110" />
                  {/* Right Middle */}
                  <path d="M500 230 L825 230" />
                  {/* Right Bottom */}
                  <path d="M500 230 L660 350 L790 350" />
                </g>
              </svg>

              {/* Center Hub Emblem */}
              <div className="relative z-10 w-36 h-36 rounded-2xl bg-[#050505] border-2 border-brand_cyan shadow-[0_0_45px_rgba(46,193,217,0.3)] flex flex-col items-center justify-center text-center p-3">
                <span className="text-xs font-mono uppercase tracking-widest text-brand_cyan">
                  EARTH I
                </span>
                <span className="text-lg font-bold text-white mt-0.5">
                  Services
                </span>
                <span className="text-[10px] text-[#9C9C9C] mt-0.5">
                  Hover Node
                </span>
              </div>

              {/* 8 Radial Nodes with HubexTech Hover Tooltips (bg-[#000000] border-[#1A545E]) */}
              {[
                {
                  srv: hubServices[0],
                  pos: "top-[10px] left-1/2 -translate-x-1/2 flex-col",
                },
                {
                  srv: hubServices[1],
                  pos: "top-[82px] left-[30px] flex-row",
                },
                {
                  srv: hubServices[2],
                  pos: "top-1/2 -translate-y-1/2 left-[10px] flex-row",
                },
                {
                  srv: hubServices[3],
                  pos: "bottom-[82px] left-[30px] flex-row",
                },
                {
                  srv: hubServices[4],
                  pos: "bottom-[10px] left-1/2 -translate-x-1/2 flex-col-reverse",
                },
                {
                  srv: hubServices[5],
                  pos: "top-[82px] right-[30px] flex-row-reverse",
                },
                {
                  srv: hubServices[6],
                  pos: "top-1/2 -translate-y-1/2 right-[10px] flex-row-reverse",
                },
                {
                  srv: hubServices[7],
                  pos: "bottom-[82px] right-[30px] flex-row-reverse",
                },
              ].map(({ srv, pos }) => (
                <div
                  key={srv.id}
                  className={`absolute ${pos} flex items-center gap-3 group cursor-pointer z-20`}
                >
                  <span className="font-semibold text-base text-white group-hover:text-brand_cyan transition-colors">
                    {srv.shortTitle}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-brand_cyan/50 group-hover:border-brand_cyan group-hover:bg-brand_cyan/15 flex items-center justify-center text-brand_cyan transition-all shadow-glow-cyan-sm">
                    <ServiceIcon name={srv.iconName} className="w-6 h-6" />
                  </div>

                  {/* Exact HubexTech Tooltip Popup Box */}
                  <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-[360px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
                    <div className="relative bg-[#000000] border border-[#1A545E] p-[1.25rem] text-[#9C9C9C] rounded-xl shadow-2xl">
                      <p className="text-white font-semibold text-sm mb-1">
                        {srv.title}
                      </p>
                      <p className="text-[13px] leading-[20px] text-left font-normal text-[#9C9C9C]">
                        {srv.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet List (Exact HubexTech Mobile Layout) */}
          <div className="block lg:hidden space-y-6 text-gray-300">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="flex items-start gap-3.5 border-b-[0.5px] border-[#EEF0F31F] pb-5"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] flex items-center justify-center text-brand_cyan shrink-0">
                  <ServiceIcon name={srv.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <Link href={`/services#${srv.id}`}>
                    <h3 className="text-white text-[1.125rem] font-semibold hover:text-brand_cyan">
                      {srv.title}
                    </h3>
                  </Link>
                  <p className="text-[0.875rem] text-[#9C9C9C] font-normal mt-1">
                    {srv.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: "WHERE TECHNOLOGY CONNECTS" (Exact HubexTech Centered Circuit Graphic Banner)
         ===================================================================== */}
      <section className="py-[50px] lg:py-[80px]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] text-white relative">
          <div className="mx-auto w-full max-w-[72.813rem] py-16 md:py-24 px-6 rounded-3xl border border-[#1A545E]/50 bg-[#05080F] relative overflow-hidden flex flex-col justify-between items-center text-center min-h-[420px]">
            {/* Radial Network Background SVG (Matching Group-digtail.png) */}
            <svg
              viewBox="0 0 800 400"
              className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
            >
              <circle
                cx="400"
                cy="200"
                r="90"
                stroke="#2EC1D9"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="400"
                cy="200"
                r="155"
                stroke="#008FFF"
                strokeWidth="1"
                strokeDasharray="8 8"
                fill="none"
              />
              <circle
                cx="400"
                cy="200"
                r="225"
                stroke="#2EC1D9"
                strokeWidth="1"
                strokeOpacity="0.5"
                fill="none"
              />
              <line
                x1="100"
                y1="200"
                x2="700"
                y2="200"
                stroke="#008FFF"
                strokeOpacity="0.4"
              />
              <line
                x1="400"
                y1="20"
                x2="400"
                y2="380"
                stroke="#2EC1D9"
                strokeOpacity="0.4"
              />
              <line
                x1="180"
                y1="60"
                x2="620"
                y2="340"
                stroke="#2EC1D9"
                strokeOpacity="0.3"
              />
              <line
                x1="180"
                y1="340"
                x2="620"
                y2="60"
                stroke="#008FFF"
                strokeOpacity="0.3"
              />
            </svg>

            <div className="relative z-10 max-w-xl space-y-2">
              <h2 className="text-[1.75rem] xl:text-[2.25rem] text-brand_cyan font-semibold leading-10">
                Where Optical Technology Connects
              </h2>
              <p className="text-[1rem] text-[#D3D3D3]">
                Uncontended 1:1 optical connectivity — from DIA and MPLS to
                Cloud and Cybersecurity.
              </p>
            </div>

            {/* Center Node Badges */}
            <div className="relative z-10 my-10 flex flex-wrap items-center justify-center gap-3">
              {VERIFIED_INFRASTRUCTURE_STATS.map((st) => (
                <div
                  key={st.id}
                  className="px-4 py-2.5 rounded-xl bg-black/85 border border-[#1A545E] text-center"
                >
                  <div className="text-lg font-bold text-brand_cyan font-mono">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-[#D3D3D3]">{st.label}</div>
                </div>
              ))}
            </div>

            <div className="relative z-10 space-y-4">
              <p className="text-[15px] xl:text-[1.125rem] font-medium text-white">
                Start Your Enterprise Optical Upgrade Today
              </p>
              <Link
                href="/contact"
                className="inline-block border rounded-lg text-white text-[1.05rem] px-7 py-2.5 h-[44px] font-semibold border-[#008FFF] hover:bg-brand_cyan hover:border-brand_cyan hover:text-black transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: CASE STUDIES / INFRASTRUCTURE PORTFOLIO (Exact HubexTech Black Cards)
         ===================================================================== */}
      <section className="py-[50px] lg:py-[70px] relative">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <h2 className="text-[22px] lg:text-[28px] font-bold mb-12 text-brand_cyan">
            Explore how our optical fiber infrastructure powers real-world
            enterprise operations and corridors.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-[#000000] rounded-xl border border-[#272727] hover:border-brand_cyan/60 hover:shadow-xl transition-all w-full flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    className="w-full h-[11.063rem] object-cover border-b border-[#272727] rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                    alt={project.title}
                  />
                  <div className="px-[1.063rem] pt-[1.063rem] pb-4">
                    <span className="text-[11px] font-mono text-brand_cyan block mb-1">
                      {project.category}
                    </span>
                    <h4 className="font-medium text-white text-[15px] lg:text-[16px] leading-snug mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#9C9C9C] line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-[1.063rem] pb-5">
                  <Link
                    href="/contact#site-survey"
                    className="relative text-[#008FFF] text-[15px] font-bold inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full hover:text-brand_cyan"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: ENTERPRISE SECTORS & CLIENTS (Exact HubexTech Speech-Bubble Cards with Cyan Quotes & Bottom Triangle Pointer)
         ===================================================================== */}
      <section className="py-[50px] lg:py-[70px]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div>
            <h2 className="text-[24px] lg:text-[36px] mb-2 font-semibold text-brand_cyan">
              Industries &amp; Enterprise Sectors
            </h2>
            <p className="text-[16px] lg:text-[1.125rem] mb-[2.625rem] font-normal text-[#D3D3D3]">
              Trusted by organizations, hospitals, banks, universities, and
              commercial hubs across metropolitan corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_AND_SECTORS.map((sector) => (
              <div key={sector.id} className="relative flex flex-col justify-between">
                {/* HubexTech Speech Bubble Box */}
                <div className="mt-6 bg-[#000000] border border-[#272727] px-[24px] py-[32px] text-[#9C9C9C] rounded-xl relative flex-1">
                  {/* Double Cyan Quote / Sector Icon Badge at Top-Left (Matching HubexTech comma.png) */}
                  <div className="absolute left-6 -top-5 flex items-center gap-1 bg-[#050505] px-2 py-1 rounded-md border border-[#1A545E] text-brand_cyan font-serif text-3xl leading-none select-none">
                    “
                  </div>

                  <p className="text-[14px] leading-[1.55rem] text-[#9C9C9C] mb-4">
                    {sector.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1a1a1a]">
                    {sector.typicalDeployments.map((dep) => (
                      <span
                        key={dep}
                        className="text-[11px] font-mono text-brand_cyan bg-[#1591EE15] px-2 py-0.5 rounded"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>

                  {/* Exact HubexTech Bottom Speech-Bubble Triangle Pointer */}
                  <div className="absolute -bottom-[16px] left-[28px] w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent border-t-[#272727]" />
                  <div className="absolute -bottom-[14px] left-[29px] w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#000000]" />
                </div>

                {/* Avatar + Sector Name Below Bubble */}
                <div className="flex items-center gap-3 mt-6 ml-[24px]">
                  <div className="w-9 h-9 rounded-full border border-cyan-400 bg-[#0A0A0A] flex items-center justify-center text-brand_cyan shrink-0">
                    <ServiceIcon name={sector.iconName} className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-[15px] lg:text-[1.15rem] text-white">
                    {sector.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: TRUST & SLA RECOGNITION BANNER (Exact HubexTech Gradient Banner)
         ===================================================================== */}
      <section className="py-[30px] md:py-[60px]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] flex items-center justify-center">
          <div className="w-full rounded-[16px] border border-[#272727] overflow-hidden bg-hubex-banner px-6 md:px-[5rem] py-10 md:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 className="text-white text-center lg:text-start text-[24px] lg:text-[2.5rem] font-semibold mb-4">
                  SLA &amp; Carrier Assurance
                </h2>
                <div className="text-center lg:text-start">
                  <p className="text-[#FFFFFFE5] text-[16px] lg:text-[1.4rem] leading-8 max-w-xl">
                    Backed by a contractual 99.99% uptime SLA, &lt;50ms
                    self-healing optical ring failover, and 24/7/365 NOC
                    telemetry.
                  </p>
                  <Link
                    href="/why-choose-us"
                    className="mt-5 inline-flex items-center justify-center bg-white text-[#000C0C] text-sm lg:text-[16px] font-semibold px-[24px] py-[10px] h-[44px] rounded-lg hover:text-white hover:bg-brand_cyan transition"
                  >
                    Explore SLA Standards
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center text-center lg:items-end lg:col-span-4 relative">
                <div className="w-32 h-32 rounded-2xl bg-[#050505]/90 border-2 border-brand_cyan flex flex-col items-center justify-center p-4 shadow-2xl">
                  <span className="text-xs font-mono text-brand_cyan uppercase">
                    UPTIME SLA
                  </span>
                  <span className="text-2xl font-extrabold text-white mt-1">
                    99.99%
                  </span>
                  <span className="text-[10px] text-[#D3D3D3] mt-1">
                    1:1 Pure Fiber
                  </span>
                </div>

                <div className="flex flex-col items-center mt-3">
                  <span className="text-white font-semibold text-[18px]">
                    5.0 Carrier Grade
                  </span>
                  <div className="flex justify-center items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#FFB800"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: ENTERPRISE BANDWIDTH & SLA CONFIGURATOR (Exact HubexTech "Scale Your Team / Quick Savings Estimate" Section)
         ===================================================================== */}
      <section
        id="bandwidth-estimator"
        className="relative md:py-24 py-16 border-t border-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            {/* Left: Value Proposition */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5 mb-6">
                <span className="text-brand_cyan text-xs font-semibold uppercase tracking-wide">
                  Dedicated Optical Provisioning
                </span>
              </div>
              <h2 className="text-white text-[1.75rem] lg:text-[2.25rem] font-semibold leading-tight mb-4">
                Scale Your Bandwidth.
                <br />
                <span className="text-brand_cyan">Eliminate Contention.</span>
              </h2>
              <p className="text-[#D3D3D3] text-base mb-6 max-w-md">
                Unshared 1:1 subterranean optical fiber from our 100G metro ring
                with zero FUP and &lt;50ms protection.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Dedicated 1:1 bandwidth — zero shared contention",
                  "24/7/365 NOC Desk — <15m incident response",
                  "Self-healing metro optical ring (<50ms failover)",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[#D3D3D3] text-sm"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0"
                    >
                      <circle cx="12" cy="12" r="12" fill="#1591EE22" />
                      <path
                        d="M7 12.5l3.5 3.5 6.5-7"
                        stroke="#2EC1D9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/why-choose-us"
                className="text-brand_cyan text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                <span>See full technical comparison</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#2EC1D9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Right: Exact HubexTech Interactive Widget Card (bg-[#0D0D0D] border-[#272727] rounded-2xl p-8) */}
            <div className="bg-[#0D0D0D] border border-[#272727] rounded-2xl p-8">
              <div className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-6">
                Quick Architecture &amp; SLA Configurator
              </div>

              <div className="mb-6">
                <label
                  htmlFor="tier-select"
                  className="text-[#D3D3D3] text-sm font-medium block mb-2"
                >
                  Enterprise Circuit Tier
                </label>
                <select
                  id="tier-select"
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full bg-[#111] border border-[#272727] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand_cyan"
                >
                  <option value="corporate">
                    Corporate Internet Solutions (Subterranean Fiber)
                  </option>
                  <option value="dia">
                    Dedicated Internet Access — 1:1 Symmetrical DIA
                  </option>
                  <option value="p2p">
                    Point-to-Point Layer-2 Metro Optical Wave
                  </option>
                  <option value="dwdm">
                    100G DWDM Core / Multi-Branch MPLS Ring
                  </option>
                </select>
              </div>

              <div className="text-center py-6 border-y border-[#1a1a1a] mb-6">
                <div className="text-[#888] text-xs mb-2">
                  Dedicated Symmetrical Line Rate Capacity
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {currentTier.headline}
                </div>
                <div className="text-brand_cyan text-sm font-medium">
                  {currentTier.subline}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6 text-center text-xs">
                <div className="bg-[#111] rounded-lg p-3">
                  <div className="text-[#777] mb-1">Conventional ISP</div>
                  <div className="text-white font-semibold">
                    {currentTier.conventional}
                  </div>
                </div>
                <div className="bg-[#111] rounded-lg p-3">
                  <div className="text-[#777] mb-1">{BRAND_INFO.shortName}</div>
                  <div className="text-brand_cyan font-semibold">
                    {currentTier.earthI}
                  </div>
                </div>
              </div>

              <Link
                href="/contact#site-survey"
                className="w-full bg-[#1591EE] hover:bg-brand_cyan hover:text-black text-white text-center font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm block"
              >
                Request Free Site Survey &amp; Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
