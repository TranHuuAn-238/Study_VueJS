<template>
  <div>
    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="">
    <!-- <button @click="goBackHome" class="btn btn-info">Back to Home</button> -->
    <router-link to="/" class="btn btn-info">Back to Home</router-link>
  </div>
</template>

<script>
export default {
    name: 'not-found',
    methods: {
        goBackHome() {
            this.$router.push('/');
            // console.log('this.$router: ', this.$router);  // la router da khai bao trong doi tuong Vue o file main.js
            // console.log('this.$route: ', this.$route);    // route nay la danh rieng cho component dang truy cap 
        }
    }
}
</script>

<style>

</style>