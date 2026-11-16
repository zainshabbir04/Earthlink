"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  AlertTriangle,
  CheckCircle2,
  Compass,
  Radio,
} from "lucide-react";
import { CONTACT_INFO, SERVICES } from "@/data/siteData";

export default function ContactInteractive() {
  const [activeTab, setActiveTab] = useState<"business" | "survey">("business");

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: SERVICES[1].shortTitle,
    bandwidth: "100 Mbps Symmetrical (1:1)",
    corridor: CONTACT_INFO.coverageZones[0],
    siteAddress: "",
    message: "",
  });

  const [integrationNotice, setIntegrationNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIntegrationNotice(true);
    const subject = encodeURIComponent(
      `[EARTH I Broadband ${
        activeTab === "survey" ? "Site Feasibility Survey" : "Enterprise Inquiry"
      }] ${formState.company || formState.name} — ${formState.service}`
    );
    const body = encodeURIComponent(
      `Inquiry Type: ${
        activeTab === "survey"
          ? "Optical Fiber Site Feasibility Survey"
          : "Enterprise Business Connectivity Inquiry"
      }\nContact Name: ${formState.name}\nOrganization: ${
        formState.company
      }\nEmail: ${formState.email}\nPhone: ${
        formState.phone
      }\nRequested Solution: ${formState.service}\nTarget Bandwidth: ${
        formState.bandwidth
      }\nCommercial Corridor: ${formState.corridor}\nExact Site Coordinates / Building: ${
        formState.siteAddress
      }\n\nTechnical Requirements:\n${formState.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.generalEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-12">
      {/* Verification Alert Banner (Strict Compliance Rule #9) */}
      <div className="rounded-2xl bg-[#0C223D] border border-amber-400/50 p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-sky-100 shadow-lg">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold text-amber-300">
            Corporate Contact Details Verification Notice:
          </strong>{" "}
          {CONTACT_INFO.verificationNotice}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 5 Cols: Sapphire Contact Info, NOC Support & Coverage Corridors */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-gradient-to-b from-[#091A30] via-[#0E2747] to-[#08172B] border border-brand_cyan/45 p-6 sm:p-8 space-y-6 shadow-2xl text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand_cyan">
                Corporate Headquarters &amp; NOC
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Direct Connectivity Desk
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#122A4B]/90 border border-sky-400/30">
                <MapPin className="w-5 h-5 text-brand_cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Office Location (Confirm for EARTH I)
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#122A4B]/90 border border-sky-400/30">
                <Phone className="w-5 h-5 text-brand_cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    24/7/365 NOC &amp; Enterprise Helpline
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-white font-bold hover:text-brand_cyan transition-colors block mt-0.5"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#122A4B]/90 border border-sky-400/30">
                <Mail className="w-5 h-5 text-brand_cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Enterprise Sales &amp; Support Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.generalEmail}`}
                    className="text-white font-bold hover:text-brand_cyan transition-colors block mt-0.5 break-all"
                  >
                    {CONTACT_INFO.generalEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Active Fiber Coverage Corridors */}
            <div className="pt-4 border-t border-sky-400/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand_cyan mb-3">
                <Radio className="w-4 h-4 text-brand_cyan" />
                <span>On-Net Metro Optical Fiber Corridors</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.coverageZones.map((zone) => (
                  <span
                    key={zone}
                    className="px-3 py-1.5 rounded-xl bg-sky-500/15 border border-sky-400/30 text-xs text-sky-100 font-medium"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Dual-Mode Enterprise Inquiry & Site Feasibility Survey Form */}
        <div
          id="feasibility"
          className="lg:col-span-7 rounded-3xl card-ice-slate p-6 sm:p-10"
        >
          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl bg-[#0C223D] border border-brand_cyan/35">
            <button
              type="button"
              onClick={() => setActiveTab("business")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "business"
                  ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-md"
                  : "text-sky-200 hover:text-white"
              }`}
            >
              Enterprise Connectivity Inquiry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("survey")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "survey"
                  ? "bg-gradient-to-r from-brand_cyan to-brand_blue text-white shadow-md"
                  : "text-sky-200 hover:text-white"
              }`}
            >
              Request Optical Site Survey
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {activeTab === "survey"
              ? "Request GIS Optical Fiber Feasibility & Site Survey"
              : "Consult With Our Enterprise Solutions Architects"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-1 mb-6">
            {activeTab === "survey"
              ? "Provide your building coordinates or commercial corridor so our OSP fiber engineering team can verify splice closure proximity."
              : "Request dedicated SLA pricing for 1:1 DIA, MPLS Layer-2/3 VPNs, Cloud Hosting, or Managed SOC Cybersecurity."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formState.company}
                  onChange={(e) =>
                    setFormState({ ...formState, company: e.target.value })
                  }
                  placeholder="Enterprise Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Direct Phone / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Service Category
                </label>
                <select
                  value={formState.service}
                  onChange={(e) =>
                    setFormState({ ...formState, service: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                >
                  {SERVICES.map((s) => (
                    <option
                      key={s.id}
                      value={s.shortTitle}
                      className="bg-white text-slate-900"
                    >
                      {s.shortTitle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Target Bandwidth (1:1)
                </label>
                <select
                  value={formState.bandwidth}
                  onChange={(e) =>
                    setFormState({ ...formState, bandwidth: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                >
                  <option value="20 Mbps – 50 Mbps (1:1)">20 – 50 Mbps (1:1)</option>
                  <option value="100 Mbps Symmetrical (1:1)">100 Mbps (1:1)</option>
                  <option value="250 Mbps Symmetrical (1:1)">250 Mbps (1:1)</option>
                  <option value="500 Mbps Symmetrical (1:1)">500 Mbps (1:1)</option>
                  <option value="1 Gbps – 10 Gbps Optical Wave">1G – 10G Wave</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Commercial Corridor
                </label>
                <select
                  value={formState.corridor}
                  onChange={(e) =>
                    setFormState({ ...formState, corridor: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
                >
                  {CONTACT_INFO.coverageZones.map((zone) => (
                    <option
                      key={zone}
                      value={zone}
                      className="bg-white text-slate-900"
                    >
                      {zone}
                    </option>
                  ))}
                  <option value="Other Metropolitan Zone" className="bg-white text-slate-900">
                    Other Metropolitan Zone
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Building Name / Street Address for Fiber Termination *
              </label>
              <input
                type="text"
                required
                value={formState.siteAddress}
                onChange={(e) =>
                  setFormState({ ...formState, siteAddress: e.target.value })
                }
                placeholder="e.g., Floor 6, Corporate Tower, Main Boulevard Gulberg-III, Lahore"
                className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Technical Requirements (BGP ASN, Static IPs, Redundancy, SLA)
              </label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Specify any multi-site MPLS branch locations, BGP peering requirements, or hardware provisioning needs..."
                className="w-full px-4 py-3 rounded-xl bg-[#F4F9FF] border border-sky-300/80 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-brand_cyan focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand_cyan to-brand_blue hover:from-brand_blue hover:to-brand_cyan text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4" />
              <span>
                {activeTab === "survey"
                  ? "Prepare Optical Site Survey Request"
                  : "Prepare Enterprise Connectivity Inquiry"}
              </span>
            </button>
          </form>

          {integrationNotice && (
            <div className="mt-5 p-4 rounded-2xl bg-[#0C223D] border border-brand_cyan/45 text-xs text-sky-100 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-brand_cyan">
                <CheckCircle2 className="w-4 h-4 text-brand_cyan" />
                <span>Formatted Inquiry Dispatched to Email Client</span>
              </div>
              <p>
                Your email client has been opened with your technical parameters pre-filled for{" "}
                <strong>{CONTACT_INFO.generalEmail}</strong>. Note: Because this is a pure frontend architecture without a backend server, connect an SMTP relay (e.g., Resend/SendGrid) or CRM webhook to submit forms directly without opening an email client.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* GOOGLE MAPS EMBED SECTION */}
      <div className="rounded-3xl card-ice-slate p-4 sm:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-sky-900/15">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-brand_cyan" />
            <h3 className="text-base font-bold text-slate-900">
              Main Boulevard Gulberg-III, Lahore — Reference Operations Corridor
            </h3>
          </div>
          <span className="text-xs text-amber-800 font-semibold">
            * Confirm official EARTH I Broadband registered office pin prior to launch
          </span>
        </div>
        <div className="w-full h-[340px] rounded-2xl overflow-hidden border border-sky-300/80">
          <iframe
            title="EARTH I Broadband Reference Corridor Map — Gulberg III Lahore"
            src="https://www.google.com/maps?q=Main+Boulevard+Gulberg+III+Lahore+Pakistan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
