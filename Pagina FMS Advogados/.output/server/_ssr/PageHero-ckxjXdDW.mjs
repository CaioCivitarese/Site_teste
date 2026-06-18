import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CRFfZZD3.mjs";
import { E as Eyebrow } from "./Section-CVKEaPpt.mjs";
function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  height = "tall",
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn(
        "relative flex items-end overflow-hidden",
        height === "full" ? "h-screen" : "h-[70vh] min-h-[520px]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: imageAlt,
            className: "absolute inset-0 h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eyebrow, { className: "text-ivory/90", children: eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 max-w-3xl text-5xl leading-tight text-ivory sm:text-6xl lg:text-7xl", children: title }),
          subtitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-ivory/85", children: subtitle }) : null,
          children
        ] })
      ]
    }
  );
}
export {
  PageHero as P
};
