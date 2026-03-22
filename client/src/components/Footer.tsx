/**
 * Footer — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Dark charcoal background, gold accents, logo + links + social
 */

import { Facebook, MapPin, Heart, Instagram, Youtube } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/112528410/GOuRkepSjtfPMKed.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Prayer Times", href: "#prayer-times" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const handleClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="Al Mu'minun Masjid Logo"
                className="h-14 w-14 object-contain bg-white rounded-full p-1"
              />
              <div>
                <div className="text-white font-bold text-base leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Al Mu'minun Masjid
                </div>
                <div className="text-[#C9A84C] text-xs leading-tight arabic-text" style={{ fontFamily: "'Scheherazade New', serif", fontSize: "1rem" }}>
                  المؤمنون
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Serving the Statesville community through the teachings of the Qur'an and the
              Messenger Muhammad ﷺ. A place of worship, learning, and brotherhood.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/masjidmuminum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2]/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/muminunmasjidstatesville/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@statesvillemasjid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#FF0000] rounded-full flex items-center justify-center hover:bg-[#cc0000] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-white/65 hover:text-[#C9A84C] text-sm transition-colors"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    1720 Wilson Lee Blvd<br />
                    Statesville, NC 28677
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C9A84C] text-base flex-shrink-0 mt-0.5">🕌</span>
                <div>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Open daily for all 5 prayers<br />
                    Jumu'ah every Friday at 1:30 PM<br />
                    Ta'leem: Sun 12:00 PM &amp; Thu 5:30 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Facebook size={16} className="text-[#1877F2] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.facebook.com/masjidmuminum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  facebook.com/masjidmuminum
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Instagram size={16} className="text-[#E1306C] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/muminunmasjidstatesville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  @muminunmasjidstatesville
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Youtube size={16} className="text-[#FF0000] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.youtube.com/@statesvillemasjid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  @statesvillemasjid
                </a>
              </div>
            </div>

            {/* Donate CTA */}
            <div className="mt-6">
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); handleClick("#donate"); }}
                className="btn-donate inline-block text-[#1C1C1E] font-bold text-sm px-6 py-2.5 rounded transition-all"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric divider */}
      <div className="geometric-divider" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p style={{ fontFamily: "'Source Serif 4', serif" }}>
            © {new Date().getFullYear()} Al Mu'minun Masjid — Statesville, NC. All rights reserved.
          </p>
          <p className="flex items-center gap-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Made with <Heart size={12} className="text-[#C9A84C]" /> for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}
