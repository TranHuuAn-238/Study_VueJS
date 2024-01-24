export default {
    SET_LIST_POSTS(state, data) {
        state.listPosts = data;
    },
    PUSH_LIST_POSTS(state, data) {
        state.listPosts = [...state.listPosts, ...data];
    }
}

// Case 1: neu current page = 1 -> thay the array listPosts goc
// Case 2: neu current page = 2, 3, 4 -> day them du lieu vao array listPosts goc (nối 2 array lại với nhau)