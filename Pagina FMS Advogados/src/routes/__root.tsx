import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "#/styles.css?url";
import { Header } from "#/components/site/Header";
import { Footer } from "#/components/site/Footer";
import { JsonLd } from "#/components/site/JsonLd";
import { business } from "#/lib/data";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "D'Angelo Barber Club | Barbearia Premium na Barra da Tijuca",
      },
      {
        name: "description",
        content:
          "Cortes precisos, barba impecável e uma experiência feita sem pressa. Barbearia premium na Barra da Tijuca, Rio de Janeiro.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://www.dangelobarberclub.com.br" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: business.name,
            description: business.tagline,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Avenida das Américas, 3500",
              addressLocality: "Rio de Janeiro",
              addressRegion: "RJ",
              addressCountry: "BR",
            },
            telephone: business.phone,
            email: business.email,
            openingHoursSpecification: business.hours
              .filter((h) => h.hours !== "Fechado")
              .map((h) => ({
                "@type": "OpeningHoursSpecification",
                dayOfWeek: h.day,
                opens: h.hours.split("–")[0],
                closes: h.hours.split("–")[1],
              })),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
        <Scripts />
      </body>
    </html>
  );
}
