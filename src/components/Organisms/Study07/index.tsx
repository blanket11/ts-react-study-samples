import Button from "@components/Atoms/Button";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

const Study07 = () => {
  return (
    <div>
      <Title>useStateを使ってカウントアップ</Title>
      <p>
        useStateで counter と setCounter
        を作りボタンを押したら数字がカウントアップするようにする。
      </p>
      <Spacer />
      <p>カウント：0</p>
      <Spacer />
      <Button size="sm">+1する</Button>
    </div>
  );
};

export default Study07;
