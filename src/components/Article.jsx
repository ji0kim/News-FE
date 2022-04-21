import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, patchIncDecVote, getCommentsById } from '../utils/api';
import '../index.css';
import Comments from './Comments';

const Article = () => {
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [vote, setVote] = useState(0);
	const [voteClickNum, setVoteClickNum] = useState(0);
	const [comments, setComments] = useState([]);

	const { article_id } = useParams();

	const handleVote = (article_id) => {
		if (voteClickNum === 0) {
			setVoteClickNum((currVote) => currVote + 1);
			patchIncDecVote(article_id, voteClickNum + 1).catch((err) => {
				setVoteClickNum((currVote) => currVote - 1);
			});
		} else {
			setVoteClickNum((currVote) => currVote - 1);
			patchIncDecVote(article_id, voteClickNum - 2);
		}
	};

	useEffect(() => {
		getArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
				setIsLoading(false);
				setVote(articleFromApi.votes);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		getCommentsById(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
		});
	}, []);

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
				<button onClick={() => handleVote(article.article_id)} className={voteClickNum > 0 ? ' btn-voted' : 'btn'}>
					+
				</button>
				<span className='article-page__votes'>{vote + voteClickNum}</span>
			</section>
			<Comments comments={comments}></Comments>
		</>
	);
};

export default Article;
