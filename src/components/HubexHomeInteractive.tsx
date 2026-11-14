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

// Enterprise ISP Bandwidth & Circuit Packages (Verified context: 1:1 DIA, MPLS, P2P Fiber, Managed ICT)
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

  // Interactive Radial Hub State
  const [activeRadialService, setActiveRadialService] = useState<string>(
    SERVICES[0].id
  );

  // Portfolio Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Interactive Enterprise Link Configurator State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    "dedicated-internet-access"
  );
  const [bandwidthMbps, setBandwidthMbps] = useState<number>(250);
  const [redundancyMode, setRedundancyMode] = useState<
    "standard-ring" | "dual-homed-ha"
  >("dual-homed-ha");
  const [selectedCorridor, setSelectedCorridor] = useState<string>(
    "Main Boulevard Gulberg-III"
  );

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero staggered entrance
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

      // Section reveal on scroll
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

  // Radial positions for 6 core services around the central hub (Desktop)
  const radialServices = SERVICES.slice(0, 6);
  const radialPositions = [
    { top: "8%", left: "6%" }, // Top Left
    { top: "44%", left: "1%" }, // Mid Left
    { top: "80%", left: "8%" }, // Bottom Left
    { top: "8%", right: "6%" }, // Top Right
    { top: "44%", right: "1%" }, // Mid Right
    { top: "80%", right: "8%" }, // Bottom Right
  ];

  return (
    <div ref={pageRef} className="overflow-hidden">
      {/* =====================================================================
          SECTION 1: HUBEXTECH SIGNATURE HERO SECTION (LIGHT ISP EDITION)
          Left: H1 + Verified Z COM Context + Dual Buttons + Live Fiber Telemetry
          Right: Rotating Orbital ISP Rings + 3D Fiber Canvas + 5 Floating Badges
      ====================================================================== */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-8 overflow-hidden bg-tech-grid">
        {/* Soft Daylight Ambient Glows */}
        <div className="pointer-events-none absolute top-12 left-10 w-[420px] h-[420px] bg-brand_cyan/15 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-[520px] h-[520px] bg-brand_blue/10 rounded-full blur-[140px]" />

        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left z-10">
              <div className="gsap-hero-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-brand_cyan/40 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-brand_cyan animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand_blue">
                  Enterprise Fiber-Optic ISP &bull; 1,200+ km Metro Core
                </span>
              </div>

              <h1 className="gsap-hero-reveal text-3xl sm:text-5xl xl:text-[56px] font-extrabold text-slate-900 leading-[1.12] tracking-tight">
                Connecting Businesses.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                  Empowering Possibilities.
                </span>
              </h1>

              <p className="gsap-hero-reveal text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                <strong className="text-slate-900">{COMPANY_INFO.name}</strong> engineers mission-critical optical fiber connectivity,{" "}
                <span className="text-brand_blue font-semibold">
                  1:1 symmetrical Dedicated Internet Access (DIA)
                </span>
                , Layer-2/3 MPLS VPNs, and managed enterprise ICT infrastructure backed by a{" "}
                <strong className="text-slate-900">1,200+ km subterranean armored metro fiber network</strong> and 24/7/365 NOC telemetry.
              </p>

              {/* Live ISP Telemetry Strip */}
              <div className="gsap-hero-reveal grid grid-cols-3 gap-3 max-w-xl pt-1">
                <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-brand_cyan">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Symmetry</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    1:1 Uncontended
                  </p>
                  <p className="text-[11px] text-slate-500">Zero throttle DIA</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-emerald-600">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Ring Healing</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    &lt; 50ms Switch
                  </p>
                  <p className="text-[11px] text-slate-500">Auto optical failover</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-brand_blue">
                    <Router className="w-3.5 h-3.5" />
                    <span>Core Capacity</span>
                  </div>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
                    100 Gbps Ring
                  </p>
                  <p className="text-[11px] text-slate-500">Multi-PoP backbone</p>
                </div>
              </div>

              {/* Dual Hero Buttons */}
              <div className="gsap-hero-reveal pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-[0_10px_28px_rgba(15,164,232,0.32)] transition-all duration-300 group"
                >
                  <span>Explore ISP Solutions</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 border border-slate-300 hover:border-brand_cyan text-slate-800 hover:text-brand_blue font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-sm transition-all duration-300 group"
                >
                  <span>Check Fiber Feasibility</span>
                  <ChevronRight className="w-4 h-4 text-brand_cyan transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): HubexTech Rotating Orbital Centerpiece + 3D Fiber Core + 5 Floating Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[390px] sm:min-h-[470px]">
              {/* Soft Sky-Blue Circular Halo */}
              <div className="w-[310px] h-[310px] sm:w-[410px] sm:h-[410px] rounded-full bg-gradient-to-tr from-sky-100/90 via-white to-sky-50 border border-sky-200/80 shadow-[0_20px_60px_rgba(14,165,233,0.15)] relative flex items-center justify-center">
                {/* Outer Rotating Dashed Ring (animate-rotateImage) */}
                <div className="w-[290px] h-[290px] sm:w-[385px] sm:h-[385px] rounded-full border-2 border-dashed border-brand_cyan/50 animate-rotateImage absolute" />

                {/* Second Counter-Rotating Ring */}
                <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-brand_blue/30 animate-rotateReverse absolute" />

                {/* Inner Glowing Core with React Three Fiber 3D Canvas */}
                <div className="w-[205px] h-[205px] sm:w-[270px] sm:h-[270px] rounded-full bg-gradient-to-b from-sky-50 via-white to-sky-100/70 border-2 border-brand_cyan/40 overflow-hidden relative flex items-center justify-center shadow-inner">
                  <FiberNetworkCanvas />
                  {/* Center ISP Core Label Overlay */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-white/25 backdrop-blur-[1px]">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand_blue bg-white/90 px-2.5 py-0.5 rounded-full border border-sky-200 shadow-sm">
                      EARTH I NOC CORE
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 drop-shadow-sm">
                      100G RING
                    </span>
                    <span className="text-[11px] font-bold text-brand_cyan">
                      Pure Optical Fiber
                    </span>
                  </div>
                </div>

                {/* 5 Floating Animated Pill Badges around the Orbital Circle (HubexTech Signature in Light Theme) */}
                {/* Badge 1: Top Left */}
                <div className="absolute -top-3 -left-2 sm:top-2 sm:-left-6 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-brand_cyan/40 shadow-[0_10px_25px_rgba(15,23,42,0.08)] animate-fadeInOutSmooth">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand_cyan animate-ping" />
                    <span className="text-xs font-bold text-slate-800">
                      1,200+ km Armored Fiber
                    </span>
                  </div>
                </div>

                {/* Badge 2: Top Right */}
                <div
                  className="absolute -top-4 right-0 sm:top-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-brand_cyan/40 shadow-[0_10px_25px_rgba(15,23,42,0.08)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3.5 h-3.5 text-brand_cyan" />
                    <span className="text-xs font-bold text-slate-800">
                      1:1 Symmetrical DIA
                    </span>
                  </div>
                </div>

                {/* Badge 3: Middle Right */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-400/50 shadow-[0_10px_25px_rgba(15,23,42,0.08)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "1.6s" }}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-800">
                      99.99% Uptime SLA
                    </span>
                  </div>
                </div>

                {/* Badge 4: Bottom Right */}
                <div
                  className="absolute -bottom-3 right-2 sm:bottom-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-brand_cyan/40 shadow-[0_10px_25px_rgba(15,23,42,0.08)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "2.4s" }}
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-brand_cyan" />
                    <span className="text-xs font-bold text-slate-800">
                      &lt;50ms Ring Failover
                    </span>
                  </div>
                </div>

                {/* Badge 5: Bottom Left */}
                <div
                  className="absolute -bottom-3 -left-2 sm:bottom-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-brand_cyan/40 shadow-[0_10px_25px_rgba(15,23,42,0.08)] animate-fadeInOutSmooth"
                  style={{ animationDelay: "3.2s" }}
                >
                  <div className="flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-brand_blue" />
                    <span className="text-xs font-bold text-slate-800">
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
          SECTION 2: HUBEXTECH MARQUEE TICKER STRIP + VERIFIED STATS BAR
      ====================================================================== */}
      <section className="py-6 border-y border-slate-200 bg-white relative overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand_cyan" />
                1,200+ KM SUBTERRANEAN ARMORED METRO FIBER
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand_blue" />
                100 GBPS MULTI-RING OPTICAL CORE
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                1:1 UNCONTENDED SYMMETRICAL BANDWIDTH
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand_cyan" />
                MPLS LAYER-2 &amp; LAYER-3 VPN MESH
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand_blue" />
                POINT-TO-POINT DARK &amp; LIT OPTICAL WAVELENGTHS
              </span>
              <span className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                24/7/365 PROACTIVE NOC TELEMETRY (&lt;15M RESPONSE)
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Verified Infrastructure Statistics Cards */}
      <section className="gsap-section-reveal py-12 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFRASTRUCTURE_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl bg-white border border-slate-200/90 hover:border-brand_cyan p-6 transition-all duration-300 shadow-card-premium hover:shadow-card-hover group"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-brand_blue border border-sky-200">
                  {stat.unit}
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mt-3">
                {stat.label}
              </h2>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: ENTERPRISE ISP BANDWIDTH & CIRCUIT PACKAGES (ISP-SPECIFIC)
      ====================================================================== */}
      <section className="gsap-section-reveal py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
              <Wifi className="w-3.5 h-3.5 text-brand_cyan" />
              Enterprise Optical ISP Tiers
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Dedicated Symmetrical Fiber{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                Connectivity Profiles
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Unlike shared consumer broadband, every EARTH I Broadband enterprise circuit is provisioned over subterranean armored optical fiber with guaranteed 1:1 upload and download throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ISP_BANDWIDTH_TIERS.map((pkg) => (
              <div
                key={pkg.tier}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  pkg.featured
                    ? "bg-gradient-to-b from-white via-sky-50/40 to-white border-2 border-brand_cyan shadow-[0_24px_60px_rgba(15,164,232,0.16)] lg:-translate-y-2"
                    : "bg-white border border-slate-200/90 shadow-card-premium hover:shadow-card-hover hover:border-brand_cyan/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        pkg.featured
                          ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-sm"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      {pkg.sla}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {pkg.tier}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                      {pkg.speed}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      {pkg.ratio}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 pb-5 border-b border-slate-200">
                    Ideal for: <strong className="text-slate-800">{pkg.idealFor}</strong>
                  </p>

                  <ul className="space-y-3 my-6">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>Protection Architecture:</span>
                    <strong className="text-slate-800">{pkg.protection}</strong>
                  </div>
                  <Link
                    href={`/contact?tier=${encodeURIComponent(pkg.tier)}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      pkg.featured
                        ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-md hover:brightness-105"
                        : "bg-slate-900 hover:bg-brand_blue text-white"
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
          SECTION 4: HUBEXTECH SIGNATURE RADIAL HUB-AND-SPOKE SERVICES SECTION
          Center Hub: EARTH I Optical Core + Animated SVG Pulse Lines
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-24 px-4 sm:px-8 relative bg-white/70 border-y border-slate-200/80">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
              <Network className="w-3.5 h-3.5 text-brand_cyan" />
              Integrated Telecom &amp; ICT Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Enterprise Solutions We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                Provide
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Click or hover any optical service node in our hub-and-spoke architecture to inspect technical capabilities, or explore all 9 enterprise services below.
            </p>
          </div>

          {/* Desktop Radial Hub-and-Spoke Diagram */}
          <div className="hidden lg:block relative h-[540px] max-w-[1180px] mx-auto">
            {/* Animated SVG Fiber-Optic Connector Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1180 540"
              fill="none"
            >
              {/* Left Top */}
              <path
                d="M 590 270 L 380 100 L 260 100"
                stroke="#0FA4E8"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="380" cy="100" r="5" fill="#0FA4E8" />
              {/* Left Mid */}
              <path
                d="M 590 270 L 230 270"
                stroke="#0284C7"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="350" cy="270" r="5" fill="#0284C7" />
              {/* Left Bottom */}
              <path
                d="M 590 270 L 380 440 L 260 440"
                stroke="#0FA4E8"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="380" cy="440" r="5" fill="#0FA4E8" />
              {/* Right Top */}
              <path
                d="M 590 270 L 800 100 L 920 100"
                stroke="#0FA4E8"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="800" cy="100" r="5" fill="#0FA4E8" />
              {/* Right Mid */}
              <path
                d="M 590 270 L 950 270"
                stroke="#0284C7"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="830" cy="270" r="5" fill="#0284C7" />
              {/* Right Bottom */}
              <path
                d="M 590 270 L 800 440 L 920 440"
                stroke="#0FA4E8"
                strokeWidth="2"
                className="fiber-pulse-line opacity-60"
              />
              <circle cx="800" cy="440" r="5" fill="#0FA4E8" />
            </svg>

            {/* Center Hub Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white border-2 border-brand_cyan shadow-[0_20px_60px_rgba(15,164,232,0.22)] flex flex-col items-center justify-center text-center p-6 z-20">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand_cyan to-brand_blue flex items-center justify-center mb-2.5 text-white shadow-md">
                <Radio className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand_blue">
                {activeServiceObj.category}
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-1">
                {activeServiceObj.shortTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                {activeServiceObj.shortDescription}
              </p>
              <Link
                href={`/services#${activeServiceObj.id}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand_cyan hover:text-brand_blue"
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
                      ? "bg-gradient-to-r from-brand_cyan to-brand_blue border-brand_cyan text-white shadow-[0_14px_34px_rgba(15,164,232,0.3)] scale-105"
                      : "bg-white hover:bg-sky-50 border-slate-200/90 text-slate-800 shadow-card-premium"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-sky-50 border border-sky-200 text-brand_cyan"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold leading-snug ${
                        isSelected ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {srv.shortTitle}
                    </p>
                    <p
                      className={`text-[11px] mt-0.5 line-clamp-1 ${
                        isSelected ? "text-sky-100" : "text-slate-500"
                      }`}
                    >
                      {srv.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Complete 9-Service Grid (Responsive & Always Accessible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 lg:mt-10">
            {SERVICES.map((srv) => {
              const IconComp = serviceIconMap[srv.iconName] || Network;
              return (
                <Link
                  key={srv.id}
                  href={`/services#${srv.id}`}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-brand_cyan p-6 transition-all duration-300 shadow-card-premium hover:shadow-card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-brand_cyan group-hover:bg-gradient-to-br group-hover:from-brand_cyan group-hover:to-brand_blue group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-brand_blue">
                        {srv.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand_blue transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand_cyan group-hover:text-brand_blue">
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
          SECTION 5: HUBEXTECH "WHY CHOOSE US" LARGE CONTAINER CARD
          Left: 2x3 Advantages Grid + Metrics | Right: Optical NOC Visual Card
      ====================================================================== */}
      <section className="gsap-section-reveal py-14 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-14 shadow-card-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
                <ShieldCheck className="w-3.5 h-3.5 text-brand_cyan" />
                Why Choose EARTH I Broadband
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Engineered for Zero-Downtime{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                  Enterprise Operations.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {COMPANY_INFO.introduction[0]}
              </p>

              {/* 6 Advantage Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {WHY_CHOOSE_US_POINTS.map((pt) => (
                  <div
                    key={pt.id}
                    className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-brand_cyan/50 hover:bg-white transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-slate-900">
                        {pt.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-100 text-brand_blue shrink-0">
                        {pt.metricHighlight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: NOC Telemetry & Optical Ring Diagram Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 border border-slate-800 p-6 sm:p-8 overflow-hidden text-white shadow-xl">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      LIVE NOC OPTICAL TELEMETRY
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-brand_cyan">
                    100G-DWDM-CORE
                  </span>
                </div>

                {/* Animated Optical Ring Visualization */}
                <div className="relative h-56 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center overflow-hidden mb-6">
                  <div className="w-40 h-40 rounded-full border-2 border-dashed border-brand_cyan/50 animate-rotateImage absolute" />
                  <div className="w-28 h-28 rounded-full border border-sky-400/40 animate-rotateReverse absolute" />
                  <div className="relative z-10 text-center">
                    <Activity className="w-8 h-8 text-brand_cyan mx-auto animate-pulse" />
                    <p className="text-lg font-extrabold text-white mt-1">
                      &lt; 50ms
                    </p>
                    <p className="text-[11px] text-sky-200">
                      Self-Healing Optical Ring
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  {INFRASTRUCTURE_SHOWCASE.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-slate-300 mt-0.5">{item.metrics}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">
                    Compare Shared Broadband vs. DIA Fiber
                  </span>
                  <Link
                    href="/why-choose-us"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand_cyan hover:underline"
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
          SECTION 6: HUBEXTECH "WHERE TECHNOLOGY CONNECTS" RADIAL BANNER
      ====================================================================== */}
      <section className="gsap-section-reveal py-8 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto rounded-3xl bg-hubex-banner border border-sky-300/40 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Where Pure Optical Fiber Meets Enterprise Reliability
            </h2>
            <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
              From underground armored conduit deployment to multi-homed BGP routing and Layer-2/3 MPLS interconnectivity, EARTH I Broadband powers mission-critical operations across commercial corridors.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-sky-50 font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all group"
              >
                <span>Explore Our 1,200+ km Fiber Backbone</span>
                <ChevronRight className="w-4 h-4 text-brand_cyan transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: HUBEXTECH PORTFOLIO / DEPLOYMENTS SHOWCASE
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
                <Layers className="w-3.5 h-3.5 text-brand_cyan" />
                Infrastructure Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Our Optical Fiber &amp; ICT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                  Deployments
                </span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-brand_cyan"
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
                className="group rounded-2xl bg-white border border-slate-200/90 hover:border-brand_cyan p-6 flex flex-col justify-between transition-all duration-300 shadow-card-premium hover:shadow-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-brand_blue border border-sky-200">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand_cyan" />
                      {project.corridor.split(",")[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand_blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                    >
                      <Zap className="w-3.5 h-3.5 text-brand_cyan shrink-0" />
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
          SECTION 8: HUBEXTECH SPEECH-BUBBLE CARDS FOR INDUSTRIES & SECTORS
          (Strictly zero fake testimonials; factual industry use cases)
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8 bg-white/70 border-y border-slate-200/80">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
              Enterprise Sectors We Power
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Trusted Connectivity Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                Critical Industries
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Tailored optical transport, MPLS network segmentation, and high-availability internet architectures engineered for enterprise verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SECTORS.map((sector, index) => {
              const SectorIcon = sectorIcons[index % sectorIcons.length];
              return (
                <div key={sector.name} className="flex flex-col justify-between">
                  {/* Speech Bubble Top Box */}
                  <div className="relative rounded-2xl bg-white border border-slate-200/90 hover:border-brand_cyan p-6 shadow-card-premium transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-brand_cyan">
                        <SectorIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand_blue bg-sky-50 px-2.5 py-1 rounded-full">
                        Enterprise SLA
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sector.useCase}
                    </p>
                    {/* Bottom pointer triangle */}
                    <div className="w-4 h-4 bg-white border-r border-b border-slate-200 rotate-45 absolute -bottom-2 left-8" />
                  </div>

                  {/* Sector Attribution Footer */}
                  <div className="mt-5 pl-4 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand_cyan" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {sector.name}
                      </h3>
                      <p className="text-[11px] text-slate-500">
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
          SECTION 9: HUBEXTECH INTERACTIVE ENTERPRISE LINK CONFIGURATOR WIDGET
      ====================================================================== */}
      <section className="gsap-section-reveal py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold uppercase tracking-wider text-brand_blue">
              <Sliders className="w-3.5 h-3.5 text-brand_cyan" />
              Interactive ISP Link Configurator
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Configure Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand_cyan to-brand_blue">
                Optical Circuit Specification
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select your required service architecture, symmetrical bandwidth tier, protection topology, and metropolitan corridor to prepare a tailored engineering feasibility request.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Cols: Interactive Controls */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-card-premium">
              {/* Step 1: Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand_blue mb-3">
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
                          ? "bg-gradient-to-r from-brand_cyan to-brand_blue border-brand_cyan text-white shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-brand_cyan/50 hover:bg-white"
                      }`}
                    >
                      {srv.shortTitle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Bandwidth Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="bandwidth-slider"
                    className="text-xs font-bold uppercase tracking-wider text-brand_blue"
                  >
                    2. Target Symmetrical Throughput (1:1 Uncontended)
                  </label>
                  <span className="text-lg font-extrabold text-brand_cyan">
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
                  className="w-full accent-brand_cyan cursor-pointer h-2 rounded-lg bg-slate-200"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
                  <span>20 Mbps</span>
                  <span>250 Mbps</span>
                  <span>500 Mbps</span>
                  <span>1 Gbps</span>
                  <span>2 Gbps+ Wave</span>
                </div>
              </div>

              {/* Step 3: Redundancy Topology & Corridor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand_blue mb-2">
                    3. Protection Topology
                  </label>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setRedundancyMode("standard-ring")}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${
                        redundancyMode === "standard-ring"
                          ? "bg-sky-50 border-brand_cyan text-slate-900 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      <div className="font-bold text-slate-900">Metro Ring Protected</div>
                      <div className="text-[11px] text-slate-500">
                        99.9% SLA &bull; &lt;50ms Ring Switch
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRedundancyMode("dual-homed-ha")}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all ${
                        redundancyMode === "dual-homed-ha"
                          ? "bg-sky-50 border-brand_cyan text-slate-900 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-600"
                      }`}
                    >
                      <div className="font-bold text-slate-900">Dual-Homed Diverse PoP HA</div>
                      <div className="text-[11px] text-slate-500">
                        99.99% SLA &bull; Physically Diverse Fiber
                      </div>
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="corridor-select"
                    className="block text-xs font-bold uppercase tracking-wider text-brand_blue mb-2"
                  >
                    4. Primary Commercial Corridor
                  </label>
                  <select
                    id="corridor-select"
                    value={selectedCorridor}
                    onChange={(e) => setSelectedCorridor(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-brand_cyan"
                  >
                    {CONTACT_INFO.coverageZones.map((zone) => (
                      <option key={zone} value={zone} className="bg-white text-slate-900">
                        {zone}
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                    Our GIS fiber engineering desk verifies underground splice closure proximity along your selected corridor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Live Specification Output Card */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
                    Configured Optical Circuit Profile
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    Ready for Survey
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white">
                  {configuredServiceObj.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {configuredServiceObj.shortDescription}
                </p>

                <div className="mt-6 space-y-3 text-xs">
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <span className="text-slate-400">Symmetrical Throughput:</span>
                    <span className="font-bold text-brand_cyan text-sm">
                      {bandwidthMbps >= 1000
                        ? `${(bandwidthMbps / 1000).toFixed(1)} Gbps (1:1)`
                        : `${bandwidthMbps} Mbps (1:1)`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <span className="text-slate-400">Protection Architecture:</span>
                    <span className="font-semibold text-white">
                      {redundancyMode === "dual-homed-ha"
                        ? "Dual-Homed Diverse PoP (99.99% SLA)"
                        : "Self-Healing Metro Ring (99.9% SLA)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <span className="text-slate-400">Target Corridor:</span>
                    <span className="font-semibold text-white">
                      {selectedCorridor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-white/10">
                    <span className="text-slate-400">NOC Monitoring:</span>
                    <span className="font-semibold text-emerald-400">
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
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
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
