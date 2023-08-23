import Gallery from "@components/Atoms/Gallery";
import Spacer from "@components/Atoms/Spacer";
import Title from "@components/Atoms/Title";
import Card from "@components/Molecules/Card";

const Study06 = () => {
  const list = [
    {
      title: "サンプル記事タイトルです。その１です。",
      content:
        "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。",
      imageUrl: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "サンプル記事タイトルです。その２です。",
      content:
        "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。",
      imageUrl: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "サンプル記事タイトルです。その３です。",
      content:
        "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。",
      imageUrl: "https://source.unsplash.com/random/800x600",
    },
    {
      title: "サンプル記事タイトルです。その４です。",
      content:
        "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。",
      imageUrl: "https://source.unsplash.com/random/800x600",
    },
  ];
  return (
    <div>
      <Title>.map()でのループ</Title>
      <Spacer />
      <p>
        listオブジェクトを.map()で、ループさせてCardコンポーネントでいい感じに表示させましょう！
      </p>
      <Spacer />
      <Gallery>
        <Card
          title="サンプル記事タイトルです。"
          content="この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。"
          imageUrl="https://source.unsplash.com/random/800x600"
        />
      </Gallery>
    </div>
  );
};

export default Study06;
