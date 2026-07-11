import {
    BookOpen,
    Zap,
    Calendar,
    CheckCircle,
    Award,
    Shield
} from "lucide-react"


export function Overview() {
    return(
        <div>
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
                </div>
    )
}