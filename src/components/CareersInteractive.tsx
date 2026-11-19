"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Send,
} from "lucide-react";
import {
  BRAND_INFO,
  CAREER_OPENINGS,
  JobOpening,
} from "@/data/siteData";

export default function CareersInteractive() {
  const [selectedRole, setSelectedRole] = useState<string>(
    CAREER_OPENINGS[0].title
  );
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);

  const handleSelectJob = (job: JobOpening) => {
    setSelectedRole(job.title);
    setPreparedMailto(null);
    document.getElementById("open-application")?.scrollIntoView({ behavior: "smooth" });
  };

  const validateAndPrepare = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!applicantName.trim()) newErrors.applicantName = "Required";
    if (!applicantEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail.trim()))
      newErrors.applicantEmail = "Valid email required";
    if (!applicantPhone.trim()) newErrors.applicantPhone = "Required";
    if (!experienceYears.trim()) newErrors.experienceYears = "Required";
    if (!coverNote.trim() || coverNote.trim().length < 10)
      newErrors.coverNote = "Brief summary required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setPreparedMailto(null);
      return;
    }

    const subject = encodeURIComponent(
      `[Career Application - ${BRAND_INFO.companyName}] ${selectedRole} — ${applicantName}`
    );
    const body = encodeURIComponent(
      `Position: ${selectedRole}\nName: ${applicantName}\nEmail: ${applicantEmail}\nPhone: ${applicantPhone}\nExperience: ${experienceYears}\n\nSummary:\n${coverNote}`
    );

    setPreparedMailto(
      `mailto:${BRAND_INFO.contactDetails.sourceCareersEmail}?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className="space-y-12">
      {/* Compact Open Positions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CAREER_OPENINGS.map((job) => (
          <article
            key={job.id}
            className="bg-[#000000] rounded-2xl border border-[#272727] hover:border-brand_cyan p-6 flex flex-col justify-between transition-all"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan font-semibold">
                  {job.department}
                </span>
                <span className="text-[#9C9C9C] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand_cyan" />
                  {job.type}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-[#9C9C9C] mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand_cyan" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-brand_cyan" />
                    {job.experience}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#9C9C9C] leading-relaxed">
                {job.summary}
              </p>

              <ul className="space-y-1.5 pt-2 border-t border-[#1a1a1a]">
                {job.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-[#D3D3D3]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand_cyan shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleSelectJob(job)}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-xs transition-all"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </article>
        ))}
      </div>

      {/* Compact Application Form */}
      <div
        id="open-application"
        className="scroll-mt-28 bg-[#0D0D0D] rounded-2xl border border-[#272727] p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-brand_cyan text-xs font-mono font-bold uppercase">
              Talent Acquisition
            </span>
            <h3 className="text-2xl font-semibold text-white">
              Quick Application
            </h3>
            <p className="text-xs sm:text-sm text-[#9C9C9C] leading-relaxed">
              Apply for an open track or submit your profile to{" "}
              <span className="text-brand_cyan font-mono">
                {BRAND_INFO.contactDetails.sourceCareersEmail}
              </span>
              .
            </p>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={validateAndPrepare} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    aria-label="Position or Track"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                  >
                    {CAREER_OPENINGS.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Open Application — Optical / NOC / Corporate">
                      Open Application — Optical / NOC / Corporate
                    </option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Full Name *"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.applicantName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <input
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantEmail && (
                    <p className="text-xs text-rose-400 mt-1">{errors.applicantEmail}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="Phone Number *"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantPhone && (
                    <p className="text-xs text-rose-400 mt-1">{errors.applicantPhone}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    placeholder="Experience (e.g., 3 Yrs) *"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.experienceYears && (
                    <p className="text-xs text-rose-400 mt-1">{errors.experienceYears}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Brief technical summary & certifications *"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#272727] bg-[#111] text-xs sm:text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.coverNote && (
                  <p className="text-xs text-rose-400 mt-1">{errors.coverNote}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Application Email</span>
                </button>

                {preparedMailto && (
                  <a
                    href={preparedMailto}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-brand_cyan text-black text-xs font-bold"
                  >
                    <span>Send via Email Client</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
