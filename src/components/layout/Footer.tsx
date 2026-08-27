import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-forest text-forest-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-forest-foreground/10">
              <Leaf className="size-4.5" />
            </span>
            <span className="font-display text-lg font-semibold">YatraAI</span>
          </div>
          <p className="mt-3 font-display text-xl">Explore India Differently.</p>
          <p className="mt-3 max-w-sm text-sm text-forest-foreground/70">
            AI-assisted trip planning that spreads visitors beyond crowded hotspots and routes
            spending toward local hosts.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.16em] text-forest-foreground/60">
            Product
          </p>
          <ul className="mt-4 space-y-2.5 text-forest-foreground/80">
            <li>
              <Link to="/plan" className="hover:text-forest-foreground">
                Trip Planner
              </Link>
            </li>
            <li>
              <Link to="/recommendations" className="hover:text-forest-foreground">
                Recommendations
              </Link>
            </li>
            <li>
              <Link to="/hidden-gems" className="hover:text-forest-foreground">
                Hidden Gems
              </Link>
            </li>
            <li>
              <Link to="/local-experiences" className="hover:text-forest-foreground">
                Local Experiences
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-forest-foreground">
                Sustainability Impact
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.16em] text-forest-foreground/60">
            About this build
          </p>
          <p className="mt-4 text-forest-foreground/80">
            Student innovation prototype. All destinations, hosts, scores and metrics shown here are
            demo data used to illustrate the concept — not verified tourism statistics.
          </p>
          <p className="mt-4 text-forest-foreground/60">
            Recommendations use a transparent rule-based scoring function, not a trained ML model.
          </p>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10 py-5 text-center text-xs text-forest-foreground/60">
        © {new Date().getFullYear()} YatraAI · Student innovation prototype
      </div>
    </footer>
  );
}
