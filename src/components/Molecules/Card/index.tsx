import style from "./style.module.scss";

type Props = {
  title: string;
  content: string;
  imageUrl: string;
};

const Card: React.FC<Props> = ({ title, content, imageUrl }) => {
  return (
    <article className={style.card}>
      <img className={style.img} src={imageUrl} alt={title} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.content}>{content}</p>
    </article>
  );
};

export default Card;
