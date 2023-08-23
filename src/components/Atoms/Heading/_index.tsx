import style from "./style.module.scss";

type Props = {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ size = "md", children }) => {
  return (
    <h2 className={style.heading} data-size={size}>
      {children}
    </h2>
  );
};

export default Heading;
