import Spacer from "@components/Atoms/Spacer";

const Study04: React.FC = () => {
  const konamiCommand = "↑ ↑ ↓ ↓ ← → ← → b a";
  const htmlTag = "<small>HTMLタグを含んだ変数<br>を出力してみる</small>";

  return (
    <div>
      <p>コナミコマンド(konamiCommand 変数)を出力してみる。</p>
      <p>{/* ここに konamiCommand を展開 */}</p>
      <Spacer />
      <p>HTMLタグを含んだ変数を出力してみる</p>
      <p>{/* ここに htmlTag を展開 */}</p>
    </div>
  );
};

export default Study04;
