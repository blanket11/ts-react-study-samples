import style from "./style.module.scss";

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return <div className={style.button}>{children}</div>;
};

export default Button;
