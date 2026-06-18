import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { business } from "#/lib/data";
import { Input } from "#/components/ui/input";
import { Button } from "#/components/ui/button";
import { services } from "#/lib/data";

export function Footer() {
  return (
    <footer className="site-footer border-t border-border bg-foreground text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-2xl">{business.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              {business.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-ivory/60">
              {business.sloganParts.map((part, index) => (
                <span key={part} className="flex items-center gap-2">
                  {part}
                  {index < business.sloganParts.length - 1 ? <span>·</span> : null}
                </span>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-ivory">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-ivory">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ivory/50">
              Navegação
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-ivory/70">Serviços</Link></li>
              <li><Link to="/about" className="hover:text-ivory/70">Sobre</Link></li>
              <li><Link to="/reviews" className="hover:text-ivory/70">Avaliações</Link></li>
              <li><Link to="/location" className="hover:text-ivory/70">Localização</Link></li>
              <li><Link to="/book" className="hover:text-ivory/70">Agendar</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ivory/50">
              Serviços
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-ivory/70">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ivory/50">
              Visite-nos
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${business.phoneHref}`} className="hover:text-ivory">{business.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-ivory">{business.email}</a>
              </li>
            </ul>

            <form
              className="mt-6 flex gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="border-ivory/30 bg-transparent text-ivory placeholder:text-ivory/40"
              />
              <Button type="submit" variant="ivory" size="sm">
                Assinar
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory/80">Política de privacidade</a>
            <a href="#" className="hover:text-ivory/80">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
