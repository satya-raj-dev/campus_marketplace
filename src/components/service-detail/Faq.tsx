import {
    ChevronDown
} from "lucide-react"
import { useState } from "react";




function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border last:border-0 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <span className="font-semibold text-foreground text-[15px] leading-snug">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-5" : "max-h-0"}`}
      >
        <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
const FAQS = [
  {
    q: "What platform do you use for sessions?",
    a: "All sessions are conducted on Google Meet with screen sharing. Recordings are shared via Google Drive within 24 hours of each session.",
  },
  {
    q: "Can I reschedule a session?",
    a: "Yes, you can reschedule up to 4 hours before the scheduled time. I'm flexible on weekends and evenings to suit your timetable.",
  },
  {
    q: "Which companies do you cover interview prep for?",
    a: "I specifically cover product companies — Flipkart, Amazon, Microsoft, Google, Paytm, Swiggy, and FAANG in general. Both OA and technical interview rounds.",
  },
  {
    q: "Do I need prior DSA knowledge?",
    a: "Basic programming knowledge is enough for the Basic and Standard packages. Premium assumes you can code in at least one language (C++/Java/Python).",
  },
  {
    q: "Is there a refund policy?",
    a: "Full refund within 24 hours of booking if no session has been conducted. Post first session, partial refund on unused sessions is available.",
  },
];

export function Faq() {
    return(
        <div className="bg-card border border-border rounded-2xl px-6">
                {FAQS.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
    )
}