import style from "./style.module.scss";

type Props = {
  size?: "sm" | "md" | "lg";
};

const Spacer: React.FC<Props> = ({ size = "md" }) => {
  return <div className={style.spacer} data-size={size} />;
};

export default Spacer;
