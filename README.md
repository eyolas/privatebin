# @eyolas/privatebin

Client Library to interact with privatebin (https://privatebin.net)

### Usage

```typescript
import { createKey, PrivatebinClient } from '@eyolas/privatebin';

const urlPrivatebin = 'https://privatebin.net'
const privatebin = new PrivatebinClient(urlPrivatebin);
const key = createKey();
const msg = 'Hello World!';

const opts = {
    textformat: "plaintext",
    expire: "1week",
    burnafterreading: 1,
    opendiscussion: 0,
    output: "text",
    compression: "zlib",
} satisfies PrivatebinOptions;

const paste = await privatebin.sendText(msg, key, opts);
console.log(privatebin.getUrl(paste, key));
console.log(await privatebin.getText(paste.id, key));
```