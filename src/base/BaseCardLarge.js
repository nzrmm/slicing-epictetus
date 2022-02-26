import CardContent from '../organism/CardContent';

export default function BaseCardLarge(props) {
  const data = props.children;
  return (
    <article className="grid gap-8 lg:grid-cols-3">
      <figure className="lg:col-span-2">
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
