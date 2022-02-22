export default function CardContent() {
  return (
    <div className="col-span-1 mt-4">
      <span>UI DESIGN &bull; Jul 2, 2022</span>
      <h2 className="my-4">
        Understanding color theory: the color wheel and finding complementary
        colors
      </h2>
      <p className="mb-6 w-10/12 text-typo-400">
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum.{' '}
      </p>
      <div className="flex items-center gap-4">
        <img
          src="/peoples/people-hero.png"
          className="h-14 w-14"
          alt="PeopleHero"
        />
        <div>
          <h6>Leslie Alexander</h6>
          <span>UI Designer</span>
        </div>
      </div>
    </div>
  );
}
