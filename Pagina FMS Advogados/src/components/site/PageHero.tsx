import { cn } from "#/lib/utils";
import { Eyebrow } from "#/components/site/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: string;
  imageAlt: string;
  height?: "full" | "tall";
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  height = "tall",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        height === "full" ? "h-screen" : "h-[70vh] min-h-[520px]",
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <Eyebrow className="text-ivory/90">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-5xl leading-tight text-ivory sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
