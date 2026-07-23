import { Star } from "lucide-react";
import type { Review } from "../../data/types";
import { Stars } from "../common/stars";

export function Reviews({
  reviews,
  averageRating = 0,
  reviewCount = 0,
}: {
  reviews?: Review[];
  averageRating?: number;
  reviewCount?: number;
}) {
  const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
    const count =
      reviews?.filter((review) => Math.round(review.rating) === star).length ||
      0;
    return {
      star,
      count,
      pct: reviews && reviews.length > 0 ? (count / reviews.length) * 100 : 0,
    };
  });

  return (
    <div>
      <div className="flex items-center gap-6 bg-card border border-border rounded-2xl p-6 mb-6">
        <div className="text-center shrink-0">
          <p
            className="text-5xl font-extrabold text-foreground"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {averageRating.toFixed(1)}
          </p>
          <Stars rating={averageRating} size={16} />
          <p className="text-xs text-muted-foreground mt-1">
            {reviewCount} reviews
          </p>
        </div>
        <div className="flex-1 space-y-2">
          {ratingCounts.map(({ star, pct }) => (
            <div key={star} className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground w-3 text-right">
                {star}
              </span>
              <Star
                size={10}
                className="fill-amber-400 text-amber-400 shrink-0"
              />
              <div className="flex-1 bg-muted rounded-full h-1.5">
                <div
                  className="bg-amber-400 h-1.5 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-muted-foreground w-6">
                {pct.toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {reviews?.map((r) => (
          <div
            key={r.displayName}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <img
                src={r.avatar}
                alt={r.displayName}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-bold text-sm text-foreground">
                  {r.displayName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {r.college} ·{" "}
                  {r.createdAt.toDate().toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="ml-auto">
                <Stars rating={r.rating} size={13} />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {r.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
