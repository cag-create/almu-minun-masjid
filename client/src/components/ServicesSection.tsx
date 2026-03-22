/**
 * ServicesSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Dark green background with gold accents, card grid layout
 */

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🕌",
    title: "Five Daily Prayers",
    desc: "Join us for all five daily prayers in congregation. Iqamah is 10 minutes after Adhan. A door code is required to enter — DM us on Instagram @muminunmasjidstatesville to receive the code.",
  },
  {
    icon: "📿",
    title: "Jumu'ah Prayer",
    desc: "Every Friday. Khutbah begins at 1:30 PM, Salah at 2:00 PM. All brothers and sisters are welcome.",
  },
  {
    icon: "📖",
    title: "Qur'an Classes",
    desc: "Qur'an recitation and study every Sunday at 12:30 PM. All ages and levels welcome.",
  },
  {
    icon: "🎓",
    title: "Islamic Education",
    desc: "Weekly Ta'leem covering Qur'an, hadith, aqeedah, and fiqh. Sundays 12:00 PM & Thursdays 5:30 PM.",
  },
  {
    icon: "💍",
    title: "Nikah Services",
    desc: "Islamic marriage ceremonies performed in accordance with the Sunnah. Contact Imam Tamir Mutakabir at 704-564-7040 to arrange.",
  },
  {
    icon: "🤲",
    title: "Janazah Services",
    desc: "Funeral prayers and assistance with Islamic burial arrangements for our community members.",
  },
  {
    icon: "🌙",
    title: "Ramadan Programs",
    desc: "Community Iftar every Friday, Saturday, and Sunday throughout Ramadan. Food is provided by the masjid. Tarawih prayers and Laylatul Qadr programs also held.",
  },
  {
    icon: "🍽️",
    title: "Community Services",
    desc: "Al Mu'minun Masjid provides meals to the Statesville community every quarter and assists the orphans of Iredell County. We serve all people regardless of faith.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="services" className="py-20 bg-[#1a5c4a] pattern-overlay" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
            What We Offer
          </p>
          <h2 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Al Mu'minun Masjid serves the spiritual, educational, and social needs of the Muslim community
            and all people of Statesville.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="fade-in-up bg-white/8 hover:bg-white/15 border border-white/10 hover:border-[#C9A84C]/40 rounded-xl p-6 transition-all group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h4
                className="text-white font-bold text-base mb-2 group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h4>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
