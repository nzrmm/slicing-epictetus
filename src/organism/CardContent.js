import { Link } from 'react-router-dom';

export default function CardContent(props) {
  const data = props.children;
  return (
    <div className="col-span-1 mt-4">
      <span>
        {data.tag} &bull; {data.publisedAt}
      </span>
      <Link to={`/articles/${data.id}`}>
        <h2 className="my-4">{data.title}</h2>
      </Link>
      <p className="mb-6 w-10/12 text-typo-400">{data.description}</p>
      <div className="flex items-center gap-4">
        <img
          src={data.imgPeopleSrc}
          className="h-14 w-14"
          alt={data.imgPeopleAlt}
        />
        <div>
          <h6>{data.writter}</h6>
          <span>{data.writterJob}</span>
        </div>
      </div>
    </div>
  );
}
