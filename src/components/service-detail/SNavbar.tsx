import { useState } from "react";
import { Share2, Heart } from "lucide-react";

export function Navbar() {
  const [saved, setSaved] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="text-primary font-extrabold text-xl tracking-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            CampusHub
          </span>
          <span className="hidden sm:block text-muted-foreground text-sm">
            / Tutoring & Mentorship
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Share2 size={15} />
            Share
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className={`flex items-center gap-1.5 text-sm transition-colors px-3 py-1.5 rounded-full border ${
              saved
                ? "bg-primary/10 border-primary/30 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart size={14} className={saved ? "fill-primary" : ""} />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </nav>
  );
}
