import { formatDate } from '../utils/utils';
import '../css/comments.css';
const Comments = ({ comments }) => {
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
		</section>
	);
};
export default Comments;
