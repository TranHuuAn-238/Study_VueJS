<template>
  <div id="app">
    <!-- goi component ra nhu 1 the html -->
    <!-- <CompHeader></CompHeader> -->
    <!-- <CompHeader /> -->
    <!-- nen dung cach nay: name cua component -->
    <!-- <comp-footer :title="title" /> -->
    <div class="container">
      <button @click="title = 'thay doi tit'">Thay doi title tu comp App.vue</button>
      <comp-header 
        :titleHeader="title" 
        @changeTitleEvent="handleChangeTitle"
        :listUser="listUser"
      />
      <list-user 
        @deleteUserEvent="handleDeleteUser"
        :listUser="listUser" 
      />
      <comp-footer :title="title" />

      <demo-ref />

      <demo-slot />
    </div>
  </div>
</template>

<script>
/**
 * app (title, listUser[])
 *  header (title)
 *  listUser (listUser[])
 *    User1 (user - object)
 *    User2 (user - object)
 *    User3 (user - object)
 *  footer (title)
 * 
 *  => props: nhung data truyen tu comp cha sang comp con
 *  -> syntax goi ra sd giong nhu DOM attributes -> co v-bind; tru truong hop ko truyen bien vao prop ma truyen string binh thuong thi ko can v-bind
 *  ben comp con se khai bao cac props do de lay data tu comp cha
 */

// muon sd component nao thi dung import
import ListUser from './components/ListUser.vue'
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import DemoRef from './components/DemoRef.vue'
import DemoSlot from './components/DemoSlot.vue'

export default {
  // sau khi import xong thi dang ky cac component trong obj 
  components: { 
    CompHeader, 
    CompFooter,
    ListUser,
    DemoRef,
    DemoSlot
  },
  name: 'app',
  data () {
    return {
      // props down: data truyen tu cha thay doi thi con cung se nhan duoc su thay doi do va phan ung lai => va con chi dc lay ra sd thoi, ko dc thay doi truc tiep data lay tu cha

      // => data cua cha thi chi cha ms thay doi dc
      // event up: truyen 1 su kien tu con de thong bao cho cha la con muon thay doi data cua cha -> cha se nhan thong diep va tien hanh thay doi data
      // => sd custom events de truyen thong diep
      title: "HI MAN",
      listUser: [
        { id: 100, email: 'fuku@gmail.com', active: true },
        { id: 101, email: 'yeah@gmail.com', active: false },
        { id: 102, email: 'sir@gmail.com', active: true },
        { id: 103, email: 'fukboi@gmail.com', active: true },
        { id: 104, email: 'trapboi@gmail.com', active: false },
      ]
    }
  },
  methods: {
    // khai bao ham xu ly custom events, thay doi data theo yeu cau cua con
    handleChangeTitle(data) {
      // e ko phai la bien event dc JS cung cap nhu thong thuong, day la bien tu tao nhan dc tu con gui len khi kich hoat su kien
      // dat ten gi cung dc( e, data, ... )
      // console.log("ham handleChangeTitle() dc goi sau khi kich hoat thanh cong", data);
      this.title = data.tit;
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      // console.log('handleDeleteUser in App.vue', data);
      this.listUser.forEach((u, idx) => {
        if(u.id === data.id) {
          indexDelete = idx;
        }
      });

      if(indexDelete != -1) {
        // xoa phan tu vs ham splice JS
        var num = this.listUser.splice(indexDelete, 1);
        // console.log(num);
      }
    }
  },
  // life cycle
  beforeCreate() {
    // truoc khi he thong phan ung dc tao
    console.log('beforeCreate', this.title, document.querySelector('.container')); // undefined
  },
  // hay dung created() va mounted()
  created() {
    // sau khi he thong phan ung da dc tao xong -> luc nay co the truy xuat du lieu
    // ham nay thuong sd de Call API, AJAX de lay data tu server ve
    console.log('created', this.title, document.querySelector('.container'));
  },
  beforeMount() {
    // dang bien dich template ra cau truc DOM, luc nay van chua truy cap dc DOM (van dang null)
    console.log('beforeMount', this.title, document.querySelector('.container'));
  },
  mounted() {
    // bien dich xong, toan bo cau truc DOM da dc hien thi ra HTML -> luc nay co the truy cap DOM
    // neu muon sd JQuery, JS thuan hay cac thu vien JS lien quan tac dong den DOM -> chi truy xuat DOM dc trong mounted(), tai day moi bat dau sd dc jQuery
    console.log('mounted', this.title, document.querySelector('.container').classList);
  },
  beforeUpdate() {
    // dc chay khi co su thay doi ve data
    console.log('beforeUpdate', this.title); // this.title: data mới
  },
  updated() {
    console.log('updated', this.title);  // this.title: data mới
  },

  // it khi dung
  beforeDestroy() {
    // chay khi doi tuong Vue bi huy
    console.log('beforeDestroy');
  },
  destroyed() {
    // sd de destroy cac thu vien cua ben thu 3
    console.log('destroyed');
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 3000px;
  }
</style>
