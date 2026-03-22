/**
 * AboutSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Asymmetric layout: text left, decorative panel right
 */

import { useEffect, useRef } from "react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/112528410/pBTaRiPjPZwovjdm.png";

const values = [
  {
    icon: "📖",
    title: "Qur'anic Foundation",
    desc: "Our community is rooted in the Book of Allah, guiding every aspect of our worship and daily life.",
  },
  {
    icon: "☪️",
    title: "Prophetic Tradition",
    desc: "We follow the authentic Sunnah of the Prophet Muhammad ﷺ as preserved by the scholars of Islam.",
  },
  {
    icon: "🤝",
    title: "Community Service",
    desc: "Serving the Statesville area with outreach, education, and support for all members of our community.",
  },
  {
    icon: "🏫",
    title: "Islamic Education",
    desc: "Providing classes, lectures, and programs for youth and adults to deepen their knowledge of the deen.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="about" className="py-20 bg-[#FAF7F0]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Who We Are
          </p>
          <h2 className="text-[#1C1C1E] text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Al Mu'minun Masjid
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-[#1C1C1E]/70 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Al Mu'minun Masjid is a community mosque in Statesville, North Carolina, dedicated to
            serving the local Muslim community and the broader Statesville area through worship,
            education, and compassionate service.
          </p>
        </div>

        {/* Main content: two columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: text */}
          <div className="fade-in-up">
            <h3 className="text-[#1a5c4a] text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Mission
            </h3>
            <p className="text-[#1C1C1E]/75 text-base leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Al Mu'minun Masjid was established to provide a spiritual home for Muslims in the
              Statesville area. We are committed to following the authentic teachings of the
              Qur'an and the Sunnah of the Prophet Muhammad ﷺ, as understood by the righteous
              predecessors of this Ummah.
            </p>
            <p className="text-[#1C1C1E]/75 text-base leading-relaxed mb-4" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Our masjid serves as a center for the five daily prayers, Jumu'ah, Islamic education,
              and community support. We welcome all Muslims and those seeking to learn about Islam
              to join our growing community.
            </p>
            <p className="text-[#1C1C1E]/75 text-base leading-relaxed mb-6" style={{ fontFamily: "'Source Serif 4', serif" }}>
              We believe that a strong, unified community built on the foundations of the Qur'an
              and the Prophetic tradition is the key to success in this life and the Hereafter.
            </p>

            {/* Quranic verse */}
            <div className="bg-[#1a5c4a]/8 border-l-4 border-[#C9A84C] rounded-r-lg p-5">
              <p
                className="text-[#1a5c4a] text-xl text-right arabic-text mb-2"
                style={{ fontFamily: "'Scheherazade New', serif", fontSize: "1.5rem" }}
              >
                قَدْ أَفْلَحَ الْمُؤْمِنُونَ
              </p>
              <p className="text-[#1C1C1E]/80 text-sm italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
                "Certainly will the believers have succeeded." — Surah Al-Mu'minun (23:1)
              </p>
            </div>
          </div>

          {/* Right: logo + decorative panel */}
          <div className="fade-in-up flex flex-col items-center justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[#1a5c4a]/8 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-2xl transform -rotate-2" />
              <div className="relative bg-white rounded-2xl p-10 shadow-xl border border-[#C9A84C]/20">
                <img
                  src={LOGO_URL}
                  alt="Al Mu'minun Masjid Logo"
                  className="w-64 h-64 object-contain mx-auto"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p
                className="text-[#1a5c4a] text-2xl arabic-text"
                style={{ fontFamily: "'Scheherazade New', serif", fontSize: "2rem" }}
              >
                المؤمنون
              </p>
              <p className="text-[#1C1C1E]/60 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Al Mu'minun — "The Believers"
              </p>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="fade-in-up bg-white rounded-xl p-6 shadow-sm border border-[#C9A84C]/15 hover:shadow-md hover:border-[#C9A84C]/40 transition-all group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4
                className="text-[#1a5c4a] font-bold text-base mb-2 group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {v.title}
              </h4>
              <p className="text-[#1C1C1E]/65 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
