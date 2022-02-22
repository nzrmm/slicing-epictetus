import CardContent from '../organism/CardContent';

export default function BaseCardSmall(props) {
  const data = props.children;
  return (
    <article className="w-full">
      <figure>
        <img
          src={data.imgArticleSrc}
          className="h-auto w-full"
          alt={data.imgArticleAlt}
        />
      </figure>

      <CardContent children={data} />
    </article>
  );
}
