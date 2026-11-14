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
  category: "Metro Core Ring" | "Enterprise DIA & MPLS" | "Campus & Corridor Fiber" | "Data Center & Security";
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
  companyName: "EARTH I Broadband (Pvt.) Ltd.",
  shortName: "EARTH I Broadband",
  tagline: "Connecting Businesses. Empowering Possibilities.",
  heroSubtitle:
    "Next-generation carrier-grade optical connectivity, 1:1 symmetrical Dedicated Internet Access (DIA), multi-branch MPLS rings, and 24/7/365 NOC-managed enterprise infrastructure.",
  companyIntroduction:
    "EARTH I Broadband (Pvt.) Ltd. is an enterprise-focused Internet Service Provider (ISP) and optical telecommunications infrastructure company specializing in carrier-grade fiber connectivity, Dedicated Internet Access (DIA), Point-to-Point optical links, MPLS VPN networks, and managed IT & cloud solutions.",
  companyBackground:
    "Engineered from the ground up with pure subterranean optical fiber networks rather than fragile legacy copper or congested aerial cabling, our architecture serves corporate headquarters, financial institutions, tertiary healthcare centers, universities, software export hubs, industrial manufacturing zones, and high-demand residential sectors.",
  mission:
    "To bridge physical distances and foster dependable global communication by delivering uncontended, carrier-grade high-speed optical connectivity backed by strict Service Level Agreements (SLAs) across commercial, enterprise, and residential sectors.",
  vision:
    "To build a connected ecosystem where ubiquitous, ultra-low-latency optical internet empowers organizations and communities to innovate without bandwidth bottlenecks or reliability constraints.",
  contactDetails: {
    headOfficeAddress: "7/4, E-3 Main Boulevard, Gulberg-III, Lahore, Pakistan",
    addressConfirmationFlag:
      "Requires Confirmation: Source headquarters address (Gulberg-III, Lahore) adapted from reference business profile — verify official registered office address for EARTH I Broadband (Pvt.) Ltd.",
    helplinePhone: "+92 42 345 11 111",
    phoneConfirmationFlag:
      "Requires Confirmation: Source 24/7 NOC helpline number — verify official corporate helpline for EARTH I Broadband (Pvt.) Ltd.",
    generalEmail: "info@earthibroadband.com.pk",
    sourceGeneralEmail: "info@zcomnetworks.com.pk",
    careersEmail: "hr@earthibroadband.com.pk",
    sourceCareersEmail: "hr@zcomnetworks.com.pk",
    emailConfirmationFlag:
      "Requires Confirmation: Official domain email routing (adapted from source info@ / hr@ desks) must be confirmed and connected to EARTH I Broadband's mail server.",
    operatingHours: "24/7/365 Network Operations Center (NOC) & Field Dispatch",
    coverageCorridors: [
      "Main Boulevard Gulberg (I, II, III)",
      "DHA Phases 1 through 8",
      "Mall Road & Jail Road Commercial Corridor",
      "Ferozepur Road & Industrial Corridor",
      "Canal Road & Johar Town Tech Sectors",
      "Cantt & Model Town Zones",
      "Motorway M-0 / M-1 & GT Road Regional Transmission Paths",
    ],
  },
};

export const VERIFIED_INFRASTRUCTURE_STATS: InfrastructureStat[] = [
  {
    id: "metro-fiber",
    value: "1,200+",
    numericValue: 1200,
    suffix: "+ km",
    label: "Armored Metro Core Network",
    detail:
      "Deep-trench subterranean armored optical fiber conduits spanning metropolitan commercial and industrial corridors.",
    verifiedSourceNote: "Published metropolitan armored underground optical conduit footprint.",
  },
  {
    id: "core-backbone",
    value: "100G",
    numericValue: 100,
    suffix: "G",
    label: "Core Ring Optical Backbone",
    detail:
      "High-capacity multi-terabit routing fabric powered by enterprise Cisco, Juniper, and Huawei optical core hardware.",
    verifiedSourceNote: "Published core optical transport architecture specification.",
  },
  {
    id: "uptime-sla",
    value: "99.99%",
    label: "Contractual Uptime SLA",
    detail:
      "Backed by dual-path self-healing metro optical rings with automated sub-50ms optical protection switching.",
    verifiedSourceNote: "Published enterprise SLA range (99.9% to 99.99% availability).",
  },
  {
    id: "noc-support",
    value: "24/7/365",
    label: "Live NOC & Rapid MTTR",
    detail:
      "Round-the-clock Network Operations Center telemetry with automated OTDR fault localization and <15m incident response.",
    verifiedSourceNote: "Published 24/7/365 NOC monitoring and rapid response SLA.",
  },
];

