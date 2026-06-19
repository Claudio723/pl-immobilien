"use client";

import React from "react";
import { Button, Input, TextArea } from "@heroui/react";
import {
  Home,
  KeyRound,
  Users,
  TrendingUp,
  Globe,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { PropertyCard, Property } from "../components/PropertyCard";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { motion } from "framer-motion";

// Sample premium Swiss properties
const properties: Property[] = [
  {
    id: 1,
    title: "Villa am Zürichsee",
    location: "Rüschlikon, ZH",
    price: "CHF 4'850'000",
    type: "Villa",
    rooms: 7,
    baths: 4,
    area: 412,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
    status: "Neu",
  },
  {
    id: 2,
    title: "Penthouse mit Panoramablick",
    location: "Dietikon, ZH",
    price: "CHF 2'190'000",
    type: "Eigentumswohnung",
    rooms: 5,
    baths: 3,
    area: 178,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    id: 3,
    title: "Elegantes Stadthaus",
    location: "Baden, AG",
    price: "CHF 1'795'000",
    type: "Einfamilienhaus",
    rooms: 6,
    baths: 2,
    area: 265,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56b08?w=1200&q=80",
  },
  {
    id: 4,
    title: "Lichtdurchflutete Loftwohnung",
    location: "Zürich West, ZH",
    price: "CHF 1'395'000",
    type: "Eigentumswohnung",
    rooms: 3.5,
    baths: 2,
    area: 124,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    status: "Exklusiv",
  },
  {
    id: 5,
    title: "Modernes Architektenhaus",
    location: "Wettingen, AG",
    price: "CHF 2'680'000",
    type: "Einfamilienhaus",
    rooms: 6.5,
    baths: 3,
    area: 298,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
  },
  {
    id: 6,
    title: "Gewerbeobjekt mit Potenzial",
    location: "Dietikon, ZH",
    price: "CHF 3'250'000",
    type: "Gewerbe",
    rooms: 12,
    baths: 4,
    area: 890,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
];

const services = [
  {
    icon: Home,
    title: "Immobilienverkauf",
    description: "Persönliche Vermarktung mit modernster Präsentation, professioneller Bewertung und zielgerichteter Käufersuche für den besten Preis.",
    highlight: "Durchschnittlich 18% über Schätzung",
  },
  {
    icon: KeyRound,
    title: "Kaufberatung & Erwerb",
    description: "Fundierte Marktanalysen, Objektprüfung und Verhandlungsführung. Wir finden Ihr Traumobjekt und begleiten Sie bis zur Schlüsselübergabe.",
  },
  {
    icon: Users,
    title: "Verwaltung & Mietverwaltung",
    description: "Komplette Immobilienbewirtschaftung inklusive Mieterbetreuung, Mietzinsmanagement und technischer Betreuung – sorgenfrei für Eigentümer.",
  },
  {
    icon: TrendingUp,
    title: "Finanzierung & Beratung",
    description: "Unabhängige Finanzierungsberatung mit unseren langjährigen Partnerbanken. Optimale Strukturen für Ihren Immobilienkauf oder Umbau.",
  },
  {
    icon: Globe,
    title: "Immobilien im Ausland",
    description: "Exklusiver Zugang zu ausgewählten Objekten in Europa und Übersee. Persönliche Begleitung vor Ort und rechtliche Abwicklung.",
  },
  {
    icon: Shield,
    title: "Portfolio-Bewirtschaftung",
    description: "Strategische Betreuung grösserer Immobilienportfolios – Wertsteigerung, Optimierung, Reporting und Nachfolgeplanung.",
  },
];

const testimonials = [
  {
    quote: "PL Immobilien hat uns mit enormer Kompetenz und Fingerspitzengefühl beim Verkauf unserer Familienvilla unterstützt. Der Prozess war transparent, schnell und hat unsere Erwartungen übertroffen.",
    name: "Familie M. Keller",
    role: "Verkäufer",
    location: "Zollikon",
  },
  {
    quote: "Die Beratung und die Diskretion waren vorbildlich. Wir haben innerhalb von sechs Wochen das perfekte Eigenheim gefunden und kaufen es jetzt dank der exzellenten Finanzierungsunterstützung.",
    name: "Anna & Lukas Berger",
    role: "Käufer",
    location: "Dietikon",
  },
  {
    quote: "Seit 9 Jahren vertrauen wir PL Immobilien die Verwaltung unseres Mehrfamilienhauses an. Alles läuft reibungslos, die Mieter sind zufrieden und die Rendite ist besser als erwartet.",
    name: "Dr. Peter Schmid",
    role: "Eigentümer",
    location: "Baden",
  },
];

const statsData = [
  { label: "Jahre Erfahrung", value: 15 },
  { label: "Vermittelte Objekte", value: 320 },
  { label: "Kundenzufriedenheit", value: 98, suffix: "%" },
];

export default function PLImmobilien() {
  const [filter, setFilter] = React.useState<string>("alle");
  const [formState, setFormState] = React.useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const filteredProperties = React.useMemo(() => {
    if (filter === "alle") return properties;
    if (filter === "kaufen") return properties.filter(p => p.type !== "Gewerbe");
    if (filter === "mieten") return properties.slice(0, 3); // demo filter
    return properties.filter(p => p.type === "Gewerbe");
  }, [filter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: send to API / email service
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4200);
    }, 420);
  };

  return (
    <main id="top" className="pt-20">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-8 pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(#00000010_0.8px,transparent_1px)] bg-[length:5px_5px] dark:bg-[radial-gradient(#ffffff0a_0.8px,transparent_1px)]" />

        <div className="container relative z-10 text-center px-6">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs tracking-[3px] font-medium text-foreground/80 mb-8 border border-white/10">
              DIETIKON · ZÜRICHSEE · AARGAU
            </div>

            <h1 className="hero-title text-balance text-7xl md:text-[92px] font-semibold tracking-[-4.6px] leading-[.86] mb-6">
              Immobilien<br />mit Leidenschaft.
            </h1>
            <p className="max-w-[38ch] mx-auto text-2xl md:text-3xl text-muted font-light tracking-tight mb-10">
              Massgeschneiderte Beratung und Vermarktung für anspruchsvolle Immobilien in der Region Zürich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="primary"
                className="h-14 px-9 text-base font-medium"
                onPress={() => document.getElementById("objekte")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Objekte entdecken <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-9 text-base font-medium"
                onPress={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Ihre Immobilie verkaufen
              </Button>
            </div>

            <div className="mt-16 text-[10px] tracking-[3px] text-muted/70 font-mono">SEIT 2009 • PERSÖNLICH • ERFOLGREICH</div>
          </div>
        </div>

        {/* Subtle scroll prompt */}
        <div className="absolute bottom-12 left-1/2 hidden md:block -translate-x-1/2 text-xs text-muted tracking-[2px]">SCROLLEN SIE</div>
      </section>

      {/* ==================== QUICK TRUST / STATS ==================== */}
      <section className="border-y border-separator/60 bg-surface/70 py-5">
        <div className="container flex flex-wrap justify-center gap-x-14 gap-y-4 text-center text-sm">
          <div><span className="font-semibold tabular-nums">15</span> Jahre Leidenschaft</div>
          <div><span className="font-semibold tabular-nums">320</span>+ erfolgreiche Transaktionen</div>
          <div><span className="font-semibold tabular-nums">98</span>% Weiterempfehlungen</div>
          <div className="text-muted">Persönlich • Diskret • Erfolgsorientiert</div>
        </div>
      </section>

      {/* ==================== DIENSTLEISTUNGEN ==================== */}
      <section id="dienstleistungen" className="section container">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <div className="uppercase text-xs tracking-[3px] text-accent mb-2 font-medium">WAS WIR FÜR SIE TUN</div>
            <h2 className="text-6xl tracking-[-2.4px] font-semibold leading-none">Dienstleistungen</h2>
          </div>
          <p className="max-w-[320px] text-muted text-lg hidden lg:block">Von der ersten Beratung bis zur Schlüsselübergabe – oder dauerhafter Partnerschaft.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* ==================== OBJEKTE / FEATURED PROPERTIES ==================== */}
      <section id="objekte" className="section border-t bg-surface/40">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-4 mb-9">
            <div>
              <div className="text-xs tracking-[3px] text-accent mb-1 font-medium">AKTUELL VERFÜGBAR</div>
              <h2 className="text-6xl font-semibold tracking-[-2.4px]">Ausgewählte Objekte</h2>
            </div>
            <p className="text-muted max-w-xs">Entdecken Sie exklusive Immobilien in bester Lage. Alle Objekte werden von uns persönlich betreut.</p>
          </div>

          {/* Filter - custom segmented control (pure glass + OSS Buttons) */}
          <div className="mb-9 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-surface-secondary p-1">
              {[
                { key: "alle", label: "Alle" },
                { key: "kaufen", label: "Kaufen" },
                { key: "mieten", label: "Mieten" },
                { key: "gewerbe", label: "Gewerbe" },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setFilter(opt.key)}
                  className={`px-6 py-1.5 text-sm font-medium rounded-full transition-all ${
                    filter === opt.key 
                      ? "bg-accent text-accent-foreground shadow-sm" 
                      : "text-foreground/70 hover:text-foreground hover:bg-surface/60"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" onPress={() => alert("In einer vollständigen Website würde hier die vollständige Objektliste / ein Portal erscheinen.")}>
              Alle Objekte ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* ==================== STATS (pure glass + OSS, matching design taste) ==================== */}
      <section className="section container">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[3px] text-accent mb-1">ZAHLEN, DIE ZÄHLEN</div>
          <h2 className="text-5xl tracking-[-1.6px] font-semibold">Ihr Vorteil mit PL Immobilien</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 max-w-5xl mx-auto">
          {statsData.map((stat, i) => (
            <div key={i} className="glass rounded-3xl p-8 text-center border-0">
              <div className="text-7xl font-semibold tabular-nums tracking-[-3.5px] leading-none">
                {stat.value}
                {stat.suffix && <span className="text-5xl tracking-tighter text-muted/80">{stat.suffix}</span>}
              </div>
              <div className="text-muted mt-3 text-xl tracking-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== ÜBER UNS ==================== */}
      <section id="ueber-uns" className="section border-t">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-12 gap-x-10 gap-y-8 items-center">
            <div className="md:col-span-7">
              <div className="uppercase tracking-[3px] text-xs text-accent mb-3">SEIT 2009 IN DER REGION</div>
              <h2 className="text-6xl font-semibold tracking-[-2.2px] leading-none mb-6">Persönlich.<br />Professionell.<br />Mit Herz.</h2>
              <div className="prose prose-neutral text-[15px] max-w-[48ch] text-muted leading-relaxed">
                PL Immobilien steht für eine neue Art der Immobilienvermittlung: 
                hochprofessionell, aber immer menschlich. Wir nehmen uns Zeit – für Sie, für jede Immobilie und für den besten Ausgang.
              </div>
            </div>

            <div className="md:col-span-5 glass p-8 md:p-9 rounded-3xl text-[15px] leading-relaxed border-0">
              Unsere Kunden schätzen die Kombination aus fundiertem Fachwissen, 
              einem exzellenten Netzwerk in der Region und der absoluten Diskretion.
              <div className="h-px w-9 bg-separator my-6" />
              Wir sind kein grosses Maklerhaus. Wir sind Ihr persönlicher Partner für den wichtigsten Vermögenswert – Ihr Zuhause.
              <div className="font-medium mt-4">— Patrick &amp; Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== REFERENZEN ==================== */}
      <section id="referenzen" className="section container border-t">
        <div className="mb-10 text-center">
          <div className="text-xs tracking-[3.2px] text-accent mb-2 font-medium">WAS UNSERE KUNDEN SAGEN</div>
          <h2 className="text-6xl font-semibold tracking-[-2px]">Referenzen</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </section>

      {/* ==================== KONTAKT ==================== */}
      <section id="kontakt" className="section border-t bg-surface/50">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14">
            {/* Contact Info */}
            <div>
              <div className="text-xs tracking-[3px] text-accent mb-2 font-medium">KOMMEN SIE GERNE VORBEI</div>
              <h2 className="font-semibold text-6xl tracking-[-2.2px] mb-6">Lassen Sie uns reden.</h2>

              <div className="space-y-8 text-lg">
                <div className="flex gap-4">
                  <div className="mt-1.5"><MapPin className="text-accent" /></div>
                  <div>
                    Binzstrasse 3<br />8953 Dietikon
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1.5"><Phone className="text-accent" /></div>
                  <div>
                    <a href="tel:+41433225230" className="hover:text-accent transition-colors">+41 43 322 52 30</a><br />
                    <a href="tel:+41763938797" className="hover:text-accent transition-colors">+41 76 393 87 97</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1.5"><Mail className="text-accent" /></div>
                  <a href="mailto:info@pl-immobilien.ch" className="hover:text-accent transition-colors">info@pl-immobilien.ch</a>
                </div>
              </div>

              <div className="mt-10 text-sm text-muted">
                Bürozeiten: Mo–Fr 08:00–12:00 &amp; 13:30–17:00 Uhr<br />Termine nach Vereinbarung
              </div>
            </div>

            {/* Contact Form - clean modern glass form */}
            <div className="glass p-9 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted mb-1.5 tracking-widest">NAME</label>
                    <input
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-[13px] placeholder:text-muted/60 focus:outline-none focus:border-accent/60"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-1.5 tracking-widest">TELEFON</label>
                    <input
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-[13px] placeholder:text-muted/60 focus:outline-none focus:border-accent/60"
                      placeholder="+41 79 123 45 67"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 tracking-widest">E-MAIL</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-[13px] placeholder:text-muted/60 focus:outline-none focus:border-accent/60"
                    placeholder="ihre@email.ch"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-1.5 tracking-widest">IHRE NACHRICHT</label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full min-h-[132px] rounded-3xl border border-white/10 bg-white/5 px-4 py-4 placeholder:text-muted/60 focus:outline-none focus:border-accent/60 resize-y"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth className="mt-3 font-medium h-14">
                  Nachricht senden
                </Button>

                {submitted && (
                  <div className="text-center text-success text-sm font-medium py-1">
                    Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </div>
                )}

                <p className="text-xs text-center text-muted pt-1">Ihre Daten werden vertraulich behandelt.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t py-16 bg-background text-sm">
        <div className="container flex flex-col md:flex-row justify-between gap-y-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Home className="h-4 w-4" />
              </div>
              <span className="font-semibold tracking-tight">PL IMMOBILIEN</span>
            </div>
            <div className="text-muted">Binzstrasse 3, 8953 Dietikon<br />Schweiz</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 text-muted">
            <div>
              <div className="font-medium text-foreground mb-2">Dienstleistungen</div>
              <div className="space-y-1.5 leading-tight">
                Verkauf &amp; Erwerb<br />Verwaltung<br />Finanzierung<br />Ausland
              </div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-2">Unternehmen</div>
              <div className="space-y-1.5 leading-tight">
                Über uns<br />Referenzen<br />Karriere<br />Datenschutz
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-medium text-foreground mb-2">Kontakt</div>
              <a href="tel:+41433225230" className="block hover:text-foreground transition-colors">+41 43 322 52 30</a>
              <a href="mailto:info@pl-immobilien.ch" className="block hover:text-foreground transition-colors">info@pl-immobilien.ch</a>
              <div className="mt-4 text-xs">© {new Date().getFullYear()} PL Immobilien</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
