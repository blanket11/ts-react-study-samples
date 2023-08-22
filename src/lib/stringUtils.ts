/**
 * 2つの文字列を連結します。
 * @param a - 最初の文字列。
 * @param b - 二番目の文字列。
 * @returns 連結された文字列。
 */
export function concatenate(a: string, b: string): string {
  return a + b;
}

/**
 * 2つの文字列が同じかどうかを確認します。
 * @param str1 - 1つ目の文字列。
 * @param str2 - 2つ目の文字列。
 * @returns 2つの文字列が同じ場合はtrue、それ以外の場合はfalse。
 */
export function areStringsEqual(str1: string, str2: string): boolean {
  return str1 === str2;
}
