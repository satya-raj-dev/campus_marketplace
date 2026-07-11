import {
    CheckCircle,
    MessageCircle,
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
export function SellerProfile() {
    return (
        <section>
                  <h2
                    className="text-xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    About the Seller
                  </h2>
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="relative shrink-0">
                        <img
                          src={SELLER.avatar}
                          alt={SELLER.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {SELLER.verified && (
                          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <CheckCircle size={11} className="text-white fill-white" />
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                            {SELLER.name}
                          </h3>
                          {SELLER.verified && (
                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-semibold">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{SELLER.major}</p>
                        <p className="text-sm text-muted-foreground">{SELLER.college}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 py-4 border-y border-border">
                      {[
                        { label: "Rating", val: `${SELLER.rating} ★` },
                        { label: "Sessions", val: SELLER.completedGigs },
                        { label: "Response", val: SELLER.responseTime },
                        { label: "Member", val: SELLER.memberSince },
                      ].map(({ label, val }) => (
                        <div key={label} className="text-center">
                          <p className="font-bold text-foreground text-base" style={{ fontFamily: "JetBrains Mono, monospace" }}>{val}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{SELLER.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {SELLER.skills.map((s) => (
                        <span key={s} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                    <button className="mt-5 w-full flex items-center justify-center gap-2 border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-secondary/50 transition-all">
                      <MessageCircle size={15} /> Message Aanya
                    </button>
                  </div>
        </section>
              
           
    )
}
export function SellerCard(){
    return (
        <div className="mt-4 bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
              <img
                src={SELLER.avatar}
                alt={SELLER.name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-sm text-foreground truncate">{SELLER.name}</p>
                <p className="text-xs text-muted-foreground truncate">{SELLER.college}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Stars rating={4.9} size={11} />
                  <span className="text-xs text-muted-foreground">{SELLER.reviews} reviews</span>
                </div>
              </div>
              <div className="ml-auto shrink-0 flex flex-col items-center text-center">
                <span
                  className="text-xs font-bold text-primary"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  &lt;1 hr
                </span>
                <span className="text-[10px] text-muted-foreground">response</span>
              </div>
            </div>
    )
}