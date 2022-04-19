const ArticleCard = ({ article }) => {
	return (
		<a href=''>
			<h2 className='article-card__title'>{article.title}</h2>
			<p className='article-card__author'>{article.author}</p>
			<p className='article-card__body'>{article.body}</p>
			<span className='article-card__topic'>{article.topic}</span>
			<span className='article-card__date'>{article.created_at}</span>
		</a>
	);
};
export default ArticleCard;
