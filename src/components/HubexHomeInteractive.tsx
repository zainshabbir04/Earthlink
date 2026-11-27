"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BRAND_INFO,
  SERVICES_DATA,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";
import AnimatedCounter from "./AnimatedCounter";
import CTASection from "./CTASection";

const HOME_FAQS = [
  {
    tag: "Optical Fiber",
    highlight: "1:1 Symmetrical • Zero FUP • Zero Throttling",
    q: "What makes EARTHLINK Broadband different from conventional broadband?",
    a: "We deliver 100% subterranean armored optical fiber with strict 1:1 symmetrical upload and download speeds, zero Fair Usage Policy (FUP) caps, and zero peak-hour throttling.",
  },
  {
    tag: "Uptime & SLA",
    highlight: "99.9%–99.99% SLA • Sub-50ms Auto-Failover",
    q: "What uptime SLA and automatic failover protection do you provide?",
    a: "Our enterprise links carry a contractual 99.9% to 99.99% uptime SLA backed by dual-path self-healing 100G metro optical rings with automated sub-50ms protection switching.",
  },
  {
    tag: "24/7 NOC",
    highlight: "Live OTDR Telemetry • <15m Incident Response",
    q: "How does your 24/7/365 NOC support handle network faults?",
    a: "Our live Network Operations Center monitors optical light levels continuously using automated OTDR telemetry, delivering under-15-minute incident response and rapid field dispatch.",
  },
  {
    tag: "Enterprise Routing",
    highlight: "Dual-Stack IPv4/IPv6 • BGP & Private MPLS",
    q: "Do you support static IPv4/IPv6, BGP peering, and multi-branch MPLS?",
    a: "Yes. Our Dedicated Internet Access (DIA) and MPLS circuits support native Dual-Stack IPv4/IPv6, enterprise ASN BGP multi-homing, and isolated Layer-2/Layer-3 private branch interconnectivity.",
  },
  {
    tag: "Regional Reach",
    highlight: "15+ Commercial & Industrial Corridors",
    q: "Which cities and commercial corridors are covered?",
    a: "Our optical network serves major business and industrial hubs including Lahore, Sheikhupura, Kala Shah Kaku, Gujrat, Kasur, Narowal, Faisalabad, Rawalpindi, Multan, Gujranwala, Sialkot, and surrounding corridors.",
  },
  {
    tag: "Feasibility Survey",
    highlight: "OSP Engineering Site Survey & Fiber Drop",
    q: "How do I request an optical fiber feasibility survey for my office?",
    a: "Click 'Get in Touch' or 'Request Site Survey' on our Contact page with your building address and target bandwidth tier; our OSP engineering team will verify underground splice proximity promptly.",
  },
];

