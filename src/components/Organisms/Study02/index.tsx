import Spacer from "@components/Atoms/Spacer";
import style from "./style.module.scss";

const Study02 = () => {
  return (
    <div>
      <p>React.jsではclassではなくclassNameを使ってみる</p>
      {/* divタグに className={style.text} を設定して 装飾 */}
      <div>このサンプルテキストに装飾を指定して赤文字にしましょう。</div>

      <Spacer />

      <p>閉じタグがない場合は / をつける</p>
      <p>テキストをここで、{/* 改行タグをここに */}改行してみましょう。</p>
    </div>
  );
};

export default Study02;
