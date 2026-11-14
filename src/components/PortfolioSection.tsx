"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, ArrowUpRight, Layers } from "lucide-react";
import { PORTFOLIO_PROJECTS, ProjectItem } from "@/data/siteData";

const CATEGORIES = [
  "All Deployments",
  "Metro Core Ring",
  "Enterprise DIA & MPLS",
  "Campus & Corridor Fiber",
  "Data Center & Security",
] as const;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All Deployments");

  const filteredProjects: ProjectItem[] =
    activeFilter === "All Deployments"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-brand-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyanDark text-xs font-mono font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Infrastructure Portfolio & Field Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Optical Corridors & Enterprise Architectures
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore our subterranean armored fiber rings, regional corridor
              transmission grids, and multi-branch enterprise deployments built
              across key commercial and industrial zones.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter infrastructure projects by category"
          >
            {CATEGORIES.map((category) => {
              const active = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "bg-brand-cyan text-white shadow-glow-cyan-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-brand-cyan/50 hover:text-brand-cyan"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-card-premium hover:shadow-card-hover hover:border-brand-cyan/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-brand-navy">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-cyan text-white text-xs font-mono font-semibold shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-slate-200 font-mono">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="truncate">{project.corridorOrZone}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Deployment Scope
                    </p>
                    {project.technicalScope.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 italic">
                    {project.architectureHighlight}
                  </p>
                  <Link
                    href="/contact#site-survey"
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-brand-cyan hover:text-brand-cyanDark"
                  >
                    <span>Check Coverage</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
