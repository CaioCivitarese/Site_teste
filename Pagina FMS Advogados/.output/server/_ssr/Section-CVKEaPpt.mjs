import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./router-CRFfZZD3.mjs";
function Eyebrow({ className, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: cn("py-24 lg:py-32", className), ...props, children: bleed ? children : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children }) });
}
export {
  Eyebrow as E,
  Section as S
};
