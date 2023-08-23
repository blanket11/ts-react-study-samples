import style from "./style.module.scss";

type Props = {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ size = "md", children }) => {
  return (
    <div className={style.button} data-size={size}>
      {children}
    </div>
  );
};

export default Button;
