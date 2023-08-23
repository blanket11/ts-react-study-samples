import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

const Study05: React.FC = () => {
  const name = "山田 太郎";
  const guestFlag = true;
  const isLogin = false;
  return (
    <div>
      <Title>条件付きレンダー</Title>
      <p>guestFlag が trueなら 様を表示させましょう！</p>
      <p>
        名前: {name} {guestFlag && <small>様</small>}
      </p>
      <Spacer />
      <Title>三項演算子</Title>
      <p>isLogin が true falseでテキストを出し分けましょう！</p>
      {isLogin ? <p>ようこそ{name}さん。</p> : <p>ゲストとして閲覧中です。</p>}
    </div>
  );
};

export default Study05;
