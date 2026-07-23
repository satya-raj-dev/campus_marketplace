import {
    ChevronDown
} from "lucide-react"
import  { useState } from "react";
import type { FaqProps } from "../../data/types";

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

export function Faq({ faqs }: FaqProps)  {
    return(
        <div className="bg-card border border-border rounded-2xl px-6">
                {faqs?.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
    )
}