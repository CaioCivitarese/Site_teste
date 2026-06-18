import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as getRelatedServices, J as JsonLd, b as business, B as Button, p as placeholderImage, c as cn } from "./router-CRFfZZD3.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { S as Section, E as Eyebrow } from "./Section-CVKEaPpt.mjs";
import { S as SectionHeading } from "./SectionHeading-DjIpe2TH.mjs";
import { P as PageHero } from "./PageHero-ckxjXdDW.mjs";
import { g as Check, P as Phone, f as ChevronDown } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item,
  {
    ref,
    className: cn("border-b border-border", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-6 text-left font-display text-xl transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = "AccordionTrigger";
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-6 text-muted-foreground leading-relaxed", className), children })
  }
));
AccordionContent.displayName = "AccordionContent";
function FadeIn({ children, delay = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
      children
    }
  );
}
function ServicePage({ service }) {
  const related = getRelatedServices(service.slug, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JsonLd,
      {
        data: {
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
            description: `${d.duration} — ${d.price}`
          }))
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      JsonLd,
      {
        data: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Serviços", item: "/services" },
            {
              "@type": "ListItem",
              position: 3,
              name: service.name,
              item: `/services/${service.slug}`
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: service.eyebrow,
        title: service.name,
        subtitle: service.shortPhrase,
        image: placeholderImage(service.heroImageSeed, 1920, 1280),
        imageAlt: `${service.name} — D'Angelo Barber Club`,
        height: "full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", search: { service: service.slug }, children: "Agendar este serviço" }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Visão geral" }),
      service.overview.map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: paragraph }, index))
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "O que está incluído" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: service.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground", children: service.idealFor })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Duração e valores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 divide-y divide-border rounded-sm border border-border bg-card", children: service.durations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: d.duration }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-primary", children: d.price })
        ] }, d.duration)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 w-full", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", search: { service: service.slug }, children: "Agendar este serviço" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "O ritual", title: "A experiência", align: "center", className: "mx-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5", children: service.experience.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary font-display text-lg text-primary", children: index + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: step.description })
      ] }) }, step.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Resultados", title: "Benefícios", align: "center", className: "mx-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: service.benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary", children: benefit.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: benefit.description })
      ] }) }, benefit.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Para quem é" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: service.idealForList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeIn, { delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { children: "Para quem não é" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: service.notIdealFor.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" }),
          item
        ] }, item)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Dúvidas", title: "Perguntas frequentes" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-10 max-w-3xl", children: service.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: faq.q, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: faq.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: faq.a })
      ] }, faq.q)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Continue explorando", title: "Serviços relacionados" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: related.map((relatedService, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: index * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/services/${relatedService.slug}`,
          className: "group block overflow-hidden rounded-sm border border-border bg-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: placeholderImage(relatedService.heroImageSeed, 700, 525),
                alt: relatedService.name,
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl", children: relatedService.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: relatedService.shortPhrase })
            ] })
          ]
        }
      ) }, relatedService.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-foreground text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-2xl text-4xl leading-tight sm:text-5xl", children: [
        "Pronto para experimentar ",
        service.name.toLowerCase(),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", search: { service: service.slug }, children: "Agendar este serviço" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `tel:${business.phoneHref}`,
            className: "flex items-center gap-2 text-lg font-medium text-ivory/90 hover:text-ivory",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
              business.phone
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  ServicePage as S
};
