<template>
    <div class="main-content">
        <page-title title="Kangban Board">
            <router-link to="/create" class="create-new-item">Create New Item</router-link>
        </page-title>

        <div class="wrapper-board">
            <div class="row">
                <div class="item">
                    <div class="col-title">Todo</div>
                    <task-item 
                        v-for="item in getListTaskFilter.todo"
                        :key="item.id"
                        :task="item"
                    />
                    <!-- <div class="backlogs-item">
                        <div class="project">Landmark 81 Website</div>
                        <div class="title">Phân tich dự án</div>
                        <div class="due-date">Deadline: <span>30/09/2018</span></div>
                        <div class="phase">Giai đoạn: <span>Front End</span></div>
                        <div class="assign">@luctc - </div>
                    </div> -->
                </div>

                <div class="item">
                    <div class="col-title">In Process</div>
                    <task-item 
                        v-for="item in getListTaskFilter.inProgress"
                        :key="item.id"
                        :task="item"
                    />
                </div>


                <div class="item">
                    <div class="col-title">Bugs</div>
                    <task-item 
                        v-for="item in getListTaskFilter.toVerify"
                        :key="item.id"
                        :task="item"
                    />
                </div>

                <div class="item">
                    <div class="col-title">Done</div>
                    <task-item 
                        v-for="item in getListTaskFilter.done"
                        :key="item.id"
                        :task="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from '../components/TaskItem'
import PageTitle from '../components/PageTitle';

export default {
 name: 'list-tasks',
    components: {
        PageTitle,
        TaskItem
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'getListTaskFilter'
        ])
    }
}
</script>

<style>

</style>