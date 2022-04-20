import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getArticlesByTopics } from '../utils/api';
import { useParams } from 'react-router-dom';

const Article = () => {
	const [articles, setArticles] = useState([]);
	const { topic } = useParams();

	useEffect(() => {
		getArticlesByTopics(topic).then((articlesFromApi) => {
			setArticles(articlesFromApi);
		});
	}, [topic]);
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
export default Article;
