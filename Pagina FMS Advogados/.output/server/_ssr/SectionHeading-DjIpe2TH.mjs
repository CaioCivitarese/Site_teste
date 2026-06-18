import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CRFfZZD3.mjs";
import { E as Eyebrow } from "./Section-CVKEaPpt.mjs";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  as = "h2"
}) {
  const Tag = as;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      ),
      children: [
        eyebrow ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { className: "mb-4", children: eyebrow }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "text-4xl leading-tight text-foreground sm:text-5xl", children: title }),
        subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg leading-relaxed text-muted-foreground", children: subtitle }) : null
      ]
    }
  );
}
export {
  SectionHeading as S
};
