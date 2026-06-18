import "dotenv/config";
import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export type BookingEmailInput = {
  name: string;
  email: string;
  phone: string;
  serviceName: string;
  date: string;
  time: string;
  guests: string;
  notes?: string;
};

const timeLabels: Record<string, string> = {
  morning: "Manhã",
  afternoon: "Tarde",
  evening: "Final do dia",
};

export const sendBookingEmail = createServerFn({ method: "POST" })
  .validator((data: BookingEmailInput) => data)
  .handler(async ({ data }) => {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
      throw new Error(
        "Envio de e-mail não configurado. Defina GMAIL_USER e GMAIL_APP_PASSWORD no arquivo .env.",
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const lines = [
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `E-mail: ${data.email}`,
      `Serviço: ${data.serviceName || "A combinar"}`,
      `Data preferida: ${data.date || "A combinar"}`,
      `Horário preferido: ${timeLabels[data.time] ?? data.time}`,
      `Convidados: ${data.guests}`,
    ];
    if (data.notes) lines.push(`Observações: ${data.notes}`);

    await transporter.sendMail({
      from: `"D'Angelo Barber Club - Site" <${user}>`,
      to: user,
      replyTo: data.email,
      subject: `Novo agendamento - ${data.name}`,
      text: lines.join("\n"),
    });

    return { ok: true } as const;
  });
