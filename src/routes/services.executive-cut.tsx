import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "#/components/site/ServicePage";
import { getServiceBySlug, placeholderImage } from "#/lib/data";

const service = getServiceBySlug("executive-cut")!;

export const Route = createFileRoute("/services/executive-cut")({
  head: () => ({
    meta: [
      { title: "Corte Executivo | D'Angelo Barber Club" },
      {
        name: "description",
        content: "Atendimento refinado para profissionais exigentes. A partir de R$110.",
      },
      { property: "og:title", content: "Corte Executivo | D'Angelo Barber Club" },
      {
        property: "og:description",
        content: "Atendimento refinado para profissionais exigentes.",
      },
      { property: "og:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
      { name: "twitter:image", content: placeholderImage(service.heroImageSeed, 1600, 900) },
    ],
  }),
  component: () => <ServicePage service={service} />,
});
