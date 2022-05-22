import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';
import Error from './Error';

const Topics = () => {
	const [topics, setTopics] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		getTopics()
			.then((topicsFromApi) => {
				setTopics(topicsFromApi);
				setError(null);
			})
			.catch((err) => {
				setError(err.response.statusText);
			});
	}, []);

	if (error) {
		return <Error errorMsg={error} />;
	}

	return (
		<ul className='topic'>
			{topics.map(({ slug }) => {
				return (
					<li key={slug}>
						<Link to={`/topics/${slug}`}>{slug}</Link>
					</li>
				);
			})}
		</ul>
	);
};
export default Topics;
