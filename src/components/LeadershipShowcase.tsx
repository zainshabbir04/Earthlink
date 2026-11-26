"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quote, Sparkles, TrendingUp, Users } from "lucide-react";
import { BRAND_INFO } from "@/data/siteData";

const LEADERS = [
  {
    id: "ceo",
    name: "Mudassar Riaz",
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
    attribution: "— Mudassar Riaz, CEO",
    domains: [
      "Optical Network Architecture",
      "DWDM Core Strategy",
      "Telecom Regulatory Compliance",
      "Enterprise SLA Accountability",
    ],
  },
  {
    id: "cfo",
    name: "Mubashir Riaz",
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
    attribution: "— Mubashir Riaz, CFO",
    domains: [
      "Capital Infrastructure Investment",
      "Fiscal Governance & Sustainability",
      "Optical Asset Procurement",
      "Transparent Enterprise Pricing",
    ],
  },
];

export default function LeadershipShowcase() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px] relative z-10">
        {/* Centered Header */}
        <div
          className={`flex flex-col items-center text-center mb-12 lg:mb-14 space-y-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
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

        {/* 2-Column Side-by-Side Vertical Executive Cards (Animated Scroll Reveal + Hover Lift, Clean White Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {LEADERS.map((leader, idx) => {
            const RoleIcon = leader.icon;
            return (
              <div
                key={leader.id}
                style={{
                  transitionDelay: inView ? `${idx * 160}ms` : "0ms",
                }}
                className={`group relative overflow-hidden rounded-[28px] bg-white border border-slate-200/90 hover:border-[#008FFF]/45 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_26px_65px_rgba(15,23,42,0.13)] p-7 sm:p-9 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between space-y-6 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Animated Top Accent Line Expanding on Hover */}
                <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#008FFF] to-transparent transition-all duration-500" />

                {/* Top Row: Portrait + Role + Name + Metrics */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Framed Portrait with Subtle Hover Scale */}
                  <div className="relative w-40 sm:w-44 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-50 p-1.5 border border-slate-200 group-hover:border-[#008FFF]/40 shadow-sm transition-colors duration-300">
                      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={leader.photo}
                          alt={`${leader.name} - ${leader.role} at ${BRAND_INFO.companyName}`}
                          className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold text-slate-700">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
                      </span>
                      <span>Executive Board</span>
                    </div>
                  </div>

                  {/* Role Badge, Name, Title & Metrics */}
                  <div className="flex-1 text-center sm:text-left space-y-2.5 pt-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700">
                      <RoleIcon className="w-3.5 h-3.5 text-[#008FFF]" />
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]">
                        {leader.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-600">
                      {leader.role}
                    </p>

                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      {leader.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-50 group-hover:bg-white border border-slate-200/80 transition-colors duration-300"
                        >
                          <div className="text-xs sm:text-sm font-extrabold font-mono text-slate-900">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-medium text-slate-500 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-medium border-t border-slate-100 pt-5">
                  <p>{leader.bio1}</p>
                  <p className="text-slate-600 font-normal">{leader.bio2}</p>
                </div>

                {/* Minimalist Quote Block */}
                <div className="relative rounded-2xl bg-slate-50/90 border border-slate-200/80 border-l-4 border-l-slate-900 group-hover:border-l-[#008FFF] p-5 space-y-2.5 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-slate-400 group-hover:text-[#008FFF] transition-colors" />
                  <p className="text-xs sm:text-sm italic font-medium text-slate-800 leading-relaxed">
                    {leader.quote}
                  </p>
                  <div className="text-xs font-extrabold text-slate-900">
                    {leader.attribution}
                  </div>
                </div>

                {/* Strategic Domain Focus Tags */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.14em] block">
                    Strategic Domain Focus
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {leader.domains.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
