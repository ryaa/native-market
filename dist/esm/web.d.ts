import { WebPlugin } from "@capacitor/core";
import { NativeMarketPlugin } from "./definitions";
export declare class NativeMarketWeb extends WebPlugin
  implements NativeMarketPlugin {
  constructor();
  openStoreListing(options: { appId: string }): Promise<void>;
  openDevPage(options: { devId: string }): Promise<void>;
  openCollection(options: { name: string }): Promise<void>;
  openEditorChoicePage(options: { editorChoice: string }): Promise<void>;
  search(options: { terms: string }): Promise<void>;
}
declare const NativeMarket: NativeMarketWeb;
export { NativeMarket };
