import{
    Zap,
    Star,
    Users,
    MapPin,
} from "lucide-react"



function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </span>
  );
}
const SELLER = {
  name: "Aanya Sharma",
  major: "Computer Science, 3rd Year",
  college: "IIT Delhi",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format",
  rating: 4.9,
  reviews: 128,
  completedGigs: 214,
  responseTime: "< 1 hour",
  memberSince: "Aug 2023",
  verified: true,
  bio: "Full-stack dev passionate about helping fellow students crack interviews and build real projects. I have interned at Microsoft and Flipkart, and I love breaking down complex DSA problems into simple patterns.",
  skills: ["React", "Node.js", "DSA", "System Design", "Python"],
};
export function Title() {
    return(
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
                DSA Mastery & SDE Interview Prep — Crack Product Companies
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Stars rating={4.9} size={14} />
                  <strong className="text-foreground">4.9</strong>
                  <span>({SELLER.reviews} reviews)</span>
                </span>
                <span className="flex items-center gap-1 border-l border-border pl-4">
                  <Users size={13} /> {SELLER.completedGigs} sessions delivered
                </span>
                <span className="flex items-center gap-1 border-l border-border pl-4">
                  <MapPin size={13} /> {SELLER.college}
                </span>
              </div>
            </div>
    )
}