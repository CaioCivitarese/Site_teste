import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { J as JsonLd, b as business, p as placeholderImage, B as Button } from "./router-CRFfZZD3.mjs";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.mjs";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.mjs";
import { P as PageHero } from "./PageHero-ckxjXdDW.mjs";
import "../_libs/sonner.mjs";
import { a as MapPin, C as Clock, c as Car, B as Bus } from "../_libs/lucide-react.mjs";
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
const areaPhotos = ["dangelo-area-1", "dangelo-area-2", "dangelo-area-3"];
function LocationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(JsonLd, { data: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida das Américas, 3500",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        addressCountry: "BR"
      },
      telephone: business.phone
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Localização", title: "Na Barra da Tijuca", subtitle: "Fácil de chegar, fácil de estacionar, sempre de portas abertas.", image: placeholderImage("dangelo-location-hero", 1920, 1280), imageAlt: "Fachada da D'Angelo Barber Club na Avenida das Américas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Endereço" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Venha nos visitar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 flex items-start gap-3 text-lg text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          business.address
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`, target: "_blank", rel: "noreferrer", children: "Como chegar" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Mapa de localização da D'Angelo Barber Club", className: "aspect-[4/3] w-full rounded-sm border border-border", loading: "lazy", src: `https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed` }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Horários", title: "Quando estamos abertos" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 max-w-xl divide-y divide-border rounded-sm border border-border bg-card", children: business.hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
          h.day
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: h.hours === "Fechado" ? "text-muted-foreground" : "font-medium", children: h.hours })
      ] }, h.day)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Como chegar", title: "Estacionamento e transporte" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-8 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: "De carro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Vagas na própria via e estacionamento conveniado a 50 metros da entrada, na Avenida das Américas." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bus, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: "Transporte público" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Linhas de BRT e ônibus com parada a poucos minutos a pé do endereço." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Primeira vez aqui?", title: "Guia da primeira visita" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 max-w-2xl space-y-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chegue com 10 minutos de antecedência para aproveitar a recepção com calma." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Se for sua primeira vez, mencione na chegada — preparamos uma consultoria um pouco mais longa." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Trouxe referências de estilo? Pode mostrar ao barbeiro antes de começar." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Ao redor", title: "A vizinhança" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: areaPhotos.map((seed, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage(seed, 600, 600), alt: "Vizinhança da D'Angelo Barber Club na Barra da Tijuca", className: "aspect-square w-full rounded-sm object-cover" }) }, seed)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Esperamos por você na Barra." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) }) })
    ] }) }) })
  ] });
}
export {
  LocationPage as component
};
