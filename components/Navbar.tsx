"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Menu, X, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#dienstleistungen", label: "Dienstleistungen" },
  { href: "#objekte", label: "Objekte" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <div className="font-semibold tracking-[-0.02em] text-lg leading-none">PL</div>
            <div className="text-[10px] text-muted -mt-0.5 tracking-[2px] font-mono">IMMOBILIEN</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onPress={() => scrollTo("#kontakt")}
            className="font-medium"
          >
            Verkaufen
          </Button>
          <Button
            variant="primary"
            size="sm"
            onPress={() => scrollTo("#objekte")}
            className="font-medium px-6"
          >
            Objekte ansehen
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          size="sm"
          isIconOnly
          className="md:hidden"
          aria-label="Menü öffnen"
          onPress={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Drawer - glassmorphic, animated (no Pro dependency) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-y-0 right-0 z-[70] w-[82%] max-w-[300px] glass md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex items-center justify-between border-b px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div className="font-semibold">PL Immobilien</div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  isIconOnly
                  onPress={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-col gap-1 px-3 py-6 text-lg">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3.5 rounded-xl hover:bg-surface-secondary active:bg-surface-tertiary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto border-t p-6 flex flex-col gap-3">
                <Button
                  variant="ghost"
                  size="lg"
                  fullWidth
                  onPress={() => scrollTo("#kontakt")}
                >
                  Immobilie verkaufen
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onPress={() => scrollTo("#objekte")}
                >
                  Objekte entdecken
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
