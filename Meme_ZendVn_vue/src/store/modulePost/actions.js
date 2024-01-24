import axiosInstance from '../../plugins/axios'
import { PAGE_SIZE, CURRENT_PAGE } from '../../constants';

export default {
    async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
        commit('SET_LOADING', true);
        try {
            var config = {
                params: {
                    pagesize,
                    currPage
                }
            }
            if (tagIndex) {
                config.params.tagIndex = tagIndex;
                var result = await axiosInstance.get('/post/getListByCategory.php', config);
            } else {
                // var result = await axiosInstance.get(`/post/getListPagination.php?pagesizeee=${pagesize}&currPage=${currPage}`);
                var result = await axiosInstance.get('/post/getListPagination.php', config);
            }
            commit('SET_LOADING', false);
            
            if (result.data.status == 200) {
                if (currPage === 1) {
                    commit('SET_LIST_POSTS', result.data.posts);
                } else if(currPage > 1) {
                    commit('PUSH_LIST_POSTS', result.data.posts);
                }
            }
        } catch (error) {
            // loi he thong
            console.log('error: ', error);
        }
    },
    // async getListPostByCategory({ commit }, { pagesize = 6, currPage = 1, tagIndex = 1 }) {
    //     try {
    //         var config = {
    //             params: {
    //                 pagesize,
    //                 currPage,
    //                 tagIndex
    //             }
    //         }
    //         // var result = await axiosInstance.get(`/post/getListPagination.php?pagesizeee=${pagesize}&currPage=${currPage}`);
    //         var result = await axiosInstance.get('/post/getListByCategory.php', config);
    //         if (result.data.status == 200) {
    //             commit('SET_LIST_POSTS', result.data.posts);
    //         } else {
    //             console.log('error: ', result.data.error);
    //         }
    //     } catch (error) {
    //         // loi he thong
    //         console.log('error: ', error);
    //     }
    // }
}