import { deflateRaw, inflateRaw } from "@deno-library/compress";
import {
  decrypt,
  encrypt,
  stringToUint8Array,
  uint8ArrayToString,
} from "./crypto.ts";
import type {
  PrivatebinAdata,
  PrivatebinOptions,
  PrivatebinPaste,
  PrivatebinPasteRequest,
} from "./types.ts";

export function encryptText(
  text: string,
  key: Uint8Array,
  options: PrivatebinOptions,
): Promise<PrivatebinPasteRequest> {
  const { burnafterreading, opendiscussion, compression, textformat } = options;
  const spec = {
    algo: "aes",
    mode: "gcm",
    ks: 256,
    ts: 128,
    iter: 100000,
    textformat,
    compression,
    burnafterreading,
    opendiscussion,
  };

  let buf = stringToUint8Array(JSON.stringify({ paste: text }));
  if (compression === "zlib") {
    buf = deflateRaw(buf);
  }

  return encrypt(buf, key, spec);
}

export async function decryptText(
  ct: string,
  key: Uint8Array,
  adata: PrivatebinAdata,
): Promise<PrivatebinPaste> {
  const buf = await decrypt(ct, key, adata);
  if (adata[0][7] === "zlib") {
    return JSON.parse( new TextDecoder().decode(inflateRaw(buf)));
  }

  return JSON.parse(uint8ArrayToString(buf));
}

export function createKey(): Uint8Array {
  return globalThis.crypto.getRandomValues(new Uint8Array(32));
}
