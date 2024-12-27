/**
 * Generate a random key
 * @returns The generated key
 */
export function createKey(): Uint8Array {
  return globalThis.crypto.getRandomValues(new Uint8Array(32));
}
