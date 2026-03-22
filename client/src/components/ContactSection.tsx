/**
 * ContactSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Dark green background, contact info + embedded map
 */

import { useEffect, useRef } from "react";
import { MapPin, Facebook, Clock, Users, Instagram } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#1a5c4a] pattern-overlay" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Find Us
          </p>
          <h2 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit the Masjid
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            We welcome all visitors — Muslims and non-Muslims alike — to come and experience
            our community. Our doors are always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="fade-in-up bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#1C1C1E]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Address
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    1720 Wilson Lee Blvd<br />
                    Statesville, NC 28677
                  </p>
                  <a
                    href="https://maps.google.com/?q=1720+Wilson+Lee+Blvd+Statesville+NC+28677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] text-sm hover:underline mt-2 inline-block"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Prayer Times */}
            <div className="fade-in-up bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-[#1C1C1E]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Open for Prayers
                  </h4>
                  <div className="space-y-1 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    <div className="flex justify-between text-white/80">
                      <span>Fajr</span><span className="text-[#C9A84C]">6:02 AM</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Dhuhr</span><span className="text-[#C9A84C]">12:48 PM</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Asr</span><span className="text-[#C9A84C]">3:56 PM</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Maghrib</span><span className="text-[#C9A84C]">6:23 PM</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Isha</span><span className="text-[#C9A84C]">7:33 PM</span>
                    </div>
                    <div className="flex justify-between text-white/80 font-semibold pt-1 border-t border-white/15">
                      <span>Jumu'ah (Friday)</span><span className="text-[#C9A84C]">1:30 PM</span>
                    </div>
                    <div className="flex justify-between text-white/70 pt-1 border-t border-white/10">
                      <span>Ta'leem (Sunday)</span><span className="text-[#C9A84C]">12:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Ta'leem (Thursday)</span><span className="text-[#C9A84C]">5:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="fade-in-up bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Facebook size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Follow Us on Facebook
                  </h4>
                  <p className="text-white/70 text-sm mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Stay updated with announcements, events, and community news.
                  </p>
                  <a
                    href="https://www.facebook.com/masjidmuminum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] text-sm hover:underline"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    facebook.com/masjidmuminum →
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="fade-in-up bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Follow Us on Instagram
                  </h4>
                  <p className="text-white/70 text-sm mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Photos, reminders, and community highlights from the masjid.
                  </p>
                  <a
                    href="https://www.instagram.com/muminunmasjidstatesville/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A84C] text-sm hover:underline"
                    style={{ fontFamily: "'Source Serif 4', serif" }}
                  >
                    @muminunmasjidstatesville →
                  </a>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="fade-in-up bg-white/10 rounded-xl p-6 border border-white/15 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users size={18} className="text-[#1C1C1E]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Get Involved
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Want to volunteer, teach, or contribute to the masjid? Reach out to us through
                    our Facebook page or visit us in person during prayer times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="fade-in-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A84C]/30">
              <iframe
                title="Al Mu'minun Masjid Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0!2d-80.8790!3d35.7820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1720+Wilson+Lee+Blvd%2C+Statesville%2C+NC+28677!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=1720+Wilson+Lee+Blvd+Statesville+NC+28677"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#1C1C1E] font-bold px-6 py-3 rounded-lg transition-all shadow-md"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
