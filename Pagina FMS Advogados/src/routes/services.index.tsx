import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { PageHero } from "#/components/site/PageHero";
import { services, placeholderImage } from "#/lib/data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Serviços | D'Angelo Barber Club" },
      {
        name: "description",
        content:
          "Conheça todos os serviços da D'Angelo Barber Club: cortes, barba e experiências exclusivas na Barra da Tijuca.",
      },
      { property: "og:title", content: "Serviços | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Cortes, barba e experiências exclusivas para cada tipo de visita.",
      },
      { property: "og:image", content: placeholderImage("dangelo-services-hero", 1600, 900) },
    ],
  }),
  component: ServicesPage,
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

const highlights = [
  { icon: Sparkles, title: "Produtos premium", description: "Selecionados para cada etapa do atendimento." },
  { icon: Clock, title: "Sem pressa", description: "Cada serviço recebe o tempo que precisa." },
  { icon: ShieldCheck, title: "Higiene rigorosa", description: "Ferramentas esterilizadas a cada atendimento." },
];

const timeline = [
  { step: "1", title: "Agende", description: "Escolha o serviço e o horário pelo site ou telefone." },
  { step: "2", title: "Chegue com calma", description: "Receba uma bebida de cortesia na espera." },
  { step: "3", title: "Atendimento", description: "Consultoria, execução e acabamento sem pressa." },
  { step: "4", title: "Saída", description: "Styling final e recomendações de manutenção." },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Serviços"
        title="Cada visita, um ritual"
        subtitle="Do corte clássico à experiência em família, cada serviço foi desenhado com técnica, calma e atenção ao detalhe."
        image={placeholderImage("dangelo-services-hero", 1920, 1280)}
        imageAlt="Barbeiro atendendo cliente na D'Angelo Barber Club"
      />

      <Section>
        <FadeIn>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            Cinco serviços, um único padrão de cuidado. Escolha o que combina com o
            momento — manutenção rápida, transformação completa ou uma experiência
            para compartilhar.
          </p>
        </FadeIn>
      </Section>

      <Section className="bg-secondary/40 pt-0 lg:pt-0">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.08}>
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
                  <Eyebrow className="mb-2">{service.eyebrow}</Eyebrow>
                  <h3 className="text-2xl">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.shortPhrase}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    A partir de {service.durations[0].price} · {service.durations[0].duration}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Complementos e diferenciais */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Diferenciais"
            title="O que acompanha cada atendimento"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="text-center">
                <item.icon className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-xl">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* O que esperar */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Linha do tempo" title="O que esperar da sua visita" />
        </FadeIn>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <div className="border-t-2 border-primary pt-5">
                <p className="font-display text-3xl text-primary">{item.step}</p>
                <p className="mt-2 text-lg">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Não sabe qual serviço escolher?
            </h2>
            <p className="mt-4 max-w-xl text-ivory/80">
              Fale com a gente antes de agendar — ajudamos a encontrar o serviço certo.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
