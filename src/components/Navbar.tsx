"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Benefícios", href: "/#benefits" },
    { label: "Comunidade", href: "/#community" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo - only visible when scrolled */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://i.postimg.cc/d1MZxJZ7/logo-arraia.png"
              alt="Arraias Runners"
              width={70}
              height={28}
              className={`transition-all duration-300 ${scrolled ? "opacity-80 hover:opacity-100" : "opacity-0"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-brand-gray hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sobre"
              className="flex items-center gap-2 bg-brand-neon/10 border border-brand-neon/30 text-brand-neon px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-neon/20 hover:border-brand-neon/50 transition-all"
            >
              <Info className="w-4 h-4" />
              Sobre Nós
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="md:hidden p-2 text-white hover:text-brand-neon transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-brand-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-brand-neon transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/sobre"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 bg-brand-neon text-brand-black px-8 py-3 rounded-full text-lg font-bold hover:bg-brand-neon-light transition-colors"
              >
                <Info className="w-5 h-5" />
                Sobre Nós
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
