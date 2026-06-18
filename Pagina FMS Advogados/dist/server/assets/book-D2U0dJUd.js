import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, Check, Phone, Clock, ShieldCheck, Scissors } from "lucide-react";
import { c as cn, R as Route, p as placeholderImage, I as Input, s as services, B as Button, b as business } from "./router-CRFfZZD3.js";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { E as Eyebrow, S as Section } from "./Section-CVKEaPpt.js";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
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
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
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
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-12 w-full items-center justify-between rounded-sm border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = "SelectTrigger";
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  SelectPrimitive.Content,
  {
    ref,
    position,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-sm border border-border bg-popover text-popover-foreground shadow-md",
      position === "popper" && "translate-y-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(SelectPrimitive.Viewport, { className: "p-1", children })
  }
) }));
SelectContent.displayName = "SelectContent";
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none focus:bg-muted",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = "SelectItem";
function BookPage() {
  const {
    service
  } = Route.useSearch();
  const [selectedService, setSelectedService] = useState(service ?? "");
  const [submitting, setSubmitting] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Solicitação enviada!", {
        description: "Entraremos em contato para confirmar seu horário."
      });
      setSubmitting(false);
      form.reset();
      setSelectedService("");
    }, 600);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative flex h-[42vh] min-h-[340px] items-end overflow-hidden pt-24", children: [
      /* @__PURE__ */ jsx("img", { src: placeholderImage("dangelo-book-hero", 1920, 1e3), alt: "Recepção da D'Angelo Barber Club", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10", children: [
        /* @__PURE__ */ jsx(Eyebrow, { className: "text-ivory/90", children: "Agendamento" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-5 max-w-2xl text-5xl leading-tight text-ivory sm:text-6xl", children: "Reserve seu horário" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 lg:grid-cols-[1.6fr_1fr]", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nome" }),
            /* @__PURE__ */ jsx(Input, { id: "name", name: "name", required: true, placeholder: "Seu nome completo" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "E-mail" }),
            /* @__PURE__ */ jsx(Input, { id: "email", name: "email", type: "email", required: true, placeholder: "seu@email.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Telefone" }),
            /* @__PURE__ */ jsx(Input, { id: "phone", name: "phone", type: "tel", required: true, placeholder: "(21) 99999-9999" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "service", children: "Serviço" }),
            /* @__PURE__ */ jsxs(Select, { name: "service", value: selectedService, onValueChange: setSelectedService, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { id: "service", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Escolha um serviço" }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: services.map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s.slug, children: s.name }, s.slug)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "date", children: "Data preferida" }),
            /* @__PURE__ */ jsx(Input, { id: "date", name: "date", type: "date", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "time", children: "Preferência de horário" }),
            /* @__PURE__ */ jsxs(Select, { name: "time", defaultValue: "afternoon", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { id: "time", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Horário" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "morning", children: "Manhã" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "afternoon", children: "Tarde" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "evening", children: "Final do dia" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "guests", children: "Número de convidados" }),
            /* @__PURE__ */ jsx(Input, { id: "guests", name: "guests", type: "number", min: 1, defaultValue: 1 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "notes", children: "Observações" }),
          /* @__PURE__ */ jsx(Textarea, { id: "notes", name: "notes", placeholder: "Alguma preferência ou referência que devemos saber?" })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", disabled: submitting, className: "w-full sm:w-auto", children: submitting ? "Enviando..." : "Solicitar agendamento" })
      ] }) }),
      /* @__PURE__ */ jsxs("aside", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "Agendamento por telefone" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Prefere falar com a gente diretamente?" }),
          /* @__PURE__ */ jsx("a", { href: `tel:${business.phoneHref}`, className: "mt-2 block text-lg font-medium text-primary", children: business.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "Horários" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1 text-sm text-muted-foreground", children: business.hours.map((h) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: h.day }),
            /* @__PURE__ */ jsx("span", { children: h.hours })
          ] }, h.day)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "Política de cancelamento" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Cancelamentos com até 4 horas de antecedência não geram custo. Faltas sem aviso podem ser cobradas em parte." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-sm border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Scissors, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl", children: "O que levar" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Apenas referências de estilo, se tiver. O restante a gente cuida." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  BookPage as component
};
