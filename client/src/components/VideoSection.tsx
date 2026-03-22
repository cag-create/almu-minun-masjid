/**
 * VideoSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Featured video section — YouTube channel @statesvillemasjid
 * Most recent video: "Hajj of the Heart - Khutbah for July 26th, 2024" (s6rfHmTCDzA)
 */

import { useRef, useEffect, useState } from "react";
import { Play, Youtube } from "lucide-react";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@statesvillemasjid";

// Featured sermon — update VIDEO_ID to change the featured video
const VIDEO_ID = "XmIv7dotVR4";
const VIDEO_TITLE = "Noah in Islam — A Metaphysical Understanding";
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`;
const THUMB_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

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
    <section id="video" className="py-20 bg-[#FAF7F0]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 fade-in-up">
          <p
            className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            From the Masjid
          </p>
          <h2
            className="text-[#1C1C1E] text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Watch &amp; Learn
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-[#1C1C1E]/65 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Benefit from khutbahs, lectures, and community highlights from
            Al Mu'minun Masjid — 42 videos and growing.
          </p>
        </div>

        {/* Video embed */}
        <div className="fade-in-up">
          {playing ? (
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/20"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`${EMBED_URL}&autoplay=1`}
                title={VIDEO_TITLE}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/20 cursor-pointer group"
              style={{ paddingBottom: "56.25%" }}
              onClick={() => setPlaying(true)}
            >
              {/* YouTube thumbnail */}
              <img
                src={THUMB_URL}
                alt={VIDEO_TITLE}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors" />
              {/* Video title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p
                  className="text-white text-lg font-bold leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {VIDEO_TITLE}
                </p>
                <p className="text-white/60 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Al Mu'minun Masjid · Statesville, NC
                </p>
              </div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* YouTube channel CTA */}
        <div className="fade-in-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p
            className="text-[#1C1C1E]/60 text-sm"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Watch all 42 khutbahs and lectures on our YouTube channel:
          </p>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF0000] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#cc0000] transition-colors shadow-md"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            <Youtube size={16} />
            @statesvillemasjid
          </a>
        </div>
      </div>
    </section>
  );
}
