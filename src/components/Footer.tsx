"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp, X, ShieldAlert } from "lucide-react";
import { BRAND_INFO, SERVICES_DATA } from "@/data/siteData";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [cookieDismissed, setCookieDismissed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    window.location.href = `mailto:${
      BRAND_INFO.contactDetails.sourceGeneralEmail
    }?subject=${encodeURIComponent(
      `[${BRAND_INFO.companyName}] Enterprise Connectivity Subscription`
    )}&body=${encodeURIComponent(
      `Please subscribe ${emailInput} to EARTHLINK Broadband enterprise network updates and SLA advisories.`
    )}`;
  };

  return (
    <>
      <footer className="footer text-[#9C9C9C] relative border-t border-[#1a1a1a] bg-[#030508]">
        <div className="max-w-7xl mx-auto pt-[50px] px-[20px] lg:px-[50px]">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            {/* Col 1: Original Logo & Description */}
            <div className="lg:col-span-4 md:col-span-12 text-center lg:text-left">
              <Link
                href="/"
                className="inline-block py-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-color.png"
                  className="h-12 lg:h-14 w-auto object-contain"
                  alt="EARTHLINK Broadband (Pvt.) Ltd. Logo"
                />
              </Link>
              <p className="mt-4 text-left text-sm font-normal leading-relaxed text-[#9C9C9C]">
                {BRAND_INFO.companyName} delivers 1:1 symmetrical DIA, MPLS
                VPNs, and 24/7 NOC-managed connectivity across 1,200+ km of
                subterranean armored optical fiber.
              </p>
            </div>

            {/* Col 2: Company Links */}
            <div className="lg:col-span-2 md:col-span-4 md:pl-6 pl-0">
              <div className="tracking-[1px] text-[1.125rem] text-white font-semibold">
                Company
              </div>
              <ul className="list-none mt-[1.313rem] space-y-[10px] text-[15px]">
                <li>
                  <Link
                    href="/about"
                    className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/why-choose-us"
                    className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Core Services */}
            <div className="lg:col-span-2 md:col-span-4">
              <div className="tracking-[1px] text-white font-semibold text-[1.125rem]">
                Core Services
              </div>
              <ul className="list-none mt-[1.313rem] space-y-[10px] text-[15px]">
                {SERVICES_DATA.slice(0, 6).map((srv) => (
                  <li key={srv.id}>
                    <Link
                      href={`/services#${srv.id}`}
                      className="text-[#9C9C9C] hover:text-brand_cyan transition-colors"
                    >
                      {srv.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: HubexTech-style Newsletter / Quick Dispatch + Head Office Info */}
            <div className="lg:col-span-4 md:col-span-12 ml-0 lg:ml-auto">
              <div className="tracking-[1px] text-white font-semibold text-[1.125rem]">
                Enterprise Updates & NOC Desk
              </div>

              <form onSubmit={handleNewsletterSubmit}>
                <div className="flex flex-row max-[360px]:flex-col gap-3 mt-[1.313rem]">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    aria-label="Corporate Email"
                    className="py-[0.625rem] bg-[#000000] border border-[#272727] rounded-lg px-[0.875rem] text-sm text-[#B7B7B7] w-[14.125rem] h-[44px] focus:outline-none focus:border-brand_cyan"
                    placeholder="Corporate Email"
                  />

                  <button
                    type="submit"
                    className="h-[44px] px-[1.125rem] text-[14px] font-semibold bg-[#2E86DF] hover:bg-brand_cyan text-white rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="mt-5 space-y-1.5 text-xs text-[#9C9C9C]">
                <p className="text-white font-medium">
                  HQ: {BRAND_INFO.contactDetails.headOfficeAddress}
                </p>
                <p>
                  24/7 NOC:{" "}
                  <a
                    href={`tel:${BRAND_INFO.contactDetails.helplinePhone.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="text-brand_cyan hover:underline"
                  >
                    {BRAND_INFO.contactDetails.helplinePhone}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}`}
                    className="text-brand_cyan hover:underline"
                  >
                    {BRAND_INFO.contactDetails.sourceGeneralEmail}
                  </a>
                </p>
                <p className="text-[11px] text-amber-400/90 flex items-center gap-1.5 pt-1">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    Source address/helpline flagged for EARTHLINK Broadband
                    confirmation.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[24px] md:pt-10 pb-[24px] md:pb-[3.313rem]">
            <div className="h-px bg-[#EEF0F324] opacity-40 w-full" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5">
              <p className="text-[#9C9C9C] text-[13px] leading-5 font-medium text-center">
                © {new Date().getFullYear()} {BRAND_INFO.companyName} All rights
                reserved.
              </p>
              <p className="text-[#9C9C9C] text-[12px] font-mono">
                100G Metro Core · 1,200+ km Armored Fiber · 99.99% SLA
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* HubexTech-Exact Bottom-Left Circular #008FFF Back-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-5 left-5 z-40 h-9 w-9 rounded-full bg-[#008FFF] hover:bg-brand_cyan text-white flex items-center justify-center shadow-lg transition-colors"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* HubexTech-Exact Bottom Centered Cookie Bar (Dismissible) */}
      {!cookieDismissed && (
        <div className="fixed max-w-lg bottom-3 left-3 right-3 sm:left-0 sm:right-0 border border-brand_cyan mx-auto bg-[#141414]/95 backdrop-blur-md shadow-2xl rounded-md py-4 px-6 z-50">
          <p className="text-[#D3D3D3] text-xs sm:text-sm pr-6">
            Enhance your browsing experience with{" "}
            <strong className="text-white">{BRAND_INFO.shortName}&apos;s</strong>{" "}
            enterprise telemetry and personalized services by accepting our{" "}
            <button
              type="button"
              onClick={() => setCookieDismissed(true)}
              className="cursor-pointer text-brand_cyan font-semibold hover:underline"
            >
              use of cookies
            </button>
          </p>
          <button
            type="button"
            onClick={() => setCookieDismissed(true)}
            aria-label="Dismiss cookie notice"
            className="absolute top-2.5 right-2.5 text-white hover:text-brand_cyan p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
