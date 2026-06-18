import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "#/components/ui/accordion";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { PageHero } from "#/components/site/PageHero";
import { JsonLd } from "#/components/site/JsonLd";
import { business, getRelatedServices, placeholderImage, type Service } from "#/lib/data";

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

export function ServicePage({ service }: { service: Service }) {
  const related = getRelatedServices(service.slug, 3);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.shortPhrase,
          provider: { "@type": "LocalBusiness", name: business.name },
          areaServed: business.neighborhood,
          offers: service.durations.map((d) => ({
            "@type": "Offer",
            priceCurrency: "BRL",
            price: d.price.replace("R$", ""),
            description: `${d.duration} — ${d.price}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Serviços", item: "/services" },
            {
              "@type": "ListItem",
              position: 3,
              name: service.name,
              item: `/services/${service.slug}`,
            },
          ],
        }}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.name}
        subtitle={service.shortPhrase}
        image={placeholderImage(service.heroImageSeed, 1920, 1280)}
        imageAlt={`${service.name} — D'Angelo Barber Club`}
        height="full"
      >
        <div className="mt-9 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link to="/book" search={{ service: service.slug }}>
              Agendar este serviço
            </Link>
          </Button>
        </div>
      </PageHero>

      {/* Visão geral */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-6">
            <Eyebrow>Visão geral</Eyebrow>
            {service.overview.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* O que está incluído + Preços */}
      <Section className="bg-secondary/40">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>O que está incluído</Eyebrow>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">{service.idealFor}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Eyebrow>Duração e valores</Eyebrow>
            <div className="mt-6 divide-y divide-border rounded-sm border border-border bg-card">
              {service.durations.map((d) => (
                <div key={d.duration} className="flex items-center justify-between px-6 py-5">
                  <span className="text-lg">{d.duration}</span>
                  <span className="font-display text-2xl text-primary">{d.price}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-6 w-full" size="lg">
              <Link to="/book" search={{ service: service.slug }}>
                Agendar este serviço
              </Link>
            </Button>
          </FadeIn>
        </div>
      </Section>

      {/* A experiência */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="O ritual" title="A experiência" align="center" className="mx-auto" />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {service.experience.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.08}>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary font-display text-lg text-primary">
                  {index + 1}
                </div>
                <p className="mt-4 font-display text-xl">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefícios */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Resultados" title="Benefícios" align="center" className="mx-auto" />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.08}>
              <div className="rounded-sm border border-border bg-card p-8">
                <p className="font-display text-2xl text-primary">{benefit.title}</p>
                <p className="mt-3 text-muted-foreground">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Para quem é / não é */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Para quem é</Eyebrow>
            <ul className="mt-6 space-y-4">
              {service.idealForList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Eyebrow>Para quem não é</Eyebrow>
            <ul className="mt-6 space-y-4">
              {service.notIdealFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-10 max-w-3xl">
            {service.faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      {/* Serviços relacionados */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Continue explorando" title="Serviços relacionados" />
        </FadeIn>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedService, index) => (
            <FadeIn key={relatedService.slug} delay={index * 0.08}>
              <Link
                to={`/services/${relatedService.slug}`}
                className="group block overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={placeholderImage(relatedService.heroImageSeed, 700, 525)}
                    alt={relatedService.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{relatedService.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{relatedService.shortPhrase}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Pronto para experimentar {service.name.toLowerCase()}?
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="ivory">
                <Link to="/book" search={{ service: service.slug }}>
                  Agendar este serviço
                </Link>
              </Button>
              <a
                href={`tel:${business.phoneHref}`}
                className="flex items-center gap-2 text-lg font-medium text-ivory/90 hover:text-ivory"
              >
                <Phone className="h-5 w-5" />
                {business.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
