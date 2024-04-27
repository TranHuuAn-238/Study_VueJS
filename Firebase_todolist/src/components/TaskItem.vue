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
        <div class="phase">Giai đoạn: <span>{{ task.team }}</span></div>
        <div class="assign">@{{ task.email_member.split('@')[0] }}</div>
    </div>
</template>

<script>
export default {
    name: 'task-item',
    props: {
        task: { type: Object, default: null }
    },
    computed: {
        dateFormat() {
            if (this.task) {
                return new Date(this.task.end_at).toLocaleString();
            }
            return '';
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
</style>