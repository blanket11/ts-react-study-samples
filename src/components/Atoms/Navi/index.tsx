import style from "./style.module.scss";

export type Item = {
  text: string;
  href: string;
};

type Props = {
  list: Item[];
};

const Navi: React.FC<Props> = ({ list }) => {
  return (
    <ul className={style.navi}>
      {list.map(({ text, href }, index) => (
        <li key={`navi-item-${index}`} className={style.li}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navi;
