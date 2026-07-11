import { useState } from "react";
import {
  Star,
  Clock,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  Share2,
  Heart,
  MessageCircle,
  Shield,
  Zap,
  BookOpen,
  Award,
  Users,
  Calendar,
} from "lucide-react";


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

const IMAGES = [
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=600&fit=crop&auto=format",
];

const PACKAGES = [
  {
    id: "basic",
    label: "Basic",
    price: 299,
    delivery: "3 days",
    description: "One 60-min DSA session covering arrays, strings, and sorting.",
    includes: ["1 live session", "Problem set (10 Qs)", "Recording"],
  },
  {
    id: "standard",
    label: "Standard",
    price: 799,
    delivery: "7 days",
    description: "4 sessions covering full DSA roadmap + mock interview.",
    includes: ["4 live sessions", "Full problem set", "Mock interview", "Recordings", "WhatsApp support"],
    popular: true,
  },
  {
    id: "premium",
    label: "Premium",
    price: 1499,
    delivery: "21 days",
    description: "Complete SDE-1 prep: DSA + System Design + 3 mock interviews.",
    includes: ["10 live sessions", "System Design guide", "3 mock interviews", "Resume review", "30-day support"],
  },
];

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

export function ServiceDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedPkg, setSelectedPkg] = useState("standard");
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const pkg = PACKAGES.find((p) => p.id === selectedPkg)!;

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="text-primary font-extrabold text-xl tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              CampusHub
            </span>
            <span className="hidden sm:block text-muted-foreground text-sm">/ Tutoring & Mentorship</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Share2 size={15} />
              Share
            </button>
            <button
              onClick={() => setSaved(!saved)}
              className={`flex items-center gap-1.5 text-sm transition-colors px-3 py-1.5 rounded-full border ${
                saved ? "bg-primary/10 border-primary/30 text-primary" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart size={14} className={saved ? "fill-primary" : ""} />
              {saved ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-5 pb-1">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <button className="hover:text-primary transition-colors flex items-center gap-1">
            <ChevronLeft size={12} /> Home
          </button>
          <span>/</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Tutoring</span>
          <span>/</span>
          <span className="text-foreground font-medium">DSA & Interview Prep</span>
        </div>
      </div>
  {/* **************************************************************************************************** */}
      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* LEFT */}
          <div className="min-w-0">
            {/* Title */}
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

            {/* Image Gallery */}
            <div className="mb-8 rounded-2xl overflow-hidden bg-muted">
              <div className="relative aspect-[16/9] overflow-hidden">
                {IMAGES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Service preview ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      i === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex gap-2 p-3 bg-card">
                {IMAGES.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-16 w-24 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-muted rounded-xl p-1 mb-8 w-fit">
              {["overview", "reviews", "faq"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
                    activeTab === tab
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "faq" ? "FAQ" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-10">
                {/* About service */}
                <section>
                  <h2
                    className="text-xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    About This Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Struggling with LeetCode or getting stuck at the OA stage? I offer structured, one-on-one mentorship designed specifically for students targeting SDE-1 roles at top product companies. Sessions are tailored to your current level — from absolute basics to advanced system design.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Having cleared interviews at Microsoft and Flipkart, I know exactly what interviewers look for. You'll learn not just solutions, but how to think through unfamiliar problems under pressure. All sessions are recorded so you can revisit anytime.
                  </p>
                </section>

                {/* What you get */}
                <section>
                  <h2
                    className="text-xl font-bold text-foreground mb-4"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    What You Will Learn
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { icon: BookOpen, label: "Arrays, Strings & Hashing", sub: "Foundation patterns" },
                      { icon: Zap, label: "Dynamic Programming", sub: "Memoization & tabulation" },
                      { icon: Award, label: "Trees & Graphs", sub: "BFS, DFS, Dijkstra" },
                      { icon: Shield, label: "System Design Basics", sub: "HLD for SDE-1" },
                      { icon: Calendar, label: "Mock Interviews", sub: "Real-time feedback" },
                      { icon: CheckCircle, label: "Resume & LinkedIn", sub: "Profile review" },
                    ].map(({ icon: Icon, label, sub }) => (
                      <div
                        key={label}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-foreground">{label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Seller profile */}
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
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
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
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <div className="bg-card border border-border rounded-2xl px-6">
                {FAQS.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Sticky Pricing Card */}
          <div className="lg:sticky lg:top-20">
            {/* Package Tabs */}
            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <div className="flex border-b border-border">
                {PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPkg(p.id)}
                    className={`flex-1 py-3 text-sm font-semibold relative transition-colors ${
                      selectedPkg === p.id
                        ? "text-primary bg-secondary/50"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p.label}
                    {p.popular && (
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="p-5">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span
                    className="text-4xl font-extrabold text-foreground"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    ₹{pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm">one-time</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5">{pkg.description}</p>

                {/* Includes */}
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle size={15} className="text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Delivery */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted rounded-lg px-3 py-2 mb-5">
                  <Clock size={13} className="text-primary" />
                  <span>Delivery in <strong className="text-foreground">{pkg.delivery}</strong> after booking</span>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-primary-foreground font-bold py-3.5 rounded-xl transition-all text-base mb-3">
                  Book — ₹{pkg.price}
                </button>
                <button className="w-full border border-border hover:border-primary/40 hover:bg-secondary/30 text-foreground font-semibold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                  <MessageCircle size={15} /> Ask a Question
                </button>

                {/* Trust */}
                <div className="mt-5 pt-5 border-t border-border space-y-2">
                  {[
                    { icon: Shield, text: "Secure campus payment" },
                    { icon: CheckCircle, text: "Satisfaction guarantee" },
                    { icon: Zap, text: "Instant booking confirmation" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon size={12} className="text-primary shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini Seller Card */}
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

            {/* Live indicator */}
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Aanya is available · 3 slots open this week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

