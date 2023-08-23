import Button from "@components/Atoms/Button";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";
import { sum, average } from "@lib/mathUtils";
import { concatenate, areStringsEqual } from "@lib/stringUtils";

const Study01: React.FC = () => {
  return (
    <>
      <Title>TSで作られた関数を使用してみよう</Title>
      <Spacer />
      <p>sum関数を使ってみる</p>
      <p>1 + 2 = {/* ここにsum関数を使う */}</p>

      <Spacer />
      <p>average関数を使ってみる</p>
      <p>1, 2の平均値は {/* average関数を使う */}</p>
      <Spacer size="lg" />
      <p>concatenate関数を使ってみる</p>
      <p>「Hello」と「World」を結合すると {/* concatenate関数を使う */}</p>
      <Spacer />
      <p>areStringsEqual関数を使ってみる</p>
      <p>
        斎藤と斉藤は同じか はい OR いいえで答えてください。{" "}
        {/* areStringsEqual関数を使う */}
      </p>
    </>
  );
};

export default Study01;
