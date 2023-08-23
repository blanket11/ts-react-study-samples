import Heading from "@components/Atoms/Heading";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

const Study07: React.FC = () => {
  return (
    <div>
      <Title>children</Title>
      <p>headingコンポーネントを作り、childrenで値を渡しましょう。</p>
      {/* 1. /src/components/Atoms/heading/index.tsx ファイルの作成 */}
      {/* 2. コンポーネントを作成 */}
      {/* 3. h2タグを使い childrenで中身を出力する */}
      {/* 4. 装飾は style.module.scss を読み込み .heading を使う */}
      {/* 5. import で読み込み使う */}
      <Heading>見出しテキスト</Heading>

      <Spacer />

      <Title>props</Title>
      <p>
        headingコンポーネントにpropsでsizeを追加してサイズの値を渡しましょう。
      </p>
      <Heading size="sm">小さい見出し</Heading>
      <Heading size="lg">大きい見出し</Heading>
    </div>
  );
};

export default Study07;
