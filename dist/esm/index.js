import { registerPlugin } from "@capacitor/core";
const NativeMarket = registerPlugin("NativeMarket", {
  web: () => import("./web").then((m) => new m.NativeMarketWeb()),
});
// export * from './web'; // @todo
export * from "./definitions";
export { NativeMarket };
//# sourceMappingURL=index.js.map
