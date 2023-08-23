import Spacer from "@components/Atoms/Spacer";

const Study04: React.FC = () => {
  const konamiCommand = "↑ ↑ ↓ ↓ ← → ← → b a";
  const htmlTag = "<small>HTMLタグを含んだ変数<br>を出力してみる</small>";

  return (
    <div>
      <p>コナミコマンド(konamiCommand 変数)を出力してみる。</p>
      <p>{konamiCommand}</p>
      <Spacer />
      <p>HTMLタグを含んだ変数を出力してみる</p>
      <p dangerouslySetInnerHTML={{ __html: htmlTag }} />
    </div>
  );
};

export default Study04;
