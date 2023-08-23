import style from "./style.module.scss";
type Props = {
  children: React.ReactNode;
};
const Gallery: React.FC<Props> = ({ children }) => {
  return <div className={style.gallery}>{children}</div>;
};

export default Gallery;
