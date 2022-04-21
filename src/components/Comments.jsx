import { formatDate } from '../utils/utils';
import '../css/comments.css';

const Comments = ({ article_id }) => {
	const user = UserContext._currentValue;
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState({
		author: user,
		body: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newComment.body.length <= 0) return;

		const date = new Date(Date.now()).toISOString();

		setComments((currComments) => {
			const commentToAdd = { ...newComment };
			commentToAdd.created_at = date;
			commentToAdd.comment_id = 0;
			commentToAdd.votes = 0;
			return [commentToAdd, ...currComments];
		});
    
		addCommentToArticle(article_id, newComment).catch((err) => {
			console.log(err.response.data.msg);
		});
    
    setNewComment({ author: user, body: '' });
	};

	useEffect(() => {
		getCommentsById(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
			console.log(comments[0]);
		});
	}, [article_id]);

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
