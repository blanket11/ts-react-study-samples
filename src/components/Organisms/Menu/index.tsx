import Navi, { Item } from "@components/Atoms/Navi";
import Title from "@components/Atoms/Title";

type Props = {
  list: Item[];
};

const Study01: React.FC<Props> = ({ list }) => {
  return (
    <>
      <Title>もくじ</Title>
      <Navi list={list} />
    </>
  );
};

export default Study01;
