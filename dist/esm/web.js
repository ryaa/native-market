import { WebPlugin } from "@capacitor/core";
export class NativeMarketWeb extends WebPlugin {
  constructor() {
    super({
      name: "NativeMarket",
      platforms: ["web"],
    });
  }
  openStoreListing(options) {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
  openDevPage(options) {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
  openCollection(options) {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
  openEditorChoicePage(options) {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
  search(options) {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
}
const NativeMarket = new NativeMarketWeb();
export { NativeMarket };
import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(NativeMarket);
//# sourceMappingURL=web.js.map
