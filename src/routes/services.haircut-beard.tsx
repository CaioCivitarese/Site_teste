import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "#/components/site/ServicePage";
import { getServiceBySlug, placeholderImage } from "#/lib/data";

const service = getServiceBySlug("haircut-beard")!;

export const Route = createFileRoute("/services/haircut-beard")({
  head: () => ({
    meta: [
      { title: "Corte + Barba | D'Angelo Barber Club" },
      {
        name: "description",
        content: "O serviço mais procurado da casa: corte completo e barba modelada. A partir de R$120.",
      },
      { property: "og:title", content: "Corte + Barba | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "O serviço mais procurado da casa.",
      },
      { property: "og:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
      { name: "twitter:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
