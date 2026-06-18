import { jsx } from "react/jsx-runtime";
import { c as cn } from "./router-CRFfZZD3.js";
function Eyebrow({ className, children }) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "text-eyebrow text-xs font-semibold uppercase text-primary",
        className
      ),
      children
    }
  );
}
function Section({ className, bleed = false, children, ...props }) {
  return /* @__PURE__ */ jsx("section", { className: cn("py-24 lg:py-32", className), ...props, children: bleed ? children : /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children }) });
}
export {
  Eyebrow as E,
  Section as S
};
