/**
 * ResourcesSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Links to The Noble Qur'an (Muhsin Khan), Sahih al-Bukhari, and community feeding resources.
 */

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const resources = [
  {
    category: "The Noble Qur'an",
    icon: "📖",
    color: "border-[#1a5c4a]",
    headerBg: "bg-[#1a5c4a]",
    desc: "The Holy Qur'an translated by Dr. Muhammad Muhsin Khan — the most widely referenced English translation, used by scholars worldwide.",
    links: [
      {
        label: "The Noble Qur'an (Muhsin Khan) — Kalamullah.com",
        url: "https://www.kalamullah.com/quran.html",
        note: "Read the Noble Qur'an with Muhsin Khan translation",
      },
      {
        label: "Qur'an Studies & Tafsir — Kalamullah.com",
        url: "https://kalamullah.com/manhaj.html",
        note: "In-depth Qur'anic studies and commentary",
      },
      {
        label: "Islamic Books & Audio — Kalamullah.com",
        url: "https://www.kalamullah.com",
        note: "Free Islamic books, lectures, and resources",
      },
    ],
  },
  {
    category: "Sahih al-Bukhari",
    icon: "📜",
    color: "border-[#C9A84C]",
    headerBg: "bg-[#C9A84C]",
    headerText: "text-[#1C1C1E]",
    desc: "The most authentic collection of prophetic traditions (hadith), compiled by Imam Muhammad ibn Isma'il al-Bukhari. A foundational text of Islamic scholarship.",
    links: [
      {
        label: "Sahih al-Bukhari — Kalamullah.com",
        url: "https://www.kalamullah.com/bukhari.html",
        note: "Complete Sahih al-Bukhari on Kalamullah.com",
      },
      {
        label: "Prophetic Traditions Library — Kalamullah.com",
        url: "https://www.kalamullah.com/hadith.html",
        note: "Full hadith collections and prophetic traditions",
      },
      {
        label: "Islamic Books & Audio — Kalamullah.com",
        url: "https://www.kalamullah.com",
        note: "Free Islamic books, lectures, and resources",
      },
    ],
  },
  {
    category: "Feed the Community",
    icon: "🍽️",
    color: "border-[#1a5c4a]",
    headerBg: "bg-[#1a5c4a]",
    desc: "Al Mu'minun Masjid provides meals to the Statesville community every quarter and assists the orphans of Iredell County. Partner with us or find local resources below.",
    links: [
      {
        label: "Feeding America — Find Local Food Banks",
        url: "https://www.feedingamerica.org/find-your-local-foodbank",
        note: "Locate food assistance near Statesville, NC",
      },
      {
        label: "Second Harvest Food Bank of Metrolina",
        url: "https://www.secondharvestmetrolina.org/",
        note: "Serving the greater Charlotte/Statesville region",
      },
      {
        label: "Iredell County Social Services",
        url: "https://www.iredellcountync.gov/departments/social-services/",
        note: "Local assistance programs for Iredell County families",
      },
    ],
  },
];

export default function ResourcesSection() {
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
    <section id="resources" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Knowledge & Outreach
          </p>
          <h2 className="text-[#1C1C1E] text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Islamic Resources
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p className="text-[#1C1C1E]/70 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Access the foundational texts of Islam and connect with community resources. We follow
            the Qur'an and the authentic Sunnah of the Prophet Muhammad ﷺ.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <div
              key={resource.category}
              className={`fade-in-up bg-[#FAF7F0] rounded-2xl border-t-4 ${resource.color} shadow-sm hover:shadow-md transition-all overflow-hidden`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header */}
              <div className={`${resource.headerBg} px-6 py-4`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{resource.icon}</span>
                  <h3
                    className={`font-bold text-xl ${resource.headerText ?? "text-white"}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {resource.category}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <p className="text-[#1C1C1E]/65 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {resource.desc}
                </p>
                <div className="space-y-3">
                  {resource.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group p-3 rounded-lg bg-white border border-[#C9A84C]/15 hover:border-[#1a5c4a]/40 hover:bg-[#1a5c4a]/5 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-[#1a5c4a] flex-shrink-0 mt-0.5 group-hover:text-[#C9A84C] transition-colors" />
                      <div>
                        <p className="text-[#1C1C1E] font-semibold text-sm group-hover:text-[#1a5c4a] transition-colors"
                          style={{ fontFamily: "'Playfair Display', serif" }}>
                          {link.label}
                        </p>
                        <p className="text-[#1C1C1E]/50 text-xs mt-0.5"
                          style={{ fontFamily: "'Source Serif 4', serif" }}>
                          {link.note}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="fade-in-up mt-10 text-center bg-[#1a5c4a]/8 rounded-xl p-6 border border-[#1a5c4a]/20 max-w-3xl mx-auto">
          <p className="text-[#1a5c4a] font-bold mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            "Whoever takes a path upon which to obtain knowledge, Allah makes the path easy for him."
          </p>
          <p className="text-[#1C1C1E]/60 text-sm"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            — Rasulullah Muhammad (saws) ﷽ (Sahih Muslim)
          </p>
        </div>
      </div>
    </section>
  );
}
