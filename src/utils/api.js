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

export const patchIncDecVote = (article_id, voteClickNum) => {
	return articlesApi.patch(`/articles/${article_id}`, { inc_votes: voteClickNum });
};

export const getCommentsById = (article_id) => {
	return articlesApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const addCommentToArticle = (article_id, newComment, user) => {
	return articlesApi
		.post(`/articles/${article_id}/comments`, {
			username: user,
			body: newComment,
		})
		.then(({ data }) => {
			console.log(data);
		});
};