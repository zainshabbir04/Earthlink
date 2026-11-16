"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
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
  Phone,
  Mail,
  MapPin,
  Send,
  Activity,
  Wifi,
  Zap,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { NAV_LINKS, SERVICES, CONTACT_INFO } from "@/data/siteData";

const iconMap: Record<string, React.ElementType> = {
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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Dedicated Internet Access (DIA)",
    bandwidth: "100 Mbps Symmetrical",
    location: "",
  });
  const [quoteNotice, setQuoteNotice] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteNotice(true);
    const subject = encodeURIComponent(
      `[EARTH I Broadband Optical Link Quote] ${quoteForm.service} (${quoteForm.bandwidth}) — ${quoteForm.company || quoteForm.name}`
    );
    const body = encodeURIComponent(
      `Name: ${quoteForm.name}\nCompany: ${quoteForm.company}\nEmail: ${quoteForm.email}\nPhone: ${quoteForm.phone}\nService: ${quoteForm.service}\nBandwidth Tier: ${quoteForm.bandwidth}\nSite Coordinates / Corridor: ${quoteForm.location}`
    );
    window.location.href = `mailto:${CONTACT_INFO.generalEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* TOP ISP NOC TELEMETRY STATUS BAR — LOGO JET BLACK (#0B0D10) & LOGO CYAN (#19A2E6) */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#0B0D10] text-white border-b border-[#19A2E6]/35 h-9">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-[#19A2E6] font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19A2E6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#19A2E6]"></span>
              </span>
              100G Metro Core Optical Ring: Operational
            </span>
            <span className="text-[#757679]">|</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <Zap className="w-3.5 h-3.5 text-[#19A2E6]" />
              1,200+ km Subterranean Armored Fiber
            </span>
            <span className="text-[#757679]">|</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#19A2E6]" />
              99.99% Enterprise SLA &bull; &lt;50ms Failover
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#19A2E6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#19A2E6]" />
              24/7 NOC Support: <strong className="text-white">{CONTACT_INFO.phone}</strong>
            </a>
            <span className="text-[#757679]">|</span>
            <Link
              href="/contact#feasibility"
              className="text-[#19A2E6] hover:text-white font-bold flex items-center gap-1 transition-colors"
            >
              Check Fiber Coverage <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* FLOATING CRISP WHITE NAVBAR WITH LOGO BLACK & CYAN ACCENTS */}
      <header className="fixed top-2 lg:top-11 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`max-w-[1440px] mx-auto rounded-2xl transition-all duration-300 border-b-2 border-b-[#19A2E6] border-x border-t ${
            scrolled
              ? "bg-white/98 backdrop-blur-xl border-neutral-200 shadow-[0_14px_38px_rgba(11,13,16,0.14)] py-2.5 px-4 sm:px-7"
              : "bg-white/95 backdrop-blur-lg border-neutral-200/90 shadow-[0_10px_30px_rgba(11,13,16,0.1)] py-3 px-4 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Official EARTH I Broadband Logo — Seamless on Crisp White */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="EARTH I Broadband (Pvt.) Ltd. Home"
            >
              <Image
                src="/logo-color.png"
                alt="EARTH I Broadband (Pvt.) Ltd."
                width={168}
                height={50}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links — Logo Black (#0B0D10), Grey (#757679), & Cyan (#19A2E6) */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-semibold"
              aria-label="Primary Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.label === "Services") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 py-2 transition-colors duration-200 font-bold ${
                          isActive
                            ? "text-[#19A2E6]"
                            : "text-[#0B0D10] hover:text-[#19A2E6]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#19A2E6]" : "text-[#757679]"
                          }`}
                        />
                      </Link>

                      {/* Mega-Menu in Logo Black, White & Cyan */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px] z-50">
                          <div className="bg-[#0B0D10] text-white border-2 border-[#19A2E6]/50 rounded-2xl p-6 shadow-[0_28px_70px_rgba(11,13,16,0.55)]">
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                              <div className="flex items-center gap-2">
                                <Wifi className="w-4 h-4 text-[#19A2E6]" />
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                                  Enterprise Optical ISP &amp; ICT Solutions
                                </span>
                              </div>
                              <Link
                                href="/services"
                                className="text-xs font-bold text-[#19A2E6] hover:text-white flex items-center gap-1"
                              >
                                View All 9 Solutions <ChevronRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-2.5">
                              {SERVICES.map((srv) => {
                                const IconComp = iconMap[srv.iconName] || Network;
                                return (
                                  <Link
                                    key={srv.id}
                                    href={`/services#${srv.id}`}
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#161A22] border border-transparent hover:border-[#19A2E6]/50 transition-all"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-[#161A22] border border-[#19A2E6]/35 flex items-center justify-center shrink-0 group-hover:bg-[#19A2E6] group-hover:text-white text-[#19A2E6] transition-colors">
                                      <IconComp className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white group-hover:text-[#19A2E6] transition-colors leading-snug">
                                        {srv.shortTitle}
                                      </p>
                                      <p className="text-[11px] text-[#757679] mt-0.5 line-clamp-1">
                                        {srv.category}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-2 transition-colors duration-200 font-bold relative ${
                      isActive
                        ? "text-[#19A2E6] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#19A2E6] after:rounded-full"
                        : "text-[#0B0D10] hover:text-[#19A2E6]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA Button — Logo Jet Black + Logo Cyan Accent */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-[#0B0D10] hover:bg-[#19A2E6] text-white font-bold text-sm px-6 py-2.5 rounded-xl border border-[#19A2E6]/50 shadow-[0_6px_20px_rgba(11,13,16,0.18)] hover:shadow-[0_10px_26px_rgba(25,162,230,0.4)] transition-all duration-300 group"
              >
                <Activity className="w-4 h-4 text-[#19A2E6] group-hover:text-white animate-pulse" />
                <span>Get Connected</span>
                <ChevronRight className="w-4 h-4 text-[#19A2E6] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#0B0D10] text-white hover:text-[#19A2E6] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-[#0B0D10] border border-[#19A2E6]/40 p-5 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs text-[#19A2E6] font-bold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#19A2E6] animate-ping" />
                100G Metro Fiber Core Active
              </span>
              <span className="text-neutral-400">SLA 99.99%</span>
            </div>
            <nav className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-[#19A2E6]/20 text-[#19A2E6] border border-[#19A2E6]/40"
                        : "text-neutral-200 hover:bg-neutral-900 hover:text-[#19A2E6]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-neutral-800 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#19A2E6] text-center text-white font-bold text-sm shadow-md"
                >
                  Request Fiber Feasibility
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteDrawerOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-semibold"
                >
                  Get a Free Bandwidth Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Vertical Right-Edge "Get a Free Link Quote" Tab + Drawer in Logo Black & Cyan */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-40 flex items-center transition-transform duration-500 ease-in-out ${
          quoteDrawerOpen ? "translate-x-0" : "translate-x-[340px] sm:translate-x-[380px]"
        }`}
      >
        <button
          type="button"
          onClick={() => setQuoteDrawerOpen(!quoteDrawerOpen)}
          className="bg-[#0B0D10] hover:bg-[#19A2E6] border-l-2 border-y-2 border-[#19A2E6] text-white font-bold text-xs tracking-wider uppercase py-5 px-2.5 rounded-l-xl shadow-[-6px_0_24px_rgba(11,13,16,0.45)] transition-all flex items-center justify-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Get a free ISP bandwidth quote"
        >
          Get a Free Link Quote
        </button>

        <div className="w-[340px] sm:w-[380px] bg-[#0B0D10] border-2 border-[#19A2E6]/50 rounded-l-2xl p-6 shadow-[-20px_0_50px_rgba(11,13,16,0.65)] max-h-[88vh] overflow-y-auto text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#19A2E6] block">
                Optical Feasibility Desk
              </span>
              <h3 className="text-lg font-bold text-white">Get a Free ISP Quote</h3>
            </div>
            <button
              type="button"
              onClick={() => setQuoteDrawerOpen(false)}
              className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white"
              aria-label="Close Quote Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-neutral-400 mb-4">
            Request enterprise DIA, MPLS, or Point-to-Point optical wave pricing from{" "}
            <strong className="text-white">EARTH I Broadband (Pvt.) Ltd.</strong>
          </p>

          <form onSubmit={handleQuoteSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={quoteForm.name}
              onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
            />
            <input
              type="text"
              placeholder="Company / Enterprise Name"
              value={quoteForm.company}
              onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                required
                placeholder="Work Email *"
                value={quoteForm.email}
                onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
              <input
                type="tel"
                required
                placeholder="Phone *"
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
            </div>
            <select
              value={quoteForm.service}
              onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#19A2E6]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#0B0D10] text-white">
                  {s.shortTitle}
                </option>
              ))}
            </select>
            <select
              value={quoteForm.bandwidth}
              onChange={(e) => setQuoteForm({ ...quoteForm, bandwidth: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#19A2E6]"
            >
              <option value="20 Mbps Symmetrical">20 Mbps Symmetrical (1:1)</option>
              <option value="50 Mbps Symmetrical">50 Mbps Symmetrical (1:1)</option>
              <option value="100 Mbps Symmetrical">100 Mbps Symmetrical (1:1)</option>
              <option value="250 Mbps Symmetrical">250 Mbps Symmetrical (1:1)</option>
              <option value="500 Mbps Symmetrical">500 Mbps Symmetrical (1:1)</option>
              <option value="1 Gbps – 10 Gbps Optical Wave">1 Gbps – 10 Gbps Optical Wave</option>
            </select>
            <input
              type="text"
              placeholder="Site Location / Corridor (e.g., Gulberg-III, DHA)"
              value={quoteForm.location}
              onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#161920] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#19A2E6] hover:bg-[#0D84C4] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Prepare Optical Inquiry</span>
            </button>
          </form>

          {quoteNotice && (
            <div className="mt-3 p-3 rounded-xl bg-[#161920] border border-[#19A2E6]/50 text-[11px] text-neutral-200">
              Your email client has been opened with your formatted optical link quote parameters.
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-neutral-800 space-y-1.5 text-[11px] text-neutral-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#19A2E6] shrink-0" />
              <span>{CONTACT_INFO.phone} (Verify for EARTH I)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#19A2E6] shrink-0" />
              <span>{CONTACT_INFO.generalEmail}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#19A2E6] shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
