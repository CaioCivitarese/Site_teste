import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as placeholderImage, s as services, B as Button } from "./router-CRFfZZD3.mjs";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.mjs";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.mjs";
import { P as PageHero } from "./PageHero-ckxjXdDW.mjs";
import "../_libs/sonner.mjs";
import { h as Sparkles, C as Clock, d as ShieldCheck } from "../_libs/lucide-react.mjs";
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
const highlights = [{
  icon: Sparkles,
  title: "Produtos premium",
  description: "Selecionados para cada etapa do atendimento."
}, {
  icon: Clock,
  title: "Sem pressa",
  description: "Cada serviço recebe o tempo que precisa."
}, {
  icon: ShieldCheck,
  title: "Higiene rigorosa",
  description: "Ferramentas esterilizadas a cada atendimento."
}];
const timeline = [{
  step: "1",
  title: "Agende",
  description: "Escolha o serviço e o horário pelo site ou telefone."
}, {
  step: "2",
  title: "Chegue com calma",
  description: "Receba uma bebida de cortesia na espera."
}, {
  step: "3",
  title: "Atendimento",
  description: "Consultoria, execução e acabamento sem pressa."
}, {
  step: "4",
  title: "Saída",
  description: "Styling final e recomendações de manutenção."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Serviços", title: "Cada visita, um ritual", subtitle: "Do corte clássico à experiência em família, cada serviço foi desenhado com técnica, calma e atenção ao detalhe.", image: placeholderImage("dangelo-services-hero", 1920, 1280), imageAlt: "Barbeiro atendendo cliente na D'Angelo Barber Club" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground", children: "Cinco serviços, um único padrão de cuidado. Escolha o que combina com o momento — manutenção rápida, transformação completa ou uma experiência para compartilhar." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-secondary/40 pt-0 lg:pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: services.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: `/services/${service.slug}`, className: "group block overflow-hidden rounded-sm border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage(service.heroImageSeed, 700, 525), alt: service.name, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { className: "mb-2", children: service.eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl", children: service.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: service.shortPhrase }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm font-medium text-primary", children: [
          "A partir de ",
          service.durations[0].price,
          " · ",
          service.durations[0].duration
        ] })
      ] })
    ] }) }, service.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Diferenciais", title: "O que acompanha cada atendimento", align: "center", className: "mx-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-3", children: highlights.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "mx-auto h-8 w-8 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.description })
      ] }) }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Linha do tempo", title: "O que esperar da sua visita" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4", children: timeline.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t-2 border-primary pt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-primary", children: item.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.description })
      ] }) }, item.step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Não sabe qual serviço escolher?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-ivory/80", children: "Fale com a gente antes de agendar — ajudamos a encontrar o serviço certo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) }) })
    ] }) }) })
  ] });
}
export {
  ServicesPage as component
};
