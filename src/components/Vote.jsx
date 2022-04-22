import { useState } from 'react';
import { patchIncDecCommentVote } from '../utils/api';
const Vote = ({ votes, comment_id }) => {
	const [optimisticVote, setOptimisticVote] = useState(0);
	const handleVote = (optimisticVote, comment_id) => {
		setOptimisticVote((currVote) => currVote + 1);
		patchIncDecCommentVote(optimisticVote, comment_id);
	};

	return (
		<>
			<p className='comment-votes'>{votes + optimisticVote}</p>
			<button onClick={() => handleVote(optimisticVote, comment_id)}>+</button>
		</>
	);
};

export default Vote;
