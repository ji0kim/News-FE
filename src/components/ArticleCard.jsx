import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  console.log(article);
	return (
		<Link to={`/articles/${article.article_id}`}>
			<h2 className='article-card__title'>{article.title}</h2>
			<p className='article-card__author'>
				<span>by</span> {article.author}
			</p>
			<p>
				<span className='article-card__topic'>{article.topic}</span>
				<span className='article-card__date'>{article.created_at.match(/([0-9]){4}\-([0-9]){2}\-([0-9]){2}/)[0]}</span>
			</p>
			<p className='article-card__vote'>{article.votes}</p>
		</Link>
	);
};
export default ArticleCard;
