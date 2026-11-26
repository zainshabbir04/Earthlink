"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Quote,
  Sparkles,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

const LEADERS = [
  {
    id: "ceo",
    index: "01",
    name: "Mudassar Riaz",
    shortRole: "CEO & Founder",
    role: "Chief Executive Officer (CEO) & Founder",
    badge: "CHIEF EXECUTIVE OFFICER",
    photo: "/leadership/mudasir-riaz-ceo.jpg",
    icon: Sparkles,
    metrics: [
      { value: "1,200+ km", label: "Metro Optical Conduits" },
      { value: "99.99% SLA", label: "Core Uptime Guarantee" },
    ],
    bio1: `As Chief Executive Officer and visionary founder of ${BRAND_INFO.companyName}, Mudassar Riaz has spearheaded the company's transformation into one of the region's most trusted carrier-grade optical ISPs.`,
    bio2: "With an extensive background in optical telecommunications engineering, transmission systems, and telecom regulatory governance, Mudassar champions a culture of uncompromising SLA delivery — overseeing more than 1,200+ kilometers of subterranean armored conduits across regional business corridors along M-0, M-1, and the GT Road.",
    quote: `“Our foundational promise at ${BRAND_INFO.companyName} has never wavered: to build a transmission network so resilient and fast that modern enterprises never have to compromise on bandwidth. Every kilometer of network infrastructure we lay is engineered for future generations.”`,
    attribution: "Mudassar Riaz — CEO & Founder",
    domains: [
      "Optical Network Architecture",
      "DWDM Core Strategy",
      "Telecom Regulatory Compliance",
      "Enterprise SLA Accountability",
    ],
  },
  {
    id: "cfo",
    index: "02",
    name: "Mubashir Riaz",
    shortRole: "CFO & Co-Founder",
    role: "Chief Financial Officer (CFO) & Co-Founder",
    badge: "CHIEF FINANCIAL OFFICER",
    photo: "/leadership/mubasir-riaz-cfo.jpg",
    icon: TrendingUp,
    metrics: [
      { value: "100% Debt-Free", label: "Core Ring Infrastructure" },
      { value: "Tier-1 Assets", label: "Cisco & Juniper Routing" },
    ],
    bio1: `As Chief Financial Officer and co-founder, Mubashir Riaz oversees financial strategy, capital investments in next-generation optical infrastructure, asset stewardship, and commercial risk management at ${BRAND_INFO.companyName}`,
    bio2: `Mubashir has been instrumental in structuring strategic capital allocations that enabled ${BRAND_INFO.shortName} to acquire Tier-1 routing assets from Cisco and Juniper, deploy cutting-edge subscriber distribution, and maintain a robust, debt-efficient balance sheet with transparent enterprise pricing.`,
    quote: `“Sustainable telecommunications infrastructure demands disciplined capital allocation and long-term vision. At ${BRAND_INFO.shortName}, our financial strategy is directly aligned with engineering excellence — ensuring continuous reinvestment into network resilience and local customer support.”`,
    attribution: "Mubashir Riaz — CFO & Co-Founder",
    domains: [
      "Capital Infrastructure Investment",
      "Fiscal Governance & Sustainability",
      "Optical Asset Procurement",
      "Transparent Enterprise Pricing",
    ],
  },
];

