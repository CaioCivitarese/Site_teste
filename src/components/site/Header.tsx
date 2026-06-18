import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "#/lib/utils";
import { Button } from "#/components/ui/button";
import { business } from "#/lib/data";

const navLinks = [
  { to: "/services", label: "Serviços" },
  { to: "/about", label: "Sobre" },
  { to: "/reviews", label: "Avaliações" },
  { to: "/location", label: "Localização" },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-background text-foreground"
          : "border-b border-transparent bg-transparent text-ivory",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="font-display text-xl tracking-wide">
          {business.name}
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-70",
              )}
              activeProps={{ className: "opacity-100 underline underline-offset-8" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant={solid ? "default" : "ivory"}>
            <Link to="/book">Agendar Agora</Link>
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background px-6 py-6 text-foreground lg:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium uppercase tracking-widest"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" onClick={() => setMobileOpen(false)}>
              <Link to="/book">Agendar Agora</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
