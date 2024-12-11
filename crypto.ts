import { decodeBase64, encodeBase64 } from "@std/encoding/base64";

import type {
  PrivatebinAdata,
  PrivatebinPasteRequest,
  PrivatebinSpec,
} from "./types.ts";

export function importKey(key: Uint8Array): Promise<CryptoKey> {
  return globalThis.crypto.subtle.importKey("raw", key, "PBKDF2", false, [
    "deriveBits",
    "deriveKey",
  ]);
}

export function deriveKey(
  key: CryptoKey,
  salt: Uint8Array,
  iterations: number,
  keyLength: number,
): Promise<CryptoKey> {
  return globalThis.crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
    key,
    { name: "AES-GCM", length: keyLength },
    false,
    ["encrypt", "decrypt"],
  );
}

export function stringToUint8Array(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

export function uint8ArrayToString(buf: Uint8Array): string {
  const decoder = new TextDecoder();
  return decoder.decode(buf);
}

export function concatUint8Array(
  arr1: Uint8Array,
  arr2: Uint8Array,
): Uint8Array {
  const result = new Uint8Array(arr1.length + arr2.length);
  result.set(arr1);
  result.set(arr2, arr1.length);
  return result;
}

export async function encrypt(
  message: Uint8Array,
  masterkey: Uint8Array,
  spec: PrivatebinSpec,
): Promise<PrivatebinPasteRequest> {
  const key = await importKey(masterkey);
  const iv = globalThis.crypto.getRandomValues(new Uint8Array(16));
  const salt = globalThis.crypto.getRandomValues(new Uint8Array(8));
  const derivedKey = await deriveKey(key, salt, spec.iter, spec.ks);

  const adata: PrivatebinAdata = [
    [
      encodeBase64(iv),
      encodeBase64(salt),
      spec.iter,
      spec.ks,
      spec.ts,
      spec.algo,
      spec.mode,
      spec.compression,
    ],
    spec.textformat,
    spec.opendiscussion,
    spec.burnafterreading,
  ];

  const encData = await globalThis.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
      additionalData: stringToUint8Array(JSON.stringify(adata)),
      tagLength: spec.ts,
    },
    derivedKey,
    message,
  );

  return {
    ct: encodeBase64(new Uint8Array(encData)),
    adata,
  };
}

export async function decrypt(
  data: string,
  masterkey: Uint8Array,
  adata: PrivatebinAdata,
): Promise<Uint8Array> {
  const bData = decodeBase64(data);
  const spec = adata[0];
  const iv = decodeBase64(spec[0]);
  const salt = decodeBase64(spec[1]);
  const iterations = spec[2];
  const ts = spec[4];

  const key = await importKey(masterkey);
  const derivedKey = await deriveKey(key, salt, iterations, 256);

  const clearData = await globalThis.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv,
      additionalData: stringToUint8Array(JSON.stringify(adata)),
      tagLength: ts,
    },
    derivedKey,
    bData,
  );

  return new Uint8Array(clearData);
}