export default function LeadershipShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-triggered entrance animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Gentle auto-cycle between leaders (pauses smoothly on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % LEADERS.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const leader = LEADERS[activeIdx];
  const RoleIcon = leader.icon;

  const handlePortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-16 lg:py-24 border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Floating Motion Orbs */}
      <div className="pointer-events-none absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-sky-200/25 blur-[130px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/5 w-[340px] h-[340px] rounded-full bg-slate-200/40 blur-[120px]" />

      <div
        className={`max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#008FFF]" />
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-slate-700">
              Executive Leadership Team
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-normal text-slate-900 leading-tight">
            Visionary Leadership{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
              Driving Innovation
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-medium">
            Meet the leaders spearheading {BRAND_INFO.companyName}&apos;s mission to deliver the fastest, most resilient carrier-grade optical infrastructure across enterprise corridors.
          </p>
        </div>

        {/* Interactive Leader Switcher Pill Bar with Live Avatar Thumbnails */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-9">
          {LEADERS.map((item, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`group flex items-center gap-3.5 pl-2 pr-5 py-2 rounded-full border transition-all duration-300 ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.18)] scale-[1.03]"
                    : "bg-white border-slate-200 hover:border-slate-400 shadow-sm hover:-translate-y-0.5"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 shrink-0 bg-white transition-transform duration-300 ${
                    isSelected
                      ? "border-cyan-300 scale-105"
                      : "border-slate-200 group-hover:border-slate-400"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <div
                    style={isSelected ? { color: "#FFFFFF" } : undefined}
                    className={`text-sm font-extrabold leading-tight ${
                      isSelected ? "" : "text-slate-900"
                    }`}
                  >
                    {item.name}
                  </div>
                  <div
                    style={isSelected ? { color: "#BAE6FD" } : undefined}
                    className={`text-[11px] font-semibold ${
                      isSelected ? "" : "text-slate-500"
                    }`}
                  >
                    {item.shortRole}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Animated Interactive Spotlight Executive Stage (Clean White & Slate with 3D Portrait Tilt) */}
        <div className="relative rounded-[34px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_24px_70px_rgba(15,23,42,0.08)] p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Subtle Animated Top Accent Line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#008FFF] to-transparent opacity-60" />

          {/* Animated Keyed Slide-In Content */}
          <div
            key={leader.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-[fadeInUp_0.55s_cubic-bezier(0.16,1,0.3,1)_both]"
          >
            {/* Left Column (4 cols): Interactive 3D-Tilt Portrait Showcase with Rotating Orbital Ring */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div
                onMouseMove={handlePortraitMove}
                onMouseLeave={resetTilt}
                className="relative w-full max-w-[300px] perspective-[900px]"
              >
                {/* Slow Rotating Decorative Ring Behind Portrait */}
                <div className="pointer-events-none absolute -inset-5 rounded-full border border-dashed border-slate-300/75 animate-rotateImage" />
                <div className="pointer-events-none absolute -inset-2 rounded-[30px] border border-slate-200/80" />

                {/* 3D Tilting White Portrait Frame */}
                <div
                  style={{
                    transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                    transition:
                      tilt.x === 0 && tilt.y === 0
                        ? "transform 0.5s cubic-bezier(0.16,1,0.3,1)"
                        : "transform 0.1s ease-out",
                  }}
                  className="relative rounded-[26px] bg-slate-50 border border-slate-200 p-2.5 shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative aspect-[3/4] w-full rounded-[18px] overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={leader.photo}
                      alt={`${leader.name} - ${leader.role} at ${BRAND_INFO.companyName}`}
                      className="w-full h-full object-contain object-bottom transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Floating Executive Board Chip */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-md flex items-center gap-2 whitespace-nowrap text-[11px] font-bold text-slate-800">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
                    </span>
                    <span>Executive Board</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Navigation Controls Under Portrait */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx(
                      (prev) => (prev - 1 + LEADERS.length) % LEADERS.length
                    )
                  }
                  aria-label="Previous leader"
                  className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-500 px-2">
                  {leader.index} / 0{LEADERS.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIdx((prev) => (prev + 1) % LEADERS.length)
                  }
                  aria-label="Next leader"
                  className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 text-slate-700 hover:text-white flex items-center justify-center transition-all shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column (8 cols): Animated Editorial Bio, Metrics, Pull-Quote & Domain Chips */}
            <div className="lg:col-span-8 space-y-6">
              {/* Top Row: Role Badge + Name + Inline Animated Metrics */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-5 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700">
                    <RoleIcon className="w-3.5 h-3.5 text-[#008FFF]" />
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em]">
                      {leader.badge}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {leader.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {leader.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-4 py-3 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#008FFF]/45 shadow-xs hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-sm sm:text-base font-black font-mono text-slate-900">
                        {m.value}
                      </div>
                      <div className="text-[10.5px] font-medium text-slate-500 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Bio */}
              <div className="space-y-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-800">{leader.bio1}</p>
                <p className="text-slate-600">{leader.bio2}</p>
              </div>

              {/* Clean Minimalist Pull-Quote with Animated Left Accent */}
              <div className="group/quote relative rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-slate-900 hover:border-l-[#008FFF] px-6 py-5 space-y-2 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-slate-400 group-hover/quote:text-[#008FFF] shrink-0 mt-0.5 transition-colors" />
                  <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                    {leader.quote}
                  </p>
                </div>
                <div className="text-xs font-extrabold text-slate-900 pl-8">
                  — {leader.attribution}
                </div>
              </div>

              {/* Interactive Strategic Domain Focus Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.14em] mr-2">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                  Domain Focus:
                </span>
                {leader.domains.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
