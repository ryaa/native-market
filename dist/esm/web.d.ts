import { WebPlugin } from "@capacitor/core";
import { NativeMarketPlugin } from "./definitions";
export declare class NativeMarketWeb
  extends WebPlugin
  implements NativeMarketPlugin
{
  constructor();
  openStoreListing(_options: { appId: string }): Promise<void>;
  openDevPage(_options: { devId: string }): Promise<void>;
  openCollection(_options: { name: string }): Promise<void>;
  openEditorChoicePage(_options: { editorChoice: string }): Promise<void>;
  search(_options: { terms: string }): Promise<void>;
}
declare const NativeMarket: NativeMarketWeb;
export { NativeMarket };
