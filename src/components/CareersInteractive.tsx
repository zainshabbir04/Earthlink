"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Send,
  Mail,
  FileText,
} from "lucide-react";
import {
  BRAND_INFO,
  CAREER_OPENINGS,
  JobOpening,
} from "@/data/siteData";

const HR_EMAIL = "hr@earthlinkbroadband.com.pk";

export default function CareersInteractive() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
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

  const departments = [
    "All",
    ...Array.from(new Set(CAREER_OPENINGS.map((j) => j.department))),
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? CAREER_OPENINGS
      : CAREER_OPENINGS.filter((j) => j.department === selectedDepartment);

  const buildDirectApplyMailto = (job: JobOpening) => {
    const subject = encodeURIComponent(
      `Application for ${job.title} — ${BRAND_INFO.companyName}`
    );
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI am writing to apply for the ${job.title} (${job.department}) position at ${BRAND_INFO.companyName}.\n\nFull Name:\nPhone Number:\nYears of Experience:\n\nPlease find my resume attached.\n\nBest regards,`
    );
    return `mailto:${HR_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSelectJob = (job: JobOpening) => {
    setSelectedRole(job.title);
    setPreparedMailto(null);
    document
      .getElementById("open-application")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const validateAndPrepare = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!applicantName.trim()) newErrors.applicantName = "Required";
    if (
      !applicantEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail.trim())
    )
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

    setPreparedMailto(`mailto:${HR_EMAIL}?subject=${subject}&body=${body}`);
  };

  return (
    <div className="space-y-16">
      {/* Open Positions Section Header (Hero Badge + Unique Main Heading + Filter & Mail Buttons) */}
      <div>
        <div className="flex flex-col items-center text-center mb-10 lg:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008FFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008FFF]" />
            </span>
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#0284C7]">
              Open Positions · {CAREER_OPENINGS.length} Active Roles
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
            Explore Open{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]">
              Career Opportunities
            </span>
          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]" />

          {/* Interactive Department Count Buttons + Direct HR Mail Button */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
            {departments.map((dept) => {
              const count =
                dept === "All"
                  ? CAREER_OPENINGS.length
                  : CAREER_OPENINGS.filter((j) => j.department === dept).length;
              const active = selectedDepartment === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDepartment(dept)}
                  style={active ? { color: "#FFFFFF" } : undefined}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-[#008FFF] to-[#0284C7] shadow-[0_8px_22px_rgba(0,143,255,0.34)]"
                      : "bg-white text-slate-800 border border-slate-200/90 hover:border-[#008FFF] hover:text-[#008FFF] shadow-xs"
                  }`}
                >
                  <span>{dept === "All" ? "All Positions" : dept}</span>
                  <span
                    style={active ? { color: "#FFFFFF" } : undefined}
                    className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-extrabold ${
                      active
                        ? "bg-white/20"
                        : "bg-[#008FFF]/10 text-[#0284C7]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            <a
              href={`mailto:${HR_EMAIL}?subject=${encodeURIComponent(
                `Career Inquiry — ${BRAND_INFO.companyName}`
              )}`}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold bg-[#0B1F3A] hover:bg-[#008FFF] transition-all shadow-[0_8px_20px_rgba(11,31,58,0.2)]"
              style={{ color: "#FFFFFF" }}
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span>{HR_EMAIL}</span>
            </a>
          </div>
        </div>

        {/* Vertical Stacked Full-Width Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job, idx) => (
            <article
              key={job.id}
              className="group relative rounded-[26px] bg-white border border-sky-100 hover:border-[#008FFF]/60 shadow-[0_14px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_60px_rgba(0,143,255,0.16)] overflow-hidden transition-all duration-300"
            >
              {/* Left Vertical Optical Gradient Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#008FFF] via-[#0FA4E8] to-[#06B6D4]" />

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Main Role Details (Left) */}
                <div className="lg:col-span-8 p-6 sm:p-8 pl-7 sm:pl-9 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      style={{ color: "#FFFFFF" }}
                      className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#008FFF] to-[#0284C7] font-mono text-xs font-extrabold flex items-center justify-center shadow-xs"
                    >
                      0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/25 text-[#0284C7] text-xs font-bold">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-[#008FFF]" />
                      {job.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#008FFF] transition-colors leading-snug">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-slate-600 font-medium mt-2">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#008FFF] shrink-0" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#008FFF] shrink-0" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {job.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="block text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#0284C7] mb-3">
                      Key Responsibilities
                    </span>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-slate-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#008FFF] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action & Direct Email Panel (Right) */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#F4F9FF] via-[#EAF5FF] to-[#E0F2FE]/70 border-t lg:border-t-0 lg:border-l border-sky-100 p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-extrabold uppercase tracking-[0.16em] text-[#0284C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008FFF]" />
                      Direct HR Application
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                      Send your updated CV directly to our Talent Acquisition
                      desk for immediate review:
                    </p>
                    <a
                      href={buildDirectApplyMailto(job)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-sky-200 hover:border-[#008FFF] text-xs font-mono font-bold text-[#0284C7] hover:text-[#008FFF] transition-colors break-all shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0 text-[#008FFF]" />
                      <span>{HR_EMAIL}</span>
                    </a>
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={buildDirectApplyMailto(job)}
                      style={{ color: "#FFFFFF" }}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#008FFF] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0A192F] font-bold text-xs sm:text-sm shadow-[0_10px_24px_rgba(0,143,255,0.3)] transition-all"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>Apply Now</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleSelectJob(job)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 hover:border-[#008FFF] text-slate-800 hover:text-[#008FFF] font-bold text-xs transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>Use Quick Application Form</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Quick Application Form */}
      <div
        id="open-application"
        className="scroll-mt-28 rounded-[28px] bg-white border border-sky-100 shadow-[0_16px_48px_rgba(15,23,42,0.07)] p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#008FFF]/10 border border-[#008FFF]/25 text-[#0284C7] text-[11px] font-mono font-bold uppercase tracking-wider">
              Talent Acquisition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Quick Application
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Apply for any open track or submit your profile directly to our HR
              team at:
            </p>
            <a
              href={`mailto:${HR_EMAIL}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0F9FF] border border-sky-200 text-xs font-mono font-bold text-[#0284C7] hover:text-[#008FFF] transition-colors break-all"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[#008FFF]" />
              <span>{HR_EMAIL}</span>
            </a>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={validateAndPrepare} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    aria-label="Position or Track"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-[#008FFF] focus:bg-white"
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF] focus:bg-white"
                  />
                  {errors.applicantName && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantName}
                    </p>
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
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF] focus:bg-white"
                  />
                  {errors.applicantEmail && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantEmail}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF] focus:bg-white"
                  />
                  {errors.applicantPhone && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantPhone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    placeholder="Experience (e.g., 3 Yrs) *"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF] focus:bg-white"
                  />
                  {errors.experienceYears && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.experienceYears}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Brief technical summary & certifications *"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008FFF] focus:bg-white"
                />
                {errors.coverNote && (
                  <p className="text-xs text-rose-500 mt-1">
                    {errors.coverNote}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  style={{ color: "#FFFFFF" }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#008FFF] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0A192F] font-bold text-xs sm:text-sm shadow-[0_8px_20px_rgba(0,143,255,0.3)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Application Email</span>
                </button>

                {preparedMailto && (
                  <a
                    href={preparedMailto}
                    style={{ color: "#FFFFFF" }}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#0B1F3A] hover:bg-[#008FFF] text-xs font-bold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send to {HR_EMAIL}</span>
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
