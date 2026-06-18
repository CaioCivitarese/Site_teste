import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as ue } from "../_libs/sonner.mjs";
import { R as Route$8, p as placeholderImage, I as Input, s as services, B as Button, b as business, c as cn } from "./router-CRFfZZD3.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText } from "../_libs/radix-ui__react-select.mjs";
import { E as Eyebrow, S as Section } from "./Section-CVKEaPpt.mjs";
import { P as Phone, C as Clock, d as ShieldCheck, e as Scissors, f as ChevronDown, g as Check } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-32 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(
      "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
      className
    ),
    ...props
  }
));
Label.displayName = "Label";
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-12 w-full items-center justify-between rounded-sm border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = "SelectTrigger";
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectContent$1,
  {
    ref,
    position,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-sm border border-border bg-popover text-popover-foreground shadow-md",
      position === "popper" && "translate-y-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectViewport, { className: "p-1", children })
  }
) }));
SelectContent.displayName = "SelectContent";
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none focus:bg-muted",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = "SelectItem";
function BookPage() {
  const {
    service
  } = Route$8.useSearch();
  const [selectedService, setSelectedService] = reactExports.useState(service ?? "");
  const [submitting, setSubmitting] = reactExports.useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      ue.success("Solicitação enviada!", {
        description: "Entraremos em contato para confirmar seu horário."
      });
      setSubmitting(false);
      form.reset();
      setSelectedService("");
    }, 600);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[42vh] min-h-[340px] items-end overflow-hidden pt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: placeholderImage("dangelo-book-hero", 1920, 1e3), alt: "Recepção da D'Angelo Barber Club", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { className: "text-ivory/90", children: "Agendamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 max-w-2xl text-5xl leading-tight text-ivory sm:text-6xl", children: "Reserve seu horário" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-[1.6fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Nome" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", name: "name", required: true, placeholder: "Seu nome completo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "E-mail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", name: "email", type: "email", required: true, placeholder: "seu@email.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Telefone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", name: "phone", type: "tel", required: true, placeholder: "(21) 99999-9999" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "service", children: "Serviço" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { name: "service", value: selectedService, onValueChange: setSelectedService, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "service", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Escolha um serviço" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s.slug, children: s.name }, s.slug)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "date", children: "Data preferida" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "date", name: "date", type: "date", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "time", children: "Preferência de horário" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { name: "time", defaultValue: "afternoon", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { id: "time", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Horário" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "morning", children: "Manhã" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "afternoon", children: "Tarde" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "evening", children: "Final do dia" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "guests", children: "Número de convidados" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "guests", name: "guests", type: "number", min: 1, defaultValue: 1 })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Observações" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "notes", name: "notes", placeholder: "Alguma preferência ou referência que devemos saber?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: submitting, className: "w-full sm:w-auto", children: submitting ? "Enviando..." : "Solicitar agendamento" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "Agendamento por telefone" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Prefere falar com a gente diretamente?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${business.phoneHref}`, className: "mt-2 block text-lg font-medium text-primary", children: business.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "Horários" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-1 text-sm text-muted-foreground", children: business.hours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h.hours })
          ] }, h.day)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "Política de cancelamento" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Cancelamentos com até 4 horas de antecedência não geram custo. Faltas sem aviso podem ser cobradas em parte." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "O que levar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Apenas referências de estilo, se tiver. O restante a gente cuida." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BookPage as component
};
