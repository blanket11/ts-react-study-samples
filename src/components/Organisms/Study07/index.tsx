import Button from "@components/Atoms/Button";
import Title from "@components/Atoms/Title";

const Study07 = () => {
  return (
    <div>
      <Title>
        useStateを使ってボタンを押したらテキストが切り替わるようにする。
      </Title>
      <p>最初のテキスト</p>
      <p>切り替わったテキスト</p>
      <Button size="sm">切り替えボタン</Button>
    </div>
  );
};

export default Study07;
