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
  
  export const getArticleById = (article_id) => {
		return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
			return data.article;
		});
	};