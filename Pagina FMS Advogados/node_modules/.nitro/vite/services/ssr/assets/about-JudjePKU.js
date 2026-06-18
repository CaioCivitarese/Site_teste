import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { p as placeholderImage, b as business, B as Button } from "./router-CRFfZZD3.js";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.js";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.js";
import { P as PageHero } from "./PageHero-ckxjXdDW.js";
import "sonner";
import "react";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
function FadeIn({
  children,
  delay = 0
}) {
  return /* @__PURE__ */ jsx(motion.div, { initial: {
    opacity: 0,
    y: 24
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1]
  }, children });
}
const timeline = [{
  year: "2018",
  title: "Fundação",
  description: "Abrimos as portas na Barra da Tijuca com duas cadeiras e uma promessa: técnica sem pressa."
}, {
  year: "2020",
  title: "Primeira expansão",
  description: "Novo espaço, mais cadeiras, mesma filosofia de atendimento."
}, {
  year: "2023",
  title: "Renovação completa",
  description: "Reformamos o salão pensando em conforto e em uma experiência mais editorial."
}, {
  year: "2026",
  title: "Hoje",
  description: "Oito anos depois, continuamos recebendo os mesmos rostos — e novos também."
}];
const team = [{
  name: "Ricardo D'Angelo",
  role: "Fundador & Master Barber",
  seed: "dangelo-team-ricardo"
}, {
  name: "Bruno Castro",
  role: "Barbeiro Sênior",
  seed: "dangelo-team-bruno"
}, {
  name: "Felipe Rocha",
  role: "Especialista em Barba",
  seed: "dangelo-team-felipe"
}, {
  name: "Diego Salles",
  role: "Barbeiro",
  seed: "dangelo-team-diego"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Sobre nós", title: "Uma barbearia construída devagar", subtitle: "Oito anos de técnica, paciência e a mesma cadeira para os mesmos rostos.", image: placeholderImage("dangelo-about-hero", 1920, 1280), imageAlt: "Ricardo D'Angelo, fundador da D'Angelo Barber Club, no espaço da barbearia" }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Nossa história" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Começou com duas cadeiras." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: [
          "Em ",
          business.founded,
          ", Ricardo D'Angelo abriu as portas de um espaço pequeno na Barra da Tijuca. A ideia era simples: oferecer o tipo de atendimento que ele gostaria de receber — técnico, atencioso, sem pressa."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: "Oito anos depois, a equipe cresceu, o espaço mudou, mas o princípio continua o mesmo: cada cliente recebe o tempo e a atenção que merece." })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-about-history", 900, 1100), alt: "Fachada original da D'Angelo Barber Club", className: "aspect-[4/5] w-full rounded-sm object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Linha do tempo", title: "Como chegamos até aqui" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4", children: timeline.map((item, index) => /* @__PURE__ */ jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-primary pt-5", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-primary", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.description })
      ] }) }, item.year)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Equipe", title: "Quem cuida de você" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: team.map((member, index) => /* @__PURE__ */ jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: placeholderImage(member.seed, 500, 600), alt: `${member.name}, ${member.role} na D'Angelo Barber Club`, className: "aspect-[5/6] w-full rounded-sm object-cover" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-xl", children: member.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: member.role })
      ] }) }, member.name)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-philosophy-deep", 900, 1100), alt: "Detalhe de uma navalha sobre a bancada da barbearia", className: "aspect-[4/5] w-full rounded-sm object-cover lg:order-2" }) }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 0.15, children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Filosofia" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Técnica antes de tendência." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Não seguimos modismo. Seguimos o que funciona para o seu rosto, seu cabelo, sua rotina. Um corte bem feito não precisa de filtro — ele se sustenta por semanas, em qualquer luz." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: "Por isso investimos em treinamento constante da equipe e em ferramentas de qualidade. O resultado é consistente, visita após visita." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Venha conhecer pessoalmente." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) }),
        /* @__PURE__ */ jsx("a", { href: `tel:${business.phoneHref}`, className: "text-lg font-medium text-ivory/90 hover:text-ivory", children: business.phone })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
