"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronRight,
  Radio,
  Globe,
  Network,
  Lock,
  Cpu,
  Server,
  Wrench,
  ShieldAlert,
  Code2,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  Sliders,
  ShieldCheck,
  MapPin,
  Layers,
  Zap,
  Building2,
  Landmark,
  Hospital,
  GraduationCap,
  ShoppingBag,
  Factory,
  Wifi,
  Gauge,
  Router,
} from "lucide-react";
import {
  COMPANY_INFO,
  INFRASTRUCTURE_STATS,
  SERVICES,
  WHY_CHOOSE_US_POINTS,
  INFRASTRUCTURE_SHOWCASE,
  INDUSTRY_SECTORS,
  PROJECTS_PORTFOLIO,
  CONTACT_INFO,
} from "@/data/siteData";

const FiberNetworkCanvas = dynamic(
  () => import("@/components/FiberNetworkCanvas"),
  { ssr: false }
);

const serviceIconMap: Record<string, React.ElementType> = {
  Radio,
  Globe,
  Network,
  Lock,
  Cpu,
  Server,
  Wrench,
  ShieldAlert,
  Code2,
  Building2,
  ShieldCheck,
  Cable: Radio,
  Cloud: Server,
  ServerCog: Wrench,
};

const sectorIcons = [
  Landmark,
  Cpu,
  Hospital,
  GraduationCap,
  ShoppingBag,
  Factory,
  Building2,
  Globe,
];

const ISP_BANDWIDTH_TIERS = [
  {
    tier: "Corporate Fiber Starter",
    speed: "50 Mbps",
    ratio: "1:1 Symmetrical DIA",
    sla: "99.9% Uptime SLA",
    protection: "Dual-Homed Metro PoP",
    idealFor: "Branch Offices, Retail Chains & SMEs",
    features: [
      "100% Pure Underground Optical Fiber",
      "1:1 Uncontended Upload & Download",
      "Dedicated Static Public IPv4 / IPv6 Subnet",
      "24/7/365 NOC Telemetry & <15m Response",
    ],
    badge: "Branch Standard",
  },
  {
    tier: "Enterprise Core Fiber",
    speed: "250 Mbps",
    ratio: "1:1 Symmetrical DIA + BGP",
    sla: "99.95% Uptime SLA",
    protection: "<50ms Ring Protection",
    idealFor: "Corporate HQs, Software Houses & BPOs",
    features: [
      "Subterranean Armored Fiber Termination",
      "Multi-Upstream Tier-1 International Transit",
      "Proactive Optical Attenuation Monitoring",
      "Managed Enterprise Edge Router & Firewall",
    ],
    badge: "Most Deployed",
    featured: true,
  },
  {
    tier: "Carrier & Data Center Wave",
    speed: "1 Gbps – 10G",
    ratio: "Dedicated Optical Wavelength",
    sla: "99.99% Mission-Critical SLA",
    protection: "Physically Diverse Dual-Path Fiber",
    idealFor: "Banks, Data Centers, Hospitals & Campuses",
    features: [
      "End-to-End Point-to-Point Dark/Lit Optical Wave",
      "Sub-2ms Metro Latency with Zero Jitter",
      "Layer-2 / Layer-3 MPLS Mesh Integration",
      "Dedicated Field Fiber Engineering Squad",
    ],
    badge: "Mission Critical",
  },
];

