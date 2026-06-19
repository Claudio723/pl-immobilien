"use client";

import React from "react";
import { Card, Button, Chip } from "@heroui/react";
import { MapPin, Bed, Bath, Square } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  rooms: number;
  baths: number;
  area: number;
  image: string;
  status?: string;
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="property-card glass overflow-hidden group border-0 p-0 flex flex-col h-full">
      {/* Image area with glass overlay label */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
        <img
          src={property.image}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
        
        {property.status && (
          <Chip
            size="sm"
            className="absolute top-4 left-4 backdrop-blur-md bg-white/90 text-foreground border border-white/40 font-medium"
          >
            {property.status}
          </Chip>
        )}
        <div className="absolute bottom-4 right-4">
          <div className="glass-strong px-3.5 py-1 rounded-full text-xs tracking-widest font-medium text-foreground/90">
            {property.type}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-semibold text-xl tracking-[-0.015em] leading-tight">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-muted mt-1 text-sm">
              <MapPin className="h-3.5 w-3.5" />
              {property.location}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-semibold tabular-nums text-lg tracking-tight">{property.price}</div>
          </div>
        </div>

        {/* Specs */}
        <div className="mt-auto pt-5 flex items-center gap-5 text-sm text-muted border-t border-separator/60">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4" />
            <span>{property.rooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="h-4 w-4" />
            <span>{property.area} m²</span>
          </div>
        </div>

        <div className="pt-6">
          <Button
            variant="outline"
            fullWidth
            className="font-medium"
            onPress={() => alert(`Details zu "${property.title}" – in einer echten Implementation würde hier eine Detailseite oder Sheet mit mehr Infos, Grundriss und Kontaktmöglichkeit öffnen.`)}
          >
            Details ansehen
          </Button>
        </div>
      </div>
    </Card>
  );
}
