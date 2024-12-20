import { assertEquals, assertRejects } from "@std/assert";
import { createKey, PrivatebinClient, type PrivatebinOptions } from "./mod.ts";

Deno.test("Create a privatebin paste and read", async () => {
  const privatebin = new PrivatebinClient();
  const key = createKey();
  const msg = "Hello World!";
  const opts = {
    textformat: "plaintext",
    expire: "1week",
    burnafterreading: 1,
    opendiscussion: 0,
    output: "text",
    compression: "zlib",
  } satisfies PrivatebinOptions;
  const paste = await privatebin.sendText(msg, key, opts);
  const decrypted = await privatebin.getText(paste.id, key);
  assertEquals(decrypted.paste, msg);
});

Deno.test("Create a privatebin paste and read with different key and throw error", async () => {
  const privatebin = new PrivatebinClient();
  const key = createKey();
  const key2 = createKey();
  const msg = "Hello World!";
  const opts = {
    textformat: "plaintext",
    expire: "1week",
    burnafterreading: 1,
    opendiscussion: 0,
    output: "text",
    compression: "zlib",
  } satisfies PrivatebinOptions;
  const paste = await privatebin.sendText(msg, key, opts);
  await assertRejects(() => privatebin.getText(paste.id, key2));
});

Deno.test("Read a burn privatebin", async () => {
  const privatebin = new PrivatebinClient();
  const key = createKey();
  const msg = "Hello World!";
  const opts = {
    textformat: "plaintext",
    expire: "1week",
    burnafterreading: 1,
    opendiscussion: 0,
    output: "text",
    compression: "zlib",
  } satisfies PrivatebinOptions;
  const paste = await privatebin.sendText(msg, key, opts);
  const decrypted = await privatebin.getText(paste.id, key);
  assertEquals(decrypted.paste, msg);
  await assertRejects(() => privatebin.getText(paste.id, key));
});
