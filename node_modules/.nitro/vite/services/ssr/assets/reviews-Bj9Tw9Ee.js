import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { J as JsonLd, b as business, p as placeholderImage, B as Button } from "./router-CRFfZZD3.js";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.js";
import "clsx";
import { P as PageHero } from "./PageHero-ckxjXdDW.js";
import "sonner";
import "react";
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
const testimonials = [{
  quote: "Não troco de barbearia há quatro anos. É o único lugar onde saio exatamente como pedi — sempre.",
  name: "Rafael Mendes",
  detail: "Cliente desde 2021"
}, {
  quote: "O Corte + Barba virou ritual de sexta-feira. Chego estressado, saio outra pessoa.",
  name: "Thiago Almeida",
  detail: "Cliente desde 2019"
}, {
  quote: "Levei meu filho pela primeira vez no Pai e Filho. Ele já pergunta quando vamos voltar.",
  name: "Marcelo Souza",
  detail: "Cliente desde 2023"
}, {
  quote: "Atendimento pontual, ambiente impecável. O Corte Executivo é exatamente o que minha rotina precisa.",
  name: "André Lima",
  detail: "Cliente desde 2022"
}, {
  quote: "A Barba Premium resolveu um problema de simetria que eu nunca tinha conseguido corrigir em outro lugar.",
  name: "Felipe Carvalho",
  detail: "Cliente desde 2020"
}, {
  quote: "Ambiente sóbrio, sem aquele clima de pressa. Vale cada minuto de espera.",
  name: "Gustavo Ribeiro",
  detail: "Cliente desde 2024"
}];
const pressLogos = ["Veja Rio", "O Globo", "Time Out RJ", "Esquire Brasil"];
function ReviewsPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "186"
      }
    } }),
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Avaliações", title: "O que dizem sobre nós", subtitle: "Quatro estrelas não bastam quando o cliente sai exatamente como pediu.", image: placeholderImage("dangelo-reviews-hero", 1920, 1280), imageAlt: "Cliente satisfeito após atendimento na D'Angelo Barber Club" }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-primary", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-6 w-6 fill-current" }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-5xl", children: "4.9 de 5" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Baseado em 186 avaliações verificadas" })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { className: "bg-secondary/40 pt-0 lg:pt-0", children: /* @__PURE__ */ jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, index) => /* @__PURE__ */ jsx(FadeIn, { delay: index * 0.06, children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col rounded-sm border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-primary", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 flex-1 text-muted-foreground", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 font-display text-lg", children: t.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: t.detail })
    ] }) }, t.name)) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-customer-story", 900, 1100), alt: "Cliente recorrente sendo atendido na D'Angelo Barber Club", className: "aspect-[4/5] w-full rounded-sm object-cover" }) }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 0.15, children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Em destaque" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Quatro anos, a mesma cadeira." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Rafael Mendes chegou pela primeira vez em 2021, indicado por um colega de trabalho. Hoje, vem toda terceira sexta-feira do mês — sempre no mesmo horário, sempre com o mesmo barbeiro." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg leading-relaxed text-muted-foreground", children: '"Não é sobre ter o cabelo perfeito uma vez. É sobre saber que vai estar bem todas as vezes", diz ele.' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Como visto em" }) }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-12 text-2xl font-display text-muted-foreground/60", children: pressLogos.map((logo) => /* @__PURE__ */ jsx("span", { children: logo }, logo)) }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Venha viver a experiência você mesmo." }),
      /* @__PURE__ */ jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) }) })
    ] }) }) })
  ] });
}
export {
  ReviewsPage as component
};
