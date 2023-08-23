import style from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};
const Heading: React.FC<Props> = ({ children, size }) => {
  return (
    <h2 className={style.heading} data-size={size}>
      {children}
    </h2>
  );
};

export default Heading;
