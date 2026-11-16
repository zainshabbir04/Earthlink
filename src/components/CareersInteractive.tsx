"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Send,
  AlertCircle,
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
  const [portfolioOrLinkedin, setPortfolioOrLinkedin] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);

  const handleSelectJob = (job: JobOpening) => {
    setSelectedRole(job.title);
    setPreparedMailto(null);
    const el = document.getElementById("open-application");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateAndPrepare = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!applicantName.trim() || applicantName.trim().length < 2) {
      newErrors.applicantName = "Please enter your full name.";
    }
    if (
      !applicantEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail.trim())
    ) {
      newErrors.applicantEmail = "Please enter a valid email address.";
    }
    if (!applicantPhone.trim() || applicantPhone.trim().length < 7) {
      newErrors.applicantPhone = "Please enter a valid contact phone number.";
    }
    if (!experienceYears.trim()) {
      newErrors.experienceYears =
        "Please specify your years of relevant ISP / technical experience.";
    }
    if (!coverNote.trim() || coverNote.trim().length < 20) {
      newErrors.coverNote =
        "Please include a brief summary of your qualifications (at least 20 characters).";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setPreparedMailto(null);
      return;
    }

    const subject = encodeURIComponent(
      `[Career Application - ${BRAND_INFO.companyName}] ${selectedRole} — ${applicantName}`
    );
    const body = encodeURIComponent(
      `Candidate Application for ${BRAND_INFO.companyName}\n` +
        `==================================================\n` +
        `Position Applied For: ${selectedRole}\n` +
        `Full Name: ${applicantName}\n` +
        `Email: ${applicantEmail}\n` +
        `Phone: ${applicantPhone}\n` +
        `Relevant Experience: ${experienceYears}\n` +
        `LinkedIn / Portfolio: ${portfolioOrLinkedin || "N/A"}\n\n` +
        `Technical Summary & Cover Note:\n${coverNote}\n\n` +
        `(Please attach your updated CV / Resume PDF before sending this email.)`
    );

    const mailtoUrl = `mailto:${BRAND_INFO.contactDetails.sourceCareersEmail}?subject=${subject}&body=${body}`;
    setPreparedMailto(mailtoUrl);
  };

  return (
    <div className="space-y-20">
      {/* Open Positions Listing */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#272727] pb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan">
              Verified Career Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
              Open Positions Across NOC, Optical Engineering &amp; B2B Sales
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan text-xs font-mono font-semibold">
            {CAREER_OPENINGS.length} Active Recruitment Tracks
          </span>
        </div>

        <div className="space-y-8">
          {CAREER_OPENINGS.map((job) => (
            <article
              key={job.id}
              className="bg-[#000000] rounded-2xl border border-[#272727] hover:border-[#1A545E] p-7 sm:p-10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1a1a1a]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-[#1591EE15] border border-[#1591EE33] text-brand_cyan font-semibold">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#9C9C9C]">
                      <MapPin className="w-3.5 h-3.5 text-brand_cyan" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#9C9C9C]">
                      <Clock className="w-3.5 h-3.5 text-brand_cyan" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#9C9C9C]">
                      <Briefcase className="w-3.5 h-3.5 text-brand_cyan" />
                      {job.experience}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="text-sm text-[#9C9C9C] max-w-3xl leading-relaxed">
                    {job.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={() => handleSelectJob(job)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-sm transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D3D3D3]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand_cyan shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand_cyan mb-3">
                    Required Qualifications
                  </h4>
                  <ul className="space-y-2.5">
                    {job.qualifications.map((qual, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9C9C9C]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand_cyan shrink-0 mt-2" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Open Application Section (HubexTech Dark Modal/Form Style) */}
      <div
        id="open-application"
        className="scroll-mt-28 bg-[#0D0D0D] rounded-2xl border border-[#272727] p-8 sm:p-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#1591EE15] border border-[#1591EE33] rounded-full px-4 py-1.5">
              <span className="text-brand_cyan text-xs font-semibold uppercase">
                Talent Acquisition Desk
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Submit Your Application or{" "}
              <span className="text-brand_cyan">Open Profile</span>
            </h3>
            <p className="text-sm text-[#9C9C9C] leading-relaxed">
              Select a published position or submit an open application for our
              Network Operations Center (NOC), Outside-Plant (OSP) optical
              engineering, or corporate B2B sales divisions.
            </p>

            <div className="p-5 rounded-xl bg-[#000000] border border-[#272727] space-y-2 text-xs">
              <div className="font-bold text-white">
                Direct HR Recruitment Email:
              </div>
              <a
                href={`mailto:${BRAND_INFO.contactDetails.sourceCareersEmail}`}
                className="font-mono text-brand_cyan hover:underline block text-sm"
              >
                {BRAND_INFO.contactDetails.sourceCareersEmail}
              </a>
              <p className="text-[11px] text-amber-400 font-mono">
                Note: Source recruitment desk email shown above. Confirm
                official @earthibroadband HR mailbox before live cutover.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#000000] border border-amber-500/40 text-xs text-[#D3D3D3] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">
                  Frontend-Only Application Notice:
                </strong>{" "}
                This portal validates your application fields and prepares a
                pre-addressed recruitment email package without fake submission
                messages.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={validateAndPrepare} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="role-select"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    Position / Track *
                  </label>
                  <select
                    id="role-select"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
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
                  <label
                    htmlFor="applicant-name"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g., Bilal Ahmed"
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantName && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="applicant-email"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantEmail && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="applicant-phone"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="applicant-phone"
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.applicantPhone && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.applicantPhone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="applicant-exp"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    Relevant Experience &amp; Certifications *
                  </label>
                  <input
                    id="applicant-exp"
                    type="text"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    placeholder="e.g., 3 Years ISP Sales / CCNA, JNCIA"
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                  {errors.experienceYears && (
                    <p className="text-xs text-rose-500 mt-1">
                      {errors.experienceYears}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="applicant-linkedin"
                    className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                  >
                    LinkedIn Profile URL (Optional)
                  </label>
                  <input
                    id="applicant-linkedin"
                    type="url"
                    value={portfolioOrLinkedin}
                    onChange={(e) => setPortfolioOrLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="applicant-note"
                  className="block text-xs font-semibold text-[#D3D3D3] mb-2"
                >
                  Technical Summary / Cover Note *
                </label>
                <textarea
                  id="applicant-note"
                  rows={4}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Briefly describe your experience with B2B telecom sales, NOC routing/switching, or underground optical fiber splicing..."
                  className="w-full px-4 py-3 rounded-lg border border-[#272727] bg-[#111] text-sm text-white focus:outline-none focus:border-brand_cyan"
                />
                {errors.coverNote && (
                  <p className="text-xs text-rose-500 mt-1">
                    {errors.coverNote}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white font-semibold text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Validate &amp; Prepare Application Email</span>
              </button>

              {preparedMailto && (
                <div className="p-5 rounded-xl bg-[#000000] border border-brand_cyan space-y-3">
                  <div className="text-xs font-mono text-brand_cyan uppercase">
                    ✓ Application Validated — Ready to Dispatch via Email Client
                  </div>
                  <a
                    href={preparedMailto}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#008FFF] hover:bg-brand_cyan hover:text-black text-white text-xs font-bold transition-colors"
                  >
                    <span>Open Email Client to Send Application</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
