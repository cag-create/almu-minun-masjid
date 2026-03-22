/**
 * PrayerTimesSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Live prayer times fetched from AlAdhan API (ISNA / Muslim Pro method)
 * Interactive day selector — click any day to see its schedule.
 * Iqamah: 10 minutes after Adhan.
 * Iftar during Ramadan: Friday, Saturday, Sunday.
 */

import { useEffect, useRef, useState } from "react";
import { usePrayerTimes, to12h, type DayPrayerTimes } from "@/hooks/usePrayerTimes";

const prayers = [
  { key: "fajr",    iqamahKey: "fajrIqamah",    label: "Fajr",    arabic: "الفجر",  icon: "🌙" },
  { key: "dhuhr",   iqamahKey: "dhuhrIqamah",   label: "Dhuhr",   arabic: "الظهر",  icon: "☀️" },
  { key: "asr",     iqamahKey: "asrIqamah",     label: "Asr",     arabic: "العصر",  icon: "🌤️" },
  { key: "maghrib", iqamahKey: "maghribIqamah", label: "Maghrib", arabic: "المغرب", icon: "🌇" },
  { key: "isha",    iqamahKey: "ishaIqamah",    label: "Isha",    arabic: "العشاء", icon: "🌃" },
];

const jumuahTimes = { khutbah: "1:30 PM", salah: "2:00 PM" };
const taleemTimes = [
  { day: "Sunday — Ta'leem",      time: "12:00 PM", icon: "☀️" },
  { day: "Sunday — Qur'an Class", time: "12:30 PM", icon: "📖" },
  { day: "Thursday — Ta'leem",   time: "5:30 PM",  icon: "🌙" },
];

