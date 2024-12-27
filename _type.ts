/**
 * The privatebin paste content.
 */
export interface PrivatebinPaste {
  /**
   * The paste content as a string.
   */
  paste: string;
}

/**
 * The privatebin response.
 */
export interface PrivatebinResponse {
  /**
   * The status code.
   */
  status: number;

  /**
   * The id of the privatebin paste.
   */
  id: string;

  /**
   * The url of the privatebin paste.
   */
  url: string;

  /**
   * The deletion token of the privatebin paste.
   * This token is used to delete the paste.
   */
  deletetoken: string;
}

/**
 * The privatebin options.
 */
export interface PrivatebinOptions {
  /**
   * The expiration time of the paste.
   */
  expire:
    | "5min"
    | "10min"
    | "1hour"
    | "1day"
    | "1week"
    | "1month"
    | "1year"
    | "never";

  /**
   * The burn after reading option.
   * If set to 1, the paste will be deleted after reading.
   * If set to 0, the paste will not be deleted after reading.
   */
  burnafterreading: 0 | 1;

  /**
   * The open discussion option.
   * If set to 1, the paste will be open for discussion.
   * If set to 0, the paste will not be open for discussion.
   */
  opendiscussion: 0 | 1;

  /**
   * The output format of the paste.
   */
  output: "text" | "json" | "yaml";

  /**
   * The compression format of the paste.
   */
  compression: "none" | "zlib";

  /**
   * The text format of the paste.
   */
  textformat: "plaintext" | "markdown";
}

/**
 * The spec to use for encryption and decryption.
 */
export interface PrivatebinSpec {
  /**
   * The algorithm to use for encryption and decryption.
   */
  algo: string;

  /**
   * The mode to use for encryption and decryption.
   */
  mode: string;

  /**
   * The key size to use for encryption and decryption.
   */
  ks: number;

  /**
   * The tag size to use for encryption and decryption.
   */
  ts: number;

  /**
   * The iteration to use for encryption and decryption.
   */
  iter: number;

  /**
   * The compression to use for encryption and decryption.
   */
  compression: string;

  /**
   * Indicates if the paste is burn after reading.
   */
  burnafterreading: number;

  /**
   * Indicates if the paste is open for discussion.
   */
  opendiscussion: number;

  /**
   * The text format of the paste
   */
  textformat: string;
}

/**
 * Represents the additional data of a privatebin paste.
 * The additional data is used to decrypt the paste.
 *
 * ```ts
 * const adata: PrivatebinAdata = [
 *  [
 *    encodeBase64(iv),
 *    encodeBase64(salt),
 *    spec.iter,
 *    spec.ks,
 *    spec.ts,
 *    spec.algo,
 *    spec.mode,
 *    spec.compression,
 *  ],
 *  spec.textformat,
 *  spec.opendiscussion,
 *  spec.burnafterreading,
 * ];
 */
export type PrivatebinAdata = [
  [string, string, number, number, number, string, string, string],
  string,
  number,
  number,
];

export interface PrivatebinMeta {
  expire: string;
}

export interface PrivatebinPasteRequest {
  status?: number;
  message?: string;
  v?: 2;
  ct: string; // Cipher Text
  adata: PrivatebinAdata; // Additional data
  meta?: PrivatebinMeta;
}
