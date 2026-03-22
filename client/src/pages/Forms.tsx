/**
 * Forms Page — Al Mu'minun Masjid
 * Design: Classical Islamic Manuscript
 * Two clearly labeled printable letters displayed as separate prominent cards.
 * Contact: Imam Tamir | 704-564-7040
 */

import { useState } from "react";
import { Link } from "wouter";
import { FileText, Printer, Phone, ChevronDown, ChevronUp } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/112528410/GOuRkepSjtfPMKed.png";

function PrintButton({ formId }: { formId: string }) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(formId);
        if (!el) return;
        const win = window.open("", "_blank");
        if (!win) return;
        win.document.write(`
          <html><head><title>Al Mu'minun Masjid — Form</title>
          <style>
            body { font-family: Georgia, serif; max-width: 750px; margin: 40px auto; padding: 0 20px; color: #111; }
            h1,h2,h3 { font-family: Georgia, serif; }
            hr { border: 1px solid #333; margin: 16px 0; }
            p { line-height: 1.7; margin-bottom: 10px; }
            @media print { body { margin: 20px; } }
          </style></head><body>
          ${el.innerHTML}
          </body></html>
        `);
        win.document.close();
        win.focus();
        win.print();
      }}
      className="flex items-center gap-2 bg-[#1a5c4a] hover:bg-[#1a5c4a]/85 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <Printer size={16} />
      Print / Save as PDF
    </button>
  );
}

function FieldLine({ width = "200px" }: { width?: string }) {
  return (
    <span
      className="border-b-2 border-[#1C1C1E]/40 inline-block"
      style={{ minWidth: width }}
    >
      &nbsp;
    </span>
  );
}

