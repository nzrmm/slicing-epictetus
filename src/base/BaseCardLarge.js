import CardContent from '../organism/CardContent';

export default function BaseCardLarge() {
  return (
    <article className="grid grid-cols-3 gap-8">
      <figure className="col-span-2">
        <img
          src="/images/image-hero.png"
          className="h-auto w-full"
          alt="ImageHero"
        />
      </figure>
      <CardContent />
    </article>
  );
}
