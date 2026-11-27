export interface ServiceItem {
  id: string;
  slug: string;
  category:
    | "Corporate Connectivity"
    | "Optical Infrastructure"
    | "Cloud & Managed IT"
    | "Security & Digital";
  title: string;
  shortTitle: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  specs: string[];
  keyBenefits: string[];
  useCases: string[];
}

export interface InfrastructureStat {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
  verifiedSourceNote: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category:
    | "Metro Core Ring"
    | "Enterprise DIA & MPLS"
    | "Campus & Corridor Fiber"
    | "Data Center & Security";
  corridorOrZone: string;
  summary: string;
  technicalScope: string[];
  architectureHighlight: string;
  image: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  iconName: string;
  description: string;
  typicalDeployments: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const BRAND_INFO = {
  companyName: "EARTHLINK Broadband (Pvt.) Ltd.",
  shortName: "EARTHLINK Broadband",
  tagline: "Connecting Businesses. Empowering Possibilities.",
  heroSubtitle:
    "Carrier-grade subterranean optical fiber, 1:1 symmetrical DIA, MPLS rings, and 24/7 NOC infrastructure.",
  companyIntroduction:
    "EARTHLINK Broadband (Pvt.) Ltd. delivers enterprise optical fiber connectivity, 1:1 Dedicated Internet Access (DIA), MPLS VPNs, and managed cloud & security solutions.",
  companyBackground:
    "Built on 1,200+ km of subterranean armored optical fiber rather than legacy copper, we power banks, hospitals, universities, IT parks, and industrial hubs.",
  mission:
    "To deliver uncontended, SLA-backed optical fiber connectivity that keeps enterprises connected at peak performance 24/7.",
  vision:
    "To build a low-latency optical ecosystem empowering businesses to scale without bandwidth bottlenecks.",
  contactDetails: {
    headOfficeAddress: "7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Pakistan",
    addressConfirmationFlag:
      "Flagged: Confirm registered office address for EARTHLINK Broadband (Pvt.) Ltd.",
    helplinePhone: "+92 42 345 11 111",
    phoneConfirmationFlag:
      "Flagged: Confirm official corporate helpline for EARTHLINK Broadband (Pvt.) Ltd.",
    generalEmail: "info@earthibroadband.com.pk",
    sourceGeneralEmail: "info@zcomnetworks.com.pk",
    careersEmail: "hr@earthibroadband.com.pk",
    sourceCareersEmail: "hr@zcomnetworks.com.pk",
    emailConfirmationFlag:
      "Flagged: Confirm official domain email routing for EARTHLINK Broadband.",
    operatingHours: "24/7/365 NOC & Field Dispatch",
    coverageCorridors: [
      "Main Boulevard Gulberg (I, II, III)",
      "DHA Phases 1–8",
      "Mall Road & Jail Road",
      "Ferozepur Road Industrial Belt",
      "Canal Road & Johar Town",
      "Cantt & Model Town",
      "Motorway M-0 / M-1 & GT Road",
    ],
  },
};

export const VERIFIED_INFRASTRUCTURE_STATS: InfrastructureStat[] = [
  {
    id: "metro-fiber",
    value: "1,200+",
    numericValue: 1200,
    suffix: "+ km",
    label: "Armored Metro Core",
    detail: "Subterranean armored optical fiber across commercial corridors.",
    verifiedSourceNote: "Published metropolitan armored fiber footprint.",
  },
  {
    id: "core-backbone",
    value: "100G",
    numericValue: 100,
    suffix: "G",
    label: "Optical Core Ring",
    detail: "Multi-terabit Cisco, Juniper, and Huawei optical core fabric.",
    verifiedSourceNote: "Published core optical transport specification.",
  },
  {
    id: "uptime-sla",
    value: "99.99%",
    label: "Uptime SLA",
    detail: "Self-healing dual-path optical rings with <50ms failover.",
    verifiedSourceNote: "Published enterprise SLA availability.",
  },
  {
    id: "noc-support",
    value: "24/7/365",
    label: "Live NOC Desk",
    detail: "Proactive OTDR telemetry with <15m incident response.",
    verifiedSourceNote: "Published 24/7/365 NOC monitoring SLA.",
  },
];

export const TECHNICAL_TELEMETRY_HIGHLIGHTS = [
  {
    metric: "1:1",
    title: "Symmetrical Throughput",
    description: "Uncontended upload and download speeds with zero FUP throttling.",
  },
  {
    metric: "< 50 ms",
    title: "Ring Auto-Failover",
    description: "Dual east/west underground fiber paths for instant traffic rerouting.",
  },
  {
    metric: "< 15 min",
    title: "NOC Incident Response",
    description: "Real-time OTDR fault localization and rapid field dispatch.",
  },
  {
    metric: "100M – 100G",
    title: "Scalable Line Rates",
    description: "Seamless upgrades from corporate fiber to 100G DWDM wavelengths.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-internet-solutions",
    slug: "corporate-internet",
    category: "Corporate Connectivity",
    title: "Corporate Internet Solutions",
    shortTitle: "Corporate Internet",
    tagline: "High-availability optical broadband for modern offices.",
    shortDescription:
      "Carrier-grade business fiber with consistent speeds and zero peak-hour congestion.",
    detailedDescription:
      "Delivered over subterranean armored fiber rings with guaranteed bandwidth, static IP routing, and priority business queuing.",
    iconName: "Building2",
    specs: [
      "Subterranean optical fiber termination",
      "Static IPv4 & Dual-Stack IPv6",
      "Zero FUP & zero peak throttling",
    ],
    keyBenefits: [
      "Smooth cloud SaaS, VoIP & ERP performance",
      "Immune to copper and wireless weather drops",
      "24/7 NOC monitoring & priority dispatch",
    ],
    useCases: ["Corporate Offices", "Software Houses", "Retail Hubs"],
  },
  {
    id: "dedicated-internet-access",
    slug: "dedicated-internet-access",
    category: "Corporate Connectivity",
    title: "Dedicated Internet Access (DIA)",
    shortTitle: "Dedicated Internet (DIA)",
    tagline: "Unshared 1:1 symmetrical bandwidth from our 100G core.",
    shortDescription:
      "Mission-critical 1:1 fiber internet with 99.99% uptime SLA and BGP multi-homing.",
    detailedDescription:
      "Provisions an exclusive optical circuit from our metro ring directly to your core router with 100% reserved capacity 24/7.",
    iconName: "Cpu",
    specs: [
      "Strict 1:1 symmetrical speeds",
      "99.99% SLA with dual-route diversity",
      "BGP peering & 100M–10G+ ports",
    ],
    keyBenefits: [
      "Ultra-low latency for finance & telemedicine",
      "Sub-50ms automatic ring failover",
      "Real-time SNMP bandwidth telemetry",
    ],
    useCases: ["Banks & FinTech", "Hospitals", "Enterprise Campuses"],
  },
  {
    id: "mpls-connectivity",
    slug: "mpls-connectivity",
    category: "Optical Infrastructure",
    title: "MPLS Connectivity Solutions",
    shortTitle: "MPLS Connectivity",
    tagline: "Private multi-branch networking with deterministic QoS.",
    shortDescription:
      "Unifies distributed branches and data centers over an isolated private optical fabric.",
    detailedDescription:
      "Consolidates multi-branch voice, video, and ERP traffic onto a private Layer-2/3 optical network completely isolated from the public internet.",
    iconName: "Network",
    specs: [
      "Any-to-any & hub-and-spoke topologies",
      "QoS priority queuing for VoIP & ERP",
      "Full isolation from public internet",
    ],
    keyBenefits: [
      "Centralized firewall & security governance",
      "Jitter-free inter-branch communications",
      "Single-vendor SLA across all sites",
    ],
    useCases: ["Bank Branch Networks", "Retail Chains", "Industrial Plants"],
  },
  {
    id: "vpn-solutions",
    slug: "vpn-solutions",
    category: "Security & Digital",
    title: "Enterprise VPN Solutions",
    shortTitle: "VPN Solutions",
    tagline: "AES-256 encrypted tunnels across dual physical paths.",
    shortDescription:
      "High-security IPsec and SSL VPNs connecting branches, remote teams, and clouds.",
    detailedDescription:
      "Cryptographically hardened Site-to-Site IPsec and remote SSL VPN tunnels with dual-path failover for uncompromising data privacy.",
    iconName: "ShieldCheck",
    specs: [
      "Hardware-accelerated AES-256 encryption",
      "Site-to-Site IPsec, DMVPN & SSL VPN",
      "Active Directory & MFA integration",
    ],
    keyBenefits: [
      "Protects sensitive financial & medical data",
      "Zero-trust remote access for teams",
      "Automated dual-route tunnel failover",
    ],
    useCases: ["Hybrid Workforces", "Multi-Cloud VPC Links", "Partner Extranets"],
  },
  {
    id: "point-to-point-optical",
    slug: "point-to-point-optical",
    category: "Optical Infrastructure",
    title: "Point-to-Point Optical Connectivity",
    shortTitle: "Point-to-Point Fiber",
    tagline: "Dedicated Layer-2 metro optical waves with <1ms latency.",
    shortDescription:
      "Private subterranean fiber circuits linking HQs, data centers, and DR sites.",
    detailedDescription:
      "Establishes a direct, unshared Layer-1/2 fiber bridge across our 1,200+ km armored network with wire-speed throughput.",
    iconName: "Cable",
    specs: [
      "Sub-millisecond (<1ms) metro latency",
      "100 Mbps to 100 Gbps optical waves",
      "Air-gapped from public routing tables",
    ],
    keyBenefits: [
      "Synchronous real-time DR replication",
      "Uncompressed 4K CCTV backhaul",
      "Armored underground conduit security",
    ],
    useCases: ["Data Center DR Links", "Safe-City CCTV", "Campus LAN Extensions"],
  },
  {
    id: "cloud-and-hosting",
    slug: "cloud-hosting",
    category: "Cloud & Managed IT",
    title: "Cloud & Hosting Solutions",
    shortTitle: "Cloud & Hosting",
    tagline: "Enterprise colocation, private cloud, and 100G uplinks.",
    shortDescription:
      "Tier-grade rack colocation, VPS, and cloud hosting with redundant power and cooling.",
    detailedDescription:
      "Host critical workloads inside carrier-grade facilities directly integrated with our 100G optical core and N+1 power systems.",
    iconName: "Cloud",
    specs: [
      "Rack colocation with N+1 power & HVAC",
      "Direct 10G/100G core cross-connects",
      "Managed VPS, bare-metal & cloud backups",
    ],
    keyBenefits: [
      "Eliminates on-premise server room costs",
      "Ultra-low domestic user latency",
      "24/7 biometric security & telemetry",
    ],
    useCases: ["ERP & Core Banking", "Disaster Recovery (DRaaS)", "SaaS Hosting"],
  },
  {
    id: "managed-it-solutions",
    slug: "managed-it",
    category: "Cloud & Managed IT",
    title: "Managed IT Solutions",
    shortTitle: "Managed IT",
    tagline: "End-to-end LAN/WAN management and 24/7 NOC care.",
    shortDescription:
      "Offload enterprise routing, campus Wi-Fi 6, firewall care, and WAN telemetry.",
    detailedDescription:
      "Our certified engineers manage your routers, switches, and wireless infrastructure with 24/7 SNMP monitoring and rapid replacement SLAs.",
    iconName: "ServerCog",
    specs: [
      "Managed routers, switches & Wi-Fi 6",
      "24/7 SNMP & NetFlow health monitoring",
      "Automated patching & config backups",
    ],
    keyBenefits: [
      "Predictable monthly OpEx model",
      "Proactive fault fixes before downtime",
      "Cisco, Juniper & Huawei certified team",
    ],
    useCases: ["Enterprise Campuses", "Multi-Site Offices", "Managed Wi-Fi Networks"],
  },
  {
    id: "cybersecurity-services",
    slug: "cybersecurity",
    category: "Security & Digital",
    title: "Cybersecurity Services",
    shortTitle: "Cybersecurity",
    tagline: "DDoS mitigation, managed NGFW, and perimeter defense.",
    shortDescription:
      "Multi-layered security protecting optical WANs, endpoints, and cloud workloads.",
    detailedDescription:
      "Integrates upstream volumetric DDoS scrubbing at the optical core with managed Next-Generation Firewalls (NGFW) and IDS/IPS.",
    iconName: "Lock",
    specs: [
      "Inline volumetric DDoS scrubbing",
      "Managed Next-Gen Firewalls (NGFW)",
      "Zero-Trust Network Access (ZTNA)",
    ],
    keyBenefits: [
      "Stops DDoS floods before circuit saturation",
      "Blocks ransomware lateral movement",
      "Meets financial & healthcare compliance",
    ],
    useCases: ["Financial Gateways", "Hospital Networks", "Cloud Branch Perimeters"],
  },
  {
    id: "digital-solutions",
    slug: "digital-solutions",
    category: "Security & Digital",
    title: "Digital Solutions",
    shortTitle: "Digital Solutions",
    tagline: "Custom enterprise portals and workflow automation.",
    shortDescription:
      "Modern web platforms, customer portals, and ERP/CRM API integrations.",
    detailedDescription:
      "We build secure B2B client portals, automated billing/CRM integrations, and high-concurrency cloud web applications.",
    iconName: "Code2",
    specs: [
      "Custom enterprise web apps & portals",
      "ERP, CRM & billing API integration",
      "Cloud-native high-concurrency stack",
    ],
    keyBenefits: [
      "Digitizes manual corporate workflows",
      "Real-time self-service client dashboards",
      "Integrated with our cloud & security stack",
    ],
    useCases: ["B2B Client Portals", "Field Asset Tracking", "Workflow Automation"],
  },
];

export const WHY_CHOOSE_US_ADVANTAGES = [
  {
    id: "pure-optical",
    title: "100% Subterranean Optical Fiber",
    subtitle: "Zero Legacy Copper",
    description:
      "Deep-trench armored underground fiber conduits eliminate weather drops and aerial cable cuts.",
    iconName: "Sparkles",
    highlightMetric: "1,200+ km Ring",
  },
  {
    id: "symmetrical-speeds",
    title: "True 1:1 Symmetrical Speeds",
    subtitle: "Identical Upload & Download",
    description:
      "Uncontended 1:1 bandwidth ensures cloud backups, video calls, and ERP sync run at full line rate.",
    iconName: "ArrowLeftRight",
    highlightMetric: "1:1 Uncontended",
  },
  {
    id: "self-healing-ring",
    title: "Self-Healing Ring Failover",
    subtitle: "< 50ms Optical Protection",
    description:
      "Dual physical routes across our 100G core ring reroute traffic in under 50ms during any conduit cut.",
    iconName: "RefreshCw",
    highlightMetric: "< 50ms Failover",
  },
  {
    id: "zero-fup",
    title: "Zero FUP & Zero Throttling",
    subtitle: "Unrestricted Capacity",
    description:
      "No data caps, no bandwidth shaping, and no evening slowdowns — 100% throughput 24/7.",
    iconName: "Gauge",
    highlightMetric: "0% Throttling",
  },
  {
    id: "noc-operations",
    title: "24/7/365 NOC & Automated OTDR",
    subtitle: "< 15m Incident Response",
    description:
      "Continuous optical monitoring and automated OTDR fault pinpointing for rapid field restoration.",
    iconName: "Activity",
    highlightMetric: "< 15m Response",
  },
  {
    id: "carrier-hardware",
    title: "Tier-1 Core & Native IPv6",
    subtitle: "Cisco, Juniper & Huawei Core",
    description:
      "Carrier-grade routing silicon with Dual-Stack IPv4/IPv6, BGP multi-homing, and precision ODFs.",
    iconName: "Server",
    highlightMetric: "100G Core",
  },
];

export const COMPARISON_TABLE_DATA = [
  {
    feature: "Transmission Medium",
    conventional: "Shared aerial fiber, copper, or wireless",
    earthIBroadband: "100% subterranean armored optical fiber",
  },
  {
    feature: "Contention Ratio",
    conventional: "Shared pools (1:4 to 1:20 peak contention)",
    earthIBroadband: "Strict 1:1 uncontended dedicated bandwidth",
  },
  {
    feature: "Speed Symmetry",
    conventional: "Asymmetrical (uploads limited to 10%–25%)",
    earthIBroadband: "100% symmetrical upload & download speeds",
  },
  {
    feature: "Fair Usage Policy (FUP)",
    conventional: "Monthly data caps & peak-hour throttling",
    earthIBroadband: "Zero FUP — unlimited line-rate speed 24/7",
  },
  {
    feature: "Path Redundancy",
    conventional: "Single drop cable; multi-hour outages",
    earthIBroadband: "Self-healing dual optical ring (<50ms failover)",
  },
  {
    feature: "Support & Uptime SLA",
    conventional: "Reactive ticket queue; best-effort uptime",
    earthIBroadband: "24/7 proactive NOC (<15m response) & 99.99% SLA",
  },
];

export const INDUSTRIES_AND_SECTORS: IndustrySector[] = [
  {
    id: "banking-finance",
    name: "Banking & FinTech",
    iconName: "Landmark",
    description:
      "Real-time branch ledger sync, ATM backhaul, and encrypted DR links with sub-50ms ring failover.",
    typicalDeployments: ["Multi-Branch MPLS", "1:1 DIA", "AES-256 VPN"],
  },
  {
    id: "healthcare-hospitals",
    name: "Hospitals & Healthcare",
    iconName: "HeartPulse",
    description:
      "High-speed PACS medical imaging, telemedicine, and 24/7 HIS connectivity across medical campuses.",
    typicalDeployments: ["Symmetrical DIA", "P2P Campus Fiber", "99.99% SLA"],
  },
  {
    id: "software-it-parks",
    name: "IT Parks & Software Hubs",
    iconName: "Terminal",
    description:
      "Ultra-low-latency international routing, BGP dual-homing, and uncontended 1G–10G bandwidth.",
    typicalDeployments: ["1G–10G DIA", "Dual-Stack IPv6", "Managed NGFW"],
  },
  {
    id: "higher-education",
    name: "Universities & Campuses",
    iconName: "GraduationCap",
    description:
      "Interconnecting multi-building campuses, research labs, and high-density student Wi-Fi 6 networks.",
    typicalDeployments: ["Campus P2P Optical", "Managed Wi-Fi 6", "Firewall Security"],
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    iconName: "Factory",
    description:
      "Armored underground fiber linking production plants, warehouses, and corporate HQs for ERP & IoT.",
    typicalDeployments: ["Armored Fiber", "MPLS WAN", "CCTV Backhaul"],
  },
  {
    id: "security-hospitality",
    name: "Surveillance & Hospitality",
    iconName: "ShieldAlert",
    description:
      "Dedicated optical waves for multi-stream 4K CCTV command centers and enterprise guest Wi-Fi.",
    typicalDeployments: ["Layer-2 P2P Wave", "CCTV Optical Feeds", "Managed Wi-Fi"],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "gulberg-dha-metro-ring",
    title: "100G Armored Metro Core Ring",
    category: "Metro Core Ring",
    corridorOrZone: "Gulberg, Mall Road, Canal Road & DHA",
    summary:
      "Deep-trench armored optical conduits forming a self-healing 100G metro ring with <50ms failover.",
    technicalScope: [
      "1,200+ km armored underground conduits",
      "<50ms east/west ring protection",
      "Automated OTDR NOC telemetry",
    ],
    architectureHighlight: "Zero aerial fiber fragility across business districts.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "regional-highway-corridor",
    title: "Regional Optical Grid (M-0 / M-1 / GT Road)",
    category: "Campus & Corridor Fiber",
    corridorOrZone: "Ferozepur Road & Motorway Corridors",
    summary:
      "Subterranean long-haul optical transmission connecting industrial zones and distribution hubs.",
    technicalScope: [
      "Single-mode armored fiber deployment",
      "Precision fusion splicing & ODFs",
      "10G–100G DWDM wavelength capacity",
    ],
    architectureHighlight: "Low-latency transport for industrial estates.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthcare-university-dia",
    title: "Healthcare & University Optical Interconnect",
    category: "Enterprise DIA & MPLS",
    corridorOrZone: "Jail Road, Canal Bank & Model Town",
    summary:
      "Uncontended 1:1 symmetrical DIA and sub-millisecond P2P optical links for hospitals and campuses.",
    technicalScope: [
      "1:1 DIA with Dual-Stack IPv4/IPv6",
      "<1ms intra-metro P2P optical links",
      "24/7 NOC with 99.99% uptime SLA",
    ],
    architectureHighlight: "Guaranteed upstream throughput for imaging & research.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "enterprise-mpls-cctv",
    title: "Multi-Branch MPLS & CCTV Optical Backhaul",
    category: "Data Center & Security",
    corridorOrZone: "Lahore Commercial & Security Sectors",
    summary:
      "Private MPLS rings for multi-branch ERP traffic alongside air-gapped optical CCTV surveillance feeds.",
    technicalScope: [
      "Layer-2/3 MPLS VPN with QoS",
      "AES-256 encrypted backup tunnels",
      "Dedicated 4K CCTV optical wavelengths",
    ],
    architectureHighlight: "Complete isolation from public internet threats.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CAREERS_CULTURE = {
  headline: "Build the Optical Backbone Powering Enterprises",
  subheadline:
    "Join our 24/7 NOC, optical infrastructure engineering, and B2B enterprise divisions.",
  cultureParagraph:
    "At EARTHLINK Broadband (Pvt.) Ltd., our engineers and specialists design, splice, route, and safeguard mission-critical 100G optical networks.",
  verifiedGrowthHighlights: [
    {
      title: "Accelerated Career Growth",
      tag: "Career Track",
      description:
        "Clear progression ladders with hands-on exposure to carrier-grade core routers and enterprise fiber loops.",
      iconName: "Zap",
    },
    {
      title: "Tier-1 Infrastructure Access",
      tag: "Core Hardware",
      description:
        "Work directly on cutting-edge hardware from Cisco, Juniper, Huawei, and high-precision Fujikura splicing rigs.",
      iconName: "Cpu",
    },
    {
      title: "Health & Wellness Coverage",
      tag: "Well-Being",
      description:
        "Comprehensive health insurance support for our full-time staff and their families.",
      iconName: "HeartHandshake",
    },
    {
      title: "Certification Sponsorships",
      tag: "Accreditation",
      description:
        "We sponsor CCNA, CCNP, JNCIA, and optical fiber engineering accreditations for dedicated team members.",
      iconName: "Award",
    },
    {
      title: "Collaborative NOC Culture",
      tag: "Team Spirit",
      description:
        "A high-support, collaborative team atmosphere where knowledge-sharing is celebrated every single day.",
      iconName: "Users",
    },
    {
      title: "Central Corporate Headquarters",
      tag: "Lahore HQ",
      description:
        "Modern office located on Main Boulevard, Gulberg-III, Lahore, with convenient transport and dining access.",
      iconName: "ShieldCheck",
    },
  ],
};

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: "corporate-sales-executive",
    title: "Corporate Sales Executive (B2B ISP)",
    department: "Business Development",
    location: "Gulberg-III, Lahore",
    type: "Full-Time",
    experience: "1–3 Years B2B Telecom Sales",
    summary:
      "Drive enterprise acquisition for 1:1 DIA, Point-to-Point optical links, MPLS VPNs, and Managed IT across commercial corridors.",
    responsibilities: [
      "Prospect and close B2B enterprise accounts for DIA, P2P, and MPLS fiber.",
      "Consult with CIOs and IT Heads to prepare tailored SLA proposals.",
      "Manage account growth and bandwidth upgrades across assigned zones.",
    ],
    qualifications: [
      "Bachelor's degree in CS, IT, Business Administration, or related field.",
      "Proven B2B corporate sales track record with an ISP or telecom operator.",
      "Solid grasp of DIA, MPLS, static IPs, and enterprise SLA models.",
    ],
  },
  {
    id: "noc-network-engineer",
    title: "Network Operations Center (NOC) Engineer",
    department: "Network Operations",
    location: "Gulberg-III, Lahore (24/7 Shifts)",
    type: "Full-Time",
    experience: "1–3 Years ISP NOC / Routing",
    summary:
      "Monitor and maintain our 100G optical core ring, enterprise DIA circuits, MPLS tunnels, and automated OTDR telemetry.",
    responsibilities: [
      "Proactively monitor metro optical rings and core routers via SNMP & OTDR.",
      "Configure and troubleshoot BGP, OSPF, MPLS, VLANs, and IPsec VPNs.",
      "Respond to SLA tickets within <15 minutes and coordinate field dispatches.",
    ],
    qualifications: [
      "BS in Computer Science, Telecom Engineering, or Electrical Engineering.",
      "CCNA / CCNP or JNCIA certification with hands-on ISP routing proficiency.",
      "Strong grasp of TCP/IP, Dual-Stack IPv4/IPv6, and optical power budgets.",
    ],
  },
  {
    id: "optical-fiber-field-technician",
    title: "OSP Optical Fiber Engineer / Technician",
    department: "Outside Plant (OSP)",
    location: "Lahore Metro Corridors",
    type: "Full-Time",
    experience: "2+ Years Fiber Splicing & OTDR",
    summary:
      "Execute subterranean armored fiber deployments, precision fusion splicing, OTDR link certification, and last-mile terminations.",
    responsibilities: [
      "Perform precision fusion splicing, ODF termination, and optical patching.",
      "Operate OTDR and power meters to certify links and locate conduit faults.",
      "Conduct on-site feasibility surveys for corporate DIA and P2P installations.",
    ],
    qualifications: [
      "DAE / B.Tech or Bachelor's in Telecom / Electrical technology.",
      "Hands-on expertise with armored fiber cables, fusion splicers, and OTDRs.",
      "Readiness for rapid field dispatch across metropolitan corridors.",
    ],
  },
];
