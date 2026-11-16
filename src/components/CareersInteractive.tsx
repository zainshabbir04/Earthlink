"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  ChevronDown,
  ChevronUp,
  Info,
} from "lucide-react";
import { CAREER_TRACKS, CONTACT_INFO } from "@/data/siteData";

export default function CareersInteractive() {
  const [expandedId, setExpandedId] = useState<string>(CAREER_TRACKS[0].id);
  const [appForm, setAppForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    track: CAREER_TRACKS[0].title,
    experienceYears: "",
    linkedinOrPortfolio: "",
    coverNote: "",
  });
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedNotice(true);
    const subject = encodeURIComponent(
      `[EARTH I Broadband Career Application] ${appForm.track} — ${appForm.fullName}`
    );
    const body = encodeURIComponent(
      `Candidate Name: ${appForm.fullName}\nEmail: ${appForm.email}\nPhone: ${appForm.phone}\nEngineering / Business Track: ${appForm.track}\nYears of Experience: ${appForm.experienceYears}\nLinkedIn / Portfolio: ${appForm.linkedinOrPortfolio}\n\nSummary / Cover Note:\n${appForm.coverNote}`
    );
    window.location.href = `mailto:${CONTACT_INFO.hrEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left 7 Cols: Career Tracks Accordion */}
      <div className="lg:col-span-7 space-y-4">
        <div className="p-4 rounded-2xl bg-[#0B0D10] border-2 border-[#19A2E6]/50 flex items-start gap-3 text-xs text-neutral-200 shadow-md">
          <Info className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
          <span>
            Below are our ongoing talent acquisition tracks across Network Operations, OSP Fiber Engineering, Enterprise Solutions, and Cybersecurity. Select any track to view responsibilities and qualifications, or submit an open application.
          </span>
        </div>

        {CAREER_TRACKS.map((role) => {
          const isOpen = expandedId === role.id;
          return (
            <div
              key={role.id}
              className="rounded-2xl card-ice-slate overflow-hidden transition-all relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#0B0D10]" />
                <div className="w-2/3 bg-[#19A2E6]" />
              </div>

              <button
                type="button"
                onClick={() => setExpandedId(isOpen ? "" : role.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 pt-7"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0B0D10] text-[#19A2E6]">
                    {role.department}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B0D10] mt-2">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-[#757679] font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#19A2E6]" />
                      {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#19A2E6]" />
                      {role.type}
                    </span>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-[#0B0D10] text-white">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#19A2E6]" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-neutral-200 space-y-4 text-xs sm:text-sm text-[#757679] font-medium">
                  <p className="leading-relaxed text-[#0B0D10]">{role.summary}</p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B0D10] mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {role.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#19A2E6] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B0D10] mb-2">
                      Qualifications &amp; Background:
                    </h4>
                    <ul className="space-y-2">
                      {role.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0B0D10] shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setAppForm({ ...appForm, track: role.title });
                        document
                          .getElementById("career-application-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B0D10] hover:bg-[#19A2E6] text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#19A2E6]" />
                      <span>Apply for This Track</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right 5 Cols: Open Talent Application Form (Logo Jet-Black & Cyan Panel) */}
      <div
        id="career-application-form"
        className="lg:col-span-5 rounded-3xl bg-[#0B0D10] border-2 border-[#19A2E6] p-6 sm:p-8 shadow-2xl text-white"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-[#19A2E6]">
          Talent Acquisition Desk
        </span>
        <h3 className="text-xl font-extrabold text-white mt-1">
          Submit Career Application
        </h3>
        <p className="text-xs text-neutral-400 mt-1 mb-5">
          Send your engineering or commercial profile directly to{" "}
          <span className="text-[#19A2E6] font-semibold">{CONTACT_INFO.hrEmail}</span>{" "}
          (source HR address — verify for EARTH I Broadband).
        </p>

        <form onSubmit={handleApplySubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={appForm.fullName}
              onChange={(e) =>
                setAppForm({ ...appForm, fullName: e.target.value })
              }
              placeholder="e.g., Bilal Ahmed"
              className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={appForm.email}
                onChange={(e) =>
                  setAppForm({ ...appForm, email: e.target.value })
                }
                placeholder="you@domain.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={appForm.phone}
                onChange={(e) =>
                  setAppForm({ ...appForm, phone: e.target.value })
                }
                placeholder="+92 300 0000000"
                className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Department / Talent Track *
            </label>
            <select
              value={appForm.track}
              onChange={(e) =>
                setAppForm({ ...appForm, track: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#19A2E6]"
            >
              {CAREER_TRACKS.map((t) => (
                <option
                  key={t.id}
                  value={t.title}
                  className="bg-[#0B0D10] text-white"
                >
                  {t.title}
                </option>
              ))}
              <option
                value="Open Talent Pool Application"
                className="bg-[#0B0D10] text-white"
              >
                Open Talent Pool Application
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                Years of Relevant Experience *
              </label>
              <input
                type="text"
                required
                value={appForm.experienceYears}
                onChange={(e) =>
                  setAppForm({ ...appForm, experienceYears: e.target.value })
                }
                placeholder="e.g., 4 Years in ISP NOC"
                className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                LinkedIn / Portfolio URL
              </label>
              <input
                type="url"
                value={appForm.linkedinOrPortfolio}
                onChange={(e) =>
                  setAppForm({
                    ...appForm,
                    linkedinOrPortfolio: e.target.value,
                  })
                }
                placeholder="https://linkedin.com/in/..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              Technical Summary &amp; Certifications *
            </label>
            <textarea
              rows={4}
              required
              value={appForm.coverNote}
              onChange={(e) =>
                setAppForm({ ...appForm, coverNote: e.target.value })
              }
              placeholder="Summarize your experience with BGP/MPLS, OTDR fiber splicing, B2B telecom sales, or SOC operations..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#151921] border border-neutral-700 text-xs text-white placeholder:text-[#757679] focus:outline-none focus:border-[#19A2E6]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#19A2E6] hover:bg-[#0D84C4] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Prepare Career Application Email</span>
          </button>
        </form>

        {submittedNotice && (
          <div className="mt-4 p-3.5 rounded-xl bg-[#151921] border border-[#19A2E6] text-xs text-neutral-200">
            <strong>Application Draft Prepared:</strong> Your default email client has been launched with your structured application addressed to{" "}
            <span className="text-[#19A2E6] font-semibold">{CONTACT_INFO.hrEmail}</span>. Please attach your CV/Resume PDF before sending.
          </div>
        )}
      </div>
    </div>
  );
}
