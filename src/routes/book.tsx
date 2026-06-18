import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Phone, Clock, ShieldCheck, Scissors, MessageCircle } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Textarea } from "#/components/ui/textarea";
import { Label } from "#/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { Section } from "#/components/site/Section";
import { Eyebrow } from "#/components/site/Eyebrow";
import { business, services, placeholderImage } from "#/lib/data";

type BookSearch = {
  service?: string;
};

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Agendar | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Agende seu horário na D'Angelo Barber Club, na Barra da Tijuca, Rio de Janeiro.",
      },
      { property: "og:title", content: "Agendar | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Agende seu horário na D'Angelo Barber Club.",
      },
      { property: "og:image", content: placeholderImage("dangelo-book-hero", 1600, 900) },
    ],
  }),
  component: BookPage,
});

const timeLabels: Record<string, string> = {
  morning: "Manhã",
  afternoon: "Tarde",
  evening: "Final do dia",
};

function buildBookingMessage(formData: FormData, serviceName: string) {
  const time = formData.get("time") as string;
  const lines = [
    "Olá! Gostaria de agendar um horário na D'Angelo Barber Club.",
    "",
    `Nome: ${formData.get("name")}`,
    `Telefone: ${formData.get("phone")}`,
    `E-mail: ${formData.get("email")}`,
    `Serviço: ${serviceName || "A combinar"}`,
    `Data preferida: ${formData.get("date") || "A combinar"}`,
    `Horário preferido: ${timeLabels[time] ?? time}`,
    `Convidados: ${formData.get("guests")}`,
  ];
  const notes = formData.get("notes");
  if (notes) lines.push(`Observações: ${notes}`);
  return lines.join("\n");
}

function BookPage() {
  const { service } = Route.useSearch();
  const [selectedService, setSelectedService] = useState(service ?? "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const serviceName = services.find((s) => s.slug === formData.get("service"))?.name ?? "";

    const message = buildBookingMessage(formData, serviceName);
    const phone = business.phoneHref.replace("+", "");
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Abrindo WhatsApp...", {
      description: "Confirme o envio da mensagem para concluir a solicitação.",
    });
    form.reset();
    setSelectedService("");
  }

  return (
    <div>
      <section className="relative flex h-[42vh] min-h-[340px] items-end overflow-hidden pt-24">
        <img
          src={placeholderImage("dangelo-book-hero", 1920, 1000)}
          alt="Recepção da D'Angelo Barber Club"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
          <Eyebrow className="text-ivory/90">Agendamento</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-5xl leading-tight text-ivory sm:text-6xl">
            Reserve seu horário
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" name="name" required placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(21) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço</Label>
                  <Select
                    name="service"
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Escolha um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>
                          {s.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="date">Data preferida</Label>
                  <Input id="date" name="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferência de horário</Label>
                  <Select name="time" defaultValue="afternoon">
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Manhã</SelectItem>
                      <SelectItem value="afternoon">Tarde</SelectItem>
                      <SelectItem value="evening">Final do dia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Número de convidados</Label>
                  <Input id="guests" name="guests" type="number" min={1} defaultValue={1} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea id="notes" name="notes" placeholder="Alguma preferência ou referência que devemos saber?" />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" />
                Agendar pelo WhatsApp
              </Button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="rounded-sm border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="font-display text-xl">Agendamento por telefone</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Prefere falar com a gente diretamente?
              </p>
              <a
                href={`tel:${business.phoneHref}`}
                className="mt-2 block text-lg font-medium text-primary"
              >
                {business.phone}
              </a>
            </div>

            <div className="rounded-sm border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                <p className="font-display text-xl">Fale agora</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Fale diretamente com a equipe pelo WhatsApp ou e-mail.
              </p>
              <a
                href={`https://wa.me/${business.phoneHref.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-medium text-primary"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${business.email}`}
                className="mt-1 block text-sm font-medium text-primary"
              >
                {business.email}
              </a>
            </div>

            <div className="rounded-sm border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="font-display text-xl">Horários</p>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {business.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="font-display text-xl">Política de cancelamento</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Cancelamentos com até 4 horas de antecedência não geram custo.
                Faltas sem aviso podem ser cobradas em parte.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <Scissors className="h-5 w-5 text-primary" />
                <p className="font-display text-xl">O que levar</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Apenas referências de estilo, se tiver. O restante a gente cuida.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
