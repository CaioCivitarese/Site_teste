import { cn } from "#/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "text-eyebrow text-xs font-semibold uppercase text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}
