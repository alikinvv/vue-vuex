import addToFavoritesApi from "@/api/addToFavorites";

export const mutationTypes = {
    addToFavoriteStart: '[addToFavorite] addToFavoriteStart',
    addToFavoriteSuccess: '[addToFavorite] addToFavoriteSuccess',
    addToFavoriteFailed: '[addToFavorite] addToFavoriteFailed',
}

const mutations = {
    [mutationTypes.addToFavoriteStart]() { },
    [mutationTypes.addToFavoriteSuccess]() { },
    [mutationTypes.addToFavoriteFailed]() { },
}

export const actionTypes = {
    addToFavorites: '[addToFavorite] addToFavorites'
}

const actions = {
    [actionTypes.addToFavorites](context, { slug, isFavorited }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.addToFavoriteStart);
            const promise = isFavorited ? addToFavoritesApi.removeToFavorites(slug) : addToFavoritesApi.addToFavorites(slug);

            promise
                .then(article => {
                    context.commit(mutationTypes.addToFavoriteSuccess, article)
                    resolve(article)
                })
                .catch(() => {
                    context.commit(mutationTypes.addToFavoriteFailed)
                })
        })
    }
}

export default {
    mutations,
    actions
}