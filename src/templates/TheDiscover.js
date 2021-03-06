import BaseCardLarge from '../base/BaseCardLarge';
import BaseCardSmall from '../base/BaseCardSmall';
import { articles } from '../utils/articles';

export default function TheDiscover() {
  return (
    <section>
      <div className="py-4">
        {articles.slice(0, 1).map(article => {
          return <BaseCardLarge key={article.id} children={article} />;
        })}
      </div>
      <div className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(1).map(article => {
          return <BaseCardSmall key={article.id} children={article} />;
        })}
      </div>
    </section>
  );
}
