"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BRAND_INFO,
  SERVICES_DATA,
  VERIFIED_INFRASTRUCTURE_STATS,
} from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";
import AnimatedCounter from "./AnimatedCounter";

const FiberNetworkCanvas = dynamic(() => import("./FiberNetworkCanvas"), {
  ssr: false,
});

const Services3DCanvas = dynamic(() => import("./Services3DCanvas"), {
  ssr: false,
});

const HOME_FAQS = [
  {
    q: "What makes EARTHLINK Broadband different from conventional broadband?",
    a: "We deliver 100% subterranean armored optical fiber with strict 1:1 symmetrical upload and download speeds, zero Fair Usage Policy (FUP) caps, and zero peak-hour throttling.",
  },
  {
    q: "What uptime SLA and automatic failover protection do you provide?",
    a: "Our enterprise links carry a contractual 99.9% to 99.99% uptime SLA backed by dual-path self-healing 100G metro optical rings with automated sub-50ms protection switching.",
  },
  {
    q: "How does your 24/7/365 NOC support handle network faults?",
    a: "Our live Network Operations Center monitors optical light levels continuously using automated OTDR telemetry, delivering under-15-minute incident response and rapid field dispatch.",
  },
  {
    q: "Do you support static IPv4/IPv6, BGP peering, and multi-branch MPLS?",
    a: "Yes. Our Dedicated Internet Access (DIA) and MPLS circuits support native Dual-Stack IPv4/IPv6, enterprise ASN BGP multi-homing, and isolated Layer-2/Layer-3 private branch interconnectivity.",
  },
  {
    q: "Which cities and commercial corridors are covered?",
    a: "Our optical network serves major business and industrial hubs including Lahore, Sheikhupura, Kala Shah Kaku, Gujrat, Kasur, Narowal, Faisalabad, Rawalpindi, Multan, Gujranwala, Sialkot, and surrounding corridors.",
  },
  {
    q: "How do I request an optical fiber feasibility survey for my office?",
    a: "Click 'Get in Touch' or 'Request Site Survey' on our Contact page with your building address and target bandwidth tier; our OSP engineering team will verify underground splice proximity promptly.",
  },
];

