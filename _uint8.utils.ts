export function stringToUint8Array(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

export function uint8ArrayToString(buf: Uint8Array): string {
  const decoder = new TextDecoder();
  return decoder.decode(buf);
}
