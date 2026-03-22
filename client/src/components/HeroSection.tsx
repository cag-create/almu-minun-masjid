/**
 * HeroSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Full-bleed hero image with dark overlay, centered welcome text,
 * and a live prayer times card overlay fetched from AlAdhan API (ISNA / Muslim Pro method).
 */

import { useEffect, useState } from "react";
import { usePrayerTimes, to12h } from "@/hooks/usePrayerTimes";

const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/112528410/uaxPCHJkYMYCDudg.jpg";

const prayerIcons: Record<string, string> = {
  Fajr: "🌙",
  Dhuhr: "☀️",
  Asr: "🌤️",
  Maghrib: "🌇",
  Isha: "🌃",
};

export default function HeroSection() {
  const [today, setToday] = useState("");
  const { loading, error, week } = usePrayerTimes();

  useEffect(() => {
    const now = new Date();
    setToday(now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, []);

  // Today's data is always index 0
  const todayData = week[0];

  const prayerRows = todayData
    ? [
        { name: "Fajr",    time: to12h(todayData.fajr),    iqamah: to12h(todayData.fajrIqamah) },
        { name: "Dhuhr",   time: to12h(todayData.dhuhr),   iqamah: to12h(todayData.dhuhrIqamah) },
        { name: "Asr",     time: to12h(todayData.asr),     iqamah: to12h(todayData.asrIqamah) },
        { name: "Maghrib", time: to12h(todayData.maghrib), iqamah: to12h(todayData.maghribIqamah) },
        { name: "Isha",    time: to12h(todayData.isha),    iqamah: to12h(todayData.ishaIqamah) },
      ]
    : [];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_URL})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/85 via-[#1C1C1E]/60 to-[#1C1C1E]/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: Welcome text */}
          <div className="flex-1 max-w-2xl">
            <p
              className="text-[#C9A84C] text-3xl mb-4 arabic-text"
              style={{ fontFamily: "'Scheherazade New', serif", fontSize: "2rem" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-3" style={{ fontFamily: "'Source Serif 4', serif" }}>
              In the Name of Allah, the Most Gracious, the Most Merciful
            </p>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to<br />
              <span className="text-[#C9A84C]">Al Mu'minun</span><br />
              Masjid
            </h1>
            <div className="geometric-divider w-48 my-5" />
            <p
              className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Serving the Statesville community through the teachings of the Qur'an
              and the Messenger Muhammad ﷺ. A place of worship, learning, and brotherhood
              for all believers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
                className="bg-[#1a5c4a] hover:bg-[#1a5c4a]/80 text-white font-semibold px-7 py-3 rounded transition-all border border-[#1a5c4a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Learn More
              </a>
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-donate text-[#1C1C1E] font-bold px-7 py-3 rounded transition-all"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Support the Masjid
              </a>
            </div>
          </div>

          {/* Right: Prayer Times Card */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="bg-[#1a5c4a]/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-[#C9A84C]/30">
              {/* Card header */}
              <div className="bg-[#1a5c4a] px-5 py-4 border-b border-[#C9A84C]/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#C9A84C] text-lg">🕌</span>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Prayer Timings
                  </h3>
                </div>
                <p className="text-white/70 text-xs" style={{ fontFamily: "'Source Serif 4', serif" }}>{today}</p>
                {todayData && (
                  <p className="text-[#C9A84C] text-xs mt-0.5" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    {todayData.hijriDate}
                  </p>
                )}
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-3 px-5 py-2 bg-[#1C1C1E]/40 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                <span>Prayer</span>
                <span className="text-center">Begins</span>
                <span className="text-right">Iqamah</span>
              </div>

              {/* Loading / error / data */}
              {loading && (
                <div className="px-5 py-6 text-center">
                  <div className="inline-block w-5 h-5 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin mb-2" />
                  <p className="text-white/60 text-xs" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Loading prayer times…
                  </p>
                </div>
              )}
              {error && (
                <div className="px-5 py-4 text-center">
                  <p className="text-red-300 text-xs" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    Could not load times. Please refresh.
                  </p>
                </div>
              )}
              {!loading && !error && prayerRows.map((prayer, i) => (
                <div
                  key={prayer.name}
                  className={`grid grid-cols-3 px-5 py-3 items-center text-sm border-b border-white/5 ${
                    i % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{prayerIcons[prayer.name]}</span>
                    <span className="text-white font-medium" style={{ fontFamily: "'Source Serif 4', serif" }}>{prayer.name}</span>
                  </div>
                  <span className="text-white/80 text-center" style={{ fontFamily: "'Source Serif 4', serif" }}>{prayer.time}</span>
                  <span className="text-[#C9A84C] font-semibold text-right" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    {prayer.iqamah ?? "—"}
                  </span>
                </div>
              ))}

              {/* Jumuah */}
              <div className="bg-[#C9A84C]/15 border-t border-[#C9A84C]/30 px-5 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A84C]">🕌</span>
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Jumu'ah (Friday)</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[#C9A84C] font-semibold text-xs">Khutbah 1:30 PM</p>
                    <p className="text-[#C9A84C] font-semibold text-xs">Salah 2:00 PM</p>
                  </div>
                </div>
              </div>
              {/* Ta'leem & Qur'an */}
              <div className="bg-white/5 border-t border-white/10 px-5 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A84C]">📖</span>
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Ta'leem (Sun)</span>
                  </div>
                  <span className="text-[#C9A84C] font-semibold text-sm">12:00 PM</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A84C]">📖</span>
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Qur'an Class (Sun)</span>
                  </div>
                  <span className="text-[#C9A84C] font-semibold text-sm">12:30 PM</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C9A84C]">📖</span>
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Ta'leem (Thu)</span>
                  </div>
                  <span className="text-[#C9A84C] font-semibold text-sm">5:30 PM</span>
                </div>
              </div>

              {/* Iftar notice if today is Fri/Sat/Sun */}
              {todayData?.hasIftar && (
                <div className="bg-[#C9A84C]/10 border-t border-[#C9A84C]/30 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span>🌙</span>
                    <span className="text-[#C9A84C] font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Iftar Tonight at {to12h(todayData.maghrib)}
                    </span>
                  </div>
                </div>
              )}

              <p className="text-white/40 text-xs text-center py-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Live times · ISNA method · Statesville, NC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Source Serif 4', serif" }}>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
