(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StationMap.tsx [client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_3265875f._.js",
  "static/chunks/components_StationMap_tsx_3a478734._.js",
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_6634502f.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [client] (css)"
    ]
  },
  "static/chunks/components_StationMap_tsx_2cd40abb._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/StationMap.tsx [client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);