/**
 * @file
 * URLに関するutil
 */

// TODO route, hash, queryをつけてかつちゃんと型を定義できるようにしたい、libsに近しきすることをしたい

/** ハッシュの付与したリンクを作成 */
export const getHashedLink = (path: string, hash: string) => `${path}#${hash}`;
