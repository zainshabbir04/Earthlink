"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
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
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#272727]">
          <h2 className="text-xl sm:text-2xl font-semibold text-brand_cyan">
            Service Catalog ({filteredServices.length})
          </h2>

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
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
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

        {/* Compact 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-[#000000] rounded-2xl border border-[#272727] hover:border-brand_cyan transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#1A545E] text-brand_cyan flex items-center justify-center">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#9C9C9C] mt-1.5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-[#1a1a1a]">
                  {service.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-[#D3D3D3]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand_cyan shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-5 border-t border-[#1a1a1a] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.useCases.slice(0, 2).map((u) => (
                    <span
                      key={u}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#0D0D0D] text-[#9C9C9C]"
                    >
                      {u}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    service.title
                  )}#inquiry-form`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand_cyan hover:underline"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
