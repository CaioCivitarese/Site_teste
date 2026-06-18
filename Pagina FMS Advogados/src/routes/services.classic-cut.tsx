import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "#/components/site/ServicePage";
import { getServiceBySlug, placeholderImage } from "#/lib/data";

const service = getServiceBySlug("classic-cut")!;

export const Route = createFileRoute("/services/classic-cut")({
  head: () => ({
    meta: [
      { title: "Corte Clássico | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Um corte atemporal executado com técnica e atenção aos detalhes. A partir de R$70.",
      },
      { property: "og:title", content: "Corte Clássico | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Um corte atemporal executado com técnica e atenção aos detalhes.",
      },
      { property: "og:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
      { name: "twitter:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
