import { WebPlugin } from "@capacitor/core";
export class NativeMarketWeb extends WebPlugin {
  constructor() {
    super({
      name: "NativeMarket",
      platforms: ["web"],
    });
  }
  openStoreListing(_options) {
    throw this.unimplemented("Not implemented on web.");
  }
  openDevPage(_options) {
    throw this.unimplemented("Not implemented on web.");
  }
  openCollection(_options) {
    throw this.unimplemented("Not implemented on web.");
  }
  openEditorChoicePage(_options) {
    throw this.unimplemented("Not implemented on web.");
  }
  search(_options) {
    throw this.unimplemented("Not implemented on web.");
  }
}
const NativeMarket = new NativeMarketWeb();
export { NativeMarket };
//# sourceMappingURL=web.js.map
