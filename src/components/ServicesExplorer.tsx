"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";

const SERVICE_CATEGORIES = [
  "All Solutions",
  "Corporate Connectivity",
  "Optical Infrastructure",
  "Cloud & Managed IT",
  "Security & Digital",
] as const;

const SERVICE_IMAGES: Record<string, string> = {
  "corporate-internet-solutions": "/services/corporate-internet.jpg",
  "dedicated-internet-access": "/services/dedicated-internet.jpg",
  "mpls-connectivity": "/services/mpls-connectivity.jpg",
  "vpn-solutions": "/services/vpn-solutions.jpg",
  "point-to-point-optical": "/services/point-to-point-optical.jpg",
  "cloud-and-hosting": "/services/cloud-and-hosting.jpg",
  "managed-it-solutions": "/services/managed-it-solutions.jpg",
  "cybersecurity-services": "/services/cybersecurity-services.jpg",
  "digital-solutions": "/services/digital-solutions.jpg",
};

function AnimatedServiceRow({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const rowRef = useRef<HTMLElement>(null);
  const isReversed = index % 2 === 1;
  const imgSrc =
    SERVICE_IMAGES[service.id] ?? "/services/corporate-internet.jpg";

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.14 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={rowRef}
      id={service.id}
      className={`scroll-mt-28 group relative rounded-[30px] bg-white border border-sky-100 hover:border-[#008FFF]/45 shadow-[0_14px_42px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_65px_rgba(0,143,255,0.16)] p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Animated Top Cyan Accent Line on Hover */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#008FFF] to-transparent transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Image Column (Row 1: Left | Row 2: Right | Alternates Vertically) */}
        <div
          className={`lg:col-span-6 transition-all duration-700 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          } ${
            visible
              ? "opacity-100 translate-x-0"
              : isReversed
              ? "opacity-0 translate-x-6"
              : "opacity-0 -translate-x-6"
          }`}
        >
          <div className="relative">
            {/* Decorative Dashed Offset Optical Frame */}
            <div className="pointer-events-none absolute -inset-2.5 rounded-[26px] border-2 border-dashed border-[#008FFF]/25 group-hover:border-[#008FFF]/50 transition-colors duration-300" />

            <div className="relative rounded-[22px] overflow-hidden border-2 border-white shadow-[0_18px_45px_rgba(2,132,199,0.18)] aspect-[16/10] bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Service Heading & Details Column (Row 1: Right | Row 2: Left | Alternates Vertically) */}
        <div
          className={`lg:col-span-6 space-y-5 transition-all duration-700 delay-100 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          } ${
            visible
              ? "opacity-100 translate-x-0"
              : isReversed
              ? "opacity-0 -translate-x-6"
              : "opacity-0 translate-x-6"
          }`}
        >
          {/* Icon + Category Badge + Index Number */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#008FFF]/10 group-hover:bg-gradient-to-br group-hover:from-[#008FFF] group-hover:to-[#06B6D4] border border-[#008FFF]/25 group-hover:border-transparent text-[#008FFF] group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-300">
                <ServiceIcon name={service.iconName} className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F0F9FF] border border-sky-200 text-[#0284C7]">
                {service.category}
              </span>
            </div>

            <span className="text-2xl font-black font-mono text-sky-100 group-hover:text-sky-200 transition-colors select-none">
              0{index + 1}
            </span>
          </div>

          {/* Service Title & Description */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#008FFF] transition-colors leading-snug">
              {service.title}
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-medium">
              {service.shortDescription}
            </p>
          </div>

          {/* Technical Specs List */}
          <ul className="space-y-2.5 pt-3 border-t border-slate-100">
            {service.specs.map((spec, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-700 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#008FFF] shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>

          {/* Use-Case Chips & Inquire CTA Button */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {service.useCases.slice(0, 3).map((u) => (
                <span
                  key={u}
                  className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600"
                >
                  {u}
                </span>
              ))}
            </div>

            <Link
              href={`/contact?service=${encodeURIComponent(
                service.title
              )}#inquiry-form`}
              style={{ color: "#FFFFFF" }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#008FFF] to-[#0FA4E8] hover:from-[#0284C7] hover:to-[#008FFF] text-xs sm:text-sm font-bold shadow-[0_8px_22px_rgba(0,143,255,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <span>Inquire Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Solutions");

  const filteredServices: ServiceItem[] =
    selectedCategory === "All Solutions"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-[20px] lg:px-[50px]">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-7 mb-10 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0284C7] block mb-1">
              Enterprise Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Service Catalog{" "}
              <span className="text-[#008FFF]">({filteredServices.length})</span>
            </h2>
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
                  style={active ? { color: "#FFFFFF" } : undefined}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-[#008FFF] to-[#0284C7] shadow-[0_6px_18px_rgba(0,143,255,0.32)]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#008FFF] hover:text-[#008FFF] shadow-xs"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Alternating Vertical Zig-Zag Service Rows (Image Left / Text Right -> Text Left / Image Right) */}
        <div className="space-y-10 lg:space-y-12">
          {filteredServices.map((service, idx) => (
            <AnimatedServiceRow
              key={service.id}
              service={service}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
