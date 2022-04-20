import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';

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
				console.log(slug);
				return <li key={slug}>{slug}</li>;
			})}
		</ul>
	);
};
export default Topics;
