console.log('====================================');


// khi dùng công cụ tương tác với server -> trả về cho mình 1 promise
// giả lập một function là server -> return về 1 promise
// coi login() là 1 hàm call API
function login(username, password) {
    // coi như đây là server nhận được username, password từ client gửi lên

    return new Promise(
        function(resolve, reject) {
            console.log('server dang xu ly');
            // giả sử server tốn 2 giây để xử lý
            setTimeout(() => {
                // giả sử server xử lý thành công trả về 1 cục data
                let data = {
                    username: username,
                    password: 'dsadw1-sdasdqwdsadassgasf12',
                    isLogin: true,
                    userId: 'dsadsa-fdsaf-dsfas-dfasxc'
                }
                resolve(data);
                
               
                // server lỗi
               let dataError = {
                   error: 'đăng nhập thất bại',
                   isLogin: false
                }
                reject(dataError);
                
                // console.log('server xu ly xong');
            }, 2000);
            
        }
    )
}

function getPostByUserid(userid) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let data = [
                {
                    postId: 1,
                    userid,
                    content: 'content 1',
                },
                {
                    postId: 2,
                    userid,
                    content: 'content 2',
                }
            ];
            // resolve(data);
            reject({
                data,
                error: "xu ly post by userid error"
            });

            console.log('server getPostByUserid xu ly thanh cong, userId = ', userid);
        }, 4000);
    })
}

// trong chuỗi công việc liên tục cần xử lý thì cứ .then().then() liên tục (ví dụ lấy xong data ở then 1 lại tiếp tục call lên server => xử lý tiếp ở then 2 
// ==> LƯU Ý: PHẢI có lệnh return promise trong then 1, ví dụ: return getPostByUserid(data.userId); nếu ko sẽ bị promise hell như ở dưới)
/*
// xu ly call server thanh cong
login('admin', 'admin').then(function(data) {
    console.log('sau khi xu ly thanh cong');
    console.log('các đoạn code xử lý tiếp phần login ở client');

    // call lên server lần 2 xong lấy được data về return xử lý tiếp lần 3
    return {
        demo: 'xu ly xong cong viec o lan call api thu 2, tra ve data cho client xu ly tiep lan 3',
        data: data
    }
}).then(function(data) {
    console.log('xu li cong viec lan 3', data);
});
*/

// xu ly loi neu call len server khong thanh cong
/*
login('admin', 'admin')
    .then(function(data) {
        console.log("chỉ chạy vào đây nếu server xử lý thành công - resolve", data);
        
        // promise hell - callback hell => code sẽ rất rối, khó maintain => sử dụng async - await
        getPostByUserid(data.userId)
            .then(function(data) {
                console.log("data getPost = ", data);
            })
    })
    .catch(function(error) {
        console.log("server xử lý không thành công, trả về lỗi - reject", error);
    })
*/

async function handleLoginUser() {
    // await chi duoc dung trong ham async
    try {
        var resultLogin = await login('admin', 'admin');
        var resultPost = await getPostByUserid(resultLogin.userId);
        console.log('resultLogin = ', resultLogin);
        console.log('resultPost = ', resultPost);
    } catch (error) {
        // neu co bat ky loi nao xay ra trong qua trinh xu ly promise (server phan hoi reject thay vi resolve) thi nhay vao catch
        console.log('error = ', error);
    }
    
}
// handleLoginUser();
// console.log("một số đoạn code có thể chạy tự do không liên quan đến phần login");

var resultPost = fetch('http://apiluc.zendvn.com/api/post/getListPagination.php?pagesize=6&currPage=1')

var start = new Date().getTime();
resultPost.then(function(response) {
    var end = new Date().getTime();
    // console.log('response: ', response.json());
    console.log('time = ', end - start);
    return response.json();
}).then(function(myJson) {
    console.log(myJson);
});

// trong thuc te dung Axios de call API get data

console.log('====================================');
