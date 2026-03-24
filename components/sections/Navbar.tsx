"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/sme-community", label: "SME Community" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => scrollY.on("change", (value) => setScrolled(value > 20)), [scrollY]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.04)" : "0 0 0 rgba(0,0,0,0)",
          borderBottomColor: scrolled ? "rgba(232,232,232,1)" : "rgba(232,232,232,0)"
        }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bricolage text-xl font-bold text-ink">
            caladium
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-light">
              <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-accent" />
            </span>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="#" className="text-sm font-medium text-muted transition-colors hover:text-ink">
              Log in
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="sm">
                Book a session →
              </Button>
            </Link>
          </div>
          <button type="button" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink/35 lg:hidden" onClick={() => setOpen(false)}>
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 26 }} className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-white p-6" onClick={(event) => event.stopPropagation()}>
              <div className="mb-10 flex items-center justify-between">
                <span className="font-bricolage text-xl font-bold">caladium</span>
                <button type="button" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-5">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className={cn("text-lg font-medium text-ink")} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-sm font-medium text-muted">
                  Log in
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    Book a session →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
