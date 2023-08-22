import Navi, { Item } from "@components/Atoms/Navi";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";

type Props = {
  list: Item[];
};

const Study01: React.FC<Props> = ({ list }) => {
  return (
    <>
      <Title>もくじ</Title>
      <Spacer />
      <Navi list={list} />
    </>
  );
};

export default Study01;
