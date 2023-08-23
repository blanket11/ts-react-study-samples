import Button from "@components/Atoms/Button";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

const Study08 = () => {
  return (
    <div>
      <Title>useStateを使ってカウントアップ</Title>
      <p>
        useStateで counter と setCounter
        を作りボタンを押したら数字がカウントアップするようにする。
      </p>
      {/* 1. useStateの読み込み */}
      {/* 2. useState を使い counter と setCounter を用意 */}
      {/* 3. countUp 関数を用意 */}
      {/* 4. buttonタグでButtonタグを囲い onClick を設定 */}
      {/* 5. Astroの仕様で一部ブラウザレンダリングにするため client:load を設定する */}
      <Spacer />
      <p>カウント：0</p>
      <Spacer />
      <Button size="sm">+1する</Button>
    </div>
  );
};

export default Study08;
