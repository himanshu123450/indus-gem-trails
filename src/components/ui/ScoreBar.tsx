import { cn } from "@/lib/utils";

interface ScoreBarProps {
  label: string;
  value: number;
  suffix?: string;
  tone?: "primary" | "warm";
  className?: string;
}

/** Small labelled progress bar used across recommendation and impact views. */
export function ScoreBar({ label, value, suffix = "/100", tone = "primary", className }: ScoreBarProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold tabular-nums">
          {value}
          <span className="text-muted-foreground font-normal">{suffix}</span>
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-700 ease-out",
            tone === "warm" ? "bg-warm" : "bg-primary",
          )}
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}
