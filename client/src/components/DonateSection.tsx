/**
 * DonateSection — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Three donation methods: PayPal, Cash App, Zelle (links to be added)
 */

import { useEffect, useRef } from "react";

const donationTypes = [
  {
    icon: "🕌",
    title: "Masjid Operations",
    desc: "Keep the doors open — utilities, maintenance, and facility upkeep.",
    color: "border-[#1a5c4a]",
    bg: "bg-[#1a5c4a]/8",
  },
  {
    icon: "📿",
    title: "Zakat",
    desc: "Give your obligatory charity through verified distribution.",
    color: "border-[#C9A84C]",
    bg: "bg-[#C9A84C]/8",
  },
  {
    icon: "❤️",
    title: "Sadaqah",
    desc: "Voluntary charity to bring relief and blessings to our community.",
    color: "border-[#1a5c4a]",
    bg: "bg-[#1a5c4a]/8",
  },
  {
    icon: "🍽️",
    title: "Community Outreach",
    desc: "Support quarterly community meals and assistance for the orphans of Iredell County.",
    color: "border-[#C9A84C]",
    bg: "bg-[#C9A84C]/8",
  },
];

export default function DonateSection() {
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
    <section id="donate" className="py-20 bg-[#FAF7F0]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-[#1a5c4a] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Support the Masjid
          </p>
          <h2 className="text-[#1C1C1E] text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Donate to Al Mu'minun
          </h2>
          <div className="geometric-divider w-48 mx-auto mb-4" />
          <p className="text-[#C9A84C] text-center text-lg mb-2"
            style={{ fontFamily: "'Scheherazade New', serif", fontSize: "1.8rem" }}>
            مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
          </p>
          <p className="text-[#1C1C1E]/65 text-sm italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
            "The example of those who spend in the way of Allah is like a grain that sprouts seven spikes..."
            <span className="text-[#C9A84C] not-italic"> — Al-Baqarah 2:261</span>
          </p>
        </div>

        {/* Donation types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {donationTypes.map((type, i) => (
            <div
              key={type.title}
              className={`fade-in-up ${type.bg} border-t-4 ${type.color} rounded-xl p-5 shadow-sm hover:shadow-md transition-all`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-3">{type.icon}</div>
              <h4 className="text-[#1C1C1E] font-bold text-base mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                {type.title}
              </h4>
              <p className="text-[#1C1C1E]/65 text-sm leading-relaxed"
                style={{ fontFamily: "'Source Serif 4', serif" }}>
                {type.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ways to Donate */}
        <h3 className="fade-in-up text-[#1C1C1E] text-2xl font-bold text-center mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Ways to Donate
        </h3>
        <div className="fade-in-up grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Cash App */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#C9A84C]/20 overflow-hidden hover:shadow-md transition-all">
            <div className="bg-[#00D64F] px-6 py-5 text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00D64F] font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>$</span>
              </div>
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Cash App</h3>
              <p className="text-white/80 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>Send directly via Cash App</p>
            </div>
            <div className="px-6 py-6 text-center">
              <div className="bg-[#00D64F]/8 rounded-xl p-4 mb-3">
                <p className="text-[#1C1C1E]/50 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>Cash App link coming soon</p>
                <p className="text-[#1C1C1E]/40 text-xs mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>Contact the masjid to donate now</p>
              </div>
              <a href="https://www.instagram.com/muminunmasjidstatesville/" target="_blank" rel="noopener noreferrer"
                className="inline-block text-[#00D64F] font-semibold text-sm hover:underline"
                style={{ fontFamily: "'Source Serif 4', serif" }}>@muminunmasjidstatesville</a>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#C9A84C]/25 overflow-hidden hover:shadow-md transition-all">
            <div className="bg-[#1a5c4a] px-6 py-5 text-center">
              <div className="w-14 h-14 bg-[#003087] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>P</span>
              </div>
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Donate via PayPal
              </h3>
              <p className="text-white/65 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Secure online donation
              </p>
            </div>
            <div className="px-6 py-6 text-center">
              <div className="bg-[#003087]/8 rounded-xl p-4 mb-4">
                <p className="text-[#1C1C1E]/50 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>PayPal link coming soon</p>
                <p className="text-[#1C1C1E]/40 text-xs mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>Contact the masjid to donate now</p>
              </div>
              <p className="text-[#1C1C1E]/40 text-xs" style={{ fontFamily: "'Source Serif 4', serif" }}>
                JazakAllahu Khairan for your generosity.
              </p>
            </div>
          </div>

          {/* Zelle */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#C9A84C]/20 overflow-hidden hover:shadow-md transition-all">
            <div className="bg-[#6D1ED4] px-6 py-5 text-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#6D1ED4] font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>Z</span>
              </div>
              <h3 className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Zelle</h3>
              <p className="text-white/80 text-sm mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>Fast bank-to-bank transfer</p>
            </div>
            <div className="px-6 py-6 text-center">
              <div className="bg-[#6D1ED4]/8 rounded-xl p-4 mb-3">
                <p className="text-[#1C1C1E]/50 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>Zelle details coming soon</p>
                <p className="text-[#1C1C1E]/40 text-xs mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>Contact the masjid to donate now</p>
              </div>
              <a href="https://www.instagram.com/muminunmasjidstatesville/" target="_blank" rel="noopener noreferrer"
                className="inline-block text-[#6D1ED4] font-semibold text-sm hover:underline"
                style={{ fontFamily: "'Source Serif 4', serif" }}>@muminunmasjidstatesville</a>
            </div>
          </div>

        </div>

        {/* In-person note */}
        <div className="fade-in-up mt-8 text-center bg-[#1a5c4a]/8 rounded-xl p-5 border border-[#1a5c4a]/20 max-w-2xl mx-auto">
          <p className="text-[#1a5c4a] font-semibold mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            💵 In-Person Donations
          </p>
          <p className="text-[#1C1C1E]/70 text-sm"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Donation boxes are available inside the masjid during all prayer times.
          </p>
        </div>
      </div>
    </section>
  );
}
