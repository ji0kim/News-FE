import { useState } from 'react';

const Vote = ({ votes }) => {
	const [optimisticVote, setOptimisticVote] = useState(0);
	const handleVote = () => {
		setOptimisticVote((currVote) => currVote + 1);
	};

	return (
		<>
			<p className='comment-votes'>{votes + optimisticVote}</p>
			<button onClick={handleVote}>+</button>;
		</>
	);
};

export default Vote;
