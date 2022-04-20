import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getArticlesByTopics } from '../utils/api';
import { useParams } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { topic } = useParams();

	useEffect(() => {
		getArticlesByTopics(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, [topic]);

  if (isLoading) {
		return <p>Loading</p>;
	}
	return (
		<ul className='articles'>
			{articles.map((article) => {
				return (
					<li className='article-card' key={article.article_id}>
						<ArticleCard article={article}></ArticleCard>
					</li>
				);
			})}
		</ul>
	);
};
export default Articles;
