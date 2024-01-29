import axiosInstance from '../../plugins/axios'

export default {
    async getUserById({ commit }, userid) {
        try {
            var result = await axiosInstance.get('/member/member.php?userid=' + userid);
            if (result.data.status === 200) {
                commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.message
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    }
}