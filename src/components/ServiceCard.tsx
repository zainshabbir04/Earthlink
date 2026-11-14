import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/data/siteData";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  variant?: "compact" | "detailed";
}

export default function ServiceCard({
  service,
  index = 0,
  variant = "compact",
}: ServiceCardProps) {
  return (
    <div
      id={service.id}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-brand-cyan/60 p-7 sm:p-8 shadow-card-premium hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Subtle Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-cyanLight to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Category Pill & Index */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
            <ServiceIcon name={service.iconName} className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-brand-cyan/10 group-hover:text-brand-cyanDark transition-colors">
            {service.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors mb-2.5">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {variant === "detailed"
            ? service.detailedDescription
            : service.shortDescription}
        </p>

        {/* Technical Specs List */}
        <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technical Specifications
          </p>
          {(variant === "detailed"
            ? service.specs
            : service.specs.slice(0, 3)
          ).map((spec, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        {variant === "detailed" && (
          <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Key Business Benefits
            </p>
            {service.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer CTA */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <span className="text-xs font-mono text-slate-400">
          0{index + 1} // SLA BACKED
        </span>

        {variant === "compact" ? (
          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-brand-cyanDark group/link"
          >
            <span>Explore Solution</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        ) : (
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}#inquiry-form`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-cyan text-white text-xs font-semibold transition-colors"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}