export const TECHNICAL_TELEMETRY_HIGHLIGHTS = [
  {
    metric: "1:1 (1:0)",
    title: "Uncontended Symmetrical Throughput",
    description:
      "Identical upload and download bandwidth with zero contention ratio and no artificial Fair Usage Policy (FUP) throttling.",
  },
  {
    metric: "< 50 ms",
    title: "Self-Healing Ring Auto-Failover",
    description:
      "Redundant east/west subterranean fiber paths ensure instantaneous traffic rerouting if a physical conduit cut occurs.",
  },
  {
    metric: "< 15 min",
    title: "NOC Incident Response Desk",
    description:
      "Proactive optical time-domain reflectometer (OTDR) monitoring pinpoints physical fiber attenuation in real time.",
  },
  {
    metric: "100 Mbps – 100 Gbps",
    title: "Scalable Optical Line Rates",
    description:
      "Seamless capacity upgrades from corporate fast-ethernet circuits to 10G, 40G, and 100G DWDM optical wavelengths.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-internet-solutions",
    slug: "corporate-internet",
    category: "Corporate Connectivity",
    title: "Corporate Internet Solutions",
    shortTitle: "Corporate Internet",
    tagline: "High-availability optical broadband engineered for multi-user offices and commercial hubs.",
    shortDescription:
      "Carrier-grade business fiber connectivity designed for modern enterprises, commercial plazas, and growing SMEs requiring consistent speed and zero peak-hour congestion.",
    detailedDescription:
      "EARTH I Broadband's Corporate Internet Solutions deliver rock-solid optical fiber connectivity directly to your enterprise demarcation point. Unlike conventional copper or shared wireless links, our corporate circuits operate over subterranean armored fiber rings with guaranteed bandwidth availability, static IP routing, and priority business queuing.",
    iconName: "Building2",
    specs: [
      "Pure end-to-end subterranean optical fiber termination",
      "Dedicated static IPv4 & native Dual-Stack IPv6 addressing",
      "Zero Fair Usage Policy (FUP) & zero peak-hour throttling",
      "24/7/365 enterprise NOC monitoring & priority field dispatch",
    ],
    keyBenefits: [
      "Uninterrupted cloud SaaS, VoIP conferencing, and ERP responsiveness",
      "Eliminates legacy copper degradation and weather-related wireless drop-offs",
      "Scalable bandwidth tiers aligned with expanding corporate headcount",
      "Direct SLA-backed escalation matrix with dedicated account engineering",
    ],
    useCases: [
      "Multi-floor corporate offices and regional headquarters",
      "Software houses, BPOs, and digital export technology parks",
      "Commercial retail hubs and hospitality environments",
    ],
  },
  {
    id: "dedicated-internet-access",
    slug: "dedicated-internet-access",
    category: "Corporate Connectivity",
    title: "Dedicated Internet Access (DIA)",
    shortTitle: "Dedicated Internet (DIA)",
    tagline: "Unshared 1:1 symmetrical optical bandwidth provisioned directly from our 100G metro core ring.",
    shortDescription:
      "Mission-critical 1:1 uncontended fiber internet with contractual 99.99% uptime SLAs, symmetrical upload/download speeds, and BGP multi-homing support.",
    detailedDescription:
      "Engineered for enterprises that cannot tolerate latency spikes or bandwidth contention, Dedicated Internet Access (DIA) provisions an exclusive optical circuit from EARTH I Broadband's metro transport ring directly to your core router. Every megabit or gigabit subscribed is reserved exclusively for your organization 24 hours a day.",
    iconName: "Cpu",
    specs: [
      "Strict 1:1 (uncontended) symmetrical upload and download ratio",
      "Contractual 99.9% to 99.99% SLA with dual-route physical diversity",
      "BGP routing support, ASN peering, and clean subnet allocations",
      "Line rates scalable from 100 Mbps up to 10 Gbps+ per port",
    ],
    keyBenefits: [
      "Deterministic low latency for real-time financial trading and telemedicine",
      "Simultaneous high-volume cloud backups, video broadcasts, and remote access",
      "Sub-50ms automatic ring protection switching against fiber cuts",
      "Real-time SNMP/telemetry bandwidth utilization visibility",
    ],
    useCases: [
      "Banking headquarters, financial clearing houses, and fintech platforms",
      "Tertiary hospitals, diagnostic imaging centers, and research universities",
      "Large-scale software engineering centers and cloud-native enterprises",
    ],
  },
  {
    id: "mpls-connectivity",
    slug: "mpls-connectivity",
    category: "Optical Infrastructure",
    title: "MPLS Connectivity Solutions",
    shortTitle: "MPLS Connectivity",
    tagline: "Private multi-branch traffic consolidation with deterministic Quality of Service (QoS).",
    shortDescription:
      "Enterprise Multi-Protocol Label Switching (MPLS) architecture unifying distributed branches, warehouses, and data centers over an isolated private optical fabric.",
    detailedDescription:
      "EARTH I Broadband's MPLS Connectivity consolidates multi-branch voice, high-definition video, and mission-critical ERP/SAP traffic onto a unified, private Layer-2.5/Layer-3 optical network. Traffic is completely isolated from the public internet and prioritized using granular Quality of Service (QoS) classes.",
    iconName: "Network",
    specs: [
      "Any-to-any and hub-and-spoke private multi-site topologies",
      "Deterministic CoS/QoS priority queuing for VoIP, video, and ERP packets",
      "Complete traffic isolation from public internet attack vectors",
      "Redundant core label-switched paths (LSPs) with fast reroute",
    ],
    keyBenefits: [
      "Centralizes IT security policies and firewall inspection at headquarters",
      "Guarantees jitter-free inter-branch voice and unified communications",
      "Simplifies WAN routing across dozens of urban and regional branches",
      "Single-vendor SLA accountability across all connected sites",
    ],
    useCases: [
      "Multi-branch retail chains and commercial bank branch networks",
      "Industrial enterprises linking factories, warehouses, and head offices",
      "Healthcare & educational networks spanning multiple city campuses",
    ],
  },
  {
    id: "vpn-solutions",
    slug: "vpn-solutions",
    category: "Security & Digital",
    title: "Enterprise VPN Solutions",
    shortTitle: "VPN Solutions",
    tagline: "Hardware-accelerated AES-256 encrypted tunnels across dual physical network paths.",
    shortDescription:
      "High-security IPsec and SSL VPN architectures connecting regional branches, remote workforces, and hybrid cloud environments with zero-latency overhead.",
    detailedDescription:
      "Our Enterprise VPN Solutions provide cryptographically hardened Site-to-Site IPsec and remote-access SSL VPN tunnels engineered for uncompromising data confidentiality. Built with hardware-accelerated AES-256 encryption and dual-path physical failover, your corporate intranet remains impenetrable and responsive.",
    iconName: "ShieldCheck",
    specs: [
      "Hardware-accelerated AES-256 & SHA-2 cryptographic tunneling",
      "Site-to-Site IPsec, DMVPN, and client-based SSL VPN architectures",
      "Seamless Active Directory, LDAP, and MFA identity integration",
      "Automated tunnel failover across dual physical optical routes",
    ],
    keyBenefits: [
      "Protects sensitive corporate IP, financial ledgers, and patient records in transit",
      "Enables secure zero-trust remote access for traveling executives and engineers",
      "High-throughput encryption without bottlenecking fiber line rates",
      "24/7 NOC tunnel health monitoring and cryptographic key lifecycle management",
    ],
    useCases: [
      "Distributed hybrid workforces accessing on-premise ERP and databases",
      "Encrypted interconnection between corporate offices and AWS/Azure/GCP VPCs",
      "Secure third-party vendor and partner extranet connectivity",
    ],
  },
  {
    id: "point-to-point-optical",
    slug: "point-to-point-optical",
    category: "Optical Infrastructure",
    title: "Point-to-Point Optical Connectivity",
    shortTitle: "Point-to-Point Fiber",
    tagline: "Dedicated Layer-2 metro optical wave links with sub-millisecond intra-city latency.",
    shortDescription:
      "Private point-to-point subterranean fiber circuits connecting headquarters, primary data centers, disaster recovery sites, and surveillance command centers.",
    detailedDescription:
      "EARTH I Broadband's Point-to-Point (P2P) Optical Connectivity establishes a direct, unshared Layer-1/Layer-2 fiber bridge between two enterprise locations within our 1,200+ km armored metro network. Operating at wire-speed with sub-millisecond intra-metro latency, it acts as a virtual local area network extension across the city.",
    iconName: "Cable",
    specs: [
      "Sub-millisecond (< 1ms) intra-metro optical propagation latency",
      "Wire-speed Layer-2 Ethernet / DWDM optical wave transmission",
      "Scalable dedicated capacities from 100 Mbps to 100 Gbps",
      "100% physical air-gap isolation from public routing tables",
    ],
    keyBenefits: [
      "Synchronous real-time database replication between primary and DR sites",
      "Uncompressed HD/4K multi-stream CCTV surveillance backhaul",
      "Zero protocol overhead and full jumbo-frame MTU transparency",
      "Protected underground armored conduit routing immune to aerial tampering",
    ],
    useCases: [
      "Synchronous data center replication and disaster recovery (DR) links",
      "Safe-city & industrial high-density CCTV optical backhaul networks",
      "University and hospital multi-campus high-speed LAN extensions",
    ],
  },
  {
    id: "cloud-and-hosting",
    slug: "cloud-hosting",
    category: "Cloud & Managed IT",
    title: "Cloud & Hosting Solutions",
    shortTitle: "Cloud & Hosting",
    tagline: "Enterprise colocation, private cloud infrastructure, and direct optical cloud on-ramps.",
    shortDescription:
      "High-availability data center colocation, virtual private servers, and resilient cloud hosting backed by redundant power, cooling, and 100G optical uplinks.",
    detailedDescription:
      "Host your mission-critical workloads inside carrier-grade data center facilities directly integrated with EARTH I Broadband's 100G optical core. Whether your organization requires secure rack colocation for physical servers or scalable virtualized cloud compute and storage, we deliver low-latency infrastructure within regulatory boundaries.",
    iconName: "Cloud",
    specs: [
      "Carrier-neutral & on-net rack colocation with redundant N+1 power/HVAC",
      "Direct 10G/100G optical cross-connects to metro core backbone",
      "Enterprise VPS, dedicated bare-metal hosting, and managed cloud storage",
      "Automated off-site snapshot backups and disaster recovery orchestration",
    ],
    keyBenefits: [
      "Eliminates on-premise server room power, cooling, and physical security costs",
      "Ultra-low local latency for domestic enterprise users and customers",
      "Seamless hybrid cloud bursting between on-premise racks and hosted instances",
      "Physical biometric access control and 24/7 environmental telemetry",
    ],
    useCases: [
      "Enterprise ERP, core banking, and healthcare HIS hosting",
      "Off-site disaster recovery (DRaaS) and immutable backup vaults",
      "High-traffic e-commerce and SaaS application hosting",
    ],
  },
  {
    id: "managed-it-solutions",
    slug: "managed-it",
    category: "Cloud & Managed IT",
    title: "Managed IT Solutions",
    shortTitle: "Managed IT",
    tagline: "End-to-end network lifecycle management, proactive telemetry, and 24/7 NOC operations.",
    shortDescription:
      "Comprehensive infrastructure management that offloads day-to-day enterprise routing, Wi-Fi 6 campus engineering, firewall administration, and WAN health monitoring.",
    detailedDescription:
      "Focus your internal technology teams on strategic innovation while EARTH I Broadband's certified network engineers manage your underlying LAN/WAN infrastructure. From enterprise campus switching and high-density wireless deployment to 24/7 SNMP health monitoring and preventive maintenance, we keep your operations running continuously.",
    iconName: "ServerCog",
    specs: [
      "Managed CPE routers, Layer-3 core switches, and campus Wi-Fi 6 controllers",
      "24/7/365 proactive SNMP, NetFlow, and syslog performance monitoring",
      "Scheduled firmware patching, configuration backups, and capacity audits",
      "Dedicated field engineering dispatches and hardware replacement SLAs",
    ],
    keyBenefits: [
      "Predictable monthly operational expenditure (OpEx) vs. unpredictable CapEx",
      "Proactive fault remediation before end-users experience degradation",
      "Access to Cisco, Juniper, and Huawei certified network architects",
      "Unified single-pane visibility across WAN links and internal campus LANs",
    ],
    useCases: [
      "Growing enterprises looking to augment internal IT operations",
      "Multi-site organizations requiring standardized network configurations",
      "Campus environments needing high-density managed wireless and switching",
    ],
  },
  {
    id: "cybersecurity-services",
    slug: "cybersecurity",
    category: "Security & Digital",
    title: "Cybersecurity Services",
    shortTitle: "Cybersecurity",
    tagline: "Perimeter defense, volumetric DDoS mitigation, and next-generation firewall management.",
    shortDescription:
      "Multi-layered enterprise security solutions protecting optical WAN perimeters, corporate endpoints, and cloud workloads against evolving cyber threats.",
    detailedDescription:
      "As enterprise bandwidth scales, threat surfaces expand. EARTH I Broadband integrates carrier-level volumetric DDoS scrubbing at the optical core with managed Next-Generation Firewalls (NGFW), Intrusion Detection & Prevention Systems (IDS/IPS), and continuous vulnerability assessments to safeguard your digital assets.",
    iconName: "Lock",
    specs: [
      "Upstream volumetric DDoS detection and inline traffic scrubbing",
      "Managed Next-Generation Firewalls (NGFW) with deep packet inspection",
      "Zero-Trust Network Access (ZTNA) and micro-segmentation architecture",
      "Continuous perimeter vulnerability scanning and compliance reporting",
    ],
    keyBenefits: [
      "Neutralizes volumetric DDoS floods before they saturate your local circuit",
      "Enforces granular application control and web content filtering",
      "Protects mission-critical data against ransomware lateral movement",
      "Supports regulatory compliance for financial, healthcare, and export sectors",
    ],
    useCases: [
      "Financial institutions and payment gateways requiring continuous availability",
      "Healthcare providers safeguarding confidential patient datasets",
      "Enterprises securing cloud-connected branch perimeters",
    ],
  },
  {
    id: "digital-solutions",
    slug: "digital-solutions",
    category: "Security & Digital",
    title: "Digital Solutions",
    shortTitle: "Digital Solutions",
    tagline: "Custom enterprise web platforms, workflow digitization, and cloud-connected portals.",
    shortDescription:
      "Tailored digital infrastructure, enterprise web/application engineering, and API integration frameworks designed to modernize corporate workflows.",
    detailedDescription:
      "Beyond physical optical transport, EARTH I Broadband empowers organizations to digitize customer and internal operations. Our Digital Solutions practice builds secure customer portals, automated billing/CRM integrations, cloud-ready web applications, and custom workflow systems engineered for high concurrency.",
    iconName: "Code2",
    specs: [
      "Custom enterprise web applications and responsive customer portals",
      "CRM, ERP, and automated telemetry/billing API integrations",
      "Cloud-native architecture optimized for high concurrency and security",
      "Full-lifecycle UI/UX engineering, deployment, and maintenance",
    ],
    keyBenefits: [
      "Streamlines manual paper-based workflows into unified digital dashboards",
      "Enhances customer self-service with real-time account and usage portals",
      "Tightly coupled with our cloud hosting and cybersecurity frameworks",
      "Engineered for speed, accessibility, and cross-device responsiveness",
    ],
    useCases: [
      "Corporate self-service portals and B2B client dashboards",
      "Automated field-service and asset tracking applications",
      "Enterprise digital transformation and legacy system modernization",
    ],
  },
];

