import style from "./style.module.scss";

type Props = {
  children: React.ReactNode;
};
const Title: React.FC<Props> = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>;
};

export default Title;
