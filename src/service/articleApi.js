import axios from 'axios'

export const articleApi = axios.create({
	baseURL: "http://localhost:9000/"
});

export const getArticles = async () => {
	return await articleApi.get("articles");
}

export const deleteArticle = (id) => {
	return articleApi.delete(`articles/${id}`);
}

export const addArticle = (article) => {
	return articleApi.post("articles", article);
}

export const backupArticle = (article) => {
	return articleApi.patch(`articles/${article.id}`, { backup: !article.backup });
}

export const updateArticle = (article) => {
	return articleApi.put(`articles/${article.id}`, article)
}

export const getArticleById = (id) => {
	return articleApi.get(`articles/${id}`);
}