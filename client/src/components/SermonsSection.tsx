/**
 * SermonsSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Three featured sermon video cards linking to YouTube
 */

import { useRef, useEffect } from "react";
import { Youtube, ExternalLink } from "lucide-react";

const sermons = [
  {
    id: "XmIv7dotVR4",
    title: "Noah in Islam — A Metaphysical Understanding",
    description:
      "A deep exploration of the story of Prophet Nuh (Noah) through the lens of Islamic metaphysics and spiritual wisdom.",
    url: "https://www.youtube.com/watch?v=XmIv7dotVR4",
  },
  {
    id: "K5V_iym3ApU",
    title: "Guidance From Allah",
    description:
      "A khutbah reflecting on the nature of divine guidance and how believers can seek and maintain it in their daily lives.",
    url: "https://www.youtube.com/watch?v=K5V_iym3ApU&t=92s",
  },
  {
    id: "oosdcE6mAlE",
    title: "Characteristics of Those Who Attain Paradise",
    description:
      "Jumu'ah khutbah from November 24, 2023 — examining the qualities and actions of the believers who earn Allah's pleasure.",
    url: "https://www.youtube.com/watch?v=oosdcE6mAlE",
  },
];

export default function SermonsSection() {
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
    <section id="sermons" className="py-20 bg-[#1a5c4a] pattern-overlay" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p
            className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Knowledge &amp; Wisdom
          </p>
          <h2
            className="text-white text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Sermons
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Selected khutbahs and lectures from Al Mu'minun Masjid — rooted in
            the Qur'an and the authentic Sunnah of the Prophet Muhammad ﷺ.
          </p>
        </div>

        {/* Sermon cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((sermon, i) => (
            <a
              key={sermon.id}
              href={sermon.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`fade-in-up group block bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#C9A84C]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={`https://img.youtube.com/vi/${sermon.id}/hqdefault.jpg`}
                  alt={sermon.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                {/* YouTube badge */}
                <div className="absolute top-3 right-3 bg-[#FF0000] text-white rounded-full p-1.5 shadow-lg">
                  <Youtube size={14} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {sermon.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  {sermon.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold"
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  Watch on YouTube
                  <ExternalLink size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Full channel CTA */}
        <div className="fade-in-up mt-12 text-center">
          <a
            href="https://www.youtube.com/@statesvillemasjid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000] text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-[#cc0000] transition-colors shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <Youtube size={18} />
            View All Sermons on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
