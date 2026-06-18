import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { PageHero } from "#/components/site/PageHero";
import { JsonLd } from "#/components/site/JsonLd";
import { business, placeholderImage } from "#/lib/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Avaliações | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Veja o que nossos clientes dizem sobre a D'Angelo Barber Club na Barra da Tijuca.",
      },
      { property: "og:title", content: "Avaliações | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Veja o que nossos clientes dizem sobre a D'Angelo Barber Club.",
      },
      { property: "og:image", content: placeholderImage("dangelo-reviews-hero", 1600, 900) },
    ],
  }),
  component: ReviewsPage,
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

const testimonials = [
  {
    quote: "Não troco de barbearia há quatro anos. É o único lugar onde saio exatamente como pedi — sempre.",
    name: "Rafael Mendes",
    detail: "Cliente desde 2021",
  },
  {
    quote: "O Corte + Barba virou ritual de sexta-feira. Chego estressado, saio outra pessoa.",
    name: "Thiago Almeida",
    detail: "Cliente desde 2019",
  },
  {
    quote: "Levei meu filho pela primeira vez no Pai e Filho. Ele já pergunta quando vamos voltar.",
    name: "Marcelo Souza",
    detail: "Cliente desde 2023",
  },
  {
    quote: "Atendimento pontual, ambiente impecável. O Corte Executivo é exatamente o que minha rotina precisa.",
    name: "André Lima",
    detail: "Cliente desde 2022",
  },
  {
    quote: "A Barba Premium resolveu um problema de simetria que eu nunca tinha conseguido corrigir em outro lugar.",
    name: "Felipe Carvalho",
    detail: "Cliente desde 2020",
  },
  {
    quote: "Ambiente sóbrio, sem aquele clima de pressa. Vale cada minuto de espera.",
    name: "Gustavo Ribeiro",
    detail: "Cliente desde 2024",
  },
];

const pressLogos = ["Veja Rio", "O Globo", "Time Out RJ", "Esquire Brasil"];

function ReviewsPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "186",
          },
        }}
      />

      <PageHero
        eyebrow="Avaliações"
        title="O que dizem sobre nós"
        subtitle="Quatro estrelas não bastam quando o cliente sai exatamente como pediu."
        image={placeholderImage("dangelo-reviews-hero", 1920, 1280)}
        imageAlt="Cliente satisfeito após atendimento na D'Angelo Barber Club"
      />

      {/* Resumo */}
      <Section>
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="mt-4 font-display text-5xl">4.9 de 5</p>
            <p className="mt-2 text-muted-foreground">Baseado em 186 avaliações verificadas</p>
          </div>
        </FadeIn>
      </Section>

      {/* Grade de depoimentos */}
      <Section className="bg-secondary/40 pt-0 lg:pt-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.name} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-sm border border-border bg-card p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-muted-foreground">"{t.quote}"</p>
                <p className="mt-5 font-display text-lg">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* História de cliente em destaque */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <img
              src={placeholderImage("dangelo-customer-story", 900, 1100)}
              alt="Cliente recorrente sendo atendido na D'Angelo Barber Club"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Eyebrow>Em destaque</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Quatro anos, a mesma cadeira.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Rafael Mendes chegou pela primeira vez em 2021, indicado por um colega
              de trabalho. Hoje, vem toda terceira sexta-feira do mês — sempre no
              mesmo horário, sempre com o mesmo barbeiro.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              "Não é sobre ter o cabelo perfeito uma vez. É sobre saber que vai
              estar bem todas as vezes", diz ele.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Imprensa */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Como visto em
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 text-2xl font-display text-muted-foreground/60">
            {pressLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Venha viver a experiência você mesmo.
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
