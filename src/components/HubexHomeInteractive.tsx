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
          SECTION 2: HERO SECTION (Moved Higher Up Closer to Navbar)
         ===================================================================== */}
      <section className="relative flex items-start justify-center overflow-hidden">
        {/* Subtle Background Tech Grid & Cyan Glow */}
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] rounded-full bg-[#008FFF]/15 blur-[130px] pointer-events-none" />

        <div className="relative flex items-start justify-center w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-3 pb-10 lg:pt-4 lg:pb-14">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full items-center">
            {/* Left Column: Minimal, Eye-Catching Hero Content with "GET THE SPEED, YOU NEED!" */}
            <div className="relative flex flex-col justify-center items-start w-full">
              <div className="relative z-10 text-white space-y-5">
                {/* Slim Live Network Badge */}
                <div className="inline-flex items-center gap-2.5 bg-white/90 border border-[#008FFF]/35 shadow-[0_6px_20px_rgba(0,143,255,0.12)] rounded-full px-4 py-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
                  </span>
                  <span className="text-[#0284C7] text-xs font-extrabold uppercase tracking-wider">
                    {BRAND_INFO.companyName}
                  </span>
                </div>

                {/* Unique Hero Heading: "GET THE SPEED, YOU NEED!" */}
                <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] leading-[1.06] font-black tracking-tight uppercase text-slate-900">
                  GET THE SPEED, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7] drop-shadow-sm">
                    YOU NEED!
                  </span>
                </h1>

                {/* Minimal 1-Line Subtitle */}
                <p className="text-[15px] lg:text-[17px] text-[#D3D3D3] font-medium leading-relaxed max-w-md">
                  Pure 1:1 symmetrical optical fiber with 99.99% uptime SLA &amp; 24/7 NOC support.
                </p>

                {/* Dual CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-[#008FFF] to-[#0FA4E8] hover:from-[#0284C7] hover:to-[#008FFF] text-white text-[15px] font-bold rounded-full h-[48px] px-8 inline-flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(0,143,255,0.32)] transition-all whitespace-nowrap"
                  >
                    <span>Get Connected</span>
                    <span>→</span>
                  </Link>

                  <Link
                    href="/services"
                    className="bg-white/90 text-slate-900 text-[15px] border-2 border-[#008FFF]/40 hover:border-[#008FFF] rounded-full font-bold hover:bg-[#008FFF] hover:text-white transition-all h-[48px] px-7 inline-flex items-center justify-center shadow-sm whitespace-nowrap"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Stationary Center Logo + 5 Points Orbiting Smoothly in a 360° Circle */}
            <div className="relative flex items-center justify-center w-full pt-0 pb-2">
              <div className="relative flex items-center justify-center w-[345px] md:w-[440px] h-[390px] md:h-[450px]">
                {/* 3D React Three Fiber Canvas inside the Orbital Ring */}
                <div className="absolute inset-0 z-0 opacity-85">
                  <FiberNetworkCanvas />
                </div>

                {/* Rotating Outer Cybernetic HUD Ring */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-[310px] md:w-[390px] h-[310px] md:h-[390px] animate-rotateImage pointer-events-none z-10"
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
                        stopOpacity="0.35"
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
                    strokeWidth="2.2"
                    strokeDasharray="28 14 8 14"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="154"
                    fill="none"
                    stroke="#2EC1D9"
                    strokeWidth="1.4"
                    strokeDasharray="6 12"
                    strokeOpacity="0.65"
                  />
                </svg>

                {/* Stationary Center Logo Emblem (Logo stays fixed in the center) */}
                <div className="absolute z-10 flex items-center justify-center">
                  <div className="w-[165px] md:w-[205px] h-[165px] md:h-[205px] rounded-full bg-white/95 border-2 border-brand_cyan/60 shadow-[0_12px_45px_rgba(14,165,233,0.28)] animate-breathe flex items-center justify-center p-6 backdrop-blur-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo-color.png"
                      alt="EARTH I Broadband (Pvt.) Ltd."
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* 5 Service Points Revolving Smoothly in a 360° Circle Around the Center Logo */}
                <div className="absolute w-[290px] md:w-[370px] h-[290px] md:h-[370px] rounded-full animate-[spin_24s_linear_infinite] z-20 pointer-events-none">
                  {[
                    {
                      label: "Dedicated Internet (1:1 DIA)",
                      top: "0%",
                      left: "50%",
                      dotColor: "bg-brand_cyan shadow-[0_0_8px_#2EC1D9]",
                    },
                    {
                      label: "Cloud & Managed IT",
                      top: "34.5%",
                      left: "97.5%",
                      dotColor: "bg-[#008FFF] shadow-[0_0_8px_#008FFF]",
                    },
                    {
                      label: "Cybersecurity & 24/7 NOC",
                      top: "90.5%",
                      left: "79.4%",
                      dotColor: "bg-brand_cyan shadow-[0_0_8px_#2EC1D9]",
                    },
                    {
                      label: "Point-to-Point Optical (<1ms)",
                      top: "90.5%",
                      left: "20.6%",
                      dotColor: "bg-[#008FFF] shadow-[0_0_8px_#008FFF]",
                    },
                    {
                      label: "MPLS & Multi-Branch VPN",
                      top: "34.5%",
                      left: "2.5%",
                      dotColor: "bg-brand_cyan shadow-[0_0_8px_#2EC1D9]",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{ top: item.top, left: item.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      {/* Counter-rotating wrapper keeps the pill upright while orbiting the circle */}
                      <div className="animate-[spin_24s_linear_infinite_reverse] bg-white/95 backdrop-blur-md border border-cyan-500 shadow-[0_8px_24px_rgba(14,165,233,0.2)] text-[10px] xl:text-[12.5px] px-3 py-1.5 rounded-full whitespace-nowrap">
                        <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                          <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: REGIONAL OPTICAL GRID MARQUEE STRIP (Fast Slider + Specific Cities)
         ===================================================================== */}
      <section className="py-[40px] md:py-[65px] border-t border-b border-[#141414] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-[50px]">
          <div className="flex flex-col items-center text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Regional Optical Fiber Backbone
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-slate-900 leading-tight max-w-3xl">
              Illuminating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                The Digital Horizon
              </span>{" "}
              With Pure Optical Fiber
            </h2>

            <p className="text-sm sm:text-base text-[#D3D3D3] mt-2.5 max-w-2xl">
              Connecting major commercial, industrial, and metropolitan hubs with 100G carrier-grade speed.
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex gap-4 sm:gap-5 animate-marquee whitespace-nowrap py-1">
              {[
                "Lahore",
                "Sheikhupura",
                "Kala Shah Kaku",
                "Gujrat",
                "Kasur",
                "Narowal",
                "Faisalabad",
                "Rawalpindi",
                "Multan",
                "Gujranwala",
                "Sialkot",
                "Bahawalpur",
                "Sargodha",
                "Sahiwal",
                "Jhelum",
                "Lahore",
                "Sheikhupura",
                "Kala Shah Kaku",
                "Gujrat",
                "Kasur",
                "Narowal",
                "Faisalabad",
                "Rawalpindi",
                "Multan",
                "Gujranwala",
                "Sialkot",
                "Bahawalpur",
                "Sargodha",
                "Sahiwal",
                "Jhelum",
              ].map((city, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#000000] border border-[#272727] hover:border-[#008FFF] shadow-sm hover:shadow-md transition-all text-sm sm:text-[15px] font-bold text-slate-800 shrink-0 group"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand_cyan opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
                  </span>
                  <span>{city}</span>
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
