"use client";

import { Calendar, Code, FileText, User, Clock, Server, Network, Shield, Database, Monitor } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Hardware Setup",
    date: "Systems",
    content: "Complete hardware installation, configuration, and maintenance services for optimal performance.",
    category: "Hardware",
    icon: Monitor,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Network Config",
    date: "Infrastructure", 
    content: "Professional network setup, router/switch configuration, and connectivity management.",
    category: "Networking",
    icon: Network,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Tech Support",
    date: "Support",
    content: "Responsive technical support and troubleshooting for users, staff, and students.",
    category: "Support",
    icon: User,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "System Security",
    date: "Security",
    content: "Implementing and maintaining secure IT systems and protocols.",
    category: "Security", 
    icon: Shield,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Data Management",
    date: "Analytics",
    content: "Comprehensive data collection, analysis, and management solutions.",
    category: "Data",
    icon: Database,
    relatedIds: [4, 1],
    status: "completed" as const,
    energy: 88,
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-black">
      <div className="text-center py-20 px-6 md:px-8 bg-background">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
          My Expertise
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Providing Wide Range of Digital Services
        </p>
        <p className="text-sm text-muted-foreground">
          Click on any node below to explore my technical capabilities and experience
        </p>
      </div>
      
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
};

export default ExpertiseSection;