function LetterCard({
  id,
  label,
  labelColor,
  icon,
  title,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  labelColor: string;
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#C9A84C]/20 overflow-hidden">
      {/* Prominent label banner */}
      <div className={`${labelColor} px-6 py-3 flex items-center gap-3`}>
        <span className="text-2xl">{icon}</span>
        <span className="text-white font-bold text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Source Serif 4', serif" }}>
          {label}
        </span>
      </div>

      {/* Card header with expand toggle */}
      <div className="px-7 py-6 border-b border-[#C9A84C]/15">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-[#1C1C1E] font-bold text-2xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              {title}
            </h2>
            <p className="text-[#1C1C1E]/60 text-sm"
              style={{ fontFamily: "'Source Serif 4', serif" }}>
              {subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <PrintButton formId={id} />
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 border border-[#1a5c4a]/30 text-[#1a5c4a] font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-[#1a5c4a]/8 transition-all"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              {open ? (
                <><ChevronUp size={16} /> Hide</>
              ) : (
                <><ChevronDown size={16} /> View Letter</>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable letter content */}
      {open && (
        <div className="px-7 py-6">
          <div
            id={id}
            className="bg-[#FAF7F0] rounded-xl p-6 border border-[#C9A84C]/15 text-[#1C1C1E] text-sm leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Forms() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Page header */}
      <div className="bg-[#1a5c4a] pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="Al Mu'minun Masjid Logo — Click to go home"
              className="h-16 w-16 object-contain bg-white rounded-full p-1 mx-auto mb-4 cursor-pointer hover:opacity-80 hover:scale-105 transition-all"
              title="Back to Home"
            />
          </Link>
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Al Mu'minun Masjid — Statesville, NC
          </p>
          <h1 className="text-white text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Community Forms
          </h1>
          <p className="text-white/70 max-w-xl mx-auto text-base mb-4"
            style={{ fontFamily: "'Source Serif 4', serif" }}>
            Download and print the forms below. For questions, contact Imam Tamir.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#C9A84C]">
            <Phone size={16} />
            <a href="tel:7045647040" className="font-semibold hover:underline"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              704-564-7040
            </a>
          </div>
        </div>
      </div>

      {/* Two letter cards */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        {/* ── CARD 1: Friday Jumu'ah Dismissal Letter ── */}
        <LetterCard
          id="form-jumuah-dismissal"
          label="Friday Dismissal Letter"
          labelColor="bg-[#1a5c4a]"
          icon="🕌"
          title="Friday Jumu'ah Dismissal Letter"
          subtitle="Template letter requesting early Friday dismissal for Jumu'ah prayer — for parents to submit to their child's school."
        >
          <p className="text-center font-bold text-base mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Subject: Dismissal for Religious Observance — Friday Jumu'ah Prayer
          </p>

          <p>To whom it may concern,</p>
          <br />
          <p>
            <FieldLine width="220px" /> is the parent of{" "}
            <FieldLine width="220px" />, who is a student in the{" "}
            <FieldLine width="60px" /> grade at{" "}
            <FieldLine width="200px" /> in Statesville, NC. This letter is a formal notice that{" "}
            <FieldLine width="180px" /> will need to be excused from class at{" "}
            <FieldLine width="60px" /> PM on Fridays to attend our religious service at Al Mu'minun Masjid,
            located at 1720 Wilson Lee Blvd, Statesville, NC 28677.
          </p>
          <br />
          <p>
            The Friday prayer, known as <strong>Jumu'ah</strong> in Islam, is an obligatory congregational
            prayer held every Friday. It is similar in religious significance to the Saturday Shabbat for
            Jews and the Sunday Church Service for Christians. The Khutbah (sermon) begins at{" "}
            <strong>1:30 PM</strong> and Salah (prayer) is at <strong>2:00 PM</strong>, typically
            concluding within 45 minutes.
          </p>
          <br />
          <p>
            Custom allows our Jewish and Christian neighbors to attend their services on the weekends.
            Similar to Judaism's mandate to observe Shabbat, in Islam it is considered a sin to miss the
            Friday prayer. Considering we are a small minority community, this is a crucial time for our
            children to affirm their faith and identity.
          </p>
          <br />
          <p>
            In addition, we observe two Islamic holidays each year — <strong>Eid al-Fitr</strong>{" "}
            (celebrating the conclusion of Ramadan) and <strong>Eid al-Adha</strong> (during the
            pilgrimage season). Similar to our Jewish friends, we follow a lunar calendar, so these
            holidays fall on different calendar days each year. This year, <strong>Eid al-Fitr</strong>{" "}
            is expected on or around <strong>Friday, March 28, 2026</strong>, and{" "}
            <strong>Eid al-Adha</strong> falls on approximately{" "}
            <strong>Wednesday, June 4, 2026</strong>.
          </p>
          <br />
          <p>
            We appreciate your consideration regarding the religious practices of our community and
            please do not hesitate to contact us for any further clarification.
          </p>
          <br />
          <p>Sincerely,</p>
          <br />
          <div className="space-y-3">
            <div><strong>Parent/Guardian Name:</strong> <FieldLine width="260px" /></div>
            <div className="flex flex-wrap gap-6">
              <div><strong>Phone:</strong> <FieldLine width="160px" /></div>
              <div><strong>Email:</strong> <FieldLine width="200px" /></div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div><strong>Signature:</strong> <FieldLine width="220px" /></div>
              <div><strong>Date:</strong> <FieldLine width="120px" /></div>
            </div>
          </div>
          <br />
          <hr style={{ borderColor: "#1C1C1E40" }} />
          <br />
          <div className="bg-[#1a5c4a]/8 rounded-lg p-4 text-xs leading-relaxed">
            <p className="font-bold mb-1">Verified by — Al Mu'minun Masjid</p>
            <p><strong>Imam Tamir</strong> &nbsp;|&nbsp; <strong>704-564-7040</strong></p>
            <p>1720 Wilson Lee Blvd, Statesville, NC 28677</p>
            <p>Jumu'ah every Friday — Khutbah 1:30 PM · Salah 2:00 PM</p>
          </div>
        </LetterCard>

        {/* ── CARD 2: ISS School Dismissal Letter ── */}
        <LetterCard
          id="form-iss-dismissal"
          label="ISS School Dismissal Letter"
          labelColor="bg-[#C9A84C]"
          icon="🏫"
          title="ISS Religious Obligation — Excused Absence Request"
          subtitle="Official request form for Iredell-Statesville Schools (ISS) — includes FERPA Act notice and ISS attendance policy."
        >
          <p className="font-bold text-base mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Religious Obligation: Request for Excused Absence
          </p>

          <p className="mb-3">
            <strong>Written notification is required</strong> for consideration of an excused absence
            from school under Iredell-Statesville Schools Board Policy (Religious Observance). This
            form, or other written notification (such as an email), which includes the information
            requested in this document, should be submitted at least{" "}
            <strong>two weeks in advance of the absence</strong>. This will allow enough time for
            staff to make any necessary arrangements with the student to make up all class work or
            homework.
          </p>

          <p className="mb-3">
            <strong>FERPA Notice:</strong> The Family Educational Rights and Privacy Act (FERPA)
            (20 U.S.C. § 1232g; 34 CFR Part 99) protects the privacy of student education records.
            Information provided on this form will be used solely for the purpose of processing the
            excused absence request and will not be disclosed without prior written consent, except
            as permitted by law.
          </p>

          <p className="mb-4">
            <strong>ISS Policy:</strong> ISS Board Policy allows students to be excused for religious
            observances recognized by their faith community. The student is responsible for making up
            all missed work within the timeframe established by the teacher.
          </p>

          <hr style={{ borderColor: "#1C1C1E20", margin: "16px 0" }} />

          <div className="space-y-4">
            <div><strong>Student:</strong> <FieldLine width="300px" /></div>
            <div className="flex flex-wrap gap-6">
              <div><strong>School:</strong> <FieldLine width="220px" /></div>
              <div><strong>Grade:</strong> <FieldLine width="100px" /></div>
            </div>
            <div><strong>Parent/Guardian Name:</strong> <FieldLine width="280px" /></div>
            <div className="flex flex-wrap gap-6">
              <div><strong>Phone:</strong> (<FieldLine width="60px" />) <FieldLine width="140px" /></div>
              <div><strong>Email:</strong> <FieldLine width="200px" /></div>
            </div>
            <div><strong>Religion (optional):</strong> <FieldLine width="220px" /></div>
            <div><strong>Religious Observance:</strong> <FieldLine width="300px" /></div>
            <div><strong>Date(s) of Absence:</strong> <FieldLine width="320px" /></div>
          </div>

          <hr style={{ borderColor: "#1C1C1E20", margin: "16px 0" }} />

          <div className="flex flex-wrap gap-6 items-center mb-2">
            <label className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-[#1C1C1E]/50 inline-block rounded-sm" />
              <strong>Full Day</strong>
            </label>
            <label className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-[#1C1C1E]/50 inline-block rounded-sm" />
              <strong>Partial Day</strong>
            </label>
            <div><strong>Departure Time:</strong> <FieldLine width="100px" /></div>
            <div><strong>Return Time:</strong> <FieldLine width="100px" /></div>
          </div>
          <p className="text-xs italic text-[#1C1C1E]/55 mb-4">
            (Student must follow the school's normal early dismissal and late arrival procedures.)
          </p>

          <hr style={{ borderColor: "#1C1C1E20", margin: "16px 0" }} />

          <div className="space-y-3">
            <div className="flex flex-wrap gap-6">
              <div><strong>Parent/Guardian Signature:</strong> <FieldLine width="220px" /></div>
              <div><strong>Date:</strong> <FieldLine width="120px" /></div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div><strong>Principal/Designee Signature:</strong> <FieldLine width="200px" /></div>
              <div><strong>Date:</strong> <FieldLine width="120px" /></div>
            </div>
          </div>

          <hr style={{ borderColor: "#1C1C1E20", margin: "16px 0" }} />

          <div className="bg-[#1a5c4a]/8 rounded-lg p-4 text-xs leading-relaxed">
            <p className="font-bold mb-1">Contact — Al Mu'minun Masjid</p>
            <p><strong>Imam Tamir</strong> &nbsp;|&nbsp; <strong>704-564-7040</strong></p>
            <p>1720 Wilson Lee Blvd, Statesville, NC 28677</p>
            <p>Instagram: @muminunmasjidstatesville &nbsp;|&nbsp; Facebook: facebook.com/masjidmuminum</p>
          </div>
        </LetterCard>

        {/* Back to home */}
        <div className="text-center pt-2">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#1a5c4a] font-semibold hover:underline text-sm"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
