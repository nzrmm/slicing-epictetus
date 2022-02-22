import BaseCardLarge from '../base/BaseCardLarge';
import { articles } from '../utils/articles';

export default function TheDiscover() {
  return (
    <section>
      {articles.slice(0, 1).map((article, index) => {
        return <BaseCardLarge key={index} children={article} />;
      })}
    </section>
  );
}
