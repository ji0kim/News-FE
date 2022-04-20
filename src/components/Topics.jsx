import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const Topics = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi);
		});
	}, []);

	return (
		<ul>
			{topics.map(({ slug }) => {
				return (
					<li key={slug}>
						<Link to={`/articles/${slug}`}>{slug}</Link>
					</li>
				);
			})}
		</ul>
	);
};
export default Topics;
