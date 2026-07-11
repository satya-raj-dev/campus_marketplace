import{
  Star
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
const REVIEWS = [
  {
    name: "Rahul Verma",
    college: "NIT Trichy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    date: "June 2025",
    text: "Aanya is an absolute gem. She helped me crack the Amazon OA in just two weeks. Her approach to DP problems completely changed how I think about recursion.",
  },
  {
    name: "Priya Nair",
    college: "BITS Pilani",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    rating: 5,
    date: "May 2025",
    text: "Very structured sessions — no wasted time. I cleared Flipkart and Paytm both after the premium package. 100% recommend for anyone serious about placements.",
  },
  {
    name: "Arjun Singh",
    college: "DTU Delhi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    rating: 4,
    date: "April 2025",
    text: "Great content, very patient instructor. Would have given 5 stars but scheduling was a bit tricky. The DSA sheets alone are worth the price.",
  },
];

export function Reviews () {
    return(
        <div>
                <div className="flex items-center gap-6 bg-card border border-border rounded-2xl p-6 mb-6">
                  <div className="text-center shrink-0">
                    <p className="text-5xl font-extrabold text-foreground" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      4.9
                    </p>
                    <Stars rating={4.9} size={16} />
                    <p className="text-xs text-muted-foreground mt-1">{SELLER.reviews} reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pct = star === 5 ? 86 : star === 4 ? 10 : star === 3 ? 3 : 1;
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="text-muted-foreground w-3 text-right">{star}</span>
                          <Star size={10} className="fill-amber-400 text-amber-400 shrink-0" />
                          <div className="flex-1 bg-muted rounded-full h-1.5">
                            <div
                              className="bg-amber-400 h-1.5 rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-muted-foreground w-6">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-4">
                  {REVIEWS.map((r) => (
                    <div key={r.name} className="bg-card border border-border rounded-2xl p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                        <div>
                          <p className="font-bold text-sm text-foreground">{r.name}</p>
                          <p className="text-xs text-muted-foreground">{r.college} · {r.date}</p>
                        </div>
                        <div className="ml-auto">
                          <Stars rating={r.rating} size={13} />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
    )
}