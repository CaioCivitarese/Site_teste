import { cn } from "#/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  bleed?: boolean;
};

export function Section({ className, bleed = false, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-24 lg:py-32", className)} {...props}>
      {bleed ? (
        children
      ) : (
        <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
      )}
    </section>
  );
}
