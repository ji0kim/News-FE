import { useState, useEffect } from 'react';
import { UserContext } from '../App';
import { formatDate } from '../utils/utils';
import { addCommentToArticle, getCommentsById } from '../utils/api';
import '../css/comments.css';
const Comments = ({ article_id }) => {
	const user = UserContext._currentValue;
	const [newComment, setNewComment] = useState('');
	const [comments, setComments] = useState([]);
	const handleSubmit = (event) => {
		event.preventDefault();

		addCommentToArticle(article_id, newComment, user).then(({ data }) => {
			console.log(data);
		});
	};

	useEffect(() => {
		getCommentsById(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
		});
	}, []);
	return (
		<section className='comments'>
			<h2 className='section-tit'>
				Comments<span className='count-num'>{comments.length}</span>
			</h2>
			<ul>
				{comments.map((comment) => {
					return (
						<li className='comment' key={comment.comment_id}>
							<span className='comment-author'>{comment.author}</span>
							<span className='comment-date'>{formatDate(comment.created_at)}</span>
							<p className='comment-body'>{comment.body}</p>
							{/* <p className='comment-votes'>{comment.votes}</p> */}
						</li>
					);
				})}
			</ul>
			<form onSubmit={handleSubmit}>
				<textarea placeholder='Write a comment' value={newComment} onChange={(event) => setNewComment(event.target.value)}></textarea>
				<button type='submit'>Add</button>
			</form>
		</section>
	);
};
export default Comments;