export const WHY_CHOOSE_US_ADVANTAGES = [
  {
    id: "pure-optical",
    title: "100% Pure Subterranean Optical Fiber",
    subtitle: "Zero Legacy Copper Dependency",
    description:
      "Every enterprise circuit is delivered over deep-trench armored underground optical fiber conduits—eliminating signal attenuation, electromagnetic interference, and aerial cable fragility.",
    iconName: "Sparkles",
    highlightMetric: "1,200+ km Metro Ring",
  },
  {
    id: "symmetrical-speeds",
    title: "True 1:1 Symmetrical Bandwidth",
    subtitle: "Identical Upload & Download Throughput",
    description:
      "Engineered with a strict 1:1 (uncontended) ratio so heavy upstream workloads—cloud backups, HD video conferencing, ERP sync, and hosted servers—perform at full line rate.",
    iconName: "ArrowLeftRight",
    highlightMetric: "1:1 Uncontended Ratio",
  },
  {
    id: "self-healing-ring",
    title: "Self-Healing Metro Ring Architecture",
    subtitle: "< 50ms Automated Optical Failover",
    description:
      "Dual-path physical route diversity across our 100G core ring automatically reroutes enterprise traffic in under 50 milliseconds if a physical conduit disruption occurs.",
    iconName: "RefreshCw",
    highlightMetric: "< 50ms Failover",
  },
  {
    id: "zero-fup",
    title: "Zero FUP & Zero Peak-Hour Throttling",
    subtitle: "Unrestricted Enterprise Capacity",
    description:
      "Freedom from hidden Fair Usage Policies (FUP), bandwidth shaping, or artificial evening slowdowns. Your subscribed throughput remains 100% available 24/7.",
    iconName: "Gauge",
    highlightMetric: "0% Throttling",
  },
  {
    id: "noc-operations",
    title: "24/7/365 Live NOC & Automated OTDR",
    subtitle: "< 15 Minute Incident Response Desk",
    description:
      "Our round-the-clock Network Operations Center continuously monitors optical light levels and utilizes automated OTDR telemetry to pinpoint and dispatch field splice teams immediately.",
    iconName: "Activity",
    highlightMetric: "< 15m Response",
  },
  {
    id: "carrier-hardware",
    title: "Tier-1 Core Routing & Native IPv6",
    subtitle: "Cisco, Juniper & Huawei Core Fabric",
    description:
      "Built on carrier-grade routing silicon with native Dual-Stack IPv4/IPv6 readiness, BGP multi-homing support, and precision fusion-spliced optical distribution frames.",
    iconName: "Server",
    highlightMetric: "100G Core Fabric",
  },
];

