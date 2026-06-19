import React from "react";
import { Card } from "@heroui/react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

export function ServiceCard({ icon: Icon, title, description, highlight }: ServiceCardProps) {
  return (
    <Card className="glass p-7 h-full flex flex-col border-0 group">
      <div className="h-12 w-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-semibold text-2xl tracking-[-0.015em] mb-3">{title}</h3>
      <p className="text-muted text-[15px] leading-relaxed flex-1">{description}</p>
      {highlight && (
        <div className="mt-6 pt-5 border-t text-xs tracking-[1px] font-medium text-accent/90">
          {highlight}
        </div>
      )}
    </Card>
  );
}
