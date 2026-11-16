"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Cpu,
} from "lucide-react";
import { BRAND_INFO, SERVICES_DATA } from "@/data/siteData";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesHover(false);
  }, [pathname]);

  const corporateServices = SERVICES_DATA.filter(
    (s) =>
      s.category === "Corporate Connectivity" ||
      s.category === "Optical Infrastructure"
  );
  const cloudSecurityServices = SERVICES_DATA.filter(
    (s) =>
      s.category === "Cloud & Managed IT" ||
      s.category === "Security & Digital"
  );

  return (
    <>
      {/* HubexTech-Exact Boxed Dark Floating Navbar */}
      <header className="sticky top-0 z-[998] pt-2 lg:pt-[1.4rem] px-3 sm:px-6 lg:px-[3.25rem] xl:px-[6.25rem]">
        <nav
          id="topnav"
          className="bg-[#050505]/95 backdrop-blur-md rounded-lg border border-[#2A2A2A] text-white shadow-[0_10px_35px_rgba(0,0,0,0.85)] relative"
        >
          <div className="px-[20px] py-2.5 lg:py-2.5 flex items-center justify-between">
            {/* Logo Container (Transparent & Clearly Visible on Dark Navbar, Increased Size) */}
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center py-0.5 hover:opacity-95 transition-opacity"
                aria-label="EARTH I Broadband (Pvt.) Ltd. Home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-dark.png"
                  alt="EARTH I Broadband (Pvt.) Ltd."
                  className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain drop-shadow-[0_2px_12px_rgba(46,193,217,0.25)]"
                />
              </Link>
            </div>

            {/* Desktop Navigation Menu (Exact HubexTech animated #008FFF underline) */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1 xl:space-x-2">
                {NAV_LINKS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  if (item.hasMegaMenu) {
                    return (
                      <li
                        key={item.href}
                        className="relative"
                        onMouseEnter={() => setServicesHover(true)}
                        onMouseLeave={() => setServicesHover(false)}
                      >
                        <Link
                          href={item.href}
                          className="relative inline-flex items-center gap-1 text-white px-[12px] py-2 text-[15px] font-medium group"
                        >
                          <span
                            className={`relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#008FFF] after:transition-all after:duration-500 ${
                              isActive
                                ? "after:w-full text-[#2EC1D9]"
                                : "after:w-0 group-hover:after:w-full"
                            }`}
                          >
                            {item.label}
                          </span>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#008FFF] transition-transform duration-300 group-hover:rotate-180" />
                        </Link>

                        {/* HubexTech Mega Menu Dropdown */}
                        {servicesHover && (
                          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[760px] z-[999]">
                            <div className="bg-[#050505] border border-[#2A2A2A] rounded-xl p-8 shadow-2xl grid grid-cols-3 gap-8">
                              {/* Col 1 */}
                              <div>
                                <p className="text-left mb-6 font-bold text-[15px] text-[#2EC1D9B2]">
                                  Optical & Corporate
                                </p>
                                <ul className="flex flex-col gap-5">
                                  {corporateServices.map((srv) => (
                                    <li
                                      key={srv.id}
                                      className="flex items-center gap-3 group/item"
                                    >
                                      <svg
                                        width="8"
                                        height="2"
                                        viewBox="0 0 8 2"
                                        fill="none"
                                        className="shrink-0"
                                      >
                                        <line
                                          y1="1.25"
                                          x2="8"
                                          y2="1.25"
                                          stroke="white"
                                          strokeOpacity="0.5"
                                          strokeWidth="1.5"
                                          className="group-hover/item:stroke-[#008FFF]"
                                        />
                                      </svg>
                                      <Link
                                        href={`/services#${srv.id}`}
                                        className="text-sm text-white group-hover/item:text-[#008FFF] transition-colors"
                                      >
                                        {srv.shortTitle}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Col 2 */}
                              <div>
                                <p className="text-left mb-6 font-bold text-[15px] text-[#2EC1D9B2]">
                                  Cloud, IT & Security
                                </p>
                                <ul className="flex flex-col gap-5">
                                  {cloudSecurityServices.map((srv) => (
                                    <li
                                      key={srv.id}
                                      className="flex items-center gap-3 group/item"
                                    >
                                      <svg
                                        width="8"
                                        height="2"
                                        viewBox="0 0 8 2"
                                        fill="none"
                                        className="shrink-0"
                                      >
                                        <line
                                          y1="1.25"
                                          x2="8"
                                          y2="1.25"
                                          stroke="white"
                                          strokeOpacity="0.5"
                                          strokeWidth="1.5"
                                          className="group-hover/item:stroke-[#008FFF]"
                                        />
                                      </svg>
                                      <Link
                                        href={`/services#${srv.id}`}
                                        className="text-sm text-white group-hover/item:text-[#008FFF] transition-colors"
                                      >
                                        {srv.shortTitle}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Col 3 */}
                              <div className="border-l border-[#272727] pl-6 flex flex-col justify-between">
                                <div>
                                  <p className="text-left mb-3 font-bold text-[15px] text-[#2EC1D9B2]">
                                    1,200+ km Metro Core
                                  </p>
                                  <p className="text-xs text-[#9C9C9C] leading-relaxed">
                                    Subterranean armored optical fiber across
                                    Gulberg, DHA, Mall Road, Canal Road &
                                    industrial corridors with 99.99% SLA.
                                  </p>
                                </div>
                                <Link
                                  href="/contact#site-survey"
                                  className="mt-4 inline-flex items-center justify-center bg-[#008FFF] hover:bg-brand_cyan text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
                                >
                                  Request Site Survey →
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="relative inline-block text-white px-[12px] py-2 text-[15px] font-medium group"
                      >
                        <span
                          className={`relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#008FFF] after:transition-all after:duration-500 ${
                            isActive
                              ? "after:w-full text-[#2EC1D9]"
                              : "after:w-0 group-hover:after:w-full"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: "Get in Touch" Button (WhatsApp button removed as requested) */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact">
                <span className="bg-[#008FFF] hover:bg-brand_cyan text-[15px] font-bold text-white px-6 rounded-lg w-[10.563rem] h-[2.75rem] inline-flex items-center justify-center transition-colors">
                  Get in Touch
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-white hover:text-brand_cyan focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <div className="lg:hidden bg-[#050505] border-t border-[#2A2A2A] px-5 py-6 space-y-4 rounded-b-lg">
              <ul className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 text-base font-bold uppercase tracking-[1px] ${
                        pathname === item.href
                          ? "text-brand_cyan"
                          : "text-white hover:text-[#008FFF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#272727] flex flex-col items-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#008FFF] hover:bg-brand_cyan text-[16px] font-bold text-white px-6 rounded-lg w-full h-[2.75rem] flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HubexTech-Exact Right-Side "Get a free quote" Rotated Button & Slide-Out Drawer */}
      <div className="fixed top-[45%] right-0 z-50 flex items-center">
        <button
          type="button"
          onClick={() => setQuoteDrawerOpen(!quoteDrawerOpen)}
          className="py-2 px-4 cursor-pointer rounded-b-md rotate-90 origin-bottom-right -translate-y-12 text-white bg-[#008FFF] hover:bg-brand_cyan shadow-lg font-bold text-sm tracking-wide transition-colors"
        >
          Get a free quote
        </button>

        {quoteDrawerOpen && (
          <div className="fixed right-0 top-1/2 -translate-y-1/2 w-64 rounded-l-xl bg-[#141414] border border-[#272727] shadow-2xl p-5 z-[999]">
            <div className="flex items-center justify-between pb-3 border-b border-[#272727]">
              <span className="text-lg font-semibold text-white">
                Get a Free Quote
              </span>
              <button
                type="button"
                onClick={() => setQuoteDrawerOpen(false)}
                className="bg-[#1591ee] hover:bg-brand_cyan text-white rounded p-1"
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
                <div className="bg-[#141414] shadow-md border border-[#272727] p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#2EC1D9] text-[#2EC1D9] group-hover:text-black">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="my-2 text-sm font-semibold text-white group-hover:text-brand_cyan">
                  Request Site Survey
                </span>
              </Link>

              <Link
                href="/#bandwidth-estimator"
                onClick={() => setQuoteDrawerOpen(false)}
                className="flex flex-col items-center group"
              >
                <div className="bg-[#141414] shadow-md border border-[#272727] p-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#2EC1D9] text-[#2EC1D9] group-hover:text-black">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="my-2 text-sm font-semibold text-white group-hover:text-brand_cyan">
                  Configure Bandwidth
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