export const COMPARISON_TABLE_DATA = [
  {
    feature: "Physical Transmission Medium",
    conventional: "Shared aerial fiber, legacy copper pairs, or line-of-sight wireless",
    earthIBroadband: "100% subterranean armored optical fiber conduit right to CPE",
  },
  {
    feature: "Bandwidth Contention Ratio",
    conventional: "Oversubscribed shared pools (1:4 to 1:20 contention during peak hours)",
    earthIBroadband: "Strict 1:1 uncontended dedicated optical bandwidth",
  },
  {
    feature: "Upload vs. Download Symmetry",
    conventional: "Asymmetrical (upload speeds restricted to 10%–25% of download)",
    earthIBroadband: "100% symmetrical upload and download line rates",
  },
  {
    feature: "Fair Usage Policy (FUP) & Throttling",
    conventional: "Subject to monthly data caps or peak-hour protocol shaping",
    earthIBroadband: "Zero FUP — unlimited, unthrottled line-rate transmission 24/7",
  },
  {
    feature: "Redundancy & Path Failover",
    conventional: "Single-point radial drop cable; outages last hours or days",
    earthIBroadband: "Dual-path self-healing metro optical ring (< 50ms auto-failover)",
  },
  {
    feature: "Fault Detection & Support Model",
    conventional: "Reactive ticket queue after customer reports outage",
    earthIBroadband: "24/7/365 proactive NOC with automated OTDR telemetry & <15m response",
  },
  {
    feature: "Service Level Agreement (SLA)",
    conventional: "Best-effort availability with no contractual uptime guarantee",
    earthIBroadband: "Contractual 99.9% to 99.99% enterprise SLA with rapid MTTR dispatch",
  },
];