export default function HubexHomeInteractive() {
  const pageRef = useRef<HTMLDivElement>(null);

  const [activeRadialService, setActiveRadialService] = useState<string>(
    SERVICES[0].id
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    "dedicated-internet-access"
  );
  const [bandwidthMbps, setBandwidthMbps] = useState<number>(250);
  const [redundancyMode, setRedundancyMode] = useState<
    "standard-ring" | "dual-homed-ha"
  >("dual-homed-ha");
  const [selectedCorridor, setSelectedCorridor] = useState<string>(
    CONTACT_INFO.coverageZones[0]
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-hero-reveal",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray<HTMLElement>(".gsap-section-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const portfolioCategories = [
    "All",
    ...Array.from(new Set(PROJECTS_PORTFOLIO.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_PORTFOLIO
      : PROJECTS_PORTFOLIO.filter((p) => p.category === selectedCategory);

  const activeServiceObj =
    SERVICES.find((s) => s.id === activeRadialService) || SERVICES[0];

  const configuredServiceObj =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[1];

  const radialServices = SERVICES.slice(0, 6);
  const radialPositions = [
    { top: "8%", left: "6%" },
    { top: "44%", left: "1%" },
    { top: "80%", left: "8%" },
    { top: "8%", right: "6%" },
    { top: "44%", right: "1%" },
    { top: "80%", right: "8%" },
  ];

  return (
    <div ref={pageRef} className="overflow-hidden">
      {/* =====================================================================
          SECTION 1: HERO SECTION — BUILT AROUND LOGO COLORS
          Jet Carbon Black (#0B0D10) + Logo Cyan (#19A2E6) + Logo Grey (#757679)
      ====================================================================== */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-8 overflow-hidden bg-sapphire-hero bg-tech-grid-dark text-white border-b-2 border-[#19A2E6]">
        {/* Logo Cyan Signal Glows */}
        <div className="pointer-events-none absolute top-14 left-10 w-[440px] h-[440px] bg-[#19A2E6]/20 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-[520px] h-[520px] bg-[#19A2E6]/15 rounded-full blur-[150px]" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="gsap-hero-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151921] border border-[#19A2E6]/55 shadow-[0_0_24px_rgba(25,162,230,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#19A2E6] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-200">
                  Enterprise Fiber-Optic ISP &bull; 1,200+ km Metro Core
                </span>
              </div>

              <h1 className="gsap-hero-reveal text-3xl sm:text-5xl xl:text-[56px] font-extrabold text-white leading-[1.12] tracking-tight">
                Connecting Businesses.{" "}
                <span className="text-[#19A2E6]">
                  Empowering Possibilities.
                </span>
              </h1>

              <p className="gsap-hero-reveal text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                <strong className="text-white">{COMPANY_INFO.name}</strong> engineers mission-critical optical fiber connectivity,{" "}
                <span className="text-[#19A2E6] font-semibold">
                  1:1 symmetrical Dedicated Internet Access (DIA)
                </span>
                , Layer-2/3 MPLS VPNs, and managed enterprise ICT infrastructure backed by a{" "}
                <strong className="text-white">1,200+ km subterranean armored metro fiber network</strong> and 24/7/365 NOC telemetry.
              </p>

              {/* Live ISP Telemetry Strip (Carbon & Cyan) */}
              <div className="gsap-hero-reveal grid grid-cols-3 gap-3 max-w-xl pt-1">
                <div className="p-3.5 rounded-2xl bg-[#141820]/95 border border-neutral-700/80 border-t-2 border-t-[#19A2E6] shadow-lg">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-[#19A2E6]">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Symmetry</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    1:1 Uncontended
                  </p>
                  <p className="text-[11px] text-[#757679]">Zero throttle DIA</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#141820]/95 border border-neutral-700/80 border-t-2 border-t-[#19A2E6] shadow-lg">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-[#19A2E6]">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Ring Healing</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    &lt; 50ms Switch
                  </p>
                  <p className="text-[11px] text-[#757679]">Auto optical failover</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#141820]/95 border border-neutral-700/80 border-t-2 border-t-[#19A2E6] shadow-lg">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-[#19A2E6]">
                    <Router className="w-3.5 h-3.5" />
                    <span>Core Capacity</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                    100 Gbps Ring
                  </p>
                  <p className="text-[11px] text-[#757679]">Multi-PoP backbone</p>
                </div>
              </div>

              {/* Dual Hero Buttons */}
              <div className="gsap-hero-reveal pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#19A2E6] hover:bg-[#0D84C4] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-[0_10px_28px_rgba(25,162,230,0.4)] transition-all duration-300 group"
                >
                  <span>Explore ISP Solutions</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#151921] hover:bg-white text-white hover:text-[#0B0D10] border border-neutral-600 hover:border-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 group"
                >
                  <span>Check Fiber Feasibility</span>
                  <ChevronRight className="w-4 h-4 text-[#19A2E6] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): HubexTech Orbital Centerpiece in Logo Black, Grey & Cyan */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[390px] sm:min-h-[470px]">
              <div className="w-[310px] h-[310px] sm:w-[410px] sm:h-[410px] rounded-full bg-gradient-to-tr from-[#0B0D10] via-[#151922] to-[#0E1218] border border-[#19A2E6]/45 shadow-[0_0_70px_rgba(25,162,230,0.28)] relative flex items-center justify-center">
                {/* Outer Rotating Dashed Ring in Logo Cyan */}
                <div className="w-[290px] h-[290px] sm:w-[385px] sm:h-[385px] rounded-full border-2 border-dashed border-[#19A2E6]/70 animate-rotateImage absolute" />

                {/* Second Counter-Rotating Ring in Logo Grey */}
                <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#757679]/55 animate-rotateReverse absolute" />

                {/* Inner Glowing Core with React Three Fiber 3D Canvas */}
                <div className="w-[205px] h-[205px] sm:w-[270px] sm:h-[270px] rounded-full bg-gradient-to-b from-[#090B0E] via-[#12161E] to-[#090B0E] border-2 border-[#19A2E6] overflow-hidden relative flex items-center justify-center shadow-[inset_0_0_36px_rgba(25,162,230,0.35)]">
                  <FiberNetworkCanvas />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-[#0B0D10]/30 backdrop-blur-[1px]">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-[#151921]/90 px-2.5 py-0.5 rounded-full border border-[#19A2E6]/50">
                      EARTH I NOC CORE
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-white mt-1 drop-shadow-[0_2px_10px_rgba(25,162,230,0.6)]">
                      100G RING
                    </span>
                    <span className="text-[11px] font-bold text-[#19A2E6]">
                      Pure Optical Fiber
                    </span>
                  </div>
                </div>

                {/* 5 Floating Badges in Jet Black + Cyan */}
                <div className="absolute -top-3 -left-2 sm:top-2 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0B0D10]/95 border border-[#19A2E6]/60 shadow-[0_12px_28px_rgba(0,0,0,0.5)] animate-fadeInOutSmooth">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#19A2E6] animate-ping" />
                    <span className="text-xs font-bold text-white">
                      1,200+ km Armored Fiber
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -top-4 right-0 sm:top-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0B0D10]/95 border border-[#19A2E6]/60 shadow-[0_12px_28px_rgba(0,0,0,0.5)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3.5 h-3.5 text-[#19A2E6]" />
                    <span className="text-xs font-bold text-white">
                      1:1 Symmetrical DIA
                    </span>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 px-3.5 py-2 rounded-xl bg-[#0B0D10]/95 border border-[#19A2E6]/60 shadow-[0_12px_28px_rgba(0,0,0,0.5)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "1.6s" }}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
                    <span className="text-xs font-bold text-white">
                      99.99% Uptime SLA
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-3 right-2 sm:bottom-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#0B0D10]/95 border border-[#19A2E6]/60 shadow-[0_12px_28px_rgba(0,0,0,0.5)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "2.4s" }}
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-[#19A2E6]" />
                    <span className="text-xs font-bold text-white">
                      &lt;50ms Ring Failover
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-3 -left-2 sm:bottom-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-[#0B0D10]/95 border border-[#19A2E6]/60 shadow-[0_12px_28px_rgba(0,0,0,0.5)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "3.2s" }}
                >
                  <div className="flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-[#19A2E6]" />
                    <span className="text-xs font-bold text-white">
                      24/7/365 NOC Desk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: LOGO JET-BLACK MARQUEE TICKER STRIP + VERIFIED STATS BAR
      ====================================================================== */}
      <section className="py-5 border-b border-neutral-800 bg-[#0B0D10] relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200">
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#19A2E6]" />
                1,200+ KM SUBTERRANEAN ARMORED METRO FIBER
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#757679]" />
                100 GBPS MULTI-RING OPTICAL CORE
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#19A2E6]" />
                1:1 UNCONTENDED SYMMETRICAL BANDWIDTH
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#757679]" />
                MPLS LAYER-2 &amp; LAYER-3 VPN MESH
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#19A2E6]" />
                POINT-TO-POINT DARK &amp; LIT OPTICAL WAVELENGTHS
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#757679]" />
                24/7/365 PROACTIVE NOC TELEMETRY (&lt;15M RESPONSE)
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Verified Infrastructure Statistics Cards — Dual-Tone Black+Cyan Top Bar (Like the "E" in EARTHLINK) */}
      <section className="gsap-section-reveal py-12 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFRASTRUCTURE_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl card-ice-slate p-6 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Signature Dual-Tone Bar inspired by the "E" in EARTH */}
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0B0D10] group-hover:text-[#19A2E6] transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6] border border-[#19A2E6]/40">
                  {stat.unit}
                </span>
              </div>
              <h2 className="text-base font-bold text-[#0B0D10] mt-3">
                {stat.label}
              </h2>
              <p className="text-xs text-[#757679] mt-1.5 leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: ENTERPRISE ISP BANDWIDTH & CIRCUIT PACKAGES
          White/Platinum Cards + Center Featured Card in Logo Jet-Black & Cyan
      ====================================================================== */}
      <section className="gsap-section-reveal py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0D10] border border-[#19A2E6]/45 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              <Wifi className="w-3.5 h-3.5 text-[#19A2E6]" />
              Enterprise Optical ISP Tiers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D10]">
              Dedicated Symmetrical Fiber{" "}
              <span className="text-[#19A2E6]">
                Connectivity Profiles
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#757679] font-medium">
              Unlike shared consumer broadband, every EARTH I Broadband enterprise circuit is provisioned over subterranean armored optical fiber with guaranteed 1:1 upload and download throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ISP_BANDWIDTH_TIERS.map((pkg) => (
              <div
                key={pkg.tier}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  pkg.featured
                    ? "bg-[#0B0D10] text-white border-2 border-[#19A2E6] shadow-[0_24px_60px_rgba(11,13,16,0.35)] lg:-translate-y-2"
                    : "card-ice-slate text-[#0B0D10]"
                }`}
              >
                {/* Top Dual-Tone Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-1/3 bg-[#0B0D10]" />
                  <div className="w-2/3 bg-[#19A2E6]" />
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-5 pt-1">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        pkg.featured
                          ? "bg-[#19A2E6] text-white shadow-sm"
                          : "bg-[#0B0D10] text-white"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold flex items-center gap-1 text-[#19A2E6]">
                      <ShieldCheck className="w-4 h-4" />
                      {pkg.sla}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-extrabold ${
                      pkg.featured ? "text-white" : "text-[#0B0D10]"
                    }`}
                  >
                    {pkg.tier}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#19A2E6]">
                      {pkg.speed}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase ${
                        pkg.featured ? "text-neutral-300" : "text-[#757679]"
                      }`}
                    >
                      {pkg.ratio}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-2 pb-5 border-b ${
                      pkg.featured
                        ? "text-neutral-400 border-neutral-800"
                        : "text-[#757679] border-neutral-200"
                    }`}
                  >
                    Ideal for:{" "}
                    <strong className={pkg.featured ? "text-white" : "text-[#0B0D10]"}>
                      {pkg.idealFor}
                    </strong>
                  </p>

                  <ul className="space-y-3 my-6">
                    {pkg.features.map((feat, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          pkg.featured ? "text-neutral-200" : "text-[#0B0D10]"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`pt-4 border-t ${
                    pkg.featured ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between text-xs mb-4 ${
                      pkg.featured ? "text-neutral-400" : "text-[#757679]"
                    }`}
                  >
                    <span>Protection Architecture:</span>
                    <strong className={pkg.featured ? "text-white" : "text-[#0B0D10]"}>
                      {pkg.protection}
                    </strong>
                  </div>
                  <Link
                    href={`/contact?tier=${encodeURIComponent(pkg.tier)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      pkg.featured
                        ? "bg-[#19A2E6] hover:bg-[#0D84C4] text-white shadow-[0_10px_25px_rgba(25,162,230,0.4)]"
                        : "bg-[#0B0D10] hover:bg-[#19A2E6] text-white shadow-md"
                    }`}
                  >
                    <span>Request Optical Feasibility</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: RADIAL HUB-AND-SPOKE SERVICES SECTION
          Logo Jet-Carbon Black (#0B0D10) + Logo Cyan (#19A2E6) Laser Lines
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-24 px-4 sm:px-8 relative bg-sapphire-section bg-tech-grid-dark text-white border-y-2 border-[#19A2E6]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              <Network className="w-3.5 h-3.5 text-[#19A2E6]" />
              Integrated Telecom &amp; ICT Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Enterprise Solutions We{" "}
              <span className="text-[#19A2E6]">
                Provide
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Click or hover any optical service node in our hub-and-spoke architecture to inspect technical capabilities, or explore all 9 enterprise services below.
            </p>
          </div>

          {/* Desktop Radial Hub-and-Spoke Diagram */}
          <div className="hidden lg:block relative h-[540px] max-w-[1180px] mx-auto">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1180 540"
              fill="none"
            >
              <path
                d="M 590 270 L 380 100 L 260 100"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="380" cy="100" r="5" fill="#19A2E6" />
              <path
                d="M 590 270 L 230 270"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="350" cy="270" r="5" fill="#19A2E6" />
              <path
                d="M 590 270 L 380 440 L 260 440"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="380" cy="440" r="5" fill="#19A2E6" />
              <path
                d="M 590 270 L 800 100 L 920 100"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="800" cy="100" r="5" fill="#19A2E6" />
              <path
                d="M 590 270 L 950 270"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="830" cy="270" r="5" fill="#19A2E6" />
              <path
                d="M 590 270 L 800 440 L 920 440"
                stroke="#19A2E6"
                strokeWidth="2.5"
                className="fiber-pulse-line opacity-85"
              />
              <circle cx="800" cy="440" r="5" fill="#19A2E6" />
            </svg>

            {/* Center Hub Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-b from-[#151921] to-[#0B0D10] border-2 border-[#19A2E6] shadow-[0_0_70px_rgba(25,162,230,0.4)] flex flex-col items-center justify-center text-center p-6 z-20">
              <div className="w-12 h-12 rounded-2xl bg-[#19A2E6] flex items-center justify-center mb-2.5 text-white shadow-lg">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#19A2E6]">
                {activeServiceObj.category}
              </span>
              <h3 className="text-base font-extrabold text-white mt-1">
                {activeServiceObj.shortTitle}
              </h3>
              <p className="text-xs text-neutral-300 mt-1.5 line-clamp-3 leading-relaxed">
                {activeServiceObj.shortDescription}
              </p>
              <Link
                href={`/services#${activeServiceObj.id}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#19A2E6] hover:text-white"
              >
                <span>Inspect Specifications</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6 Surrounding Radial Service Pills */}
            {radialServices.map((srv, idx) => {
              const IconComp = serviceIconMap[srv.iconName] || Network;
              const isSelected = activeRadialService === srv.id;
              const pos = radialPositions[idx];
              return (
                <button
                  key={srv.id}
                  type="button"
                  onMouseEnter={() => setActiveRadialService(srv.id)}
                  onClick={() => setActiveRadialService(srv.id)}
                  style={pos}
                  className={`absolute z-20 w-[285px] text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-[#19A2E6] border-white text-white shadow-[0_14px_38px_rgba(25,162,230,0.45)] scale-105"
                      : "bg-[#151921] hover:bg-[#1C222D] border-neutral-700 text-white shadow-lg"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#0B0D10] text-[#19A2E6]"
                        : "bg-[#0B0D10] border border-[#19A2E6]/40 text-[#19A2E6]"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-snug text-white">
                      {srv.shortTitle}
                    </p>
                    <p
                      className={`text-[11px] mt-0.5 line-clamp-1 ${
                        isSelected ? "text-white/90" : "text-[#757679]"
                      }`}
                    >
                      {srv.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Complete 9-Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 lg:mt-10">
            {SERVICES.map((srv) => {
              const IconComp = serviceIconMap[srv.iconName] || Network;
              return (
                <Link
                  key={srv.id}
                  href={`/services#${srv.id}`}
                  className="group rounded-2xl bg-[#141820] hover:bg-[#1A1F29] border border-neutral-800 hover:border-[#19A2E6] p-6 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0B0D10] border border-[#19A2E6]/40 flex items-center justify-center text-[#19A2E6] group-hover:bg-[#19A2E6] group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B0D10] text-neutral-300 border border-neutral-700">
                        {srv.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#19A2E6] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-bold text-[#19A2E6] group-hover:text-white">
                    <span>Technical Architecture &amp; Benefits</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: "WHY CHOOSE US" CONTAINER CARD
      ====================================================================== */}
      <section className="gsap-section-reveal py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto rounded-3xl card-ice-slate p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0D10] border border-[#19A2E6]/45 text-xs font-bold uppercase tracking-wider text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
                Why Choose EARTH I Broadband
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D10] leading-tight">
                Engineered for Zero-Downtime{" "}
                <span className="text-[#19A2E6]">
                  Enterprise Operations.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#757679] font-medium leading-relaxed">
                {COMPANY_INFO.introduction[0]}
              </p>

              {/* 6 Advantage Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {WHY_CHOOSE_US_POINTS.map((pt) => (
                  <div
                    key={pt.id}
                    className="p-4 rounded-2xl bg-[#F4F6F9] border border-neutral-300 hover:border-[#19A2E6] transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-[#0B0D10]">
                        {pt.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0B0D10] text-[#19A2E6] shrink-0">
                        {pt.metricHighlight}
                      </span>
                    </div>
                    <p className="text-xs text-[#757679] leading-relaxed font-medium">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: NOC Telemetry & Optical Ring Diagram Card in Jet Black & Cyan */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0B0D10] border-2 border-[#19A2E6]/50 p-6 sm:p-8 overflow-hidden text-white shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#19A2E6] animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      LIVE NOC OPTICAL TELEMETRY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#19A2E6]">
                    100G-DWDM-CORE
                  </span>
                </div>

                {/* Animated Optical Ring Visualization */}
                <div className="relative h-56 rounded-xl bg-[#13171F] border border-neutral-800 flex items-center justify-center overflow-hidden mb-6">
                  <div className="w-40 h-40 rounded-full border-2 border-dashed border-[#19A2E6]/70 animate-rotateImage absolute" />
                  <div className="w-28 h-28 rounded-full border border-[#757679]/60 animate-rotateReverse absolute" />
                  <div className="relative z-10 text-center">
                    <Activity className="w-8 h-8 text-[#19A2E6] mx-auto animate-pulse" />
                    <p className="text-lg font-extrabold text-white mt-1">
                      &lt; 50ms
                    </p>
                    <p className="text-[11px] text-[#757679] font-semibold">
                      Self-Healing Optical Ring
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  {INFRASTRUCTURE_SHOWCASE.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#151922] border border-neutral-800 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-[#757679] mt-0.5">{item.metrics}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    Compare Shared Broadband vs. DIA Fiber
                  </span>
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#19A2E6] hover:underline"
                  >
                    <span>Full Comparison</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: "WHERE TECHNOLOGY CONNECTS" BANNER
      ====================================================================== */}
      <section className="gsap-section-reveal py-8 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-hubex-banner border-2 border-[#19A2E6]/50 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Where Pure Optical Fiber Meets Enterprise Reliability
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              From underground armored conduit deployment to multi-homed BGP routing and Layer-2/3 MPLS interconnectivity, EARTH I Broadband powers mission-critical operations across commercial corridors.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#19A2E6] hover:bg-white text-white hover:text-[#0B0D10] font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all group"
              >
                <span>Explore Our 1,200+ km Fiber Backbone</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: PORTFOLIO / DEPLOYMENTS SHOWCASE
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0D10] border border-[#19A2E6]/45 text-xs font-bold uppercase tracking-wider text-white">
                <Layers className="w-3.5 h-3.5 text-[#19A2E6]" />
                Infrastructure Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D10] mt-2">
                Our Optical Fiber &amp; ICT{" "}
                <span className="text-[#19A2E6]">
                  Deployments
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0B0D10] text-[#19A2E6] border border-[#19A2E6] shadow-md"
                      : "card-ice-slate text-[#0B0D10] hover:border-[#19A2E6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl card-ice-slate p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-1/3 bg-[#0B0D10]" />
                  <div className="w-2/3 bg-[#19A2E6]" />
                </div>

                <div className="pt-1">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#757679] flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#19A2E6]" />
                      {project.corridor.split(",")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B0D10] group-hover:text-[#19A2E6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#757679] mt-2.5 leading-relaxed font-medium">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-[#0B0D10] font-medium"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#19A2E6] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: SPEECH-BUBBLE CARDS FOR INDUSTRIES & SECTORS
          (Logo Jet-Carbon Section + Cyan Accents)
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8 bg-sapphire-section bg-tech-grid-dark text-white border-y-2 border-[#19A2E6]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151921] border border-[#19A2E6]/50 text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
              Enterprise Sectors We Power
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Trusted Connectivity Across{" "}
              <span className="text-[#19A2E6]">
                Critical Industries
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Tailored optical transport, MPLS network segmentation, and high-availability internet architectures engineered for enterprise verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_SECTORS.map((sector, index) => {
              const SectorIcon = sectorIcons[index % sectorIcons.length];
              return (
                <div key={sector.name} className="flex flex-col justify-between">
                  <div className="relative rounded-2xl bg-[#141820] border border-neutral-700 hover:border-[#19A2E6] p-6 shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0B0D10] border border-[#19A2E6]/45 flex items-center justify-center text-[#19A2E6]">
                        <SectorIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#19A2E6] bg-[#0B0D10] px-2.5 py-1 rounded-full border border-neutral-700">
                        Enterprise SLA
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {sector.useCase}
                    </p>
                    <div className="w-4 h-4 bg-[#141820] border-r border-b border-neutral-700 rotate-45 absolute -bottom-2 left-8" />
                  </div>

                  <div className="mt-5 pl-4 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#19A2E6]" />
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {sector.name}
                      </h3>
                      <p className="text-[11px] text-[#757679]">
                        Dedicated Optical &amp; ICT Vertical
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: INTERACTIVE ENTERPRISE LINK CONFIGURATOR WIDGET
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B0D10] border border-[#19A2E6]/45 text-xs font-bold uppercase tracking-wider text-white">
              <Sliders className="w-3.5 h-3.5 text-[#19A2E6]" />
              Interactive ISP Link Configurator
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D10]">
              Configure Your{" "}
              <span className="text-[#19A2E6]">
                Optical Circuit Specification
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#757679] font-medium">
              Select your required service architecture, symmetrical bandwidth tier, protection topology, and metropolitan corridor to prepare a tailored engineering feasibility request.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Cols: Interactive Controls */}
            <div className="lg:col-span-7 rounded-3xl card-ice-slate p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0D10] mb-3">
                  1. Select Optical / ICT Service Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SERVICES.slice(0, 6).map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        selectedServiceId === srv.id
                          ? "bg-[#0B0D10] border-[#19A2E6] text-[#19A2E6] shadow-md"
                          : "bg-[#F4F6F9] border-neutral-300 text-[#0B0D10] hover:border-[#19A2E6]"
                      }`}
                    >
                      {srv.shortTitle}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="bandwidth-slider"
                    className="text-xs font-bold uppercase tracking-wider text-[#0B0D10]"
                  >
                    2. Target Symmetrical Throughput (1:1 Uncontended)
                  </label>
                  <span className="text-lg font-extrabold text-[#19A2E6]">
                    {bandwidthMbps >= 1000
                      ? `${(bandwidthMbps / 1000).toFixed(1)} Gbps`
                      : `${bandwidthMbps} Mbps`}
                  </span>
                </div>
                <input
                  id="bandwidth-slider"
                  type="range"
                  min={20}
                  max={2000}
                  step={20}
                  value={bandwidthMbps}
                  onChange={(e) => setBandwidthMbps(Number(e.target.value))}
                  className="w-full accent-[#19A2E6] cursor-pointer h-2 rounded-lg bg-neutral-300"
                />
                <div className="flex justify-between text-[11px] text-[#757679] font-semibold mt-1">
                  <span>20 Mbps</span>
                  <span>250 Mbps</span>
                  <span>500 Mbps</span>
                  <span>1 Gbps</span>
                  <span>2 Gbps+ Wave</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0D10] mb-2">
                    3. Protection Topology
                  </label>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setRedundancyMode("standard-ring")}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${
                        redundancyMode === "standard-ring"
                          ? "bg-[#0B0D10] border-[#19A2E6] text-white font-bold shadow-md"
                          : "bg-[#F4F6F9] border-neutral-300 text-[#0B0D10]"
                      }`}
                    >
                      <div className={redundancyMode === "standard-ring" ? "font-bold text-[#19A2E6]" : "font-bold text-[#0B0D10]"}>
                        Metro Ring Protected
                      </div>
                      <div className={redundancyMode === "standard-ring" ? "text-[11px] text-neutral-300" : "text-[11px] text-[#757679]"}>
                        99.9% SLA &bull; &lt;50ms Ring Switch
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRedundancyMode("dual-homed-ha")}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${
                        redundancyMode === "dual-homed-ha"
                          ? "bg-[#0B0D10] border-[#19A2E6] text-white font-bold shadow-md"
                          : "bg-[#F4F6F9] border-neutral-300 text-[#0B0D10]"
                      }`}
                    >
                      <div className={redundancyMode === "dual-homed-ha" ? "font-bold text-[#19A2E6]" : "font-bold text-[#0B0D10]"}>
                        Dual-Homed Diverse PoP HA
                      </div>
                      <div className={redundancyMode === "dual-homed-ha" ? "text-[11px] text-neutral-300" : "text-[11px] text-[#757679]"}>
                        99.99% SLA &bull; Physically Diverse Fiber
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="corridor-select"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0B0D10] mb-2"
                  >
                    4. Primary Commercial Corridor
                  </label>
                  <select
                    id="corridor-select"
                    value={selectedCorridor}
                    onChange={(e) => setSelectedCorridor(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs font-semibold text-[#0B0D10] focus:outline-none focus:border-[#19A2E6]"
                  >
                    {CONTACT_INFO.coverageZones.map((zone) => (
                      <option key={zone} value={zone} className="bg-white text-[#0B0D10]">
                        {zone}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-[#757679] mt-2 leading-relaxed font-medium">
                    Our GIS fiber engineering desk verifies underground splice closure proximity along your selected corridor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Live Specification Output Card in Logo Jet-Black & Cyan */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0B0D10] border-2 border-[#19A2E6] p-6 sm:p-8 flex flex-col justify-between text-white shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
                    Configured Optical Circuit Profile
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#19A2E6]/20 text-[#19A2E6] border border-[#19A2E6]/40 font-semibold">
                    Ready for Survey
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">
                  {configuredServiceObj.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {configuredServiceObj.shortDescription}
                </p>

                <div className="mt-6 space-y-3 text-xs">
                  <div className="flex items-center justify-between py-2.5 border-b border-neutral-800">
                    <span className="text-[#757679]">Symmetrical Throughput:</span>
                    <span className="font-bold text-[#19A2E6] text-sm">
                      {bandwidthMbps >= 1000
                        ? `${(bandwidthMbps / 1000).toFixed(1)} Gbps (1:1)`
                        : `${bandwidthMbps} Mbps (1:1)`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-neutral-800">
                    <span className="text-[#757679]">Protection Architecture:</span>
                    <span className="font-semibold text-white">
                      {redundancyMode === "dual-homed-ha"
                        ? "Dual-Homed Diverse PoP (99.99% SLA)"
                        : "Self-Healing Metro Ring (99.9% SLA)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-neutral-800">
                    <span className="text-[#757679]">Target Corridor:</span>
                    <span className="font-semibold text-white">
                      {selectedCorridor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-neutral-800">
                    <span className="text-[#757679]">NOC Monitoring:</span>
                    <span className="font-semibold text-[#19A2E6]">
                      24/7/365 Proactive (&lt;15m Response)
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    configuredServiceObj.shortTitle
                  )}&bandwidth=${bandwidthMbps}Mbps&corridor=${encodeURIComponent(
                    selectedCorridor
                  )}`}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#19A2E6] hover:bg-[#0D84C4] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span>Request Feasibility for This Configuration</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
