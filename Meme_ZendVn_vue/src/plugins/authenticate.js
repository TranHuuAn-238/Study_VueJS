import store from '../store';

const ifNotAuthenticated = (to, from, next) => {
    // 1. Router chi cho phep vao khi chua dang nhap (Login, Register)
    if (store.getters.isLogin === false) {
        next(); // cho phep vao
    } else {
        // next('/');
        next({
            name: 'home-page',
            query: {
                redirect: to.name
            }
        })
    }
}

const ifAuthenticated = (to, from, next) => {
    // 2. Router chi cho phep vao khi da dang nhap
    if (store.getters.isLogin === true) {
        next(); // cho phep vao
    } else {
        next({
            name: 'login',
            query: {
                redirect: to.name
            }
        })
    }
}

export {
    ifNotAuthenticated,
    ifAuthenticated
}