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
 *  -> syntax goi ra sd giong nhu DOM attributes -> co v-bind;
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
