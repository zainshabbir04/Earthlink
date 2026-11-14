import React from "react";
import {
  Building2,
  Cpu,
  Network,
  ShieldCheck,
  Cable,
  Cloud,
  ServerCog,
  Lock,
  Code2,
  Sparkles,
  ArrowLeftRight,
  RefreshCw,
  Gauge,
  Activity,
  Server,
  Landmark,
  HeartPulse,
  Terminal,
  GraduationCap,
  Factory,
  ShieldAlert,
  Award,
  TrendingUp,
  HeartHandshake,
  Globe,
} from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({
  name,
  className = "w-6 h-6",
}: ServiceIconProps) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    Cpu,
    Network,
    ShieldCheck,
    Cable,
    Cloud,
    ServerCog,
    Lock,
    Code2,
    Sparkles,
    ArrowLeftRight,
    RefreshCw,
    Gauge,
    Activity,
    Server,
    Landmark,
    HeartPulse,
    Terminal,
    GraduationCap,
    Factory,
    ShieldAlert,
    Award,
    TrendingUp,
    HeartHandshake,
    Globe,
  };

  const IconComponent = icons[name] || Globe;
  return <IconComponent className={className} />;
}
