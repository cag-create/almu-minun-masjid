/**
 * Navbar — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Forest green (#1a5c4a) nav, gold CTA, cream top bar
 * Sticky header with top info bar + main navigation
 */

import { useState, useEffect } from "react";
import { Menu, X, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/112528410/GOuRkepSjtfPMKed.png";

const MAPS_URL = "https://maps.google.com/?q=1720+Wilson+Lee+Blvd+Statesville+NC+28677";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Prayer Times", href: "#prayer-times" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Video", href: "#video" },
  { label: "Sermons", href: "#sermons" },
  { label: "Resources", href: "#resources" },
  { label: "Forms", href: "/forms", external: false, route: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#1C1C1E] text-[#FAF7F0] text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://maps.google.com/?q=1720+Wilson+Lee+Blvd+Statesville+NC+28677"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
            >
              <MapPin size={13} />
              <span>1720 Wilson Lee Blvd, Statesville, NC 28677</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/masjidmuminum"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/muminunmasjidstatesville/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@statesvillemasjid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={14} />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#1a5c4a]/98 shadow-lg backdrop-blur-sm"
            : "bg-[#1a5c4a]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo — click opens Google Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            title="Get directions to Al Mu'minun Masjid"
          >
            <img
              src={LOGO_URL}
              alt="Al Mu'minun Masjid Logo"
              className="h-12 w-12 object-contain bg-white rounded-full p-1"
            />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Al Mu'minun Masjid
              </div>
              <div className="text-[#C9A84C] text-xs leading-tight arabic-text" style={{ fontFamily: "'Scheherazade New', serif", fontSize: "1rem" }}>
                المؤمنون
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              (link as any).route ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium relative group transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium relative group transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              )
            )}
          </div>

          {/* Donate CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}
              className="btn-donate text-[#1C1C1E] font-bold text-sm px-5 py-2.5 rounded transition-all"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Donate Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a5c4a] border-t border-white/10 px-4 pb-4">
            {navLinks.map((link) =>
              (link as any).route ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/90 hover:text-[#C9A84C] py-3 text-sm font-medium border-b border-white/10 transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block text-white/90 hover:text-[#C9A84C] py-3 text-sm font-medium border-b border-white/10 transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}
              className="btn-donate block text-center text-[#1C1C1E] font-bold text-sm px-5 py-3 rounded mt-4 transition-all"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Donate Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
