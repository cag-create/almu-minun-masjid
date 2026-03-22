/**
 * EventsSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * White background, green/gold event cards
 */

import { useEffect, useRef } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const events = [
  {
    date: { day: "FRI", num: "Every Friday" },
    title: "Jumu'ah Prayer",
    time: "Khutbah 1:30 PM · Salah 2:00 PM",
    desc: "Friday congregational prayer. Khutbah begins at 1:30 PM, Salah at 2:00 PM. All are welcome.",
    tag: "Weekly",
    tagColor: "bg-[#1a5c4a] text-white",
  },
  {
    date: { day: "Daily", num: "5 Times" },
    title: "Daily Congregational Prayers",
    time: "See Prayer Times",
    desc: "All five daily prayers held in congregation. Iqamah 10 min after Adhan. Door code required — DM @muminunmasjidstatesville on Instagram.",
    tag: "Daily",
    tagColor: "bg-[#C9A84C] text-[#1C1C1E]",
  },
  {
    date: { day: "SUN", num: "Every Sunday" },
    title: "Ta'leem — Islamic Study",
    time: "12:00 PM",
    desc: "Weekly study circle covering Qur'an, hadith, and fiqh. All levels welcome.",
    tag: "Education",
    tagColor: "bg-[#1a5c4a] text-white",
  },
  {
    date: { day: "SUN", num: "Every Sunday" },
    title: "Qur'an Class",
    time: "12:30 PM",
    desc: "Qur'an recitation and study for all ages and levels. Held every Sunday at 12:30 PM.",
    tag: "Education",
    tagColor: "bg-[#C9A84C] text-[#1C1C1E]",
  },
  {
    date: { day: "THU", num: "Every Thursday" },
    title: "Ta'leem — Islamic Study",
    time: "5:30 PM",
    desc: "Thursday evening study circle. Increase your knowledge and connect with the community.",
    tag: "Education",
    tagColor: "bg-[#1a5c4a] text-white",
  },
  {
    date: { day: "FRI–SUN", num: "Ramadan" },
    title: "Community Iftar",
    time: "At Maghrib",
    desc: "Community Iftar every Friday, Saturday, and Sunday during Ramadan. Food is provided by the masjid.",
    tag: "Ramadan",
    tagColor: "bg-[#C9A84C] text-[#1C1C1E]",
  },
  {
    date: { day: "Quarterly", num: "Year-Round" },
    title: "Community Meals",
    time: "See Announcements",
    desc: "Al Mu'minun provides meals to the Statesville community every quarter and assists the orphans of Iredell County.",
    tag: "Outreach",
    tagColor: "bg-[#1a5c4a] text-white",
  },
  {
    date: { day: "TBD", num: "Upcoming" },
    title: "New Muslim Support",
    time: "Contact Us",
    desc: "Guidance and support for new Muslims. We are here to help you on your journey.",
    tag: "Outreach",
    tagColor: "bg-[#C9A84C] text-[#1C1C1E]",
  },
];

export default function EventsSection() {
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
    <section id="events" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <p className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Programs & Activities
          </p>
          <h2 className="text-[#1C1C1E] text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Events & Programs
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p
            className="text-[#1C1C1E]/70 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Stay connected with the Al Mu'minun Masjid community through our regular programs,
            prayers, and outreach throughout the year.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {events.map((event, i) => (
            <div
              key={event.title + event.date.day + i}
              className="fade-in-up bg-[#FAF7F0] rounded-xl overflow-hidden shadow-sm border border-[#C9A84C]/15 hover:shadow-md hover:border-[#C9A84C]/40 transition-all group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Card top bar */}
              <div className="bg-[#1a5c4a] px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Source Serif 4', serif" }}>
                    {event.date.day}
                  </p>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {event.date.num}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.tagColor}`} style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {event.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h4
                  className="text-[#1C1C1E] font-bold text-base mb-1 group-hover:text-[#1a5c4a] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {event.title}
                </h4>
                <p className="text-[#C9A84C] text-sm font-semibold mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  🕐 {event.time}
                </p>
                <p className="text-[#1C1C1E]/65 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTAs */}
        <div className="fade-in-up grid md:grid-cols-3 gap-5">
          <div className="text-center bg-[#1877F2]/8 border border-[#1877F2]/20 rounded-2xl p-6">
            <Facebook className="w-9 h-9 text-[#1877F2] mx-auto mb-2" />
            <h3 className="text-[#1C1C1E] text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us on Facebook
            </h3>
            <p className="text-[#1C1C1E]/65 text-sm mb-4 max-w-xs mx-auto" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Latest announcements and community news.
            </p>
            <a
              href="https://www.facebook.com/masjidmuminum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-bold px-6 py-2.5 rounded-lg transition-all text-sm"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Facebook size={16} />
              Visit Our Facebook Page
            </a>
          </div>
          <div className="text-center bg-gradient-to-br from-[#f09433]/8 via-[#e6683c]/8 to-[#bc1888]/8 border border-[#bc1888]/20 rounded-2xl p-6">
            <Instagram className="w-9 h-9 text-[#bc1888] mx-auto mb-2" />
            <h3 className="text-[#1C1C1E] text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us on Instagram
            </h3>
            <p className="text-[#1C1C1E]/65 text-sm mb-4 max-w-xs mx-auto" style={{ fontFamily: "'Source Serif 4', serif" }}>
              DM us to get the door code for daily prayers.
            </p>
            <a
              href="https://www.instagram.com/muminunmasjidstatesville/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-lg transition-all text-sm"
              style={{ fontFamily: "'Playfair Display', serif", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            >
              <Instagram size={16} />
              @muminunmasjidstatesville
            </a>
          </div>
          <div className="text-center bg-[#FF0000]/8 border border-[#FF0000]/20 rounded-2xl p-6">
            <Youtube className="w-9 h-9 text-[#FF0000] mx-auto mb-2" />
            <h3 className="text-[#1C1C1E] text-lg font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Subscribe on YouTube
            </h3>
            <p className="text-[#1C1C1E]/65 text-sm mb-4 max-w-xs mx-auto" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Watch khutbahs, lectures, and community programs.
            </p>
            <a
              href="https://www.youtube.com/@statesvillemasjid/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#FF0000]/90 text-white font-bold px-6 py-2.5 rounded-lg transition-all text-sm"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Youtube size={16} />
              @statesvillemasjid
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
