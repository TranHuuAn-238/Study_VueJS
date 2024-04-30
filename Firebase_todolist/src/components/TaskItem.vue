<template>
    <div class="backlogs-item" v-if="task">
        <div class="project">{{ task.name }}</div>
        <router-link 
            tag="div"
            exactActiveClass=""
            activeClass=""
            :to="{ 
                name: 'edit-task-page', 
                params: { 
                    id: task.id 
                } 
            }" class="title">{{ task.title }}</router-link>
        <div class="due-date">Deadline: <span>{{ dateFormat }}</span></div>
        <div class="phase">Giai đoạn: <span>{{ HASH_TEAM_CONFIG[task.team] }}</span></div>
        <div class="assign">
            @{{ task.email_member.split('@')[0] }}
            <button 
                v-if="isAdmin && task.status === STATUS_CONFIG.DONE.value" 
                @click="handleDeleteItem"
                class="delete">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tasksRef } from "../config/firebase";
import { HASH_TEAM_CONFIG, STATUS_CONFIG } from "../config/const";
export default {
    name: 'task-item',
    props: {
        task: { type: Object, default: null }
    },
    data() {
        return {
            HASH_TEAM_CONFIG,
            STATUS_CONFIG
        }
    },
    computed: {
        ...mapGetters([
            'isAdmin'
        ]),
        dateFormat() {
            if (this.task) {
                return new Date(this.task.end_at).toLocaleString();
            }
            return '';
        }
    },
    methods: {
        handleDeleteItem() {
            tasksRef.child(this.task.id).remove();
        }
    }
}
</script>

<style>
    .title {
        cursor: pointer;
    }
    .title, .project {
        text-transform: capitalize;
    }
    .assign {
        position: relative;
    }
    .assign .delete {
        position: absolute;
        right: 2px;
        border: 1px solid #720909;
        padding: 1px 6px;
        font-size: 11px;
        top: 3px;
        background-color: red;
        color: #fff;
        border-radius: 3px;
        visibility: hidden;
        opacity: 0;
        transition: all .3s ease;
    }
    .backlogs-item:hover .delete {
        opacity: 1;
        visibility: visible;
    }
</style>