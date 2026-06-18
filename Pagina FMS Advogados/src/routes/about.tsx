import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "#/components/ui/button";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { SectionHeading } from "#/components/site/SectionHeading";
import { PageHero } from "#/components/site/PageHero";
import { business, placeholderImage } from "#/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Conheça a história, a equipe e a filosofia da D'Angelo Barber Club desde 2018.",
      },
      { property: "og:title", content: "Sobre | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Conheça a história, a equipe e a filosofia da D'Angelo Barber Club.",
      },
      { property: "og:image", content: placeholderImage("dangelo-about-hero", 1600, 900) },
    ],
  }),
  component: AboutPage,
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

const timeline = [
  { year: "2018", title: "Fundação", description: "Abrimos as portas na Barra da Tijuca com duas cadeiras e uma promessa: técnica sem pressa." },
  { year: "2020", title: "Primeira expansão", description: "Novo espaço, mais cadeiras, mesma filosofia de atendimento." },
  { year: "2023", title: "Renovação completa", description: "Reformamos o salão pensando em conforto e em uma experiência mais editorial." },
  { year: "2026", title: "Hoje", description: "Oito anos depois, continuamos recebendo os mesmos rostos — e novos também." },
];

const team = [
  { name: "Ricardo D'Angelo", role: "Fundador & Master Barber", seed: "dangelo-team-ricardo" },
  { name: "Bruno Castro", role: "Barbeiro Sênior", seed: "dangelo-team-bruno" },
  { name: "Felipe Rocha", role: "Especialista em Barba", seed: "dangelo-team-felipe" },
  { name: "Diego Salles", role: "Barbeiro", seed: "dangelo-team-diego" },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Sobre nós"
        title="Uma barbearia construída devagar"
        subtitle="Oito anos de técnica, paciência e a mesma cadeira para os mesmos rostos."
        image={placeholderImage("dangelo-about-hero", 1920, 1280)}
        imageAlt="Ricardo D'Angelo, fundador da D'Angelo Barber Club, no espaço da barbearia"
      />

      {/* História */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <Eyebrow>Nossa história</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Começou com duas cadeiras.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Em {business.founded}, Ricardo D'Angelo abriu as portas de um espaço pequeno
              na Barra da Tijuca. A ideia era simples: oferecer o tipo de atendimento que
              ele gostaria de receber — técnico, atencioso, sem pressa.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Oito anos depois, a equipe cresceu, o espaço mudou, mas o princípio
              continua o mesmo: cada cliente recebe o tempo e a atenção que merece.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <img
              src={placeholderImage("dangelo-about-history", 900, 1100)}
              alt="Fachada original da D'Angelo Barber Club"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Linha do tempo */}
      <Section className="bg-secondary/40">
        <FadeIn>
          <SectionHeading eyebrow="Linha do tempo" title="Como chegamos até aqui" />
        </FadeIn>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <FadeIn key={item.year} delay={index * 0.08}>
              <div className="border-t-2 border-primary pt-5">
                <p className="font-display text-3xl text-primary">{item.year}</p>
                <p className="mt-2 text-lg">{item.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Equipe */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Equipe" title="Quem cuida de você" />
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.08}>
              <div>
                <img
                  src={placeholderImage(member.seed, 500, 600)}
                  alt={`${member.name}, ${member.role} na D'Angelo Barber Club`}
                  className="aspect-[5/6] w-full rounded-sm object-cover"
                />
                <p className="mt-4 font-display text-xl">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Filosofia */}
      <Section className="bg-secondary/40">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <img
              src={placeholderImage("dangelo-philosophy-deep", 900, 1100)}
              alt="Detalhe de uma navalha sobre a bancada da barbearia"
              className="aspect-[4/5] w-full rounded-sm object-cover lg:order-2"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Eyebrow>Filosofia</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Técnica antes de tendência.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Não seguimos modismo. Seguimos o que funciona para o seu rosto, seu
              cabelo, sua rotina. Um corte bem feito não precisa de filtro — ele se
              sustenta por semanas, em qualquer luz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Por isso investimos em treinamento constante da equipe e em
              ferramentas de qualidade. O resultado é consistente, visita após
              visita.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-foreground text-ivory">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">
              Venha conhecer pessoalmente.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="ivory">
                <Link to="/book">Agendar Agora</Link>
              </Button>
              <a href={`tel:${business.phoneHref}`} className="text-lg font-medium text-ivory/90 hover:text-ivory">
                {business.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
