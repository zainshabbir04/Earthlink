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
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Quick Quote Form State
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
      {/* TOP ISP NOC TELEMETRY STATUS BAR */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#06101E] text-white border-b border-sky-500/20 h-9">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              100G Metro Core Optical Ring: Operational
            </span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-sky-100/90">
              <Zap className="w-3.5 h-3.5 text-brand_cyan" />
              1,200+ km Subterranean Armored Fiber
            </span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-sky-100/90">
              <ShieldCheck className="w-3.5 h-3.5 text-brand_cyan" />
              99.99% Enterprise SLA &bull; &lt;50ms Failover
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-sky-100/90 hover:text-brand_cyan transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand_cyan" />
              24/7 NOC Support: <strong className="text-white">{CONTACT_INFO.phone}</strong>
            </a>
            <span className="text-slate-600">|</span>
            <Link
              href="/contact#feasibility"
              className="text-brand_cyan hover:text-sky-300 font-semibold flex items-center gap-1"
            >
              Check Fiber Coverage <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* FLOATING SAPPHIRE-GLASS NAVBAR */}
      <header className="fixed top-2 lg:top-11 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`max-w-[1440px] mx-auto rounded-2xl transition-all duration-300 border ${
            scrolled
              ? "bg-[#0B1B32]/95 backdrop-blur-xl border-brand_cyan/35 shadow-[0_14px_40px_rgba(6,16,30,0.45)] py-2.5 px-4 sm:px-7"
              : "bg-[#0D213B]/90 backdrop-blur-lg border-sky-400/30 shadow-[0_10px_32px_rgba(14,165,233,0.18)] py-3 px-4 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Official EARTH I Broadband Logo in Pearl-Ice Badge */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none shrink-0"
              aria-label="EARTH I Broadband (Pvt.) Ltd. Home"
            >
              <div className="relative px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#F0F7FF] via-white to-[#E6F2FF] border border-brand_cyan/40 group-hover:border-brand_cyan transition-all shadow-[0_4px_16px_rgba(15,164,232,0.25)]">
                <Image
                  src="/logo-color.png"
                  alt="EARTH I Broadband (Pvt.) Ltd."
                  width={158}
                  height={46}
                  priority
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-medium"
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
                        className={`inline-flex items-center gap-1.5 py-2 transition-colors duration-200 font-semibold ${
                          isActive
                            ? "text-brand_cyan"
                            : "text-sky-100 hover:text-brand_cyan"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-brand_cyan" : ""
                          }`}
                        />
                      </Link>

                      {/* Sapphire & Ice-Slate Mega-Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[780px] z-50">
                          <div className="bg-[#0C1E36]/98 backdrop-blur-2xl border border-brand_cyan/40 rounded-2xl p-6 shadow-[0_28px_70px_rgba(6,16,30,0.65)]">
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-sky-400/20">
                              <div className="flex items-center gap-2">
                                <Wifi className="w-4 h-4 text-brand_cyan" />
                                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                                  Enterprise Optical ISP &amp; ICT Solutions
                                </span>
                              </div>
                              <Link
                                href="/services"
                                className="text-xs font-semibold text-brand_cyan hover:text-sky-300 flex items-center gap-1"
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
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-sky-500/15 border border-transparent hover:border-brand_cyan/40 transition-all"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-brand_cyan/30 flex items-center justify-center shrink-0 group-hover:bg-brand_cyan group-hover:text-white text-brand_cyan transition-colors">
                                      <IconComp className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold text-white group-hover:text-brand_cyan transition-colors leading-snug">
                                        {srv.shortTitle}
                                      </p>
                                      <p className="text-[11px] text-sky-200/70 mt-0.5 line-clamp-1">
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
                    className={`py-2 transition-colors duration-200 font-semibold relative ${
                      isActive
                        ? "text-brand_cyan after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand_cyan after:rounded-full"
                        : "text-sky-100 hover:text-brand_cyan"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-[0_6px_22px_rgba(15,164,232,0.4)] hover:shadow-[0_10px_28px_rgba(15,164,232,0.6)] transition-all duration-300 group"
              >
                <Activity className="w-4 h-4 text-sky-100 animate-pulse" />
                <span>Get Connected</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-sky-500/15 border border-brand_cyan/35 text-white hover:text-brand_cyan transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-[#0B1C33]/98 backdrop-blur-2xl border border-brand_cyan/35 p-5 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-400/20 text-xs text-emerald-400 font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                100G Metro Fiber Core Active
              </span>
              <span>SLA 99.99%</span>
            </div>
            <nav className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-sky-500/20 text-brand_cyan border border-brand_cyan/40"
                        : "text-sky-100 hover:bg-sky-500/10 hover:text-brand_cyan"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-sky-400/20 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand_cyan to-brand_blue text-center text-white font-semibold text-sm shadow-md"
                >
                  Request Fiber Feasibility
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteDrawerOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-sky-500/15 border border-brand_cyan/35 text-sky-200 text-xs font-semibold"
                >
                  Get a Free Bandwidth Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HUBEXTECH signature vertical right-edge "Get a free quote" tab + drawer */}
      <div
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-40 flex items-center transition-transform duration-500 ease-in-out ${
          quoteDrawerOpen ? "translate-x-0" : "translate-x-[340px] sm:translate-x-[380px]"
        }`}
      >
        {/* Vertical Tab Button */}
        <button
          type="button"
          onClick={() => setQuoteDrawerOpen(!quoteDrawerOpen)}
          className="bg-gradient-to-b from-brand_cyan to-brand_blue text-white font-bold text-xs tracking-wider uppercase py-5 px-2.5 rounded-l-xl shadow-[-6px_0_24px_rgba(15,164,232,0.45)] hover:brightness-110 transition-all flex items-center justify-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Get a free ISP bandwidth quote"
        >
          Get a Free Link Quote
        </button>

        {/* Slide-out Sapphire Quote Panel */}
        <div className="w-[340px] sm:w-[380px] bg-[#0B1D35]/98 backdrop-blur-2xl border border-brand_cyan/40 rounded-l-2xl p-6 shadow-[-20px_0_50px_rgba(6,16,30,0.65)] max-h-[88vh] overflow-y-auto text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand_cyan block">
                Optical Feasibility Desk
              </span>
              <h3 className="text-lg font-bold text-white">Get a Free ISP Quote</h3>
            </div>
            <button
              type="button"
              onClick={() => setQuoteDrawerOpen(false)}
              className="p-1.5 rounded-lg bg-sky-500/15 text-sky-200 hover:text-white"
              aria-label="Close Quote Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-sky-100/80 mb-4">
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
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white placeholder:text-sky-200/50 focus:outline-none focus:border-brand_cyan"
            />
            <input
              type="text"
              placeholder="Company / Enterprise Name"
              value={quoteForm.company}
              onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white placeholder:text-sky-200/50 focus:outline-none focus:border-brand_cyan"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                required
                placeholder="Work Email *"
                value={quoteForm.email}
                onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white placeholder:text-sky-200/50 focus:outline-none focus:border-brand_cyan"
              />
              <input
                type="tel"
                required
                placeholder="Phone *"
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white placeholder:text-sky-200/50 focus:outline-none focus:border-brand_cyan"
              />
            </div>
            <select
              value={quoteForm.service}
              onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white focus:outline-none focus:border-brand_cyan"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#0B1D35] text-white">
                  {s.shortTitle}
                </option>
              ))}
            </select>
            <select
              value={quoteForm.bandwidth}
              onChange={(e) => setQuoteForm({ ...quoteForm, bandwidth: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white focus:outline-none focus:border-brand_cyan"
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
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#122847] border border-sky-400/30 text-xs text-white placeholder:text-sky-200/50 focus:outline-none focus:border-brand_cyan"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Prepare Optical Inquiry</span>
            </button>
          </form>

          {quoteNotice && (
            <div className="mt-3 p-3 rounded-xl bg-sky-500/15 border border-brand_cyan/40 text-[11px] text-sky-100">
              Your email client has been opened with your formatted optical link quote parameters. (Note: Connect a backend SMTP/CRM endpoint to dispatch directly without mailto).
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-sky-400/20 space-y-1.5 text-[11px] text-sky-200/80">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand_cyan shrink-0" />
              <span>{CONTACT_INFO.phone} (Verify for EARTH I)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand_cyan shrink-0" />
              <span>{CONTACT_INFO.generalEmail}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand_cyan shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
