import BaseCardLarge from '../base/BaseCardLarge';
import { articles } from '../utils/articles';

export default function TheDiscover() {
  return (
    <section>
      {articles.slice(0, 1).map(article => {
        return <BaseCardLarge key={article.id} children={article} />;
      })}
    </section>
  );
}
