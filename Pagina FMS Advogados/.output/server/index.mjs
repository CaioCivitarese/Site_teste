globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/assets/PageHero-CPD3mXLQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"36f-pw0EC2opq5Na97TF7irZE+eKPzE"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 879,
    "path": "../public/assets/PageHero-CPD3mXLQ.js"
  },
  "/assets/Section-C26detuh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19c-WVirC2soh0sutiO2xuDRNZ1thAk"',
    "mtime": "2026-06-18T00:54:45.682Z",
    "size": 412,
    "path": "../public/assets/Section-C26detuh.js"
  },
  "/assets/SectionHeading-Dsb-DcG8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"205-VVRwdV+L9rGlJMC5/MVm1M8ph1A"',
    "mtime": "2026-06-18T00:54:45.682Z",
    "size": 517,
    "path": "../public/assets/SectionHeading-Dsb-DcG8.js"
  },
  "/assets/ServicePage-t3_h9xqY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"338b-/2xACjq0Z+DMOd4FT4XaOfgBFR0"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 13195,
    "path": "../public/assets/ServicePage-t3_h9xqY.js"
  },
  "/assets/about-DcLIuYR9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"14b0-eZSTcKUrsfwQqsFKZpZKvKHwhyg"',
    "mtime": "2026-06-18T00:54:45.680Z",
    "size": 5296,
    "path": "../public/assets/about-DcLIuYR9.js"
  },
  "/assets/book-BhitAYkv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128d0-JnrubA0uh9TKnR+rUXGYOGV9y4E"',
    "mtime": "2026-06-18T00:54:45.676Z",
    "size": 75984,
    "path": "../public/assets/book-BhitAYkv.js"
  },
  "/assets/chevron-down-B1HsgcWx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"7c-huTt7l5ya2zeBypEnpFTiE2DVn4"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 124,
    "path": "../public/assets/chevron-down-B1HsgcWx.js"
  },
  "/assets/clock-DM2tV90e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"af-55rWGn7qyBHBERLa6IB22sFoIhU"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 175,
    "path": "../public/assets/clock-DM2tV90e.js"
  },
  "/assets/index-BOdiUxVy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18c3-0TOHK2oo9kBTGghn/mmzB5qBKqo"',
    "mtime": "2026-06-18T00:54:45.682Z",
    "size": 6339,
    "path": "../public/assets/index-BOdiUxVy.js"
  },
  "/assets/index-DQz6Z69t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e2a-pvZBl7vsyCzQpB+/XpRRJ/OxpZk"',
    "mtime": "2026-06-18T00:54:45.680Z",
    "size": 7722,
    "path": "../public/assets/index-DQz6Z69t.js"
  },
  "/assets/index-D7MSU_Kh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"634be-3FHk+aA0buY+KAAU4IBhKQfJ3AQ"',
    "mtime": "2026-06-18T00:54:45.668Z",
    "size": 406718,
    "path": "../public/assets/index-D7MSU_Kh.js"
  },
  "/assets/proxy-DrvNu-dt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1b311-Te0AOMJIeZnN7EFpscvEXAwd13k"',
    "mtime": "2026-06-18T00:54:45.682Z",
    "size": 111377,
    "path": "../public/assets/proxy-DrvNu-dt.js"
  },
  "/assets/reviews-D-sQfLqn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"144c-BDuTA9E9GkJ5SRrCQi8HRG57QK4"',
    "mtime": "2026-06-18T00:54:45.668Z",
    "size": 5196,
    "path": "../public/assets/reviews-D-sQfLqn.js"
  },
  "/assets/services-DcvTHH0y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-Jl0J9HTk8wXynBr20KNXs2u6Ybw"',
    "mtime": "2026-06-18T00:54:45.676Z",
    "size": 95,
    "path": "../public/assets/services-DcvTHH0y.js"
  },
  "/assets/services.classic-cut-Dc22fEAF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-rAbdvjqhMQqfvPBRIjb/aNPH6wQ"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 339,
    "path": "../public/assets/services.classic-cut-Dc22fEAF.js"
  },
  "/assets/services.executive-cut-BsUnynId.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-95qkQRL/tHM68ODs6suviQSmshE"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 339,
    "path": "../public/assets/services.executive-cut-BsUnynId.js"
  },
  "/assets/services.father-son-Cdzs8bwl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-d/2/fgf0vGbsx50tVJI7EGd/7KA"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 339,
    "path": "../public/assets/services.father-son-Cdzs8bwl.js"
  },
  "/assets/services.haircut-beard-BLx01iia.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-m7avNTpV4Ei38o/tpcFX1f50wGY"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 339,
    "path": "../public/assets/services.haircut-beard-BLx01iia.js"
  },
  "/assets/location-fnCGWCiu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16a1-nXVtDyFqvncpUo46yIIXG0avyds"',
    "mtime": "2026-06-18T00:54:45.668Z",
    "size": 5793,
    "path": "../public/assets/location-fnCGWCiu.js"
  },
  "/assets/services.index-B5HAurTD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1368-I+57tG6sKmN1i4J94NFhpS8y1rs"',
    "mtime": "2026-06-18T00:54:45.680Z",
    "size": 4968,
    "path": "../public/assets/services.index-B5HAurTD.js"
  },
  "/assets/services.premium-beard-naz0R4pO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"153-5an68OXyNBH9FwC3KZcyEDWE6Cg"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 339,
    "path": "../public/assets/services.premium-beard-naz0R4pO.js"
  },
  "/assets/shield-check-JVTobNQB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"13c-FG188c+eUoen8v0AGFdRYSV24F8"',
    "mtime": "2026-06-18T00:54:45.681Z",
    "size": 316,
    "path": "../public/assets/shield-check-JVTobNQB.js"
  },
  "/assets/styles-B-_H8cWD.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"af6e-N9vveO7B8B2ZpyrRAkWRJ2c0LIM"',
    "mtime": "2026-06-18T00:54:45.668Z",
    "size": 44910,
    "path": "../public/assets/styles-B-_H8cWD.css"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _lZ5EOO = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_rzzvj4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_rzzvj4 };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_lZ5EOO)
].filter(Boolean);
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
function createNitroApp() {
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({ error, context: errorCtx });
      }
    }
  };
  const h3App = createH3App({
    onError(error, event) {
      return errorHandler(error, event);
    }
  });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  return {
    fetch: appHandler,
    h3: h3App,
    hooks: void 0,
    captureError
  };
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  h3App["~getMiddleware"] = (event, route) => {
    const pathname = event.url.pathname;
    const method = event.req.method;
    const middleware = [];
    const routeRules = getRouteRules(method, pathname);
    event.context.routeRules = routeRules?.routeRules;
    if (routeRules?.routeRuleMiddleware.length) {
      middleware.push(...routeRules.routeRuleMiddleware);
    }
    middleware.push(...h3App["~middleware"]);
    if (route?.data?.middleware?.length) {
      middleware.push(...route.data.middleware);
    }
    return middleware;
  };
  return h3App;
}
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
