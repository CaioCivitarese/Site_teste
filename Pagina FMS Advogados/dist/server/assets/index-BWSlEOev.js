import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock, Phone } from "lucide-react";
import { s as services, J as JsonLd, b as business, p as placeholderImage, B as Button } from "./router-CRFfZZD3.js";
import { E as Eyebrow, S as Section } from "./Section-CVKEaPpt.js";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.js";
import "sonner";
import "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const featuredSlugs = ["haircut-beard", "premium-beard", "classic-cut"];
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
function Home() {
  const featured = services.filter((s) => featuredSlugs.includes(s.slug));
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      image: placeholderImage("dangelo-home-hero", 1600, 900),
      telephone: business.phone,
      email: business.email,
      address: business.address,
      priceRange: "R$60 - R$180"
    } }),
    /* @__PURE__ */ jsxs("section", { className: "relative flex h-screen items-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-home-hero", 1920, 1280), alt: "Interior da barbearia D'Angelo Barber Club, Barra da Tijuca", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx(Eyebrow, { className: "text-ivory/90", children: "Barra da Tijuca · Desde 2018" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 max-w-3xl text-6xl leading-[1.05] text-ivory sm:text-7xl lg:text-8xl", children: business.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-xl text-lg leading-relaxed text-ivory/85 sm:text-xl", children: business.tagline }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-ivory/70", children: business.sloganParts.map((part, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
          part,
          i < business.sloganParts.length - 1 ? /* @__PURE__ */ jsx("span", { children: "·" }) : null
        ] }, part)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsx(Link, { to: "/services", children: "Explorar Serviços" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-6 w-6 animate-bounce" }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Nossa missão" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Uma barbearia feita para durar — visita após visita." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-muted-foreground", children: "Desde 2018, recebemos os mesmos rostos, as mesmas conversas, os mesmos rituais. Acreditamos em técnica apurada, tempo bem usado e atenção real a cada detalhe. Nada de pressa. Nada de atalhos." })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-intro", 900, 1100), alt: "Barbeiro finalizando um corte na D'Angelo Barber Club", className: "aspect-[4/5] w-full rounded-sm object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Serviços", title: "Os mais procurados da casa", subtitle: "Três experiências que resumem o que fazemos de melhor." }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: featured.map((service, index) => /* @__PURE__ */ jsx(FadeIn, { delay: index * 0.1, children: /* @__PURE__ */ jsxs(Link, { to: `/services/${service.slug}`, className: "group block overflow-hidden rounded-sm border border-border bg-card", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: placeholderImage(service.heroImageSeed, 700, 525), alt: service.name, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl", children: service.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: service.shortPhrase }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm font-medium text-primary", children: [
            "A partir de ",
            service.durations[0].price
          ] })
        ] })
      ] }) }, service.slug)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/services", children: "Ver todos os serviços" }) }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-philosophy", 900, 1100), alt: "Detalhe de ferramentas de barbeiro na bancada da D'Angelo Barber Club", className: "aspect-[4/5] w-full rounded-sm object-cover lg:order-2" }) }),
      /* @__PURE__ */ jsxs(FadeIn, { delay: 0.15, children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Nossa abordagem" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Precisão não é pressa." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-primary", children: "Precisão" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: "Técnica apurada em cada corte, sem exceção." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-primary", children: "Estilo" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: "Resultado pensado para o seu rosto, sua rotina." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl text-primary", children: "Confiança" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-muted-foreground", children: "A mesma cadeira, o mesmo cuidado, toda vez." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("blockquote", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-3xl leading-relaxed sm:text-4xl", children: "“Não troco de barbearia há quatro anos. É o único lugar onde saio exatamente como pedi — sempre.”" }),
      /* @__PURE__ */ jsx("footer", { className: "mt-8 text-sm uppercase tracking-widest text-primary-foreground/70", children: "Rafael Mendes — Cliente desde 2021" })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Visite-nos" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Na Barra da Tijuca" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
            business.address
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Clock, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
            "Seg–Sex 09h–19h/20h · Sáb 09h–18h · Dom fechado"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
            business.phone
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/location", children: "Como chegar" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-storefront", 900, 700), alt: "Fachada da D'Angelo Barber Club na Avenida das Américas", className: "aspect-[4/3] w-full rounded-sm object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Reserve seu horário e sinta a diferença." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) }),
        /* @__PURE__ */ jsx("a", { href: `tel:${business.phoneHref}`, className: "text-lg font-medium text-ivory/90 hover:text-ivory", children: business.phone })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
