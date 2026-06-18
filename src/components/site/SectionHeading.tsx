import { cn } from "#/lib/utils";
import { Eyebrow } from "#/components/site/Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <Tag className="text-4xl leading-tight text-foreground sm:text-5xl">{title}</Tag>
      {subtitle ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
