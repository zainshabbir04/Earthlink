"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
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
  ChevronRight,
  Sliders,
  Zap,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";

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

export default function ServicesExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(SERVICES.map((s) => s.category))),
  ];

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0B1F38] border border-brand_cyan/40 rounded-2xl p-4 shadow-lg text-white">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-200">
          <Sliders className="w-4 h-4 text-brand_cyan" />
          <span>Filter by Solution Category:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-md"
                  : "bg-[#122B4D] border border-sky-400/30 text-sky-100 hover:border-brand_cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Service Cards */}
      <div className="space-y-8">
        {filteredServices.map((service) => {
          const IconComp = iconMap[service.iconName] || Network;
          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 rounded-3xl card-ice-slate p-6 sm:p-10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Cols: Title, Overview & Detailed Description */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C223D] border border-brand_cyan/40 flex items-center justify-center text-brand_cyan shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C223D] text-sky-200 border border-brand_cyan/35">
                        {service.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Technical Specs Pills */}
                  {service.technicalSpecs && (
                    <div className="pt-2">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-brand_blue mb-2">
                        Technical Specifications &amp; Architecture:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technicalSpecs.map((spec, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs text-slate-800 font-medium"
                          >
                            <Zap className="w-3.5 h-3.5 text-brand_cyan" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right 5 Cols: Sapphire Key Benefits & Direct CTA */}
                <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#091A30] to-[#0D2544] border border-brand_cyan/40 p-6 space-y-5 text-white shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
                    Key Enterprise Advantages
                  </h3>

                  <ul className="space-y-3">
                    {service.keyBenefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-sky-100/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-sky-400/20">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.shortTitle
                      )}`}
                      className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <span>Request {service.shortTitle} Proposal</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
