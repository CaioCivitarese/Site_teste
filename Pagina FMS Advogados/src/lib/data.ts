export const business = {
  name: "D'Angelo Barber Club",
  category: "Barbearia premium",
  tagline: "Cortes precisos, barba impecável e uma experiência feita sem pressa.",
  city: "Rio de Janeiro",
  neighborhood: "Barra da Tijuca",
  founded: 2018,
  address: "Avenida das Américas, 3500 – Barra da Tijuca, Rio de Janeiro – RJ",
  addressShort: "Av. das Américas, 3500 — Barra da Tijuca",
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
    { day: "Domingo", hours: "Fechado" },
  ],
} as const;

export type Duration = {
  duration: string;
  price: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type ExperienceStep = {
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type ServiceSlug =
  | "classic-cut"
  | "haircut-beard"
  | "premium-beard"
  | "executive-cut"
  | "father-son";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortPhrase: string;
  eyebrow: string;
  durations: Duration[];
  includes: string[];
  idealFor: string;
  notIdealFor: string[];
  idealForList: string[];
  overview: string[];
  experience: ExperienceStep[];
  benefits: Benefit[];
  faqs: Faq[];
  heroImageSeed: string;
};

export const services: Service[] = [
  {
    slug: "classic-cut",
    name: "Corte Clássico",
    shortPhrase: "Um corte atemporal executado com técnica e atenção aos detalhes.",
    eyebrow: "Corte",
    durations: [
      { duration: "45 min", price: "R$70" },
      { duration: "60 min", price: "R$90" },
    ],
    includes: [
      "Consultoria rápida de estilo",
      "Lavagem",
      "Corte completo",
      "Acabamento detalhado",
      "Finalização profissional",
    ],
    idealFor:
      "Ideal para homens que buscam um visual elegante, limpo e versátil para o dia a dia.",
    idealForList: [
      "Quem busca um corte limpo e versátil",
      "Visitas regulares de manutenção",
      "Quem valoriza simplicidade bem executada",
    ],
    notIdealFor: [
      "Transformações completas de visual",
      "Quem busca desenho de barba elaborado",
    ],
    overview: [
      "O Corte Clássico é a base de tudo o que fazemos. Nenhum efeito, nenhum atalho — apenas técnica apurada aplicada com calma, do início ao fim.",
      "Cada corte começa com uma conversa breve sobre o que você precisa: manutenção do estilo atual ou um ajuste sutil. A partir daí, o trabalho é silencioso e preciso.",
      "O resultado é um visual limpo, equilibrado e fácil de manter — pensado para durar bem além da cadeira.",
    ],
    experience: [
      { title: "Consultoria", description: "Conversa rápida sobre estilo e rotina." },
      { title: "Lavagem", description: "Preparação do cabelo com produtos profissionais." },
      { title: "Corte", description: "Técnica precisa, ajustada ao formato do rosto." },
      { title: "Acabamento", description: "Contornos definidos na régua e na tesoura." },
      { title: "Finalização", description: "Styling final, pronto para o dia." },
    ],
    benefits: [
      { title: "Visual limpo", description: "Linhas precisas, sem excessos." },
      { title: "Fácil manutenção", description: "Corte pensado para durar entre visitas." },
      { title: "Versatilidade", description: "Funciona para o trabalho e para o fim de semana." },
    ],
    faqs: [
      {
        q: "Preciso agendar com antecedência?",
        a: "Recomendamos agendar. Horários de pico enchem rápido, principalmente no fim de semana.",
      },
      {
        q: "Posso solicitar ajustes durante o corte?",
        a: "Sim. O barbeiro acompanha cada etapa com você antes do acabamento final.",
      },
      {
        q: "O serviço inclui lavagem?",
        a: "Sim. Lavagem com produtos profissionais antes do corte.",
      },
    ],
    heroImageSeed: "dangelo-classic-cut",
  },
  {
    slug: "haircut-beard",
    name: "Corte + Barba",
    shortPhrase: "O serviço mais procurado da casa.",
    eyebrow: "Corte e barba",
    durations: [
      { duration: "60 min", price: "R$120" },
      { duration: "75 min", price: "R$145" },
    ],
    includes: [
      "Corte completo",
      "Modelagem da barba",
      "Toalha quente",
      "Acabamento com navalha",
      "Aplicação de produtos premium",
    ],
    idealFor: "Para quem deseja renovar completamente o visual em uma única sessão.",
    idealForList: [
      "Quem quer cabelo e barba alinhados no mesmo dia",
      "Ocasiões importantes e renovações de visual",
      "Quem aprecia o ritual completo, sem pressa",
    ],
    notIdealFor: ["Visitas rápidas de manutenção", "Quem não usa barba"],
    overview: [
      "Corte + Barba é o nosso serviço mais pedido — e por um motivo simples: resolve tudo em uma única sessão, com o mesmo cuidado em cada etapa.",
      "O cabelo é cortado primeiro, definindo a base do visual. Depois, a barba é modelada para acompanhar essa linha, com toalha quente e acabamento de navalha.",
      "É a experiência completa da barbearia, do início ao fim — pensada para quem quer saber, sem dúvida, que saiu daqui com a melhor versão do próprio visual.",
    ],
    experience: [
      { title: "Consultoria", description: "Alinhamento de cabelo e barba como um conjunto." },
      { title: "Corte", description: "Base do visual definida com precisão." },
      { title: "Toalha quente", description: "Preparação da pele e dos fios da barba." },
      { title: "Modelagem", description: "Desenho da barba acompanhando o corte." },
      { title: "Acabamento", description: "Navalha e produtos premium para selar o resultado." },
    ],
    benefits: [
      { title: "Visual completo", description: "Cabelo e barba resolvidos em uma sessão." },
      { title: "Ritual sem pressa", description: "Cada etapa recebe o tempo que precisa." },
      { title: "Acabamento de navalha", description: "Linhas definidas com precisão." },
      { title: "Produtos premium", description: "Finalização com produtos profissionais selecionados." },
    ],
    faqs: [
      {
        q: "A navalha está incluída?",
        a: "Sim. Acabamento com navalha em todas as opções deste serviço.",
      },
      {
        q: "Funciona para qualquer tipo de barba?",
        a: "Sim. Adaptamos a técnica ao volume, formato e densidade da sua barba.",
      },
      {
        q: "Posso escolher diferentes estilos?",
        a: "Sim. A consultoria inicial define o estilo certo para seu rosto e rotina.",
      },
    ],
    heroImageSeed: "dangelo-haircut-beard",
  },
  {
    slug: "premium-beard",
    name: "Barba Premium",
    shortPhrase: "Definição, simetria e acabamento impecável.",
    eyebrow: "Barba",
    durations: [
      { duration: "30 min", price: "R$60" },
      { duration: "45 min", price: "R$80" },
    ],
    includes: [
      "Toalha quente",
      "Aparo completo",
      "Desenho da barba",
      "Acabamento com navalha",
      "Hidratação da pele",
    ],
    idealFor: "Ideal para homens que valorizam uma barba bem definida e alinhada.",
    idealForList: [
      "Quem já tem barba e quer mantê-la alinhada",
      "Visitas de manutenção entre cortes",
      "Quem valoriza simetria e definição",
    ],
    notIdealFor: ["Quem está deixando a barba crescer pela primeira vez sem aparo", "Cortes de cabelo"],
    overview: [
      "A Barba Premium existe para quem já entende o valor de uma barba bem cuidada. Não é sobre cortar — é sobre definir.",
      "Começamos com toalha quente para preparar a pele e os fios. Em seguida, o desenho é traçado de acordo com o formato do seu rosto, nunca por um molde padrão.",
      "O resultado: simetria, linhas limpas e uma pele tratada — sem irritação, sem pressa.",
    ],
    experience: [
      { title: "Toalha quente", description: "Preparação da pele antes de qualquer corte." },
      { title: "Aparo", description: "Redução uniforme de volume e comprimento." },
      { title: "Desenho", description: "Linhas traçadas conforme o formato do rosto." },
      { title: "Navalha", description: "Acabamento preciso nos contornos." },
      { title: "Hidratação", description: "Tratamento final da pele." },
    ],
    benefits: [
      { title: "Simetria", description: "Linhas alinhadas dos dois lados do rosto." },
      { title: "Pele tratada", description: "Hidratação que evita irritação." },
      { title: "Definição duradoura", description: "Desenho que se mantém por semanas." },
    ],
    faqs: [
      {
        q: "É indicado para barbas curtas?",
        a: "Sim. O desenho funciona em qualquer comprimento, do aparado curto ao mais cheio.",
      },
      {
        q: "O desenho da barba é personalizado?",
        a: "Sim. Seguimos o formato do seu rosto, não um molde padrão.",
      },
      {
        q: "O procedimento irrita a pele?",
        a: "Não. A toalha quente e a hidratação final preparam e calmam a pele.",
      },
    ],
    heroImageSeed: "dangelo-premium-beard",
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
      "Acabamento detalhado",
    ],
    idealFor: "Profissionais que buscam uma imagem elegante e alinhada.",
    idealForList: [
      "Profissionais com rotina de reuniões e apresentações",
      "Quem quer um visual alinhado à própria imagem profissional",
      "Quem aprecia uma consultoria mais aprofundada",
    ],
    notIdealFor: ["Visitas rápidas sem consultoria", "Mudanças radicais de visual"],
    overview: [
      "O Corte Executivo nasceu para quem entende que a imagem é parte do trabalho. Mais tempo de consultoria, mais atenção ao detalhe.",
      "Conversamos sobre sua rotina, seu ambiente de trabalho e o que sua imagem precisa comunicar — e construímos o corte a partir disso.",
      "O resultado é discreto e elegante: um visual que funciona em qualquer sala, sem chamar atenção por excesso.",
    ],
    experience: [
      { title: "Consultoria", description: "Conversa aprofundada sobre rotina e imagem." },
      { title: "Lavagem", description: "Preparação com produtos profissionais." },
      { title: "Corte premium", description: "Execução refinada, atenção total ao detalhe." },
      { title: "Styling", description: "Finalização pensada para o ambiente de trabalho." },
    ],
    benefits: [
      { title: "Imagem alinhada", description: "Visual consistente com sua rotina profissional." },
      { title: "Consultoria aprofundada", description: "Mais tempo dedicado a entender sua necessidade." },
      { title: "Discrição elegante", description: "Resultado refinado, nunca exagerado." },
    ],
    faqs: [
      {
        q: "Qual a diferença para o Corte Clássico?",
        a: "Mais tempo de consultoria e styling voltado para o dia a dia profissional.",
      },
      {
        q: "Posso trazer referências?",
        a: "Sim. Fotos de referência ajudam a alinhar expectativas antes de começar.",
      },
      {
        q: "O serviço inclui finalização?",
        a: "Sim. Styling completo com produtos profissionais ao final.",
      },
    ],
    heroImageSeed: "dangelo-executive-cut",
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
      "Foto de recordação",
    ],
    idealFor: "Pais que desejam compartilhar um momento especial com seus filhos.",
    idealForList: [
      "Pais que querem dividir o ritual da barbearia com o filho",
      "Datas especiais e ocasiões em família",
      "Primeira visita do filho à barbearia",
    ],
    notIdealFor: ["Atendimentos individuais", "Quem busca rapidez"],
    overview: [
      "Pai e Filho não é apenas um corte de cabelo duplo. É um momento reservado para os dois, lado a lado, na mesma cadeira de sempre.",
      "Os atendimentos acontecem em simultâneo, no mesmo ritmo, para que pai e filho compartilhem a experiência do início ao fim — incluindo uma bebida de cortesia.",
      "No final, uma foto de recordação. Porque alguns momentos merecem ficar guardados além do espelho.",
    ],
    experience: [
      { title: "Chegada", description: "Pai e filho acomodados lado a lado." },
      { title: "Bebida de cortesia", description: "Um gesto para começar o momento com calma." },
      { title: "Cortes simultâneos", description: "Dois barbeiros, mesmo ritmo, mesma atenção." },
      { title: "Finalização", description: "Styling profissional para os dois." },
      { title: "Foto de recordação", description: "Um registro do momento compartilhado." },
    ],
    benefits: [
      { title: "Momento em família", description: "Uma experiência pensada para ser compartilhada." },
      { title: "Atendimento simultâneo", description: "Nenhum dos dois espera pelo outro." },
      { title: "Recordação", description: "Uma foto para guardar a primeira vez — ou a próxima." },
    ],
    faqs: [
      {
        q: "Qual a idade mínima?",
        a: "Não há idade mínima. Atendemos crianças de qualquer idade, no ritmo delas.",
      },
      {
        q: "Os dois atendimentos acontecem juntos?",
        a: "Sim. Pai e filho são atendidos lado a lado, ao mesmo tempo.",
      },
      {
        q: "Precisa de agendamento prévio?",
        a: "Sim. Esse horário é reservado especialmente para os dois.",
      },
    ],
    heroImageSeed: "dangelo-father-son",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 2) {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}

export function placeholderImage(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
