<template>
    <div class="demo-slot">
        <comp-tabs title="Tieu de cua tab">
            <ul class="tabs-header">
                <li 
                    v-for="(item, index) in tabsHeader" 
                    :key="index"
                    @click="setActiveTab(index)"
                    :class="{active: tabActive == index}"
                >{{ item.text }}</li>
            </ul>
            
            <div class="tab-content tab1" v-if="tabActive === 0">
                <p>tab 1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi dolorem commodi error, quisquam nobis dolorum. Obcaecati, pariatur assumenda! Sed commodi vel incidunt minus blanditiis distinctio pariatur iusto magnam nisi.</p>
            </div>
            <div class="tab-content tab2" v-else-if="tabActive === 1">
                <p>tab 2</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem magni dolorem necessitatibus accusantium repellendus vero, tempore excepturi at odit voluptatum veritatis sit? Vero repellendus velit distinctio iste, esse quis!</p>
            </div>
            <div class="tab-content tab3" v-else>
                <p>tab 3</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam nesciunt repellat nam? Aspernatur excepturi nesciunt assumenda ea consectetur maiores pariatur ab animi voluptatibus sapiente, sint consequuntur, rem eius ullam.</p>
            </div>
        </comp-tabs>
    </div>
</template>

<script>
import CompTabs from './CompTabs.vue';

export default {
    name: 'demo-slot',
    components: {
        CompTabs
    },
    data() {
        return {
            tabsHeader: [
                {text: 'tab 1'},
                {text: 'tab 2'},
                {text: 'tab 3'}
            ],
            tabActive: 0
        }
    },
    methods: {
        setActiveTab(index) {
            console.log('setActiveTab: ', index);
            this.tabActive = index;
        }
    }
}
</script>

<style>
    .demo-slot {
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;
    }
</style>