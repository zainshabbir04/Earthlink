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
      <div className="rounded-2xl bg-[#0B0D10] border-2 border-[#19A2E6]/50 p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-neutral-200 shadow-lg">
        <AlertTriangle className="w-5 h-5 text-[#19A2E6] shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold text-white">
            Corporate Contact Details Verification Notice:
          </strong>{" "}
          {CONTACT_INFO.verificationNotice}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 5 Cols: Logo Jet-Black & Cyan Contact Info, NOC Support & Coverage Corridors */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-[#0B0D10] border-2 border-[#19A2E6] p-6 sm:p-8 space-y-6 shadow-2xl text-white">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
                Corporate Headquarters &amp; NOC
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                Direct Connectivity Desk
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#151921] border border-neutral-800">
                <MapPin className="w-5 h-5 text-[#19A2E6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#757679]">
                    Office Location (Confirm for EARTH I)
                  </p>
                  <p className="text-white font-semibold mt-0.5">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#151921] border border-neutral-800">
                <Phone className="w-5 h-5 text-[#19A2E6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#757679]">
                    24/7/365 NOC &amp; Enterprise Helpline
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-white font-bold hover:text-[#19A2E6] transition-colors block mt-0.5"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#151921] border border-neutral-800">
                <Mail className="w-5 h-5 text-[#19A2E6] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#757679]">
                    Enterprise Sales &amp; Support Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.generalEmail}`}
                    className="text-white font-bold hover:text-[#19A2E6] transition-colors block mt-0.5 break-all"
                  >
                    {CONTACT_INFO.generalEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Active Fiber Coverage Corridors */}
            <div className="pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#19A2E6] mb-3">
                <Radio className="w-4 h-4 text-[#19A2E6]" />
                <span>On-Net Metro Optical Fiber Corridors</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.coverageZones.map((zone) => (
                  <span
                    key={zone}
                    className="px-3 py-1.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-neutral-200 font-medium"
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
          className="lg:col-span-7 rounded-3xl card-ice-slate p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 flex">
            <div className="w-1/3 bg-[#0B0D10]" />
            <div className="w-2/3 bg-[#19A2E6]" />
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 p-1.5 rounded-2xl bg-[#0B0D10] border border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab("business")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "business"
                  ? "bg-[#19A2E6] text-white shadow-md"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Enterprise Connectivity Inquiry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("survey")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "survey"
                  ? "bg-[#19A2E6] text-white shadow-md"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Request Optical Site Survey
            </button>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0D10]">
            {activeTab === "survey"
              ? "Request GIS Optical Fiber Feasibility & Site Survey"
              : "Consult With Our Enterprise Solutions Architects"}
          </h3>
          <p className="text-xs sm:text-sm text-[#757679] font-medium mt-1 mb-6">
            {activeTab === "survey"
              ? "Provide your building coordinates or commercial corridor so our OSP fiber engineering team can verify splice closure proximity."
              : "Request dedicated SLA pricing for 1:1 DIA, MPLS Layer-2/3 VPNs, Cloud Hosting, or Managed SOC Cybersecurity."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
                  Service Category
                </label>
                <select
                  value={formState.service}
                  onChange={(e) =>
                    setFormState({ ...formState, service: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                >
                  {SERVICES.map((s) => (
                    <option
                      key={s.id}
                      value={s.shortTitle}
                      className="bg-white text-[#0B0D10]"
                    >
                      {s.shortTitle}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
                  Target Bandwidth (1:1)
                </label>
                <select
                  value={formState.bandwidth}
                  onChange={(e) =>
                    setFormState({ ...formState, bandwidth: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                >
                  <option value="20 Mbps – 50 Mbps (1:1)">20 – 50 Mbps (1:1)</option>
                  <option value="100 Mbps Symmetrical (1:1)">100 Mbps (1:1)</option>
                  <option value="250 Mbps Symmetrical (1:1)">250 Mbps (1:1)</option>
                  <option value="500 Mbps Symmetrical (1:1)">500 Mbps (1:1)</option>
                  <option value="1 Gbps – 10 Gbps Optical Wave">1G – 10G Wave</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
                  Commercial Corridor
                </label>
                <select
                  value={formState.corridor}
                  onChange={(e) =>
                    setFormState({ ...formState, corridor: e.target.value })
                  }
                  className="w-full px-3.5 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
                >
                  {CONTACT_INFO.coverageZones.map((zone) => (
                    <option
                      key={zone}
                      value={zone}
                      className="bg-white text-[#0B0D10]"
                    >
                      {zone}
                    </option>
                  ))}
                  <option value="Other Metropolitan Zone" className="bg-white text-[#0B0D10]">
                    Other Metropolitan Zone
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
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
                className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B0D10] mb-1.5">
                Technical Requirements (BGP ASN, Static IPs, Redundancy, SLA)
              </label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Specify any multi-site MPLS branch locations, BGP peering requirements, or hardware provisioning needs..."
                className="w-full px-4 py-3 rounded-xl bg-[#F4F6F9] border border-neutral-300 text-xs sm:text-sm text-[#0B0D10] focus:outline-none focus:border-[#19A2E6] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#0B0D10] hover:bg-[#19A2E6] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-[#19A2E6]" />
              <span>
                {activeTab === "survey"
                  ? "Prepare Optical Site Survey Request"
                  : "Prepare Enterprise Connectivity Inquiry"}
              </span>
            </button>
          </form>

          {integrationNotice && (
            <div className="mt-5 p-4 rounded-2xl bg-[#0B0D10] border border-[#19A2E6] text-xs text-neutral-200 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-[#19A2E6]">
                <CheckCircle2 className="w-4 h-4 text-[#19A2E6]" />
                <span>Formatted Inquiry Dispatched to Email Client</span>
              </div>
              <p>
                Your email client has been opened with your technical parameters pre-filled for{" "}
                <strong>{CONTACT_INFO.generalEmail}</strong>.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* GOOGLE MAPS EMBED SECTION */}
      <div className="rounded-3xl card-ice-slate p-4 sm:p-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="w-1/3 bg-[#0B0D10]" />
          <div className="w-2/3 bg-[#19A2E6]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-200 pt-1">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#19A2E6]" />
            <h3 className="text-base font-bold text-[#0B0D10]">
              Main Boulevard Gulberg-III, Lahore — Reference Operations Corridor
            </h3>
          </div>
          <span className="text-xs text-[#757679] font-semibold">
            * Confirm official EARTH I Broadband registered office pin prior to launch
          </span>
        </div>
        <div className="w-full h-[340px] rounded-2xl overflow-hidden border border-neutral-300">
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
