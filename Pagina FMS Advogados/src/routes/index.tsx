import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { JsonLd } from "#/components/site/JsonLd";
import { business, services, placeholderImage } from "#/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D'Angelo Barber Club | Barbearia Premium na Barra da Tijuca" },
      {
        name: "description",
        content:
          "Cortes precisos, barba impecável e uma experiência feita sem pressa. Desde 2018 na Barra da Tijuca, Rio de Janeiro.",
      },
      { property: "og:title", content: "D'Angelo Barber Club | Barbearia Premium" },
      {
        property: "og:description",
        content: "Cortes precisos, barba impecável e uma experiência feita sem pressa.",
      },
      { property: "og:image", content: placeholderImage("dangelo-home-hero", 1600, 900) },
      { name: "twitter:image", content: placeholderImage("dangelo-home-hero", 1600, 900) },
    ],
  }),
  component: Home,
});

const featuredSlugs = ["haircut-beard", "premium-beard", "classic-cut"];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const featured = services.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          image: placeholderImage("dangelo-home-hero", 1600, 900),
          telephone: business.phone,
          email: business.email,
          address: business.address,
          priceRange: "R$60 - R$180",
        }}
      />

      {/* 1. Hero */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <img
          src={placeholderImage("dangelo-home-hero", 1920, 1280)}
          alt="Interior da barbearia D'Angelo Barber Club, Barra da Tijuca"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Eyebrow className="text-ivory/90">Barra da Tijuca · Desde 2018</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-6xl leading-[1.05] text-ivory sm:text-7xl lg:text-8xl">
            {business.name}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/85 sm:text-xl">
            {business.tagline}
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-ivory/70">
            {business.sloganParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3">
                {part}
                {i < business.sloganParts.length - 1 ? <span>·</span> : null}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/book">Agendar Agora</Link>
            </Button>
            <Button asChild size="lg" variant="ivory">
              <Link to="/services">Explorar Serviços</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </section>

      {/* 2. Introdução / missão */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Nossa missão</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Uma barbearia feita para durar — visita após visita.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Desde 2018, recebemos os mesmos rostos, as mesmas conversas, os mesmos
              rituais. Acreditamos em técnica apurada, tempo bem usado e atenção real
              a cada detalhe. Nada de pressa. Nada de atalhos.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={placeholderImage("dangelo-intro", 900, 1100)}
              alt="Barbeiro finalizando um corte na D'Angelo Barber Club"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* 3. Serviços principais */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading
            eyebrow="Serviços"
            title="Os mais procurados da casa"
            subtitle="Três experiências que resumem o que fazemos de melhor."
          />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.1}>
              <Link
                to={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={placeholderImage(service.heroImageSeed, 700, 525)}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.shortPhrase}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    A partir de {service.durations[0].price}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/services">Ver todos os serviços</Link>
          </Button>
        </div>
      </Section>

      {/* 4. Filosofia / abordagem */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <img
              src={placeholderImage("dangelo-philosophy", 900, 1100)}
              alt="Detalhe de ferramentas de barbeiro na bancada da D'Angelo Barber Club"
              className="aspect-[4/5] w-full rounded-sm object-cover lg:order-2"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Eyebrow>Nossa abordagem</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Precisão não é pressa.
            </h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-display text-xl text-primary">Precisão</p>
                <p className="mt-1 text-muted-foreground">
                  Técnica apurada em cada corte, sem exceção.
                </p>
              </div>
              <div>
                <p className="font-display text-xl text-primary">Estilo</p>
                <p className="mt-1 text-muted-foreground">
                  Resultado pensado para o seu rosto, sua rotina.
                </p>
              </div>
              <div>
                <p className="font-display text-xl text-primary">Confiança</p>
                <p className="mt-1 text-muted-foreground">
                  A mesma cadeira, o mesmo cuidado, toda vez.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 5. Depoimento em destaque */}
      <Section className="bg-primary text-primary-foreground">
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl leading-relaxed sm:text-4xl">
              “Não troco de barbearia há quatro anos. É o único lugar onde saio
              exatamente como pedi — sempre.”
            </p>
            <footer className="mt-8 text-sm uppercase tracking-widest text-primary-foreground/70">
              Rafael Mendes — Cliente desde 2021
            </footer>
          </blockquote>
        </FadeIn>
      </Section>

      {/* 6. Visite-nos */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Visite-nos</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Na Barra da Tijuca</h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {business.address}
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                Seg–Sex 09h–19h/20h · Sáb 09h–18h · Dom fechado
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {business.phone}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/location">Como chegar</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/book">Agendar Agora</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={placeholderImage("dangelo-storefront", 900, 700)}
              alt="Fachada da D'Angelo Barber Club na Avenida das Américas"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* 7. CTA final */}
      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Reserve seu horário e sinta a diferença.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="ivory">
                <Link to="/book">Agendar Agora</Link>
              </Button>
              <a
                href={`tel:${business.phoneHref}`}
                className="text-lg font-medium text-ivory/90 hover:text-ivory"
              >
                {business.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
