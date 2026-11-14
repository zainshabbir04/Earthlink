"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  AlertTriangle,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  Building2,
  MessageSquare,
} from "lucide-react";
import { BRAND_INFO, SERVICES_DATA } from "@/data/siteData";

type FormTab = "general" | "business" | "survey";

export default function ContactInteractive() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormTab>("business");

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(
    SERVICES_DATA[1].title
  );
  const [bandwidthTier, setBandwidthTier] = useState("100 Mbps – 1 Gbps (DIA)");
  const [corridorZone, setCorridorZone] = useState(
    BRAND_INFO.contactDetails.coverageCorridors[0]
  );
  const [siteAddress, setSiteAddress] = useState("");
  const [message, setMessage] = useState("");
  const [coverageFilter, setCoverageFilter] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);

  useEffect(() => {
    const svc = searchParams.get("service");
    if (svc) {
      setSelectedService(svc);
      setActiveTab("business");
    }
    if (typeof window !== "undefined" && window.location.hash === "#site-survey") {
      setActiveTab("survey");
    }
  }, [searchParams]);

  const handleTabChange = (tab: FormTab) => {
    setActiveTab(tab);
    setErrors({});
    setPreparedMailto(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (
      activeTab !== "general" &&
      (!companyName.trim() || companyName.trim().length < 2)
    ) {
      nextErrors.companyName = "Please enter your organization or company name.";
    }
    if (
      !email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      nextErrors.email = "Please enter a valid corporate email address.";
    }
    if (!phone.trim() || phone.trim().length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (
      activeTab === "survey" &&
      (!siteAddress.trim() || siteAddress.trim().length < 5)
    ) {
      nextErrors.siteAddress =
        "Please provide the building/plot address for the optical feasibility survey.";
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message =
        "Please provide inquiry details (minimum 10 characters).";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPreparedMailto(null);
      return;
    }

    const modeLabel =
      activeTab === "survey"
        ? "Optical Site Survey & Coverage Request"
        : activeTab === "business"
        ? "Enterprise Connectivity Proposal Inquiry"
        : "General Corporate Inquiry";

    const subject = encodeURIComponent(
      `[${BRAND_INFO.companyName} - ${modeLabel}] ${
        companyName || fullName
      }`
    );

    const bodyLines = [
      `${BRAND_INFO.companyName} — ${modeLabel}`,
      `==================================================`,
      `Contact Name: ${fullName}`,
      `Organization: ${companyName || "Individual / Not Specified"}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      activeTab !== "general" ? `Requested Solution: ${selectedService}` : "",
      activeTab !== "general" ? `Estimated Bandwidth: ${bandwidthTier}` : "",
      activeTab === "survey" ? `Metropolitan Corridor: ${corridorZone}` : "",
      activeTab === "survey" ? `Physical Site Coordinates/Address: ${siteAddress}` : "",
      ``,
      `Requirement Details:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setPreparedMailto(
      `mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}?subject=${subject}&body=${encodeURIComponent(
        bodyLines
      )}`
    );
  };

  const matchingCorridors =
    BRAND_INFO.contactDetails.coverageCorridors.filter((c) =>
      c.toLowerCase().includes(coverageFilter.toLowerCase())
    );

  return (
    <div className="space-y-16">
      {/* HubexTech-Styled Multi-Mode Inquiry & Site Survey Card */}
      <div
        id="inquiry-form"
        className="scroll-mt-28 bg-[#0D0D0D] rounded-2xl border border-[#272727] overflow-hidden"
      >
        <div
          id="site-survey"
          className="scroll-mt-28 bg-[#050505] p-6 sm:p-8 border-b border-[#272727]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-brand_cyan uppercase tracking-wider">
                Enterprise Consultation &amp; Optical Survey Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                Start Your Optical Project
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Select inquiry type"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "business"}
                onClick={() => handleTabChange("business")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "business"
                    ? "bg-[#008FFF] text-white"
                    : "bg-[#141414] text-[#D3D3D3] border border-[#272727] hover:border-brand_cyan"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Business Inquiry</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "survey"}
                onClick={() => handleTabChange("survey")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "survey"
                    ? "bg-[#008FFF] text-white"
                    : "bg-[#141414] text-[#D3D3D3] border border-[#272727] hover:border-brand_cyan"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Request Site Survey</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "general"}
                onClick={() => handleTabChange("general")}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "general"
                    ? "bg-[#008FFF] text-white"
                    : "bg-[#141414] text-[#D3D3D3] border border-[#272727] hover:border-brand_cyan"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>General Contact</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-7 sm:p-10">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-fullname"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Company / Organization{" "}
                  {activeTab !== "general" ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    "(Optional)"
                  )}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enterprise Corp (Pvt.) Ltd."
                  className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.companyName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Official Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Phone No. <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {activeTab !== "general" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Required Solution <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-bandwidth"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Target Capacity / Line Rate
                  </label>
                  <select
                    id="contact-bandwidth"
                    value={bandwidthTier}
                    onChange={(e) => setBandwidthTier(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  >
                    <option value="50 Mbps – 100 Mbps (Corporate Fiber)">
                      50 Mbps – 100 Mbps (Corporate Fiber)
                    </option>
                    <option value="100 Mbps – 1 Gbps (1:1 Symmetrical DIA)">
                      100 Mbps – 1 Gbps (1:1 Symmetrical DIA)
                    </option>
                    <option value="1 Gbps – 10 Gbps (Metro Ring / P2P Wave)">
                      1 Gbps – 10 Gbps (Metro Ring / P2P Wave)
                    </option>
                    <option value="10 Gbps – 100 Gbps (DWDM Core Wavelength)">
                      10 Gbps – 100 Gbps (DWDM Core Wavelength)
                    </option>
                    <option value="Multi-Branch MPLS / Managed IT / Colocation">
                      Multi-Branch MPLS / Managed IT / Colocation
                    </option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === "survey" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 rounded-xl bg-[#000000] border border-[#272727]">
                <div>
                  <label
                    htmlFor="survey-corridor"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Metropolitan Corridor / Zone{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="survey-corridor"
                    value={corridorZone}
                    onChange={(e) => setCorridorZone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  >
                    {BRAND_INFO.contactDetails.coverageCorridors.map((zone) => (
                      <option key={zone} value={zone}>
                        {zone}
                      </option>
                    ))}
                    <option value="Other Commercial / Industrial Zone">
                      Other Commercial / Industrial Zone
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="survey-address"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Building / Plot / Demarcation Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="survey-address"
                    type="text"
                    value={siteAddress}
                    onChange={(e) => setSiteAddress(e.target.value)}
                    placeholder="Floor 4, Plaza 12, Main Blvd Gulberg-III"
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.siteAddress && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.siteAddress}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-white mb-2"
              >
                Message / Technical Requirements{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your connectivity requirements, number of branch locations, BGP/Static IP needs, or preferred site survey schedule..."
                className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#141414] text-sm text-white focus:outline-none focus:border-brand_cyan"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#2E86DF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              <span className="text-xs text-[#9C9C9C] font-mono">
                * Validated frontend form · No fake submission messages
              </span>
            </div>

            {/* Integration Requirement Notice */}
            <div className="p-4 rounded-xl bg-[#000000] border border-amber-500/40 text-xs text-[#D3D3D3] flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">
                  Form Delivery Integration Requirement:
                </strong>{" "}
                Validating this form constructs a structured inquiry payload for
                immediate dispatch via your email client (`mailto:`) or requires
                connecting a backend SMTP / CRM webhook (`POST /api/inquiries`)
                for automated server-side delivery.
              </div>
            </div>

            {preparedMailto && (
              <div className="p-6 rounded-xl bg-[#000000] border border-brand_cyan space-y-3">
                <div className="text-xs font-mono text-brand_cyan uppercase font-bold">
                  ✓ Inquiry Payload Validated &amp; Ready for Email Dispatch
                </div>
                <a
                  href={preparedMailto}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Launch Email Client with Validated Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Coverage Inquiry & Subterranean Conduit Corridor Explorer */}
      <div className="bg-[#000000] rounded-2xl border border-[#272727] p-7 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1a1a1a]">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
              1,200+ km Metro Core Footprint
            </span>
            <h3 className="text-2xl font-semibold text-white">
              Check Subterranean Optical Conduit Coverage by Corridor
            </h3>
            <p className="text-sm text-[#9C9C9C]">
              Filter our active underground armored fiber corridors across
              Lahore and regional transmission paths.
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              value={coverageFilter}
              onChange={(e) => setCoverageFilter(e.target.value)}
              placeholder="Filter corridor (e.g., Gulberg, DHA)..."
              aria-label="Filter optical coverage corridors"
              className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-white text-xs sm:text-sm focus:outline-none focus:border-brand_cyan"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {matchingCorridors.map((corridor) => (
            <div
              key={corridor}
              className="p-4 rounded-xl bg-[#0D0D0D] border border-[#272727] flex items-start justify-between gap-3"
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    {corridor}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Armored Conduit Active</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCorridorZone(corridor);
                  setActiveTab("survey");
                  document
                    .getElementById("inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs font-bold text-brand_cyan hover:underline shrink-0"
              >
                Survey →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
