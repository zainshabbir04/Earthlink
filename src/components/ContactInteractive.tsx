"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
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

    if (!fullName.trim()) nextErrors.fullName = "Required";
    if (activeTab !== "general" && !companyName.trim())
      nextErrors.companyName = "Required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      nextErrors.email = "Valid email required";
    if (!phone.trim()) nextErrors.phone = "Required";
    if (activeTab === "survey" && !siteAddress.trim())
      nextErrors.siteAddress = "Site address required";
    if (!message.trim()) nextErrors.message = "Required";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPreparedMailto(null);
      return;
    }

    const modeLabel =
      activeTab === "survey"
        ? "Optical Site Survey"
        : activeTab === "business"
        ? "Enterprise Connectivity Inquiry"
        : "General Inquiry";

    const subject = encodeURIComponent(
      `[${BRAND_INFO.companyName} - ${modeLabel}] ${companyName || fullName}`
    );

    const bodyLines = [
      `${BRAND_INFO.companyName} — ${modeLabel}`,
      `Name: ${fullName}`,
      `Organization: ${companyName || "N/A"}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      activeTab !== "general" ? `Solution: ${selectedService}` : "",
      activeTab !== "general" ? `Bandwidth: ${bandwidthTier}` : "",
      activeTab === "survey" ? `Corridor: ${corridorZone}` : "",
      activeTab === "survey" ? `Site Address: ${siteAddress}` : "",
      `Details: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    setPreparedMailto(
      `mailto:${BRAND_INFO.contactDetails.sourceGeneralEmail}?subject=${subject}&body=${encodeURIComponent(
        bodyLines
      )}`
    );
  };

  return (
    <div
      id="inquiry-form"
      className="scroll-mt-28 bg-[#0D0D0D] rounded-2xl border border-[#272727] overflow-hidden"
    >
      <div
        id="site-survey"
        className="scroll-mt-28 bg-[#050505] p-5 sm:p-7 border-b border-[#272727] flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Start Your Optical Project
        </h2>

        <div className="flex flex-wrap gap-2" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "business"}
            onClick={() => handleTabChange("business")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "business"
                ? "bg-[#008FFF] text-white"
                : "bg-[#141414] text-[#D3D3D3] border border-[#272727]"
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
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "survey"
                ? "bg-[#008FFF] text-white"
                : "bg-[#141414] text-[#D3D3D3] border border-[#272727]"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Site Survey</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "general"}
            onClick={() => handleTabChange("general")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "general"
                ? "bg-[#008FFF] text-white"
                : "bg-[#141414] text-[#D3D3D3] border border-[#272727]"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>General</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name *"
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              />
              {errors.fullName && (
                <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={
                  activeTab !== "general" ? "Company Name *" : "Company (Optional)"
                }
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              />
              {errors.companyName && (
                <p className="text-xs text-rose-400 mt-1">{errors.companyName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Official Email *"
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              />
              {errors.phone && (
                <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {activeTab !== "general" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                aria-label="Required Solution"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>

              <select
                aria-label="Target Capacity"
                value={bandwidthTier}
                onChange={(e) => setBandwidthTier(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
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
              </select>
            </div>
          )}

          {activeTab === "survey" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                aria-label="Metropolitan Corridor"
                value={corridorZone}
                onChange={(e) => setCorridorZone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
              >
                {BRAND_INFO.contactDetails.coverageCorridors.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone}
                  </option>
                ))}
              </select>

              <div>
                <input
                  type="text"
                  value={siteAddress}
                  onChange={(e) => setSiteAddress(e.target.value)}
                  placeholder="Building / Plot Address *"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.siteAddress && (
                  <p className="text-xs text-rose-400 mt-1">{errors.siteAddress}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Technical requirements, branch locations, or survey notes *"
              className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#141414] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-[#2E86DF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

              {preparedMailto && (
                <a
                  href={preparedMailto}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-brand_cyan text-black text-xs font-bold"
                >
                  <span>Dispatch via Email Client</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <span className="text-[11px] text-[#9C9C9C] font-mono">
              * Validated frontend inquiry (connect SMTP/CRM for direct delivery)
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
