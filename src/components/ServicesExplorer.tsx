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
      {/* Category Filter Bar in Logo Jet Black & Cyan */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0B0D10] border-2 border-[#19A2E6]/50 rounded-2xl p-4 shadow-lg text-white">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-200">
          <Sliders className="w-4 h-4 text-[#19A2E6]" />
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
                  ? "bg-[#19A2E6] text-white shadow-md"
                  : "bg-[#161A22] border border-neutral-700 text-neutral-300 hover:border-[#19A2E6]"
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
              className="scroll-mt-32 rounded-3xl card-ice-slate p-6 sm:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-1">
                {/* Left 7 Cols: Title, Overview & Detailed Description */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B0D10] border border-[#19A2E6]/50 flex items-center justify-center text-[#19A2E6] shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                        {service.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B0D10] mt-1">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#0B0D10] font-semibold leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-xs sm:text-sm text-[#757679] font-medium leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Technical Specs Pills */}
                  {service.technicalSpecs && (
                    <div className="pt-2">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#0B0D10] mb-2">
                        Technical Specifications &amp; Architecture:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technicalSpecs.map((spec, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs text-[#0B0D10] font-medium"
                          >
                            <Zap className="w-3.5 h-3.5 text-[#19A2E6]" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right 5 Cols: Logo Jet-Black Key Benefits & Direct CTA */}
                <div className="lg:col-span-5 rounded-2xl bg-[#0B0D10] border-2 border-[#19A2E6]/50 p-6 space-y-5 text-white shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
                    Key Enterprise Advantages
                  </h3>

                  <ul className="space-y-3">
                    {service.keyBenefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-neutral-800">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.shortTitle
                      )}`}
                      className="w-full py-3 px-5 rounded-xl bg-[#19A2E6] hover:bg-[#0D84C4] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
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
