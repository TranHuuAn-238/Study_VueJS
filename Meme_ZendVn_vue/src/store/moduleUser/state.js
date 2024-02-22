import { CONFIG_ACCESS_TOKEN } from "../../constants";
export default {
    [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN),
    currentUser: null,  // sau khi login
    users: {},
    posts: {}
}

/*
users: {
    userid: value(du lieu cua user do) 
}

posts: {
    userid: value(danh sach bai posts cua user do)
}

*/