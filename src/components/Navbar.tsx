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
            {/* Logo Container (Original EARTH I Broadband Logo preserved intact) */}
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center bg-white px-3 py-1.5 rounded-md shadow-sm hover:opacity-95 transition-opacity"
                aria-label="EARTH I Broadband (Pvt.) Ltd. Home"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-color.png"
                  alt="EARTH I Broadband (Pvt.) Ltd."
                  className="h-9 sm:h-10 w-auto object-contain"
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

            {/* Right: HubexTech Phone/WhatsApp Icon + "Let's Talk" / "Get in Touch" Button */}
            <div className="hidden xl:flex items-center">
              <a
                href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                  /\s+/g,
                  ""
                )}`}
                className="mr-5"
                title="24/7 NOC Helpline (Flagged for EARTH I Broadband confirmation)"
              >
                <div className="flex items-center gap-2 text-[#D3D3D3] hover:text-white text-sm font-medium transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#24D366"
                      d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                    />
                  </svg>
                  <span>{BRAND_INFO.contactDetails.helplinePhone}</span>
                </div>
              </a>

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
                <a
                  href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                    /\s+/g,
                    ""
                  )}`}
                  className="text-white text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#24D366]" />
                  24/7 NOC: {BRAND_INFO.contactDetails.helplinePhone}
                </a>
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
