import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "#/components/site/ServicePage";
import { getServiceBySlug, placeholderImage } from "#/lib/data";

const service = getServiceBySlug("premium-beard")!;

export const Route = createFileRoute("/services/premium-beard")({
  head: () => ({
    meta: [
      { title: "Barba Premium | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Definição, simetria e acabamento impecável para a sua barba. A partir de R$60.",
      },
      { property: "og:title", content: "Barba Premium | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Definição, simetria e acabamento impecável.",
      },
      { property: "og:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
      { name: "twitter:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
