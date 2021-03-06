import { useEffect } from 'react';
import { articles } from '../utils/articles';

import BaseCardSmall from '../base/BaseCardSmall';

export default function Articles() {
  useEffect(() => {
    document.title = 'Articles - The Epictetus';
  });

  return (
    <section>
      <div className="py-16 text-center">
        <h1>Ui Design</h1>
      </div>
      <div className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(1).map(article => {
          return <BaseCardSmall key={article.id} children={article} />;
        })}
      </div>
    </section>
  );
}
