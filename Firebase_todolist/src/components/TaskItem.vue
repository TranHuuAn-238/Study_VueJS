<template>
    <div class="backlogs-item" v-if="task">
        <div class="project">{{ task.name }}</div>
        <div class="title">{{ task.title }}</div>
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