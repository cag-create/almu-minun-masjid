/**
 * usePrayerTimes — Al Mu'minun Masjid
 * Fetches live prayer times from the AlAdhan API for Statesville, NC
 * using ISNA calculation method (method=2) — same as Muslim Pro app.
 *
 * Coordinates: 35.7820° N, 80.8790° W
 * Timezone: America/New_York
 *
 * Returns prayer times for today + the next 6 days (full week).
 * Iqamah = Adhan + 10 minutes.
 */

import { useEffect, useState } from "react";

export interface DayPrayerTimes {
  date: string;       // "YYYY-MM-DD"
  dayLabel: string;   // "Sun", "Mon", etc.
  dateLabel: string;  // "Mar 7"
  fajr: string;       // "HH:MM" 24h
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  /** Iqamah = adhan + 10 min */
  fajrIqamah: string;
  dhuhrIqamah: string;
  asrIqamah: string;
  maghribIqamah: string;
  ishaIqamah: string;
  /** true if this day has community Iftar (Fri/Sat/Sun) */
  hasIftar: boolean;
  /** Hijri date string */
  hijriDate: string;
}

export interface PrayerTimesState {
  loading: boolean;
  error: string | null;
  week: DayPrayerTimes[];
  todayIndex: number; // index in `week` that corresponds to today
}

const LAT = 35.782;
const LNG = -80.879;
const METHOD = 2; // ISNA — same as Muslim Pro default for North America

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/** Format a JS Date as "YYYY-MM-DD" */
function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Format a JS Date as "Mar 7" */
function formatDateLabel(d: Date): string {
  return `${MONTH_LABELS[d.getMonth()]} ${d.getDate()}`;
}

/** Add minutes to a "HH:MM" string, returns "HH:MM" */
function addMinutes(t: string, mins: number): string {
  const [hStr, mStr] = t.split(":");
  let h = parseInt(hStr, 10);
  let m = parseInt(mStr, 10) + mins;
  if (m >= 60) { h += 1; m -= 60; }
  if (h >= 24) h -= 24;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Fetch one day's prayer times from AlAdhan */
async function fetchDay(dateStr: string): Promise<DayPrayerTimes> {
  const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${LAT}&longitude=${LNG}&method=${METHOD}&timezonestring=America%2FNew_York`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`AlAdhan API error: ${res.status}`);
  const json = await res.json();
  const t = json.data.timings;
  const hijri = json.data.date.hijri;

  // Strip seconds if present (API sometimes returns "HH:MM (EST)")
  const clean = (s: string) => s.replace(/\s*\(.*\)/, "").trim().slice(0, 5);

  const fajr = clean(t.Fajr);
  const dhuhr = clean(t.Dhuhr);
  const asr = clean(t.Asr);
  const maghrib = clean(t.Maghrib);
  const isha = clean(t.Isha);

  const d = new Date(dateStr + "T12:00:00");
  const dayOfWeek = d.getDay(); // 0=Sun

  return {
    date: dateStr,
    dayLabel: DAY_LABELS[dayOfWeek],
    dateLabel: formatDateLabel(d),
    fajr,
    sunrise: clean(t.Sunrise),
    dhuhr,
    asr,
    maghrib,
    isha,
    fajrIqamah: addMinutes(fajr, 10),
    dhuhrIqamah: addMinutes(dhuhr, 10),
    asrIqamah: addMinutes(asr, 10),
    maghribIqamah: addMinutes(maghrib, 10),
    ishaIqamah: addMinutes(isha, 10),
    hasIftar: dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0, // Fri/Sat/Sun
    hijriDate: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`,
  };
}

export function usePrayerTimes(): PrayerTimesState {
  const [state, setState] = useState<PrayerTimesState>({
    loading: true,
    error: null,
    week: [],
    todayIndex: 0,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const today = new Date();
        const dates: string[] = [];
        for (let i = 0; i < 7; i++) {
          const d = new Date(today);
          d.setDate(today.getDate() + i);
          dates.push(formatDate(d));
        }

        // Fetch all 7 days in parallel
        const results = await Promise.all(dates.map(fetchDay));

        if (!cancelled) {
          setState({
            loading: false,
            error: null,
            week: results,
            todayIndex: 0, // index 0 is always today
          });
        }
      } catch (err) {
        if (!cancelled) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: err instanceof Error ? err.message : "Failed to load prayer times",
          }));
        }
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return state;
}

/** Convert "HH:MM" 24h to "H:MM AM/PM" */
export function to12h(t: string): string {
  if (!t || t === "—") return "—";
  const [hStr, mStr] = t.split(":");
  let h = parseInt(hStr, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${ampm}`;
}
