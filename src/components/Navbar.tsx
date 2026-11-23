"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar, Cpu } from "lucide-react";
import { SERVICES_DATA } from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);

  const isTransparent = pathname === "/" || pathname === "/about";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const linkColorClass = isTransparent
    ? "text-white/90 hover:text-white"
    : "text-[#0B1F3A] hover:text-[#008FFF]";

  return (
    <>
      {/* Anchored Top Header (Stays Fixed in One Place at Top of Page — Transparent Over Home Hero, Solid White on Inner Pages) */}
      <header
        className={`z-50 w-full transition-all duration-300 ${
          isTransparent
            ? "absolute top-0 inset-x-0 bg-transparent"
            : "relative bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(11,31,58,0.08)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[86px]">
          {/* Left: Official EARTHLINK Logo (Auto-switches Light/Dark for Crisp Contrast) */}
          <Link
            href="/"
            className="inline-flex items-center hover:opacity-95 transition-opacity shrink-0"
            aria-label="EARTHLINK Broadband (Pvt.) Ltd. Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isTransparent ? "/logo-dark.png" : "/logo-color.png"}
              alt="EARTHLINK Broadband (Pvt.) Ltd."
              className="h-14 sm:h-16 lg:h-[74px] w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Center: Clean Horizontal Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`text-sm font-medium flex items-center gap-1 py-2 transition-colors ${
                        isActive
                          ? isTransparent
                            ? "text-[#38BDF8] font-semibold"
                            : "text-[#008FFF] font-semibold"
                          : linkColorClass
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Clean White Floating Services Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-[0_12px_40px_rgba(11,31,58,0.14)] border border-[#E4E9F0] p-2.5 w-72 grid grid-cols-1 gap-0.5">
                        {SERVICES_DATA.slice(0, 8).map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services#${srv.id}`}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F0F9FF] text-[#0B1F3A] transition-colors group/item"
                          >
                            <span className="w-8 h-8 rounded-lg bg-[#008FFF]/10 text-[#0284C7] group-hover/item:bg-[#008FFF] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors">
                              <ServiceIcon
                                name={srv.iconName}
                                className="w-4 h-4"
                              />
                            </span>
                            <span className="text-sm font-medium group-hover/item:text-[#008FFF] transition-colors">
                              {srv.shortTitle}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? isTransparent
                        ? "text-[#38BDF8] font-semibold"
                        : "text-[#008FFF] font-semibold"
                      : linkColorClass
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Clean Rounded-Rectangle CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#008FFF] hover:bg-[#0284C7] text-white text-sm font-semibold shadow-[0_6px_18px_rgba(0,143,255,0.3)] hover:shadow-[0_10px_24px_rgba(0,143,255,0.4)] transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "text-white" : "text-[#0B1F3A]"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Height Navy Slide-Over Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#0B1F3A]/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#0B1F3A] p-7 shadow-2xl transition-transform duration-300 flex flex-col justify-between ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-dark.png"
                alt="EARTHLINK Broadband"
                className="h-12 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-[#008FFF]/20 text-[#38BDF8]"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#008FFF] hover:bg-[#0284C7] text-white text-sm font-semibold shadow-lg transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Right-Side "Get a free quote" Rotated Quick-Action Drawer */}
      <div className="fixed top-[45%] right-0 z-40 flex items-center">
        <button
          type="button"
          onClick={() => setQuoteDrawerOpen(!quoteDrawerOpen)}
          className="py-2 px-4 cursor-pointer rounded-b-md rotate-90 origin-bottom-right -translate-y-12 text-white bg-[#008FFF] hover:bg-brand_cyan shadow-lg font-bold text-sm tracking-wide transition-colors"
        >
          Get a free quote
        </button>

        {quoteDrawerOpen && (
          <div className="fixed right-0 top-1/2 -translate-y-1/2 w-64 rounded-l-xl bg-white border border-slate-200 shadow-2xl p-5 z-[999]">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-lg font-semibold text-slate-900">
                Get a Free Quote
              </span>
              <button
                type="button"
                onClick={() => setQuoteDrawerOpen(false)}
                className="bg-[#008FFF] hover:bg-[#0284C7] text-white rounded p-1"
                aria-label="Close quote drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center my-6 gap-6">
              <Link
                href="/contact#site-survey"
                onClick={() => setQuoteDrawerOpen(false)}
                className="flex flex-col items-center group"
              >
                <div className="bg-slate-50 shadow-sm border border-slate-200 p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#008FFF] text-[#008FFF] group-hover:text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="my-2 text-sm font-semibold text-slate-800 group-hover:text-[#008FFF]">
                  Request Site Survey
                </span>
              </Link>

              <Link
                href="/services"
                onClick={() => setQuoteDrawerOpen(false)}
                className="flex flex-col items-center group"
              >
                <div className="bg-slate-50 shadow-sm border border-slate-200 p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#008FFF] text-[#008FFF] group-hover:text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="my-2 text-sm font-semibold text-slate-800 group-hover:text-[#008FFF]">
                  Explore Services
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
