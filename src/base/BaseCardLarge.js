import CardContent from '../organism/CardContent';

export default function BaseCardLarge(props) {
  const data = props.children;
  return (
    <article className="grid grid-cols-3 gap-8">
      <figure className="col-span-2">
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
