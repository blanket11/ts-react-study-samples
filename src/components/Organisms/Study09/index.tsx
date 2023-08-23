import Title from "@components/Atoms/Title";

const Study09 = () => {
  return (
    <div>
      <Title>useRef</Title>
      <p style={{ border: "1px solid #f00" }}>
        この要素の情報を取得してみましょう。
        <br />
        この高さをconsole.logで見てみます。
      </p>
      {/* 1. useRefを使い pEl 参照を作成 */}
      {/* 2. ref属性を使用して、pタグで pEl 関連付ける */}
      {/* 3. useEffectで pEl の高さを console.logで確認 */}
      {/* 4. pEl.current を ifで存在確認チェック */}
      {/* 5. .clinentHeightがエラーになる場合は useRef<HTMLParagraphElement | null>(null) と型を指定 */}
    </div>
  );
};

export default Study09;
