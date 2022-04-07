import articleApi from "@/api/article";

const state = {
    data: null,
    isLoading: false,
    error: null,
}

export const mutationTypes = {
    getArticleStart: '[article] getArticleStart',
    getArticleSuccess: '[article] getArticleSuccess',
    getArticleFailed: '[article] getArticleFailed',

    deleteArticleStart: '[article] deleteArticleStart',
    deleteArticleSuccess: '[article] deleteArticleSuccess',
    deleteArticleFailed: '[article] deleteArticleFailed',
}

const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true;
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload
    },
    [mutationTypes.getArticleFailed](state) {
        state.isLoading = false;
    },

    [mutationTypes.deleteArticleStart]() { },
    [mutationTypes.deleteArticleSuccess]() { },
    [mutationTypes.deleteArticleFailed]() { }
}

export const actionsTypes = {
    getArticle: '[article] getArticle',
    deleteArticle: '[article] deleteArticle',
}

const actions = {
    [actionsTypes.getArticle]: (context, { slug }) => {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart, slug);
            articleApi.getArticle(slug)
                .then(article => {
                    context.commit(mutationTypes.getArticleSuccess, article);
                    resolve(article);
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailed)
                })
        })
    },
    [actionsTypes.deleteArticle]: (context, { slug }) => {
        return new Promise(resolve => {
            context.commit(mutationTypes.deleteArticleStart, slug);
            articleApi.deleteArticle(slug)
                .then(() => {
                    context.commit(mutationTypes.deleteArticleSuccess);
                    resolve();
                })
                .catch(() => {
                    context.commit(mutationTypes.deleteArticleFailed)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}