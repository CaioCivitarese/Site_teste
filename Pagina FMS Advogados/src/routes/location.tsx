import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Car, Bus, Clock } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { PageHero } from "#/components/site/PageHero";
import { JsonLd } from "#/components/site/JsonLd";
import { business, placeholderImage } from "#/lib/data";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Localização | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Endereço, horários e como chegar à D'Angelo Barber Club na Barra da Tijuca, Rio de Janeiro.",
      },
      { property: "og:title", content: "Localização | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Endereço, horários e como chegar à D'Angelo Barber Club.",
      },
      { property: "og:image", content: placeholderImage("dangelo-location-hero", 1600, 900) },
    ],
  }),
  component: LocationPage,
});

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

const areaPhotos = ["dangelo-area-1", "dangelo-area-2", "dangelo-area-3"];

function LocationPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida das Américas, 3500",
            addressLocality: "Rio de Janeiro",
            addressRegion: "RJ",
            addressCountry: "BR",
          },
          telephone: business.phone,
        }}
      />

      <PageHero
        eyebrow="Localização"
        title="Na Barra da Tijuca"
        subtitle="Fácil de chegar, fácil de estacionar, sempre de portas abertas."
        image={placeholderImage("dangelo-location-hero", 1920, 1280)}
        imageAlt="Fachada da D'Angelo Barber Club na Avenida das Américas"
      />

      {/* Endereço + mapa */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Endereço</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Venha nos visitar</h2>
            <p className="mt-6 flex items-start gap-3 text-lg text-muted-foreground">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {business.address}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/book">Agendar Agora</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <iframe
              title="Mapa de localização da D'Angelo Barber Club"
              className="aspect-[4/3] w-full rounded-sm border border-border"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
            />
          </FadeIn>
        </div>
      </Section>

      {/* Horários */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Horários" title="Quando estamos abertos" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10 max-w-xl divide-y divide-border rounded-sm border border-border bg-card">
            {business.hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between px-6 py-4">
                <span className="flex items-center gap-3 text-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {h.day}
                </span>
                <span className={h.hours === "Fechado" ? "text-muted-foreground" : "font-medium"}>
                  {h.hours}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Estacionamento e transporte */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Como chegar" title="Estacionamento e transporte" />
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="rounded-sm border border-border bg-card p-8">
              <Car className="h-7 w-7 text-primary" />
              <p className="mt-4 font-display text-xl">De carro</p>
              <p className="mt-2 text-muted-foreground">
                Vagas na própria via e estacionamento conveniado a 50 metros da
                entrada, na Avenida das Américas.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-border bg-card p-8">
              <Bus className="h-7 w-7 text-primary" />
              <p className="mt-4 font-display text-xl">Transporte público</p>
              <p className="mt-2 text-muted-foreground">
                Linhas de BRT e ônibus com parada a poucos minutos a pé do
                endereço.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Guia da primeira visita */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Primeira vez aqui?" title="Guia da primeira visita" />
        </FadeIn>
        <div className="mt-10 max-w-2xl space-y-4 text-muted-foreground">
          <p>Chegue com 10 minutos de antecedência para aproveitar a recepção com calma.</p>
          <p>Se for sua primeira vez, mencione na chegada — preparamos uma consultoria um pouco mais longa.</p>
          <p>Trouxe referências de estilo? Pode mostrar ao barbeiro antes de começar.</p>
        </div>
      </Section>

      {/* Fotos da região */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Ao redor" title="A vizinhança" />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {areaPhotos.map((seed, index) => (
            <FadeIn key={seed} delay={index * 0.08}>
              <img
                src={placeholderImage(seed, 600, 600)}
                alt="Vizinhança da D'Angelo Barber Club na Barra da Tijuca"
                className="aspect-square w-full rounded-sm object-cover"
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Esperamos por você na Barra.
            </h2>
            <div className="mt-9">
              <Button asChild size="lg" variant="ivory">
                <Link to="/book">Agendar Agora</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
