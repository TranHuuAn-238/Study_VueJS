<template>
    <div>
        <div>
            <!-- Header -->
            <home-header />

            <!-- Main Header -->
            <main-header />

            <!-- Content -->
            <main class="container">
                <div class="row">
                    <div class="col-md-9">
                        <router-view></router-view>
                    </div>
                    <div class="col-md-3">
                        <sidebar />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'kan-ban-board',
    components: {
        HomeHeader,
        MainHeader,
        Sidebar
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'getCurrentUser'
        ])
    },
    methods: {
        ...mapActions([
            'getUserCustomField'
        ])
    },
    mounted() {
        this.getUserCustomField();
    }
}
</script>

<style>

</style>