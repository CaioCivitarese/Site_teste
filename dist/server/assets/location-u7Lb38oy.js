import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Clock, Car, Bus } from "lucide-react";
import { J as JsonLd, b as business, p as placeholderImage, B as Button } from "./router-CRFfZZD3.js";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.js";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.js";
import { P as PageHero } from "./PageHero-ckxjXdDW.js";
import "sonner";
import "react";
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
const areaPhotos = ["dangelo-area-1", "dangelo-area-2", "dangelo-area-3"];
function LocationPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: {
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
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Localização", title: "Na Barra da Tijuca", subtitle: "Fácil de chegar, fácil de estacionar, sempre de portas abertas.", image: placeholderImage("dangelo-location-hero", 1920, 1280), imageAlt: "Fachada da D'Angelo Barber Club na Avenida das Américas" }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsx(Eyebrow, { children: "Endereço" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 text-4xl leading-tight sm:text-5xl", children: "Venha nos visitar" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 flex items-start gap-3 text-lg text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          business.address
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address)}`, target: "_blank", rel: "noreferrer", children: "Como chegar" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.15, children: /* @__PURE__ */ jsx("iframe", { title: "Mapa de localização da D'Angelo Barber Club", className: "aspect-[4/3] w-full rounded-sm border border-border", loading: "lazy", src: `https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed` }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Horários", title: "Quando estamos abertos" }) }),
      /* @__PURE__ */ jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-xl divide-y divide-border rounded-sm border border-border bg-card", children: business.hours.map((h) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3 text-foreground", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-primary" }),
          h.day
        ] }),
        /* @__PURE__ */ jsx("span", { className: h.hours === "Fechado" ? "text-muted-foreground" : "font-medium", children: h.hours })
      ] }, h.day)) }) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Como chegar", title: "Estacionamento e transporte" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-8 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsx(FadeIn, { delay: 0.05, children: /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsx(Car, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-xl", children: "De carro" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Vagas na própria via e estacionamento conveniado a 50 metros da entrada, na Avenida das Américas." })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsx(Bus, { className: "h-7 w-7 text-primary" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-xl", children: "Transporte público" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Linhas de BRT e ônibus com parada a poucos minutos a pé do endereço." })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Primeira vez aqui?", title: "Guia da primeira visita" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 max-w-2xl space-y-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { children: "Chegue com 10 minutos de antecedência para aproveitar a recepção com calma." }),
        /* @__PURE__ */ jsx("p", { children: "Se for sua primeira vez, mencione na chegada — preparamos uma consultoria um pouco mais longa." }),
        /* @__PURE__ */ jsx("p", { children: "Trouxe referências de estilo? Pode mostrar ao barbeiro antes de começar." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Ao redor", title: "A vizinhança" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: areaPhotos.map((seed, index) => /* @__PURE__ */ jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsx("img", { src: placeholderImage(seed, 600, 600), alt: "Vizinhança da D'Angelo Barber Club na Barra da Tijuca", className: "aspect-square w-full rounded-sm object-cover" }) }, seed)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: "Esperamos por você na Barra." }),
      /* @__PURE__ */ jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsx(Link, { to: "/book", children: "Agendar Agora" }) }) })
    ] }) }) })
  ] });
}
export {
  LocationPage as component
};