export const INDUSTRIES_AND_SECTORS: IndustrySector[] = [
  {
    id: "banking-finance",
    name: "Banking, Financial Institutions & FinTech",
    iconName: "Landmark",
    description:
      "Supporting real-time inter-branch ledger synchronization, ATM optical backhaul, and encrypted disaster recovery links with sub-50ms ring failover.",
    typicalDeployments: ["Multi-Branch MPLS VPN", "1:1 Dedicated Internet (DIA)", "AES-256 IPsec Failover"],
  },
  {
    id: "healthcare-hospitals",
    name: "Tertiary Hospitals & Diagnostic Centers",
    iconName: "HeartPulse",
    description:
      "Powering Picture Archiving and Communication Systems (PACS), telemedicine consultations, and 24/7 Hospital Information Systems (HIS) across medical campuses.",
    typicalDeployments: ["Symmetrical DIA Circuits", "Point-to-Point Campus Fiber", "99.99% Uptime SLA"],
  },
  {
    id: "software-it-parks",
    name: "Software Export Hubs, IT Parks & BPOs",
    iconName: "Terminal",
    description:
      "Delivering ultra-low-latency international routing, BGP dual-homing, and uncontended symmetrical bandwidth for global CI/CD pipelines and voice operations.",
    typicalDeployments: ["High-Capacity 1G–10G DIA", "Dual-Stack IPv4/IPv6", "Managed Perimeter Security"],
  },
  {
    id: "higher-education",
    name: "Universities & Educational Campuses",
    iconName: "GraduationCap",
    description:
      "Interconnecting multi-building academic campuses, research laboratories, digital libraries, and high-density student Wi-Fi 6 environments.",
    typicalDeployments: ["Campus Point-to-Point Optical", "Managed Campus Switching", "Content Filtering & Firewall"],
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial Estates & Manufacturing Units",
    iconName: "Factory",
    description:
      "Linking remote production plants, supply-chain warehouses, and corporate head offices over subterranean armored conduits for continuous ERP & IoT telemetry.",
    typicalDeployments: ["Armored Corridor Fiber", "MPLS WAN Consolidation", "IP CCTV Optical Backhaul"],
  },
  {
    id: "security-hospitality",
    name: "Surveillance Networks & Commercial Hospitality",
    iconName: "ShieldAlert",
    description:
      "Providing dedicated dark/lit optical waves for high-definition multi-stream CCTV surveillance command centers and enterprise guest connectivity.",
    typicalDeployments: ["Layer-2 Point-to-Point Links", "Dedicated CCTV Optical Feeds", "Managed Hospitality Wi-Fi"],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "gulberg-dha-metro-ring",
    title: "100G Subterranean Armored Metro Core Ring Deployment",
    category: "Metro Core Ring",
    corridorOrZone: "Main Boulevard Gulberg, Mall Road, Canal Road & DHA Phases 1–8",
    summary:
      "Engineering and deployment of deep-trench armored underground optical fiber conduits forming a self-healing 100G metropolitan transport ring across major commercial districts.",
    technicalScope: [
      "1,200+ km cumulative armored underground optical conduit infrastructure",
      "Dual-path east/west optical protection switching (< 50ms failover)",
      "Automated OTDR optical telemetry integrated with Gulberg-III NOC",
    ],
    architectureHighlight: "Eliminates aerial fiber cuts and weather degradation across high-density business zones.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "regional-highway-corridor",
    title: "Inter-Corridor Optical Transmission Grid (M-0 / M-1 / GT Road)",
    category: "Campus & Corridor Fiber",
    corridorOrZone: "Ferozepur Road Industrial Belt & Regional Motorway Corridors",
    summary:
      "Long-haul and regional subterranean optical transmission paths connecting industrial manufacturing zones, commercial corridors, and regional distribution nodes.",
    technicalScope: [
      "High-count single-mode armored fiber optic cable deployment",
      "Precision fusion splicing and optical distribution frame (ODF) termination",
      "Scalable DWDM wavelength capacity from 10 Gbps to 100 Gbps",
    ],
    architectureHighlight: "Extends carrier-grade low-latency connectivity to industrial estates and logistics hubs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "healthcare-university-dia",
    title: "Tertiary Healthcare & Academic Campus Optical Interconnect",
    category: "Enterprise DIA & MPLS",
    corridorOrZone: "Jail Road, Canal Bank & Model Town Institutional Zones",
    summary:
      "Provisioning of uncontended 1:1 symmetrical Dedicated Internet Access (DIA) and inter-campus Layer-2 Point-to-Point optical links for hospitals and universities.",
    technicalScope: [
      "Symmetrical 1:1 DIA circuits with native Dual-Stack IPv4/IPv6",
      "Sub-millisecond intra-metro P2P optical links for real-time imaging/ERP",
      "24/7/365 proactive NOC monitoring with contractual 99.99% uptime SLA",
    ],
    architectureHighlight: "Zero FUP and guaranteed upstream throughput for telemedicine and research workloads.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "enterprise-mpls-cctv",
    title: "Multi-Branch MPLS VPN & Dedicated CCTV Optical Backhaul",
    category: "Data Center & Security",
    corridorOrZone: "Lahore Metropolitan Commercial & Security Command Sectors",
    summary:
      "Consolidation of multi-branch enterprise ERP/voice traffic over private MPLS rings alongside dedicated optical feeds for continuous high-definition CCTV surveillance.",
    technicalScope: [
      "Private Layer-2/Layer-3 MPLS VPN with deterministic QoS queuing",
      "Hardware-accelerated AES-256 encrypted backup tunnels",
      "Air-gapped optical wavelengths for uninterrupted 4K/HD camera streams",
    ],
    architectureHighlight: "Complete isolation from public internet congestion and external cyber threats.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CAREERS_CULTURE = {
  headline: "Build the Optical Backbone Powering Enterprise Innovation",
  subheadline:
    "Join our Network Operations Center (NOC), optical infrastructure engineering teams, and corporate technology divisions.",
  cultureParagraph:
    "At EARTH I Broadband (Pvt.) Ltd., our engineering culture is built on technical rigor, proactive problem-solving, and uncompromising infrastructure standards. Operating from our corporate headquarters and 24/7 NOC facility, our teams design, splice, route, and safeguard mission-critical optical networks.",
  verifiedGrowthHighlights: [
    {
      title: "Professional Certification Sponsorships",
      description:
        "Support for industry-recognized networking and optical accreditations including CCNA, CCNP, JNCIA, and specialized optical fiber engineering certifications.",
      iconName: "Award",
    },
    {
      title: "Accelerated Technical Progression",
      description:
        "Structured career tracks across NOC Tier-1/Tier-2/Tier-3 engineering, outside-plant (OSP) optical architecture, and enterprise B2B consulting.",
      iconName: "TrendingUp",
    },
    {
      title: "Health & Wellness Coverage",
      description:
        "Comprehensive health and wellness support for full-time engineering, field operations, and corporate staff.",
      iconName: "HeartHandshake",
    },
    {
      title: "Carrier-Grade Lab & Core Exposure",
      description:
        "Hands-on experience with 100G optical rings, Cisco/Juniper/Huawei core routers, BGP peering, and automated OTDR telemetry.",
      iconName: "Cpu",
    },
  ],
};

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: "corporate-sales-executive",
    title: "Corporate Sales Executive (B2B Telecom / ISP)",
    department: "Corporate Business Development",
    location: "Gulberg-III, Lahore (Field & Office)",
    type: "Full-Time",
    experience: "Minimum 1–3 Years in B2B ISP / Telecom Sales",
    summary:
      "Drive enterprise acquisition for Dedicated Internet Access (DIA), Point-to-Point optical links, MPLS VPNs, and Managed IT solutions across commercial corridors and industrial zones.",
    responsibilities: [
      "Identify, prospect, and close B2B enterprise accounts requiring dedicated optical fiber connectivity (DIA, P2P, MPLS).",
      "Conduct consultative requirement assessments with CIOs, IT Heads, and procurement teams across corporate sectors.",
      "Coordinate with OSP optical survey engineers and pre-sales architects to prepare technical proposals and SLA contracts.",
      "Manage account relationships, bandwidth upgrades, and portfolio expansion across assigned metropolitan territories.",
    ],
    qualifications: [
      "Bachelor's degree in Computer Science, Information Technology, Business Administration, or related field.",
      "Prior proven experience in B2B corporate sales within a licensed ISP or telecommunications operator.",
      "Strong understanding of enterprise connectivity concepts (DIA, MPLS, static IPs, SLAs, optical fiber vs. copper).",
      "Excellent negotiation, presentation, and field-oriented relationship building skills.",
    ],
  },
  {
    id: "noc-network-engineer",
    title: "Network Operations Center (NOC) Engineer",
    department: "Network Operations & Core Routing",
    location: "Gulberg-III, Lahore (24/7 Rotational Shifts)",
    type: "Full-Time",
    experience: "1–3 Years in ISP NOC / Routing & Switching",
    summary:
      "Monitor, troubleshoot, and maintain EARTH I Broadband's 100G optical core ring, enterprise DIA circuits, MPLS tunnels, and automated OTDR telemetry.",
    responsibilities: [
      "Perform proactive 24/7 monitoring of metro optical rings, core routers, and customer CPE links via SNMP, NetFlow, and OTDR systems.",
      "Configure and troubleshoot BGP, OSPF, MPLS, VLANs, and IPsec VPN tunnels across Cisco, Juniper, and Huawei platforms.",
      "Respond to enterprise SLA tickets within the <15-minute response target and coordinate rapid MTTR field dispatches when physical faults occur.",
      "Maintain accurate network topology documentation, incident root-cause analyses (RCA), and change management logs.",
    ],
    qualifications: [
      "BS in Computer Science, Telecommunications Engineering, Electrical Engineering, or IT.",
      "CCNA / CCNP or JNCIA certification (or equivalent hands-on ISP routing and switching proficiency).",
      "Solid grasp of TCP/IP, subnetting, Dual-Stack IPv4/IPv6, Layer-2 switching, and optical power budget fundamentals.",
      "Analytical mindset with strong incident communication skills under strict SLA timelines.",
    ],
  },
  {
    id: "optical-fiber-field-technician",
    title: "Optical Infrastructure & OSP Field Engineer / Technician",
    department: "Outside Plant (OSP) & Fiber Engineering",
    location: "Lahore Metropolitan Corridors",
    type: "Full-Time",
    experience: "2+ Years in Underground Fiber Deployment & Splicing",
    summary:
      "Execute subterranean armored fiber deployments, precision fusion splicing, OTDR link certification, and enterprise last-mile optical terminations.",
    responsibilities: [
      "Perform precision fusion splicing, ODF/closure termination, and optical patch verification across metro core and customer sites.",
      "Operate OTDR, optical power meters, and visual fault locators (VFL) to test fiber attenuation and pinpoint subterranean conduit faults.",
      "Conduct physical site surveys for new corporate DIA and Point-to-Point fiber installations.",
      "Collaborate with the 24/7 NOC desk for rapid emergency restoration and preventive conduit maintenance.",
    ],
    qualifications: [
      "DAE / B.Tech or Bachelor's in Telecommunications / Electrical technology or relevant hands-on ISP field accreditation.",
      "Demonstrated proficiency with multi-core subterranean armored optical cables, fusion splicers, and OTDR trace interpretation.",
      "Commitment to underground trench safety standards, accurate splice loss budgets, and clean rack dressing.",
      "Valid driver's license and readiness for rapid metropolitan field dispatch.",
    ],
  },
];
