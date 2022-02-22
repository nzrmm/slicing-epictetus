import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../utils/articles';

import BaseCardArticle from '../base/BaseCardArticle';

export default function ArticlesDetail() {
  const [article, setArticle] = useState({});
  let params = useParams();

  useEffect(() => {
    const result = articles.find(article => article.id === Number(params.id));
    setArticle(result);
  }, [params]);

  return (
    <section>
      <BaseCardArticle children={article} />
    </section>
  );
}
