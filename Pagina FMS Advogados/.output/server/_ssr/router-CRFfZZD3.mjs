import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, u as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { $ as $e } from "../_libs/sonner.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { X, M as Menu, I as Instagram, F as Facebook, a as MapPin, P as Phone, b as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
const appCss = "/assets/styles-B-_H8cWD.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-current bg-transparent hover:bg-foreground/5",
        ghost: "bg-transparent hover:bg-foreground/5",
        ivory: "bg-ivory text-foreground hover:bg-ivory/90 border border-ivory/40",
        link: "underline-offset-4 hover:underline text-foreground"
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-9 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const business = {
  name: "D'Angelo Barber Club",
  tagline: "Cortes precisos, barba impecável e uma experiência feita sem pressa.",
  neighborhood: "Barra da Tijuca",
  founded: 2018,
  address: "Avenida das Américas, 3500 – Barra da Tijuca, Rio de Janeiro – RJ",
  phone: "(21) 99806-3847",
  phoneHref: "+5521998063847",
  email: "dbc129898@gmail.com",
  sloganParts: ["Precisão", "Estilo", "Confiança"],
  hours: [
    { day: "Segunda", hours: "09h–19h" },
    { day: "Terça", hours: "09h–19h" },
    { day: "Quarta", hours: "09h–19h" },
    { day: "Quinta", hours: "09h–20h" },
    { day: "Sexta", hours: "09h–20h" },
    { day: "Sábado", hours: "09h–18h" },
    { day: "Domingo", hours: "Fechado" }
  ]
};
const services = [
  {
    slug: "classic-cut",
    name: "Corte Clássico",
    shortPhrase: "Um corte atemporal executado com técnica e atenção aos detalhes.",
    eyebrow: "Corte",
    durations: [
      { duration: "45 min", price: "R$70" },
      { duration: "60 min", price: "R$90" }
    ],
    includes: [
      "Consultoria rápida de estilo",
      "Lavagem",
      "Corte completo",
      "Acabamento detalhado",
      "Finalização profissional"
    ],
    idealFor: "Ideal para homens que buscam um visual elegante, limpo e versátil para o dia a dia.",
    idealForList: [
      "Quem busca um corte limpo e versátil",
      "Visitas regulares de manutenção",
      "Quem valoriza simplicidade bem executada"
    ],
    notIdealFor: [
      "Transformações completas de visual",
      "Quem busca desenho de barba elaborado"
    ],
    overview: [
      "O Corte Clássico é a base de tudo o que fazemos. Nenhum efeito, nenhum atalho — apenas técnica apurada aplicada com calma, do início ao fim.",
      "Cada corte começa com uma conversa breve sobre o que você precisa: manutenção do estilo atual ou um ajuste sutil. A partir daí, o trabalho é silencioso e preciso.",
      "O resultado é um visual limpo, equilibrado e fácil de manter — pensado para durar bem além da cadeira."
    ],
    experience: [
      { title: "Consultoria", description: "Conversa rápida sobre estilo e rotina." },
      { title: "Lavagem", description: "Preparação do cabelo com produtos profissionais." },
      { title: "Corte", description: "Técnica precisa, ajustada ao formato do rosto." },
      { title: "Acabamento", description: "Contornos definidos na régua e na tesoura." },
      { title: "Finalização", description: "Styling final, pronto para o dia." }
    ],
    benefits: [
      { title: "Visual limpo", description: "Linhas precisas, sem excessos." },
      { title: "Fácil manutenção", description: "Corte pensado para durar entre visitas." },
      { title: "Versatilidade", description: "Funciona para o trabalho e para o fim de semana." }
    ],
    faqs: [
      {
        q: "Preciso agendar com antecedência?",
        a: "Recomendamos agendar. Horários de pico enchem rápido, principalmente no fim de semana."
      },
      {
        q: "Posso solicitar ajustes durante o corte?",
        a: "Sim. O barbeiro acompanha cada etapa com você antes do acabamento final."
      },
      {
        q: "O serviço inclui lavagem?",
        a: "Sim. Lavagem com produtos profissionais antes do corte."
      }
    ],
    heroImageSeed: "dangelo-classic-cut"
  },
  {
    slug: "haircut-beard",
    name: "Corte + Barba",
    shortPhrase: "O serviço mais procurado da casa.",
    eyebrow: "Corte e barba",
    durations: [
      { duration: "60 min", price: "R$120" },
      { duration: "75 min", price: "R$145" }
    ],
    includes: [
      "Corte completo",
      "Modelagem da barba",
      "Toalha quente",
      "Acabamento com navalha",
      "Aplicação de produtos premium"
    ],
    idealFor: "Para quem deseja renovar completamente o visual em uma única sessão.",
    idealForList: [
      "Quem quer cabelo e barba alinhados no mesmo dia",
      "Ocasiões importantes e renovações de visual",
      "Quem aprecia o ritual completo, sem pressa"
    ],
    notIdealFor: ["Visitas rápidas de manutenção", "Quem não usa barba"],
    overview: [
      "Corte + Barba é o nosso serviço mais pedido — e por um motivo simples: resolve tudo em uma única sessão, com o mesmo cuidado em cada etapa.",
      "O cabelo é cortado primeiro, definindo a base do visual. Depois, a barba é modelada para acompanhar essa linha, com toalha quente e acabamento de navalha.",
      "É a experiência completa da barbearia, do início ao fim — pensada para quem quer saber, sem dúvida, que saiu daqui com a melhor versão do próprio visual."
    ],
    experience: [
      { title: "Consultoria", description: "Alinhamento de cabelo e barba como um conjunto." },
      { title: "Corte", description: "Base do visual definida com precisão." },
      { title: "Toalha quente", description: "Preparação da pele e dos fios da barba." },
      { title: "Modelagem", description: "Desenho da barba acompanhando o corte." },
      { title: "Acabamento", description: "Navalha e produtos premium para selar o resultado." }
    ],
    benefits: [
      { title: "Visual completo", description: "Cabelo e barba resolvidos em uma sessão." },
      { title: "Ritual sem pressa", description: "Cada etapa recebe o tempo que precisa." },
      { title: "Acabamento de navalha", description: "Linhas definidas com precisão." },
      { title: "Produtos premium", description: "Finalização com produtos profissionais selecionados." }
    ],
    faqs: [
      {
        q: "A navalha está incluída?",
        a: "Sim. Acabamento com navalha em todas as opções deste serviço."
      },
      {
        q: "Funciona para qualquer tipo de barba?",
        a: "Sim. Adaptamos a técnica ao volume, formato e densidade da sua barba."
      },
      {
        q: "Posso escolher diferentes estilos?",
        a: "Sim. A consultoria inicial define o estilo certo para seu rosto e rotina."
      }
    ],
    heroImageSeed: "dangelo-haircut-beard"
  },
  {
    slug: "premium-beard",
    name: "Barba Premium",
    shortPhrase: "Definição, simetria e acabamento impecável.",
    eyebrow: "Barba",
    durations: [
      { duration: "30 min", price: "R$60" },
      { duration: "45 min", price: "R$80" }
    ],
    includes: [
      "Toalha quente",
      "Aparo completo",
      "Desenho da barba",
      "Acabamento com navalha",
      "Hidratação da pele"
    ],
    idealFor: "Ideal para homens que valorizam uma barba bem definida e alinhada.",
    idealForList: [
      "Quem já tem barba e quer mantê-la alinhada",
      "Visitas de manutenção entre cortes",
      "Quem valoriza simetria e definição"
    ],
    notIdealFor: ["Quem está deixando a barba crescer pela primeira vez sem aparo", "Cortes de cabelo"],
    overview: [
      "A Barba Premium existe para quem já entende o valor de uma barba bem cuidada. Não é sobre cortar — é sobre definir.",
      "Começamos com toalha quente para preparar a pele e os fios. Em seguida, o desenho é traçado de acordo com o formato do seu rosto, nunca por um molde padrão.",
      "O resultado: simetria, linhas limpas e uma pele tratada — sem irritação, sem pressa."
    ],
    experience: [
      { title: "Toalha quente", description: "Preparação da pele antes de qualquer corte." },
      { title: "Aparo", description: "Redução uniforme de volume e comprimento." },
      { title: "Desenho", description: "Linhas traçadas conforme o formato do rosto." },
      { title: "Navalha", description: "Acabamento preciso nos contornos." },
      { title: "Hidratação", description: "Tratamento final da pele." }
    ],
    benefits: [
      { title: "Simetria", description: "Linhas alinhadas dos dois lados do rosto." },
      { title: "Pele tratada", description: "Hidratação que evita irritação." },
      { title: "Definição duradoura", description: "Desenho que se mantém por semanas." }
    ],
    faqs: [
      {
        q: "É indicado para barbas curtas?",
        a: "Sim. O desenho funciona em qualquer comprimento, do aparado curto ao mais cheio."
      },
      {
        q: "O desenho da barba é personalizado?",
        a: "Sim. Seguimos o formato do seu rosto, não um molde padrão."
      },
      {
        q: "O procedimento irrita a pele?",
        a: "Não. A toalha quente e a hidratação final preparam e calmam a pele."
      }
    ],
    heroImageSeed: "dangelo-premium-beard"
  },
  {
    slug: "executive-cut",
    name: "Corte Executivo",
    shortPhrase: "Atendimento refinado para profissionais exigentes.",
    eyebrow: "Corte",
    durations: [{ duration: "60 min", price: "R$110" }],
    includes: [
      "Consultoria personalizada",
      "Corte premium",
      "Lavagem",
      "Styling profissional",
      "Acabamento detalhado"
    ],
    idealFor: "Profissionais que buscam uma imagem elegante e alinhada.",
    idealForList: [
      "Profissionais com rotina de reuniões e apresentações",
      "Quem quer um visual alinhado à própria imagem profissional",
      "Quem aprecia uma consultoria mais aprofundada"
    ],
    notIdealFor: ["Visitas rápidas sem consultoria", "Mudanças radicais de visual"],
    overview: [
      "O Corte Executivo nasceu para quem entende que a imagem é parte do trabalho. Mais tempo de consultoria, mais atenção ao detalhe.",
      "Conversamos sobre sua rotina, seu ambiente de trabalho e o que sua imagem precisa comunicar — e construímos o corte a partir disso.",
      "O resultado é discreto e elegante: um visual que funciona em qualquer sala, sem chamar atenção por excesso."
    ],
    experience: [
      { title: "Consultoria", description: "Conversa aprofundada sobre rotina e imagem." },
      { title: "Lavagem", description: "Preparação com produtos profissionais." },
      { title: "Corte premium", description: "Execução refinada, atenção total ao detalhe." },
      { title: "Styling", description: "Finalização pensada para o ambiente de trabalho." }
    ],
    benefits: [
      { title: "Imagem alinhada", description: "Visual consistente com sua rotina profissional." },
      { title: "Consultoria aprofundada", description: "Mais tempo dedicado a entender sua necessidade." },
      { title: "Discrição elegante", description: "Resultado refinado, nunca exagerado." }
    ],
    faqs: [
      {
        q: "Qual a diferença para o Corte Clássico?",
        a: "Mais tempo de consultoria e styling voltado para o dia a dia profissional."
      },
      {
        q: "Posso trazer referências?",
        a: "Sim. Fotos de referência ajudam a alinhar expectativas antes de começar."
      },
      {
        q: "O serviço inclui finalização?",
        a: "Sim. Styling completo com produtos profissionais ao final."
      }
    ],
    heroImageSeed: "dangelo-executive-cut"
  },
  {
    slug: "father-son",
    name: "Pai e Filho",
    shortPhrase: "Uma experiência compartilhada para criar memórias.",
    eyebrow: "Experiência",
    durations: [{ duration: "90 min", price: "R$180" }],
    includes: [
      "Dois cortes completos",
      "Atendimento simultâneo",
      "Bebida de cortesia",
      "Finalização profissional",
      "Foto de recordação"
    ],
    idealFor: "Pais que desejam compartilhar um momento especial com seus filhos.",
    idealForList: [
      "Pais que querem dividir o ritual da barbearia com o filho",
      "Datas especiais e ocasiões em família",
      "Primeira visita do filho à barbearia"
    ],
    notIdealFor: ["Atendimentos individuais", "Quem busca rapidez"],
    overview: [
      "Pai e Filho não é apenas um corte de cabelo duplo. É um momento reservado para os dois, lado a lado, na mesma cadeira de sempre.",
      "Os atendimentos acontecem em simultâneo, no mesmo ritmo, para que pai e filho compartilhem a experiência do início ao fim — incluindo uma bebida de cortesia.",
      "No final, uma foto de recordação. Porque alguns momentos merecem ficar guardados além do espelho."
    ],
    experience: [
      { title: "Chegada", description: "Pai e filho acomodados lado a lado." },
      { title: "Bebida de cortesia", description: "Um gesto para começar o momento com calma." },
      { title: "Cortes simultâneos", description: "Dois barbeiros, mesmo ritmo, mesma atenção." },
      { title: "Finalização", description: "Styling profissional para os dois." },
      { title: "Foto de recordação", description: "Um registro do momento compartilhado." }
    ],
    benefits: [
      { title: "Momento em família", description: "Uma experiência pensada para ser compartilhada." },
      { title: "Atendimento simultâneo", description: "Nenhum dos dois espera pelo outro." },
      { title: "Recordação", description: "Uma foto para guardar a primeira vez — ou a próxima." }
    ],
    faqs: [
      {
        q: "Qual a idade mínima?",
        a: "Não há idade mínima. Atendemos crianças de qualquer idade, no ritmo delas."
      },
      {
        q: "Os dois atendimentos acontecem juntos?",
        a: "Sim. Pai e filho são atendidos lado a lado, ao mesmo tempo."
      },
      {
        q: "Precisa de agendamento prévio?",
        a: "Sim. Esse horário é reservado especialmente para os dois."
      }
    ],
    heroImageSeed: "dangelo-father-son"
  }
];
function getServiceBySlug(slug) {
  return services.find((service2) => service2.slug === slug);
}
function getRelatedServices(slug, count = 2) {
  return services.filter((service2) => service2.slug !== slug).slice(0, count);
}
function placeholderImage(seed, width, height) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
const navLinks = [
  { to: "/services", label: "Serviços" },
  { to: "/about", label: "Sobre" },
  { to: "/reviews", label: "Avaliações" },
  { to: "/location", label: "Localização" }
];
function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);
  const solid = !isHome || scrolled;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-border bg-background text-foreground" : "border-b border-transparent bg-transparent text-ivory"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display text-xl tracking-wide", children: business.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-9 lg:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              className: cn(
                "text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
              ),
              activeProps: { className: "opacity-100 underline underline-offset-8" },
              children: link.label
            },
            link.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: solid ? "default" : "ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Abrir menu",
              className: "lg:hidden",
              onClick: () => setMobileOpen((open) => !open),
              children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
            }
          )
        ] }),
        mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background px-6 py-6 text-foreground lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-5", children: [
          navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.to,
              className: "text-sm font-medium uppercase tracking-widest",
              onClick: () => setMobileOpen(false),
              children: link.label
            },
            link.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", onClick: () => setMobileOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", children: "Agendar Agora" }) })
        ] }) }) : null
      ]
    }
  );
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-12 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "site-footer border-t border-border bg-foreground text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: business.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-ivory/70", children: business.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-ivory/60", children: business.sloganParts.map((part, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          part,
          index < business.sloganParts.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }) : null
        ] }, part)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "text-ivory/70 hover:text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "text-ivory/70 hover:text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-ivory/50", children: "Navegação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-ivory/70", children: "Serviços" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-ivory/70", children: "Sobre" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reviews", className: "hover:text-ivory/70", children: "Avaliações" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/location", className: "hover:text-ivory/70", children: "Localização" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book", className: "hover:text-ivory/70", children: "Agendar" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-ivory/50", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: services.map((service2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/services/${service2.slug}`, className: "hover:text-ivory/70", children: service2.name }) }, service2.slug)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-ivory/50", children: "Visite-nos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-3 text-sm text-ivory/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: business.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${business.phoneHref}`, className: "hover:text-ivory", children: business.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${business.email}`, className: "hover:text-ivory", children: business.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            className: "mt-6 flex gap-2",
            onSubmit: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "email",
                  placeholder: "Seu e-mail",
                  className: "border-ivory/30 bg-transparent text-ivory placeholder:text-ivory/40"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "ivory", size: "sm", children: "Assinar" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        business.name,
        ". Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ivory/80", children: "Política de privacidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-ivory/80", children: "Termos de uso" })
      ] })
    ] })
  ] }) });
}
function JsonLd({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
    }
  );
}
const Route$c = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "D'Angelo Barber Club | Barbearia Premium na Barra da Tijuca"
      },
      {
        name: "description",
        content: "Cortes precisos, barba impecável e uma experiência feita sem pressa. Barbearia premium na Barra da Tijuca, Rio de Janeiro."
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://www.dangelobarberclub.com.br" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        JsonLd,
        {
          data: {
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: business.name,
            description: business.tagline,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida das Américas, 3500",
              addressLocality: "Rio de Janeiro",
              addressRegion: "RJ",
              addressCountry: "BR"
            },
            telephone: business.phone,
            email: business.email,
            openingHoursSpecification: business.hours.filter((h) => h.hours !== "Fechado").map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.day,
              opens: h.hours.split("–")[0],
              closes: h.hours.split("–")[1]
            }))
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx($e, { position: "bottom-right", richColors: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$b = () => import("./services-BFsOu0JM.mjs");
const Route$b = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./reviews-Bj9Tw9Ee.mjs");
const Route$a = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Avaliações | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Veja o que nossos clientes dizem sobre a D'Angelo Barber Club na Barra da Tijuca."
    }, {
      property: "og:title",
      content: "Avaliações | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Veja o que nossos clientes dizem sobre a D'Angelo Barber Club."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-reviews-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./location-u7Lb38oy.mjs");
const Route$9 = createFileRoute("/location")({
  head: () => ({
    meta: [{
      title: "Localização | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Endereço, horários e como chegar à D'Angelo Barber Club na Barra da Tijuca, Rio de Janeiro."
    }, {
      property: "og:title",
      content: "Localização | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Endereço, horários e como chegar à D'Angelo Barber Club."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-location-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./book-D2U0dJUd.mjs");
const Route$8 = createFileRoute("/book")({
  validateSearch: (search) => ({
    service: typeof search.service === "string" ? search.service : void 0
  }),
  head: () => ({
    meta: [{
      title: "Agendar | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Agende seu horário na D'Angelo Barber Club, na Barra da Tijuca, Rio de Janeiro."
    }, {
      property: "og:title",
      content: "Agendar | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Agende seu horário na D'Angelo Barber Club."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-book-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./about-JudjePKU.mjs");
const Route$7 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Sobre | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Conheça a história, a equipe e a filosofia da D'Angelo Barber Club desde 2018."
    }, {
      property: "og:title",
      content: "Sobre | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Conheça a história, a equipe e a filosofia da D'Angelo Barber Club."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-about-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-BWSlEOev.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "D'Angelo Barber Club | Barbearia Premium na Barra da Tijuca"
    }, {
      name: "description",
      content: "Cortes precisos, barba impecável e uma experiência feita sem pressa. Desde 2018 na Barra da Tijuca, Rio de Janeiro."
    }, {
      property: "og:title",
      content: "D'Angelo Barber Club | Barbearia Premium"
    }, {
      property: "og:description",
      content: "Cortes precisos, barba impecável e uma experiência feita sem pressa."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-home-hero", 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage("dangelo-home-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services.index-jxrde9k0.mjs");
const Route$5 = createFileRoute("/services/")({
  head: () => ({
    meta: [{
      title: "Serviços | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Conheça todos os serviços da D'Angelo Barber Club: cortes, barba e experiências exclusivas na Barra da Tijuca."
    }, {
      property: "og:title",
      content: "Serviços | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Cortes, barba e experiências exclusivas para cada tipo de visita."
    }, {
      property: "og:image",
      content: placeholderImage("dangelo-services-hero", 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const service$4 = getServiceBySlug("premium-beard");
const $$splitComponentImporter$4 = () => import("./services.premium-beard-To2yZfIH.mjs");
const Route$4 = createFileRoute("/services/premium-beard")({
  head: () => ({
    meta: [{
      title: "Barba Premium | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Definição, simetria e acabamento impecável para a sua barba. A partir de R$60."
    }, {
      property: "og:title",
      content: "Barba Premium | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Definição, simetria e acabamento impecável."
    }, {
      property: "og:image",
      content: placeholderImage(service$4.heroImageSeed, 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage(service$4.heroImageSeed, 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const service$3 = getServiceBySlug("haircut-beard");
const $$splitComponentImporter$3 = () => import("./services.haircut-beard-Bhuy2B9z.mjs");
const Route$3 = createFileRoute("/services/haircut-beard")({
  head: () => ({
    meta: [{
      title: "Corte + Barba | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "O serviço mais procurado da casa: corte completo e barba modelada. A partir de R$120."
    }, {
      property: "og:title",
      content: "Corte + Barba | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "O serviço mais procurado da casa."
    }, {
      property: "og:image",
      content: placeholderImage(service$3.heroImageSeed, 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage(service$3.heroImageSeed, 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const service$2 = getServiceBySlug("father-son");
const $$splitComponentImporter$2 = () => import("./services.father-son-BhPe_yaC.mjs");
const Route$2 = createFileRoute("/services/father-son")({
  head: () => ({
    meta: [{
      title: "Pai e Filho | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Uma experiência compartilhada para criar memórias. A partir de R$180."
    }, {
      property: "og:title",
      content: "Pai e Filho | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Uma experiência compartilhada para criar memórias."
    }, {
      property: "og:image",
      content: placeholderImage(service$2.heroImageSeed, 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage(service$2.heroImageSeed, 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const service$1 = getServiceBySlug("executive-cut");
const $$splitComponentImporter$1 = () => import("./services.executive-cut-w8lA5TQU.mjs");
const Route$1 = createFileRoute("/services/executive-cut")({
  head: () => ({
    meta: [{
      title: "Corte Executivo | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Atendimento refinado para profissionais exigentes. A partir de R$110."
    }, {
      property: "og:title",
      content: "Corte Executivo | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Atendimento refinado para profissionais exigentes."
    }, {
      property: "og:image",
      content: placeholderImage(service$1.heroImageSeed, 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage(service$1.heroImageSeed, 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const service = getServiceBySlug("classic-cut");
const $$splitComponentImporter = () => import("./services.classic-cut-D0e9hJMb.mjs");
const Route = createFileRoute("/services/classic-cut")({
  head: () => ({
    meta: [{
      title: "Corte Clássico | D'Angelo Barber Club"
    }, {
      name: "description",
      content: "Um corte atemporal executado com técnica e atenção aos detalhes. A partir de R$70."
    }, {
      property: "og:title",
      content: "Corte Clássico | D'Angelo Barber Club"
    }, {
      property: "og:description",
      content: "Um corte atemporal executado com técnica e atenção aos detalhes."
    }, {
      property: "og:image",
      content: placeholderImage(service.heroImageSeed, 1600, 900)
    }, {
      name: "twitter:image",
      content: placeholderImage(service.heroImageSeed, 1600, 900)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$b.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$c
});
const ReviewsRoute = Route$a.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$c
});
const LocationRoute = Route$9.update({
  id: "/location",
  path: "/location",
  getParentRoute: () => Route$c
});
const BookRoute = Route$8.update({
  id: "/book",
  path: "/book",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$7.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ServicesIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ServicesPremiumBeardRoute = Route$4.update({
  id: "/premium-beard",
  path: "/premium-beard",
  getParentRoute: () => ServicesRoute
});
const ServicesHaircutBeardRoute = Route$3.update({
  id: "/haircut-beard",
  path: "/haircut-beard",
  getParentRoute: () => ServicesRoute
});
const ServicesFatherSonRoute = Route$2.update({
  id: "/father-son",
  path: "/father-son",
  getParentRoute: () => ServicesRoute
});
const ServicesExecutiveCutRoute = Route$1.update({
  id: "/executive-cut",
  path: "/executive-cut",
  getParentRoute: () => ServicesRoute
});
const ServicesClassicCutRoute = Route.update({
  id: "/classic-cut",
  path: "/classic-cut",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesClassicCutRoute,
  ServicesExecutiveCutRoute,
  ServicesFatherSonRoute,
  ServicesHaircutBeardRoute,
  ServicesPremiumBeardRoute,
  ServicesIndexRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BookRoute,
  LocationRoute,
  ReviewsRoute,
  ServicesRoute: ServicesRouteWithChildren
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Input as I,
  JsonLd as J,
  Route$8 as R,
  service$4 as a,
  business as b,
  cn as c,
  service$3 as d,
  service$2 as e,
  service$1 as f,
  service as g,
  getRelatedServices as h,
  placeholderImage as p,
  router as r,
  services as s
};
