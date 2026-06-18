import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as placeholderImage, b as business, B as Button } from "./router-CRFfZZD3.mjs";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.mjs";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.mjs";
import { P as PageHero } from "./PageHero-ckxjXdDW.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FadeIn({
  children,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Sobre nós", title: "Uma barbearia construída devagar", subtitle: "Oito anos de técnica, paciência e a mesma cadeira para os mesmos rostos.", image: placeholderImage("dangelo-about-hero", 1920, 1280), imageAlt: "Ricardo D'Angelo, fundador da D'Angelo Barber Club, no espaço da barbearia" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Nossa história" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Começou com duas cadeiras." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: [
          "Em ",
          business.founded,
          ", Ricardo D'Angelo abriu as portas de um espaço pequeno na Barra da Tijuca. A ideia era simples: oferecer o tipo de atendimento que ele gostaria de receber — técnico, atencioso, sem pressa."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: "Oito anos depois, a equipe cresceu, o espaço mudou, mas o princípio continua o mesmo: cada cliente recebe o tempo e a atenção que merece." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage("dangelo-about-history", 900, 1100), alt: "Fachada original da D'Angelo Barber Club", className: "aspect-[4/5] w-full rounded-sm object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Linha do tempo", title: "Como chegamos até aqui" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4", children: timeline.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-primary pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-primary", children: item.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.description })
      ] }) }, item.year)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Equipe", title: "Quem cuida de você" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: team.map((member, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage(member.seed, 500, 600), alt: `${member.name}, ${member.role} na D'Angelo Barber Club`, className: "aspect-[5/6] w-full rounded-sm object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: member.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: member.role })
      ] }) }, member.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage("dangelo-philosophy-deep", 900, 1100), alt: "Detalhe de uma navalha sobre a bancada da barbearia", className: "aspect-[4/5] w-full rounded-sm object-cover lg:order-2" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.15, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Filosofia" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Técnica antes de tendência." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Não seguimos modismo. Seguimos o que funciona para o seu rosto, seu cabelo, sua rotina. Um corte bem feito não precisa de filtro — ele se sustenta por semanas, em qualquer luz." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: "Por isso investimos em treinamento constante da equipe e em ferramentas de qualidade. O resultado é consistente, visita após visita." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Venha conhecer pessoalmente." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${business.phoneHref}`, className: "text-lg font-medium text-ivory/90 hover:text-ivory", children: business.phone })
      ] })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
