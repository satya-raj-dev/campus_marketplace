import {
    CheckCircle,
    Clock,
    Shield,
    Zap,
    MessageCircle
} from "lucide-react"
import { useState } from "react";
import type { Package } from "../../data/types"; 


export  function Packages({packages}:{packages:Package[]|undefined}){
     const [selectedPkg, setSelectedPkg] = useState("standard");
     const pkg = packages?.find((p) => p.id === selectedPkg)!;
     
    return (
      <div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="flex border-b border-border">
          {packages?.map((p) => (
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
          <p className="text-sm text-muted-foreground mb-5">
            {pkg.description}
          </p>

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
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-[#F0EDE8] rounded-lg px-3 py-2 mb-5">
            <Clock size={13} className="text-primary" />
            <span>
              Delivery in{" "}
              <strong className="text-foreground">{pkg.delivery}</strong> after
              booking
            </span>
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
              <div
                key={text}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Icon size={12} className="text-primary shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}