export default function PrayerTimesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedDay, setSelectedDay] = useState(0); // 0 = today
  const { loading, error, week } = usePrayerTimes();

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

  const dayData: DayPrayerTimes | undefined = week[selectedDay];
  const isFriday = dayData ? new Date(dayData.date + "T12:00:00").getDay() === 5 : false;

  return (
    <section id="prayer-times" className="py-20 bg-[#FAF7F0]" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 fade-in-up">
          <p className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Salah Schedule
          </p>
          <h2 className="text-[#1C1C1E] text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Prayer Times
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p className="text-[#1C1C1E]/65 max-w-xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Live daily prayer schedule for Statesville, NC — calculated using the ISNA method
            (same as the Muslim Pro app). Select any day to view its times.
          </p>
        </div>

        {/* Day selector tabs */}
        <div className="fade-in-up mb-8">
          {loading ? (
            <div className="flex justify-center gap-2 flex-wrap">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-16 h-14 rounded-lg bg-[#1a5c4a]/10 animate-pulse" />
              ))}
            </div>
          ) : error ? null : (
            <div className="flex gap-2 justify-center flex-wrap">
              {week.map((d, i) => (
                <button
                  key={d.date}
                  onClick={() => setSelectedDay(i)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                    selectedDay === i
                      ? "bg-[#1a5c4a] text-white border-[#1a5c4a] shadow-md"
                      : "bg-white text-[#1a5c4a] border-[#1a5c4a]/30 hover:border-[#1a5c4a] hover:bg-[#1a5c4a]/5"
                  }`}
                  style={{ fontFamily: "'Source Serif 4', serif" }}
                >
                  <span className="block text-xs opacity-70">{d.dateLabel}</span>
                  <span>{d.dayLabel}</span>
                  {i === 0 && (
                    <span className="block text-[10px] mt-0.5 font-bold opacity-70">Today</span>
                  )}
                  {d.hasIftar && (
                    <span className="block text-[10px] mt-0.5 text-[#C9A84C] font-bold">
                      🌙 Iftar
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Prayer times table */}
        <div className="fade-in-up bg-white rounded-2xl shadow-lg border border-[#1a5c4a]/10 overflow-hidden mb-6">
          {/* Table header */}
          <div className="bg-[#1a5c4a] px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {dayData ? `${dayData.dayLabel}, ${dayData.dateLabel}` : "Loading…"}
              </h3>
              <p className="text-white/60 text-xs mt-0.5"
                style={{ fontFamily: "'Source Serif 4', serif" }}>
                {dayData?.hijriDate ?? ""}
                {" · "}Statesville, NC · ISNA · Iqamah +10 min
              </p>
            </div>
            {dayData?.hasIftar && (
              <div className="bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-lg px-3 py-2 text-center flex-shrink-0">
                <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide">
                  🌙 Iftar Tonight
                </p>
                <p className="text-white/80 text-xs mt-0.5">
                  {to12h(dayData.maghrib)}
                </p>
              </div>
            )}
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-4 px-6 py-2 bg-[#1a5c4a]/8 text-xs font-bold text-[#1a5c4a] uppercase tracking-wider border-b border-[#1a5c4a]/10">
            <span>Prayer</span>
            <span className="text-center">Arabic</span>
            <span className="text-center">Adhan</span>
            <span className="text-right">Iqamah</span>
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="divide-y divide-[#1a5c4a]/6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={`grid grid-cols-4 px-6 py-4 gap-4 ${i % 2 === 0 ? "bg-[#FAF7F0]/60" : "bg-white"}`}>
                  <div className="h-4 bg-[#1a5c4a]/10 rounded animate-pulse" />
                  <div className="h-4 bg-[#1a5c4a]/10 rounded animate-pulse mx-auto w-12" />
                  <div className="h-4 bg-[#1a5c4a]/10 rounded animate-pulse mx-auto w-16" />
                  <div className="h-4 bg-[#1a5c4a]/10 rounded animate-pulse ml-auto w-16" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="px-6 py-8 text-center">
              <p className="text-red-500 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Unable to load prayer times. Please check your connection and refresh.
              </p>
            </div>
          )}

          {/* Prayer rows */}
          {!loading && !error && dayData && prayers.map((p, i) => {
            const adhanRaw = (dayData as unknown as Record<string, string>)[p.key];
            const adhan = to12h(adhanRaw);
            const iqamahRaw = p.iqamahKey ? (dayData as unknown as Record<string, string>)[p.iqamahKey] : null;
            const iqamah = iqamahRaw ? to12h(iqamahRaw) : "—";
            return (
              <div
                key={p.key}
                className={`grid grid-cols-4 px-6 py-4 items-center border-b border-[#1a5c4a]/6 ${
                  i % 2 === 0 ? "bg-[#FAF7F0]/60" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span>
                  <span className="text-[#1C1C1E] font-semibold text-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {p.label}
                  </span>
                </div>
                <span className="text-center text-[#1a5c4a]/70"
                  style={{ fontFamily: "'Scheherazade New', serif", fontSize: "1.1rem" }}>
                  {p.arabic}
                </span>
                <span className="text-center text-[#1C1C1E]/80 text-sm font-medium"
                  style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {adhan}
                </span>
                <span className={`text-right text-sm font-bold ${!p.iqamahKey ? "text-[#1C1C1E]/30" : "text-[#1a5c4a]"}`}
                  style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {iqamah}
                </span>
              </div>
            );
          })}
        </div>

        {/* Iftar Ramadan notice */}
        <div className="fade-in-up mb-6 bg-[#1a5c4a]/8 border border-[#C9A84C]/40 rounded-xl px-6 py-4 flex items-start gap-4">
          <span className="text-3xl mt-0.5">🌙</span>
          <div>
            <h4 className="text-[#1a5c4a] font-bold text-base mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Iftar During Ramadan — Friday, Saturday &amp; Sunday
            </h4>
            <p className="text-[#1C1C1E]/70 text-sm leading-relaxed"
              style={{ fontFamily: "'Source Serif 4', serif" }}>
              Al Mu'minun Masjid hosts community Iftar every <strong>Friday, Saturday, and Sunday</strong> during
              the blessed month of Ramadan. Iftar begins at Maghrib time. Food is provided by the masjid.
              All are welcome — brothers, sisters, and families.
            </p>
          </div>
        </div>

        {/* Jumu'ah + Ta'leem cards */}
        <div className="fade-in-up grid sm:grid-cols-2 gap-4">
          {/* Jumu'ah */}
          <div className={`rounded-xl border overflow-hidden ${isFriday ? "border-[#C9A84C] shadow-lg" : "border-[#1a5c4a]/15"}`}>
            <div className="bg-[#1a5c4a] px-5 py-3 flex items-center gap-2">
              <span className="text-[#C9A84C] text-lg">🕌</span>
              <h4 className="text-white font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Jumu'ah — Every Friday
              </h4>
              {isFriday && (
                <span className="ml-auto text-[#C9A84C] text-xs font-bold uppercase tracking-wide">Today</span>
              )}
            </div>
            <div className="bg-white px-5 py-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#1C1C1E]/70" style={{ fontFamily: "'Source Serif 4', serif" }}>Khutbah begins</span>
                <span className="text-[#1a5c4a] font-bold" style={{ fontFamily: "'Source Serif 4', serif" }}>{jumuahTimes.khutbah}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#1C1C1E]/70" style={{ fontFamily: "'Source Serif 4', serif" }}>Salah</span>
                <span className="text-[#1a5c4a] font-bold" style={{ fontFamily: "'Source Serif 4', serif" }}>{jumuahTimes.salah}</span>
              </div>
            </div>
          </div>

          {/* Ta'leem */}
          <div className="rounded-xl border border-[#1a5c4a]/15 overflow-hidden">
            <div className="bg-[#1a5c4a] px-5 py-3 flex items-center gap-2">
              <span className="text-[#C9A84C] text-lg">📖</span>
              <h4 className="text-white font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Ta'leem — Study Circle
              </h4>
            </div>
            <div className="bg-white px-5 py-4 space-y-2">
              {taleemTimes.map((t) => (
                <div key={t.day} className="flex justify-between text-sm">
                  <span className="text-[#1C1C1E]/70 flex items-center gap-1.5" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    <span>{t.icon}</span> Every {t.day}
                  </span>
                  <span className="text-[#1a5c4a] font-bold" style={{ fontFamily: "'Source Serif 4', serif" }}>{t.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="fade-in-up text-center text-[#1C1C1E]/40 text-xs mt-6"
          style={{ fontFamily: "'Source Serif 4', serif" }}>
          Prayer times are calculated live using the ISNA method for Statesville, NC (35.78°N, 80.88°W).
          Times may vary slightly — please verify locally.
        </p>
      </div>
    </section>
  );
}
