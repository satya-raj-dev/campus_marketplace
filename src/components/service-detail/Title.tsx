import { Zap, Users, MapPin } from "lucide-react";
import { Stars } from "../common/stars";


export function Title({
  title,
  averageRating = 0,
  reviewCount = 0,
}: {
  title?: string ;
  averageRating?: number;
  reviewCount?: number;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Tutoring
        </span>
        <span className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Zap size={11} /> Top Rated
        </span>
      </div>
      <h1
        className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {title || "Title is loading ..."}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Stars rating={averageRating} size={14} />
          <strong className="text-foreground">{averageRating}</strong>
          <span>({reviewCount} reviews)</span>
        </span>
        <span className="flex items-center gap-1 border-l border-border pl-4">
          <Users size={13} /> {128} sessions delivered
        </span>
        <span className="flex items-center gap-1 border-l border-border pl-4">
          <MapPin size={13} /> {'NIT karnatka'}
        </span>
      </div>
    </div>
  );
}
