import React from "react";
import { Card } from "@heroui/react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  location?: string;
}

export function TestimonialCard({ quote, name, role, location }: TestimonialCardProps) {
  return (
    <Card className="glass p-8 border-0 h-full">
      <div className="text-xl leading-tight tracking-[-0.01em] mb-8">
        “{quote}”
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-muted text-sm">
          {role}{location ? ` · ${location}` : ""}
        </div>
      </div>
    </Card>
  );
}