export default function HubexHomeInteractive() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // All 9 radial hub-and-spoke service nodes around the center hub
  const hubServices = SERVICES_DATA;

  return (
    <div className="bg-black-gradient text-white">
      {/* =====================================================================
          SECTION 2: HERO IMAGE BANNER (Full-Bleed Pakistan Optical Fiber Globe Banner + Exact Text & Buttons Overlay)
         ===================================================================== */}
      <section className="relative w-full overflow-hidden min-h-[560px] sm:min-h-[600px] lg:min-h-[660px] flex items-center">
        {/* Full-Width Hero Banner Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-banner.jpg"
          alt="EARTHLINK Broadband Pakistan Optical Fiber Network"
          className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
        />

        {/* Subtle Top & Left Gradient Scrim for Crisp Transparent Navbar & Text Contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030B16]/85 via-[#030B16]/48 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#030B16]/65 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030B16]/40 to-transparent" />

        {/* Exact Hero Text & Buttons Overlay on Left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-[20px] lg:px-[50px] pt-24 pb-12 lg:pt-28 lg:pb-16">
          <div className="max-w-[520px] space-y-3.5">
            {/* Full Company Name Hero Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 border border-sky-300/35 backdrop-blur-md shadow-[0_6px_20px_rgba(0,143,255,0.2)] rounded-full px-4 py-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-300" />
              </span>
              <span className="!text-sky-100 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em]">
                {BRAND_INFO.companyName}
              </span>
            </div>

            {/* Bold Hero Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.1rem] leading-[1.06] font-black tracking-normal uppercase !text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
              CONNECTING <br />
              BUSINESSES. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#00A8FF] to-[#67E8F9]">
                POWERING <br />
                DIGITAL GROWTH.
              </span>
            </h1>

            {/* Tagline Strip */}
            <p className="text-[10.5px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.06em] !text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] pt-0.5 sm:whitespace-nowrap">
              INTERNET CONNECTIVITY | ENTERPRISE NETWORKING | IT INFRASTRUCTURE
            </p>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-[14.5px] lg:text-[15px] !text-sky-100/90 font-medium leading-relaxed max-w-[460px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              Earthlink delivers reliable internet connectivity, advanced networking and comprehensive IT infrastructure solutions designed to keep businesses connected, productive and secure.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/services"
                className="bg-gradient-to-r from-[#008FFF] to-[#0FA4E8] hover:from-[#0284C7] hover:to-[#008FFF] !text-white text-xs sm:text-[13px] font-bold uppercase tracking-wider rounded-full h-[46px] px-7 inline-flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(0,143,255,0.42)] transition-all whitespace-nowrap"
              >
                <span>EXPLORE OUR SOLUTIONS</span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white !text-white hover:!text-slate-900 text-xs sm:text-[13px] uppercase tracking-wider border border-white/50 hover:border-white backdrop-blur-md rounded-full font-bold transition-all h-[46px] px-7 inline-flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <span>TALK TO OUR EXPERTS</span>
                <span>→</span>
              </Link>
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
                Regional Optical Connectivity
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-normal text-slate-900 leading-snug max-w-3xl">
              Illuminating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                The Digital Horizon
              </span>{" "}
              With Pure Optical Connectivity
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
          SECTION 3B: ANIMATED INFRASTRUCTURE COUNTERS STRIP (Verified Optical Metrics)
         ===================================================================== */}
      <section className="py-10 lg:py-12 relative">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                value: "1,200+",
                unit: "KM",
                label: "Armored Metro Core",
                sub: "Subterranean optical fiber",
              },
              {
                value: "100G",
                unit: "RING",
                label: "Optical Backbone",
                sub: "Multi-terabit core fabric",
              },
              {
                value: "99.99%",
                unit: "SLA",
                label: "Contractual Uptime",
                sub: "< 50ms auto-failover",
              },
              {
                value: "< 15m",
                unit: "NOC",
                label: "Incident Response",
                sub: "24/7/365 live telemetry",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-[#008FFF] p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(0,143,255,0.16)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008FFF] to-[#2EC1D9] opacity-80 group-hover:opacity-100" />
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] via-[#0284C7] to-[#008FFF]">
                    <AnimatedCounter value={item.value} duration={1700} />
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#008FFF]/10 text-[#0284C7]">
                    {item.unit}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-2.5">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: OUR SERVICES (Light-Blended ISP Telecom Skyline Background + Animated Optical Fiber Pulses + Interactive Nodes)
         ===================================================================== */}
      <section className="pt-[50px] pb-10 lg:pt-[80px] lg:pb-12 relative overflow-hidden">
        {/* Full-Section User ISP Telecom Skyline Background Image (Light-Blended Like Previous Style) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services-isp-bg.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        {/* Soft White-Sky Veil + Seamless Top/Bottom Fades for Crisp Text Visibility */}
        <div className="pointer-events-none absolute inset-0 bg-white/45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#F4F9FF] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#F4F9FF] to-transparent" />

        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
          {/* Eye-Catching Centered Header */}
          <div className="flex flex-col items-center text-center mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#008FFF]/35 shadow-sm mb-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Optical Service Ecosystem
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                Enterprise Services
              </span>
            </h2>
            <p className="text-slate-800 font-semibold text-sm sm:text-base max-w-xl mt-2 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
              Carrier-grade optical connectivity, cloud, and cybersecurity engineered for zero-downtime enterprise operations.
            </p>
          </div>

          {/* Desktop Animated Radial Hub-and-Spoke Diagram (All 9 Services: 1 Top + 4 Left + 4 Right) */}
          <div className="hidden lg:block relative pt-2 pb-2">
            <div className="relative max-w-5xl mx-auto h-[540px] flex items-center justify-center">
              {/* Animated SVG Optical Fiber Connector Lines + Traveling Signal Light Dots */}
              <svg
                viewBox="0 0 1000 540"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              >
                <defs>
                  <linearGradient id="srvFiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#008FFF" />
                    <stop offset="50%" stopColor="#2EC1D9" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>
                  <filter id="glowDot" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[
                  "M500 270 L500 82",
                  "M500 270 L390 118 L285 118",
                  "M500 270 L345 218 L240 218",
                  "M500 270 L345 322 L240 322",
                  "M500 270 L390 422 L285 422",
                  "M500 270 L610 118 L715 118",
                  "M500 270 L655 218 L760 218",
                  "M500 270 L655 322 L760 322",
                  "M500 270 L610 422 L715 422",
                ].map((pathD, i) => (
                  <g key={i}>
                    {/* Base Track */}
                    <path
                      d={pathD}
                      stroke="#0FA4E8"
                      strokeOpacity="0.24"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    {/* Animated Flowing Optical Pulse */}
                    <path
                      d={pathD}
                      stroke="url(#srvFiberGrad)"
                      strokeWidth="2.4"
                      fill="none"
                      className="service-fiber-pulse"
                    />
                    {/* Traveling Glowing Signal Orb */}
                    <circle r="4.5" fill="#008FFF" filter="url(#glowDot)">
                      <animateMotion
                        dur={`${2.6 + (i % 3) * 0.45}s`}
                        repeatCount="indefinite"
                        path={pathD}
                      />
                    </circle>
                  </g>
                ))}
              </svg>

              {/* Center 3D Glowing Core Hub Emblem */}
              <div className="relative z-20 flex items-center justify-center">
                <div className="w-40 h-40 rounded-3xl bg-white/95 border-2 border-[#008FFF] shadow-[0_20px_50px_rgba(0,143,255,0.28)] animate-breathe flex flex-col items-center justify-center text-center p-4 backdrop-blur-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-color.png"
                    alt="EARTHLINK Broadband"
                    className="w-28 h-auto object-contain mb-1.5"
                  />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0284C7] bg-[#008FFF]/10 px-2.5 py-0.5 rounded-full">
                    Services Hub
                  </span>
                </div>
              </div>

              {/* 9 Pixel-Aligned Service Nodes Anchored Exactly on SVG Line Endpoints */}
              {[
                {
                  srv: hubServices[0],
                  left: "50%",
                  top: "15.19%",
                  labelPos: "bottom-full mb-2.5 left-1/2 -translate-x-1/2",
                  tooltipPos: "top-full mt-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[1],
                  left: "28.5%",
                  top: "21.85%",
                  labelPos: "right-full mr-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[2],
                  left: "24%",
                  top: "40.37%",
                  labelPos: "right-full mr-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[3],
                  left: "24%",
                  top: "59.63%",
                  labelPos: "right-full mr-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[4],
                  left: "28.5%",
                  top: "78.15%",
                  labelPos: "right-full mr-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[5],
                  left: "71.5%",
                  top: "21.85%",
                  labelPos: "left-full ml-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[6],
                  left: "76%",
                  top: "40.37%",
                  labelPos: "left-full ml-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[7],
                  left: "76%",
                  top: "59.63%",
                  labelPos: "left-full ml-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
                {
                  srv: hubServices[8],
                  left: "71.5%",
                  top: "78.15%",
                  labelPos: "left-full ml-3.5 top-1/2 -translate-y-1/2",
                  tooltipPos: "bottom-full mb-3 left-1/2 -translate-x-1/2",
                },
              ].map(({ srv, left, top, labelPos, tooltipPos }) => (
                <Link
                  key={srv.id}
                  href={`/services#${srv.id}`}
                  style={{ left, top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 hover:z-50"
                >
                  {/* Service Heading Pill (High-Contrast Brand Blue Background for Crisp Visibility) */}
                  <span
                    style={{ color: "#FFFFFF" }}
                    className={`absolute ${labelPos} whitespace-nowrap font-bold text-sm xl:text-[15px] bg-gradient-to-r from-[#008FFF] to-[#0284C7] group-hover:from-[#0284C7] group-hover:to-[#0A192F] px-4 py-1.5 rounded-full border border-sky-300/60 shadow-[0_8px_22px_rgba(0,143,255,0.38)] group-hover:shadow-[0_12px_28px_rgba(2,132,199,0.5)] transition-all duration-300`}
                  >
                    {srv.shortTitle}
                  </span>

                  {/* Centered Icon Node (Exact SVG Endpoint Anchor) */}
                  <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-white to-[#F0F9FF] border-2 border-[#008FFF]/50 group-hover:border-[#008FFF] group-hover:from-[#008FFF] group-hover:to-[#0FA4E8] group-hover:scale-110 flex items-center justify-center text-[#008FFF] group-hover:text-white transition-all duration-300 shadow-[0_10px_24px_rgba(0,143,255,0.22)]">
                    <ServiceIcon name={srv.iconName} className="w-6 h-6" />
                  </div>

                  {/* Solid Crisp White 3D Tooltip Popup (100% Opaque & Always On Top) */}
                  <div
                    className={`absolute ${tooltipPos} w-[310px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-[90] pointer-events-none`}
                  >
                    <div className="relative bg-white border-2 border-[#008FFF] p-4 rounded-2xl shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#008FFF] bg-[#008FFF]/10 px-2 py-0.5 rounded-full mb-1.5">
                        {srv.category}
                      </span>
                      <p className="text-slate-900 font-extrabold text-sm mb-1 leading-snug">
                        {srv.title}
                      </p>
                      <p className="text-xs leading-relaxed text-slate-700 font-medium">
                        {srv.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Animated 3D Cards List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {SERVICES_DATA.map((srv) => (
              <Link
                key={srv.id}
                href={`/services#${srv.id}`}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/95 border border-slate-200 hover:border-[#008FFF] shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#008FFF]/10 border border-[#008FFF]/30 flex items-center justify-center text-[#008FFF] shrink-0">
                  <ServiceIcon name={srv.iconName} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 text-base font-bold">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {srv.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7A: HARDWARE & TECHNOLOGY PARTNERS (Eye-Catching Frosted Logo Slider)
         ===================================================================== */}
      <section className="py-[45px] lg:py-[65px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Global Hardware Ecosystem
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-slate-900">
              Hardware &amp; Technology{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                Partners
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#D3D3D3] mt-2 max-w-xl">
              Powered by carrier-grade optical routing, switching, and enterprise infrastructure leaders.
            </p>
          </div>

          <div className="relative overflow-hidden py-6">
            {/* Soft Left & Right Edge Fade Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F9FF] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F9FF] to-transparent z-10" />

            <div className="flex items-center gap-6 sm:gap-8 animate-marqueeMedium hover:[animation-play-state:paused] w-max">
              {[
                { name: "Juniper Networks", src: "/partners/juniper-networks.png" },
                { name: "Cisco", src: "/partners/cisco.png" },
                { name: "Huawei", src: "/partners/huawei.png" },
                { name: "Dell", src: "/partners/dell.png" },
                { name: "HP", src: "/partners/hp.png" },
                { name: "UltraTech", src: "/partners/ultratech.png" },
                { name: "Redtag", src: "/partners/redtag.png" },
                { name: "Microtech", src: "/partners/microtech-inc.png" },
                { name: "ADMA Tech", src: "/partners/adma-tech.png" },
                { name: "ABC Communication", src: "/partners/abc-communication-network.png" },
                { name: "Juniper Networks", src: "/partners/juniper-networks.png" },
                { name: "Cisco", src: "/partners/cisco.png" },
                { name: "Huawei", src: "/partners/huawei.png" },
                { name: "Dell", src: "/partners/dell.png" },
                { name: "HP", src: "/partners/hp.png" },
                { name: "UltraTech", src: "/partners/ultratech.png" },
                { name: "Redtag", src: "/partners/redtag.png" },
                { name: "Microtech", src: "/partners/microtech-inc.png" },
                { name: "ADMA Tech", src: "/partners/adma-tech.png" },
                { name: "ABC Communication", src: "/partners/abc-communication-network.png" },
              ].map((partner, idx) => (
                <div
                  key={`partner-${idx}`}
                  title={partner.name}
                  className={`group relative w-[106px] h-[106px] sm:w-[118px] sm:h-[118px] rounded-full bg-gradient-to-b from-white via-[#F8FBFF] to-[#EAF5FF] border-2 border-[#008FFF]/25 hover:border-[#008FFF] shadow-[0_10px_24px_rgba(0,143,255,0.12)] hover:shadow-[0_16px_36px_rgba(0,143,255,0.26)] flex items-center justify-center p-4 shrink-0 transition-all duration-300 hover:scale-110 ${
                    idx % 2 === 0 ? "-translate-y-2" : "translate-y-2"
                  }`}
                >
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#0FA4E8]/30 group-hover:border-[#008FFF]/60 transition-colors pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.src}
                    alt={partner.name}
                    loading="lazy"
                    className="max-h-[56px] max-w-[74px] sm:max-h-[64px] sm:max-w-[84px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7B: TRUSTED BY LEADING ORGANIZATIONS (Dual Opposite-Direction Eye-Catching Logo Sliders)
         ===================================================================== */}
      <section className="py-[40px] lg:py-[65px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Enterprise Clientele
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-slate-900">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                Leading Organizations
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#D3D3D3] mt-2 max-w-xl">
              Delivering 99.99% SLA optical connectivity to premier hospitals, universities, hotels, and enterprises.
            </p>
          </div>

          {/* Row 1: Unique Floating Circular Medallion Wave (Logos Only, Larger Size, Scrolling Left) */}
          <div className="relative overflow-hidden py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F9FF] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F9FF] to-transparent z-10" />

            <div className="flex items-center gap-6 sm:gap-8 animate-marqueeMedium hover:[animation-play-state:paused] w-max">
              {[
                { name: "Ghurki Trust Hospital", src: "/clients/ghurki-trust-hospital.png" },
                { name: "Ramada Hotel & Suites", src: "/clients/ramada.png" },
                { name: "Hotel One", src: "/clients/hotel-one.png" },
                { name: "Zameen.com", src: "/clients/zameen-com.png" },
                { name: "The Trust School", src: "/clients/the-trust-school.png" },
                { name: "Cheezious", src: "/clients/cheezious.png" },
                { name: "Lahore Leads University", src: "/clients/lahore-leads-university.png" },
                { name: "Parkview City", src: "/clients/parkview-city.png" },
                { name: "Askari Guards", src: "/clients/askari-guards.png" },
                { name: "WebSols Pakistan", src: "/clients/websols-pakistan.png" },
                { name: "Medix Medical Billing", src: "/clients/medix-medical-billing.png" },
                { name: "Ghurki Trust Hospital", src: "/clients/ghurki-trust-hospital.png" },
                { name: "Ramada Hotel & Suites", src: "/clients/ramada.png" },
                { name: "Hotel One", src: "/clients/hotel-one.png" },
                { name: "Zameen.com", src: "/clients/zameen-com.png" },
                { name: "The Trust School", src: "/clients/the-trust-school.png" },
                { name: "Cheezious", src: "/clients/cheezious.png" },
                { name: "Lahore Leads University", src: "/clients/lahore-leads-university.png" },
                { name: "Parkview City", src: "/clients/parkview-city.png" },
                { name: "Askari Guards", src: "/clients/askari-guards.png" },
                { name: "WebSols Pakistan", src: "/clients/websols-pakistan.png" },
                { name: "Medix Medical Billing", src: "/clients/medix-medical-billing.png" },
              ].map((client, idx) => (
                <div
                  key={`client-r1-${idx}`}
                  title={client.name}
                  className={`group relative w-[106px] h-[106px] sm:w-[118px] sm:h-[118px] rounded-full bg-gradient-to-b from-white via-[#F8FBFF] to-[#EAF5FF] border-2 border-[#008FFF]/25 hover:border-[#008FFF] shadow-[0_10px_24px_rgba(0,143,255,0.12)] hover:shadow-[0_16px_36px_rgba(0,143,255,0.26)] flex items-center justify-center p-4 shrink-0 transition-all duration-300 hover:scale-110 ${
                    idx % 2 === 0 ? "-translate-y-2" : "translate-y-2"
                  }`}
                >
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#0FA4E8]/30 group-hover:border-[#008FFF]/60 transition-colors pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-[56px] max-w-[74px] sm:max-h-[64px] sm:max-w-[84px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Opposite-Direction Floating Circular Medallion Wave (Logos Only, Larger Size, Scrolling Right) */}
          <div className="relative overflow-hidden py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4F9FF] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4F9FF] to-transparent z-10" />

            <div className="flex items-center gap-6 sm:gap-8 animate-marqueeReverse hover:[animation-play-state:paused] w-max">
              {[
                { name: "Swiss Pro", src: "/clients/swiss-pro.png" },
                { name: "Meraki Matrix", src: "/clients/meraki-matrix.png" },
                { name: "Munir Industry", src: "/clients/munir-industry.png" },
                { name: "Hayyat Luxury Apartments", src: "/clients/hayyat-luxury-apartments.png" },
                { name: "Tariq Electric", src: "/clients/tariq-electric.png" },
                { name: "4S Security", src: "/clients/4s.png" },
                { name: "Madina Collar", src: "/clients/madina-collar.png" },
                { name: "OriginNet", src: "/clients/originnet.png" },
                { name: "FMP", src: "/clients/fmp.png" },
                { name: "Naimat Khana", src: "/clients/naimat-khana.png" },
                { name: "MC Group", src: "/clients/mc.png" },
                { name: "Swiss Pro", src: "/clients/swiss-pro.png" },
                { name: "Meraki Matrix", src: "/clients/meraki-matrix.png" },
                { name: "Munir Industry", src: "/clients/munir-industry.png" },
                { name: "Hayyat Luxury Apartments", src: "/clients/hayyat-luxury-apartments.png" },
                { name: "Tariq Electric", src: "/clients/tariq-electric.png" },
                { name: "4S Security", src: "/clients/4s.png" },
                { name: "Madina Collar", src: "/clients/madina-collar.png" },
                { name: "OriginNet", src: "/clients/originnet.png" },
                { name: "FMP", src: "/clients/fmp.png" },
                { name: "Naimat Khana", src: "/clients/naimat-khana.png" },
                { name: "MC Group", src: "/clients/mc.png" },
              ].map((client, idx) => (
                <div
                  key={`client-r2-${idx}`}
                  title={client.name}
                  className={`group relative w-[106px] h-[106px] sm:w-[118px] sm:h-[118px] rounded-full bg-gradient-to-b from-white via-[#F8FBFF] to-[#EAF5FF] border-2 border-[#008FFF]/25 hover:border-[#008FFF] shadow-[0_10px_24px_rgba(0,143,255,0.12)] hover:shadow-[0_16px_36px_rgba(0,143,255,0.26)] flex items-center justify-center p-4 shrink-0 transition-all duration-300 hover:scale-110 ${
                    idx % 2 === 0 ? "translate-y-2" : "-translate-y-2"
                  }`}
                >
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#0FA4E8]/30 group-hover:border-[#008FFF]/60 transition-colors pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.src}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-[56px] max-w-[74px] sm:max-h-[64px] sm:max-w-[84px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: UNIFIED ENTERPRISE CTA CARD (Directly Above FAQs — Shared Across All Pages)
         ===================================================================== */}
      <CTASection />

      {/* =====================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (Unique Split-Stage Interactive FAQ Desk)
         ===================================================================== */}
      <section
        id="faqs"
        className="relative py-16 lg:py-24 border-t border-sky-100/80 overflow-hidden"
      >
        {/* Soft Ambient Optical Glow */}
        <div className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-[#008FFF]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-24 left-0 w-[360px] h-[360px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-[20px] lg:px-[50px]">
          <div className="flex flex-col items-center text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Quick Answers
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
                Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-xl font-medium">
              Everything you need to know about our subterranean optical fiber, 1:1 DIA speeds, SLAs, and 24/7 NOC support.
            </p>
          </div>

          {(() => {
            const activeIdx = openFaq ?? 0;
            const activeFaq = HOME_FAQS[activeIdx];
            const prevIdx = (activeIdx - 1 + HOME_FAQS.length) % HOME_FAQS.length;
            const nextIdx = (activeIdx + 1) % HOME_FAQS.length;

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
                {/* LEFT COLUMN: Interactive Question Selector Rail */}
                <div className="lg:col-span-5 space-y-3">
                  {HOME_FAQS.map((faq, idx) => {
                    const isSelected = activeIdx === idx;
                    return (
                      <div key={idx}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(idx)}
                          aria-expanded={isSelected}
                          className={`group relative w-full text-left rounded-2xl p-4 sm:p-5 border transition-all duration-300 overflow-hidden ${
                            isSelected
                              ? "bg-white border-[#008FFF] shadow-[0_14px_34px_rgba(0,143,255,0.16)] lg:translate-x-2"
                              : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-[#008FFF]/50 shadow-xs"
                          }`}
                        >
                          {/* Active Left Optical Accent Bar */}
                          <span
                            className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-[#008FFF] via-[#0FA4E8] to-[#06B6D4] transition-opacity duration-300 ${
                              isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                            }`}
                          />

                          <div className="flex items-start gap-3.5 pl-1">
                            <span
                              style={isSelected ? { color: "#FFFFFF" } : undefined}
                              className={`w-8 h-8 rounded-xl text-xs font-mono font-extrabold flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                                isSelected
                                  ? "bg-gradient-to-br from-[#008FFF] to-[#0284C7] shadow-[0_6px_16px_rgba(0,143,255,0.35)]"
                                  : "bg-[#008FFF]/10 text-[#0284C7] group-hover:bg-[#008FFF]/20"
                              }`}
                            >
                              0{idx + 1}
                            </span>

                            <div className="flex-1 min-w-0">
                              <span
                                className={`inline-block text-[10px] font-mono font-bold uppercase tracking-[0.14em] mb-1 ${
                                  isSelected ? "text-[#008FFF]" : "text-slate-400"
                                }`}
                              >
                                {faq.tag}
                              </span>
                              <p
                                className={`text-sm font-bold leading-snug transition-colors ${
                                  isSelected
                                    ? "text-slate-900"
                                    : "text-slate-700 group-hover:text-slate-900"
                                }`}
                              >
                                {faq.q}
                              </p>
                            </div>

                            <span
                              className={`hidden lg:flex w-7 h-7 rounded-full items-center justify-center shrink-0 mt-1 transition-all duration-300 ${
                                isSelected
                                  ? "bg-[#008FFF]/10 text-[#008FFF] translate-x-0.5"
                                  : "text-slate-300 group-hover:text-[#008FFF]"
                              }`}
                            >
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </span>
                          </div>
                        </button>

                        {/* Mobile Inline Expanded Answer */}
                        {isSelected && (
                          <div className="lg:hidden mt-2 rounded-2xl bg-white border border-sky-200 p-4 shadow-sm">
                            <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-[#008FFF]/10 px-2.5 py-1 rounded-full mb-2">
                              {faq.highlight}
                            </span>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* RIGHT COLUMN (Desktop): Sticky Glowing Answer Spotlight Stage */}
                <div className="hidden lg:block lg:col-span-7 lg:sticky lg:top-10">
                  <div className="relative rounded-[28px] bg-white border border-sky-200/80 shadow-[0_24px_65px_rgba(15,23,42,0.09)] overflow-hidden">
                    {/* Deep Optical Navy Header Band */}
                    <div className="relative bg-hubex-banner px-8 pt-8 pb-7 overflow-hidden">
                      {/* Decorative Giant Watermark Index */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none select-none absolute -right-2 -top-4 text-[128px] font-black leading-none text-white/[0.08] font-mono"
                      >
                        0{activeIdx + 1}
                      </span>

                      <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
                        <span
                          style={{ color: "#E0F2FE" }}
                          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-[11px] font-mono font-bold uppercase tracking-[0.16em]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                          {activeFaq.tag}
                        </span>
                        <span
                          style={{ color: "#BAE6FD" }}
                          className="text-xs font-mono font-semibold"
                        >
                          0{activeIdx + 1} / 0{HOME_FAQS.length}
                        </span>
                      </div>

                      <h3
                        style={{ color: "#FFFFFF" }}
                        className="relative z-10 text-2xl font-extrabold leading-snug pr-12"
                      >
                        {activeFaq.q}
                      </h3>
                    </div>

                    {/* Crisp Answer Body */}
                    <div className="p-8 space-y-6">
                      {/* Verified Key Spec Pill */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F0F9FF] border border-sky-200/80 text-xs font-bold text-[#0284C7]">
                        <span className="w-2 h-2 rounded-full bg-[#008FFF]" />
                        {activeFaq.highlight}
                      </div>

                      {/* Detailed Answer with Left Optical Border */}
                      <div className="border-l-[3px] border-[#008FFF] pl-5 py-0.5">
                        <p className="text-[15.5px] text-slate-700 leading-[1.8] font-medium">
                          {activeFaq.a}
                        </p>
                      </div>

                      {/* Interactive Prev / Dots / Next Deck Controls */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                          {HOME_FAQS.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              type="button"
                              aria-label={`View question ${dotIdx + 1}`}
                              onClick={() => setOpenFaq(dotIdx)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                dotIdx === activeIdx
                                  ? "w-7 bg-[#008FFF]"
                                  : "w-2 bg-slate-200 hover:bg-[#008FFF]/50"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setOpenFaq(prevIdx)}
                            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#008FFF] text-xs font-bold text-slate-700 hover:text-[#008FFF] transition-colors"
                          >
                            ← Prev
                          </button>
                          <button
                            type="button"
                            onClick={() => setOpenFaq(nextIdx)}
                            style={{ color: "#FFFFFF" }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#008FFF] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0A192F] text-xs font-bold shadow-[0_6px_16px_rgba(0,143,255,0.28)] transition-all"
                          >
                            Next →
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Direct Support Footer Strip */}
                    <div className="px-8 py-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold text-slate-600">
                        Need custom SLA or site feasibility details?
                      </span>
                      <Link
                        href="/contact"
                        className="text-xs font-extrabold text-[#008FFF] hover:text-[#0284C7] inline-flex items-center gap-1 transition-colors whitespace-nowrap"
                      >
                        <span>Talk to Our Engineers</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
}
