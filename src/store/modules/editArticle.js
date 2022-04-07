import articleApi from "@/api/article";

const state = {
    isSubmitting: false,
    errors: null,
    isLoading: false,
    article: null
}

export const mutationTypes = {
    editArticleStart: '[editArticle] editArticleStart',
    editArticleSuccess: '[editArticle] editArticleSuccess',
    editArticleFailed: '[editArticle] editArticleFailed',

    getArticleStart: '[editArticle] getArticleStart',
    getArticleSuccess: '[editArticle] getArticleSuccess',
    getArticleFailed: '[editArticle] getArticleFailed',
}

export const actionTypes = {
    editArticle: '[editArticle] editArticle',
    getArticle: '[editArticle] getArticle',
}

const mutations = {
    [mutationTypes.editArticleStart](state) {
        state.isSubmitting = true;
    },
    [mutationTypes.editArticleSuccess](state) {
        state.isSubmitting = false;
    },
    [mutationTypes.editArticleFailed](state, payload) {
        state.isSubmitting = false;
        state.errors = payload;
    },

    [mutationTypes.getArticleStart](state) {
        state.isLoading = true;
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false;
        state.article = payload;
    },
    [mutationTypes.getArticleFailed](state) {
        state.isSubmitting = false;
    },
}

const actions = {
    [actionTypes.editArticle](context, { slug, articleInput }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.editArticleStart);
            articleApi
                .updateArticle(slug, articleInput).then(article => {
                    context.commit(mutationTypes.editArticleSuccess, article);
                    resolve(article);
                })
                .catch(result => {
                    context.commit(mutationTypes.editArticleFailed, result.response.data.errors)
                })
        })
    },
    [actionTypes.getArticle](context, { slug }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart);
            articleApi
                .getArticle(slug).then(article => {
                    context.commit(mutationTypes.getArticleSuccess, article);
                    resolve(article);
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailed)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
}