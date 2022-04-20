import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';

const Article = () => {
	const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
	const [vote, setVote] = useState(0);
	const { article_id } = useParams();

	const incrementVote = () => {
		setVote(vote + 1);
	};
	useEffect(() => {
		getArticleById(article_id).then((articleFromApi) => {
			setArticle(articleFromApi);
			setIsLoading(false);
		});
	}, [article_id]);

	if (isLoading) {
		return <p>Loading</p>;
	}
	return (
		<>
			<section className='article-page'>
				<h1 className='article-page__title'>{article.title}</h1>
				<p className='article-page__author'>
					<span>by</span> {article.author}
				</p>
				<span className='article-page__date'>{article.created_at}</span>
				<p>{article.body}</p>
				<span className='article-page__topic'>{article.topic}</span>
			</section>
			<section className='vote'>
				<button onClick={incrementVote}>+</button>
				<button>-</button>
				<p className='article-page__votes'>{vote}</p>
			</section>
		</>
	);
};

export default Article;
