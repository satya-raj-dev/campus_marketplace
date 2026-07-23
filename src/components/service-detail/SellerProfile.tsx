import { CheckCircle, MessageCircle, } from "lucide-react";
import type { Seller } from "../../data/types";
import { Stars } from "../common/stars";

export function SellerProfile({ seller }: { seller: Seller }) {
  return (
    <section>
      <h2
        className="text-xl font-bold text-foreground mb-4"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        About the Seller
      </h2>
      <div className="bg-surface border border-border rounded-2xl p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="relative shrink-0">
            <img
              src={seller.avatar}
              alt={seller.displayName}
              className="w-16 h-16 rounded-full object-cover"
            />
            {seller.verified && (
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle size={11} className="text-white fill-white" />
              </span>
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className="font-bold text-foreground text-lg"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {seller.displayName}
              </h3>
              {seller.verified && (
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-semibold">
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{seller?.branch}</p>
            <p className="text-sm text-muted-foreground">{seller.college}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 py-4 border-y border-border">
          {[
            { label: "Rating", val: `${seller.rating} ★` },
            { label: "Sessions", val: seller.completedGigs },
            { label: "Response", val: seller.responseTime },
            {
              label: "Member",
              val: seller.memberSince.toDate().toLocaleString("en-IN", {
                month: "short",
                year: "numeric",
              }),
            },
          ].map(({ label, val }) => (
            <div key={label} className="text-center">
              <p
                className="font-bold text-foreground text-base"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {val}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {seller.bio}
        </p>
        <div className="flex flex-wrap gap-2">
          {seller.skills.map((s) => (
            <span
              key={s}
              className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
        <button className="mt-5 w-full flex items-center justify-center gap-2 border border-border rounded-xl py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-secondary/50 transition-all">
          <MessageCircle size={15} /> Message Aanya
        </button>
      </div>
    </section>
  );
}
export function SellerCard({ seller }: { seller: Seller }) {
  return (
    <div className="mt-4 bg-surface border border-border rounded-2xl p-4 flex items-center gap-3">
      <img
        src={seller.avatar}
        alt={seller.displayName}
        className="w-12 h-12 rounded-full object-cover shrink-0"
      />
      <div className="min-w-0">
        <p className="font-bold text-sm text-foreground truncate">
          {seller.displayName}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {seller.college}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <Stars rating={4.9} size={11} />
          <span className="text-xs text-muted-foreground">{128} reviews</span>
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
  );
}
