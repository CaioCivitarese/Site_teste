import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./router-CRFfZZD3.js";
import { E as Eyebrow } from "./Section-CVKEaPpt.js";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  as = "h2"
}) {
  const Tag = as;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      ),
      children: [
        eyebrow ? /* @__PURE__ */ jsx(Eyebrow, { className: "mb-4", children: eyebrow }) : null,
        /* @__PURE__ */ jsx(Tag, { className: "text-4xl leading-tight text-foreground sm:text-5xl", children: title }),
        subtitle ? /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg leading-relaxed text-muted-foreground", children: subtitle }) : null
      ]
    }
  );
}
export {
  SectionHeading as S
};
