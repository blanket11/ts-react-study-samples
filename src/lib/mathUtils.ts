/**
 * 2つの数値の合計を返します。
 * @param a - 最初の数値。
 * @param b - 二番目の数値。
 * @returns a と b の合計。
 */
export function sum(a: number, b: number): number {
  return a + b;
}
/*
✨型の指定方法の説明
- 引数の後ろに : をつけて方を指定する
- 返り値は () の後ろに : をつけて型を指定する
*/

/**
 * 2つの数値の平均を返します。
 * @param a - 最初の数値。
 * @param b - 二番目の数値。
 * @returns a と b の平均。
 */
export function average(a: number, b: number): number {
  return sum(a, b) / 2;
}
