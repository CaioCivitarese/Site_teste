import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "#/components/site/ServicePage";
import { getServiceBySlug, placeholderImage } from "#/lib/data";

const service = getServiceBySlug("father-son")!;

export const Route = createFileRoute("/services/father-son")({
  head: () => ({
    meta: [
      { title: "Pai e Filho | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Uma experiência compartilhada para criar memórias. A partir de R$180.",
      },
      { property: "og:title", content: "Pai e Filho | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Uma experiência compartilhada para criar memórias.",
      },
      { property: "og:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
      { name: "twitter:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
