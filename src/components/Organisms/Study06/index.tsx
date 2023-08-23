import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

const Study06: React.FC = () => {
  return (
    <div>
      <Title>children</Title>
      <p>headingコンポーネントを作り、childrenで値を渡しましょう。</p>
      {/* 1. /src/components/Atoms/heading/index.tsx ファイルの作成 */}
      {/* 2. コンポーネントを作成 */}
      {/* 3. import で読み込み使う */}

      <Spacer />

      <Title>props</Title>
      <p>
        headingコンポーネントにpropsでsizeを追加してサイズの値を渡しましょう。
      </p>
    </div>
  );
};

export default Study06;
