import { encodeBase58 } from "@std/encoding/base58";
import type {
  PrivatebinOptions,
  PrivatebinPaste,
  PrivatebinPasteRequest,
  PrivatebinResponse,
} from "./types.ts";
import { decryptText, encryptText } from "./crypt.ts";

export class PrivatebinClient {
  baseURL: string;
  headers: { "Content-Type": string; "X-Requested-With": string };
  constructor(baseURL = "https://privatebin.net") {
    this.baseURL = baseURL;
    this.headers = {
      "Content-Type": "application/json",
      "X-Requested-With": "JSONHttpRequest",
    };
  }

  public async sendText(
    text: string,
    key: Uint8Array,
    options: PrivatebinOptions,
  ): Promise<PrivatebinResponse> {
    const payload = await encryptText(text, key, options);
    return this.postPaste(payload, options);
  }

  public async getText(id: string, key: Uint8Array): Promise<PrivatebinPaste> {
    const { status, message, ct, adata } = await this.getPaste(id);
    if (status == 0) {
      return decryptText(ct, key, adata);
    } else {
      throw new Error(message);
    }
  }

  public getUrl(paste: PrivatebinResponse, key: Uint8Array): string {
    return `${this.baseURL}${paste.url}#${encodeBase58(key)}`;
  }

  private async getPaste(id: string): Promise<PrivatebinPasteRequest> {
    const result = await fetch(`${this.baseURL}/?pasteid=${id}`, {
      method: "GET",
      headers: this.headers,
    });
    return result.json();
  }

  private async postPaste(
    PrivatebinPasteRequest: PrivatebinPasteRequest,
    options: PrivatebinOptions,
  ): Promise<PrivatebinResponse> {
    const { expire } = options;
    const { ct, adata } = PrivatebinPasteRequest;

    const result = await fetch(this.baseURL + "/", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        v: 2,
        ct,
        adata,
        meta: { expire },
      }),
    });
    return result.json();
  }
}
