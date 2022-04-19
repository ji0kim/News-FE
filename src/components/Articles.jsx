import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getArticles } from '../utils/api';

const Article = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then((articlesFromApi) => {
			setArticles(articlesFromApi);
		});
	}, []);
	return (
		<ul>
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
export default Article;
