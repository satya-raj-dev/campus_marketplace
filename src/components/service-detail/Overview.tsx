import type { OverviewProps } from "../../data/types";
 import { resolveCategoryIcon } from "../../utils/categoryIcons";


export function Overview({
  overview,
}: {
  overview: OverviewProps | undefined;
}) {
 const Highlights = overview?.highlights?.map((item) => ({
   ...item,
   icon: resolveCategoryIcon(item.icon),
 }));
  return (
    <div>
      {/* About service */}
      <section>
        <h2
          className="text-xl font-bold text-foreground mb-4"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          About This Service
        </h2>
        {overview?.aboutTheService.map((about) => (
          <p className="text-muted-foreground leading-relaxed mb-4">{about}</p>
        ))}
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
          {Highlights?.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors"
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
    </div>
  );
}
