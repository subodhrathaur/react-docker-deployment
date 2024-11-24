
export const appConfig={
    API_URL: "https://jsonplaceholder.typicode.com/",
    POSTS_ENDPOINT:"posts",
    COMMENTS_ENDPOINT:"comments",
    ALBUM_ENDPOINT:"albums",
    PHOTO_ENDPOINT:"photos",
    USERS_ENDPOINT:"users",
}

export const API_ENDPOINTS = {
    GET_POSTS: `${appConfig.POSTS_ENDPOINT}`,
    GET_ALBUMS: `${appConfig.ALBUM_ENDPOINT}`,
    GET_SINGLE_POST: `${appConfig.POSTS_ENDPOINT}/:id`,
    GET_POST_COMMENTS: `${appConfig.POSTS_ENDPOINT}/:id/comments`,
    GET_COMMENTS_BY_POST: `/comments?postId=:postId`,
    CREATE_POST: `${appConfig.POSTS_ENDPOINT}`,
    UPDATE_POST: `${appConfig.POSTS_ENDPOINT}/:id`,
    PARTIAL_UPDATE_POST: `${appConfig.POSTS_ENDPOINT}/:id`,
    DELETE_POST: `${appConfig.POSTS_ENDPOINT}/:id`,
    GET_POST_COMMENTS: `${appConfig.POSTS_ENDPOINT}/:id/comments`,
    GET_ALBUM_COMMENTS: `${appConfig.ALBUM_ENDPOINT}/:id/comments`,
    GET_ALBUM_PHOTOS: `${appConfig.ALBUM_ENDPOINT}/:id/photos`,
    GET_ALBUM_DETAILS: `${appConfig.ALBUM_ENDPOINT}/:id`,
    GET_USER_ALBUMS: `${appConfig.USERS_ENDPOINT}/:id/albums`,
    GET_USER_TODOS: `${appConfig.USERS_ENDPOINT}/:id/todos`,
    GET_USER_POSTS: `${appConfig.USERS_ENDPOINT}/:id/posts`,
};

export const buildUrl = (endpoint, params) => {
    let url = endpoint;
    for (const key in params) {
        url = url.replace(`:${key}`, params[key]);
    }
    return url;
};
