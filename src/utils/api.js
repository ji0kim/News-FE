import axios from 'axios';
  
const articlesApi = axios.create({
	baseURL: 'https://news-api-j.herokuapp.com/api',
});

export const getTopics = () => {
	return articlesApi.get('/topics').then(({ data }) => {
		return data.topics;
	});
};
export const getArticlesByTopics = (topic) => {
	return articlesApi
		.get(`/articles`, {
			params: { topic },
		})
		.then(({ data }) => {
			return data.articles;
		});
};