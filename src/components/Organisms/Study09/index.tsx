import { useState } from "react";
import Title from "@components/Atoms/Title";
import Spacer from "@components/Atoms/Spacer";
import Button from "@components/Atoms/Button";

const Study09 = () => {
  const [counter, setCounter] = useState(0);

  // 問題１
  // console.log("コンポーネントが表示されたら実行");

  // 問題２
  // console.log("counterが変更されたら実行");

  const countUp = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Title>useEffectを知ろう</Title>
      <p>console.logを確認</p>
      <Spacer />
      <p>カウント：{counter}</p>
      <Spacer />
      <button onClick={countUp}>
        <Button size="sm">+1する</Button>
      </button>
    </div>
  );
};

export default Study09;
