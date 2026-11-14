"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";

const SERVICE_CATEGORIES = [
  "All Solutions",
  "Corporate Connectivity",
  "Optical Infrastructure",
  "Cloud & Managed IT",
  "Security & Digital",
] as const;

export default function ServicesExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Solutions");

  const filteredServices: ServiceItem[] =
    selectedCategory === "All Solutions"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
        {/* Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-12 border-b border-[#272727]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand_cyan">
              Enterprise Service Catalog ({filteredServices.length})
            </h2>
            <p className="text-sm text-[#9C9C9C] mt-1">
              Filter by architecture domain or jump directly to technical
              specifications and SLA benefits.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter services by category"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#008FFF] text-white"
                      : "bg-[#000000] text-[#D3D3D3] border border-[#272727] hover:border-brand_cyan hover:text-brand_cyan"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Service Cards (Exact HubexTech Black Card Aesthetic) */}
        <div className="space-y-8">
          {filteredServices.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-[#000000] rounded-2xl border border-[#272727] hover:border-[#1A545E] transition-all duration-300 overflow-hidden"
            >
              <div className="p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                        <ServiceIcon
                          name={service.iconName}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan">
                        0{index + 1} · {service.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="text-sm font-medium text-brand_cyan">
                      {service.tagline}
                    </p>

                    <p className="text-sm text-[#9C9C9C] leading-relaxed">
                      {service.detailedDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1a1a1a] flex flex-wrap items-center gap-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.title
                      )}#inquiry-form`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-xs sm:text-sm transition-all"
                    >
                      <span>Inquire About {service.shortTitle}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact#site-survey"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-xs sm:text-sm transition-all"
                    >
                      <span>Request Site Survey</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#0D0D0D] rounded-xl p-6 border border-[#272727]">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                      <Layers className="w-4 h-4" />
                      <span>Technical Architecture</span>
                    </div>
                    <ul className="space-y-2.5">
                      {service.specs.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D3D3D3]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Key Enterprise Benefits</span>
                    </div>
                    <ul className="space-y-2.5">
                      {service.keyBenefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9C9C9C]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand_cyan shrink-0 mt-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2 pt-4 border-t border-[#272727]">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D3D3D3] mb-2.5">
                      <Terminal className="w-4 h-4 text-brand_cyan" />
                      <span>Primary Deployment Scenarios</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-[#000000] border border-[#272727] text-xs text-[#D3D3D3]"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