export default function HubexHomeInteractive() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
                {/* 3D React Three Fiber Canvas inside the Orbital Ring (Slightly Larger, Never Clipped) */}
                <div className="absolute -inset-3 md:-inset-5 z-0 opacity-85">
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
                      alt="EARTHLINK Broadband (Pvt.) Ltd."
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
          SECTION 4: OUR SERVICES (3D Gyroscopic Effect + Animated Optical Fiber Pulses + Eye-Catching Interactive Nodes)
         ===================================================================== */}
      <section className="pt-[50px] pb-6 lg:pt-[80px] lg:pb-8 relative overflow-hidden">
        {/* Soft Ambient 3D Stage Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-[#008FFF]/10 blur-[130px]" />

        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
          {/* Eye-Catching Centered Header */}
          <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                3D Optical Service Ecosystem
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                Enterprise Services
              </span>
            </h2>
            <p className="text-[#D3D3D3] font-medium text-sm sm:text-base max-w-xl mt-2">
              Carrier-grade optical connectivity, cloud, and cybersecurity engineered for zero-downtime enterprise operations.
            </p>
          </div>

          {/* Desktop 3D Animated Radial Hub-and-Spoke Diagram */}
          <div className="hidden lg:block relative pt-6 pb-4">
            <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
              {/* Live 3D Gyroscopic Rings & Optical Particles Canvas */}
              <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
                <Services3DCanvas />
              </div>

              {/* Animated SVG Optical Fiber Connector Lines + Traveling Signal Light Dots */}
              <svg
                viewBox="0 0 1000 500"
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
                  "M500 250 L500 58",
                  "M500 250 L500 442",
                  "M500 250 L340 120 L205 120",
                  "M500 250 L170 250",
                  "M500 250 L340 380 L205 380",
                  "M500 250 L660 120 L795 120",
                  "M500 250 L830 250",
                  "M500 250 L660 380 L795 380",
                ].map((pathD, i) => (
                  <g key={i}>
                    {/* Base Track */}
                    <path
                      d={pathD}
                      stroke="#0FA4E8"
                      strokeOpacity="0.22"
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
                <div className="absolute w-48 h-48 rounded-full border-2 border-dashed border-[#0FA4E8]/45 animate-rotateImage pointer-events-none" />
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

              {/* 8 Elevated 3D Animated Service Nodes with Glass Hover Tooltips */}
              {[
                {
                  srv: hubServices[0],
                  pos: "top-[10px] left-1/2 -translate-x-1/2 flex-col",
                  delay: "0s",
                },
                {
                  srv: hubServices[1],
                  pos: "top-[92px] left-[20px] flex-row",
                  delay: "0.4s",
                },
                {
                  srv: hubServices[2],
                  pos: "top-1/2 -translate-y-1/2 left-[0px] flex-row",
                  delay: "0.8s",
                },
                {
                  srv: hubServices[3],
                  pos: "bottom-[92px] left-[20px] flex-row",
                  delay: "1.2s",
                },
                {
                  srv: hubServices[4],
                  pos: "bottom-[10px] left-1/2 -translate-x-1/2 flex-col-reverse",
                  delay: "1.6s",
                },
                {
                  srv: hubServices[5],
                  pos: "top-[92px] right-[20px] flex-row-reverse",
                  delay: "0.6s",
                },
                {
                  srv: hubServices[6],
                  pos: "top-1/2 -translate-y-1/2 right-[0px] flex-row-reverse",
                  delay: "1.0s",
                },
                {
                  srv: hubServices[7],
                  pos: "bottom-[92px] right-[20px] flex-row-reverse",
                  delay: "1.4s",
                },
              ].map(({ srv, pos, delay }) => (
                <Link
                  key={srv.id}
                  href={`/services#${srv.id}`}
                  style={{ animationDelay: delay }}
                  className={`absolute ${pos} flex items-center gap-3 group cursor-pointer z-20 hover:z-50 animate-fadeInOutSmooth`}
                >
                  <span className="font-bold text-sm xl:text-[15px] text-slate-900 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm group-hover:border-[#008FFF] group-hover:text-[#008FFF] group-hover:shadow-md transition-all">
                    {srv.shortTitle}
                  </span>
                  <div className="w-13 h-13 p-3 rounded-2xl bg-gradient-to-br from-white to-[#F0F9FF] border-2 border-[#008FFF]/45 group-hover:border-[#008FFF] group-hover:from-[#008FFF] group-hover:to-[#0FA4E8] group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center text-[#008FFF] group-hover:text-white transition-all duration-300 shadow-[0_10px_24px_rgba(0,143,255,0.2)]">
                    <ServiceIcon name={srv.iconName} className="w-6 h-6" />
                  </div>

                  {/* Solid Crisp White 3D Tooltip Popup (100% Opaque & Always On Top) */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[310px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-[90] pointer-events-none">
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
          SECTION 6: "WHERE OPTICAL TECHNOLOGY CONNECTS" (Redesigned Eye-Catching Gradient Card matching Bottom SLA Banner)
         ===================================================================== */}
      <section className="pt-4 pb-12 lg:pt-6 lg:pb-16">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative">
          <div className="mx-auto w-full max-w-[74rem] py-14 md:py-20 px-6 sm:px-10 lg:px-14 rounded-3xl border border-sky-300/35 bg-hubex-banner relative overflow-hidden flex flex-col justify-between items-center text-center shadow-[0_24px_60px_rgba(2,132,199,0.28)]">
            {/* Animated Optical Rings & Ambient Glows */}
            <div className="pointer-events-none absolute -top-28 -left-24 w-80 h-80 rounded-full border border-white/15 animate-rotateImage" />
            <div className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full border-2 border-dashed border-sky-300/30 animate-rotateImage" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-sky-400/15 blur-[110px]" />

            {/* Top Live Badge & Headline */}
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-100">
                  Carrier-Grade Fiber Infrastructure
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
                Where Optical Technology Connects
              </h2>

              <p className="text-sm sm:text-base text-sky-100/90 max-w-xl mx-auto leading-relaxed">
                Uncontended 1:1 optical connectivity — uniting Dedicated Internet Access (DIA), MPLS rings, Cloud, and Cybersecurity under one 24/7 NOC.
              </p>
            </div>

            {/* Redesigned 4-Column Frosted Glass Animated Counter Cards */}
            <div className="relative z-10 w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 my-10">
              {VERIFIED_INFRASTRUCTURE_STATS.map((st) => (
                <div
                  key={st.id}
                  className="group p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 hover:border-sky-200/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    <AnimatedCounter value={st.value} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-200 mt-1.5">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#0F172A] text-[#0F172A] hover:text-white text-[15px] font-bold px-8 h-[48px] rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition-all duration-300"
              >
                <span>Start Your Optical Upgrade</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact#site-survey"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/35 text-white text-[15px] font-bold px-7 h-[48px] rounded-full backdrop-blur-md transition-all duration-300"
              >
                <span>Request Site Survey</span>
              </Link>
            </div>
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
          SECTION 9: TRUST & SLA RECOGNITION BANNER (Redesigned Interior, Same bg-hubex-banner Color)
         ===================================================================== */}
      <section className="py-[35px] md:py-[55px]">
        <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] flex items-center justify-center">
          <div className="w-full rounded-3xl border border-sky-300/35 overflow-hidden bg-hubex-banner px-6 sm:px-10 lg:px-14 py-10 md:py-12 relative shadow-[0_24px_55px_rgba(2,132,199,0.28)]">
            {/* Subtle Decorative Rotating Rings */}
            <div className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full border border-white/15 animate-rotateImage" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full border border-dashed border-sky-200/25 animate-rotateImage" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left 7 Cols: Redesigned Headline, Guarantee Chips & Dual Pill CTAs */}
              <div className="lg:col-span-7 text-center lg:text-start space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-100">
                    Contractual Enterprise Guarantee
                  </span>
                </div>

                <h2 className="text-white text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  SLA &amp; Carrier Assurance
                </h2>

                <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Backed by a contractual <strong className="text-white">99.99% uptime SLA</strong>, sub-50ms self-healing optical ring failover, and 24/7/365 live NOC telemetry.
                </p>

                {/* 3 Sleek Frosted Guarantee Chips */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                  {[
                    "< 50ms Ring Failover",
                    "< 15m NOC Response",
                    "Zero FUP Throttling",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/25 text-xs font-semibold text-white backdrop-blur-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-sm font-bold px-7 h-[46px] rounded-full shadow-lg transition-all duration-300"
                  >
                    <span>Explore SLA Standards</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/35 text-white text-sm font-bold px-6 h-[46px] rounded-full backdrop-blur-md transition-all duration-300"
                  >
                    Contact 24/7 NOC
                  </Link>
                </div>
              </div>

              {/* Right 5 Cols: Redesigned Frosted Glass SLA Gauge Card (100% High-Contrast Readable) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[300px] rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 p-6 shadow-2xl flex flex-col items-center text-center">
                  {/* Glowing Circular Uptime Ring */}
                  <div className="relative w-32 h-32 rounded-full border-4 border-sky-200/40 bg-[#0F172A]/45 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-200">
                      UPTIME SLA
                    </span>
                    <span className="text-3xl font-black text-white tracking-tight mt-0.5">
                      <AnimatedCounter value="99.99%" duration={1800} />
                    </span>
                    <span className="text-[10px] font-semibold text-sky-200 mt-0.5">
                      1:1 Pure Fiber
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/20 w-full">
                    <span className="text-white font-bold text-base block">
                      5.0 Carrier-Grade Rating
                    </span>
                    <div className="flex justify-center items-center gap-1 mt-1.5">
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
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (Interactive Eye-Catching FAQs Accordion)
         ===================================================================== */}
      <section
        id="faqs"
        className="relative py-14 lg:py-20 border-t border-[#1a1a1a]"
      >
        <div className="max-w-5xl mx-auto px-[20px] lg:px-[50px]">
          <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008FFF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0284C7]">
                Quick Answers
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#0284C7]">
                Questions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#D3D3D3] mt-2 max-w-xl">
              Everything you need to know about our subterranean optical fiber, 1:1 DIA speeds, SLAs, and 24/7 NOC support.
            </p>
          </div>

          <div className="space-y-3.5">
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#008FFF] shadow-[0_14px_34px_rgba(0,143,255,0.14)]"
                      : "border-slate-200/90 hover:border-[#008FFF]/50 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#008FFF] text-white"
                            : "bg-[#008FFF]/10 text-[#0284C7]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </span>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#008FFF] text-white rotate-180"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 pl-[4.125rem] text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
