import popularTagsApi from "@/api/tags";

const state = {
    data: null,
    isLoading: false,
    error: null,
}

export const mutationTypes = {
    getPopularTagsStart: '[popularTags] getPopularTagsStart',
    getPopularTagsSuccess: '[popularTags] getPopularTagsSuccess',
    getPopularTagsFailed: '[popularTags] getPopularTagsFailed',
}

const mutations = {
    [mutationTypes.getPopularTagsStart](state) {
        state.isLoading = true;
    },
    [mutationTypes.getPopularTagsSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload
    },
    [mutationTypes.getPopularTagsFailed](state) {
        state.isLoading = false;
    }
}

export const actionsTypes = {
    getPopularTags: '[popularTags] getPopularTags'
}

const actions = {
    [actionsTypes.getPopularTags]: (context) => {
        return new Promise(resolve => {
            context.commit(mutationTypes.getPopularTagsStart);
            popularTagsApi.getPopularTags()
                .then(tags => {
                    context.commit(mutationTypes.getPopularTagsSuccess, tags);
                    resolve(tags);
                })
                .catch(() => {
                    context.commit(mutationTypes.getPopularTagsFailed)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}