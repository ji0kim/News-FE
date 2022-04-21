import { formatDate } from '../utils/utils';
const Comments = ({ comments }) => {
	return (
		<section className='comment'>
			<h2>comment</h2>
			<ul>
				{comments.map((comment) => {
					return (
						<li className='comment' key={comment.comment_id}>
							<span className='comment-author'>{comment.author}</span>
							<span className='comment-date'>{formatDate(comment.created_at)}</span>
							<p className='comment-body'>{comment.body}</p>
							<p className='comment-votes'>{comment.votes}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
export default Comments;
