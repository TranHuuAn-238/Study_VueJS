<template>
    <div class="wrapper-controls">
        <button 
            @click="newGame"
            class="control btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
        <button 
            @click="rollDice"
            class="control btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
        <button 
            @click="$emit('handleHoldScore')"
            class="control btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
        
        <!-- luu y: v-model luon tra ve data dang string khi o input thay doi(du data ban dau la int) => nho ep kieu ve int -->
        <!-- luu y 2: vi data finalScore luc nay dang la props nen ko the sd v-model="finalScore" -->
        <!-- => luc nay giai phap tuong duong v-model la phai v-bind data va viet 1 event xu ly viec input thay doi -->
        <input 
            :disabled="isPlaying"
            :value="finalScore"
            @input="$emit('handleChangeFinalScore', $event)"
            type="number" placeholder="Final score" class="final-score">
    </div>    
</template>

<script>
export default {
    name: 'controls',
    props: {
        finalScore: { type: [Number, String], default: 100 },
        isPlaying: { type: Boolean, default: false }
    },
    data() {
        return {

        }
    },
    methods: {
        newGame() {
            console.log('from Controls.vue');
            // kich hoat event handleNewGame cua App truyen vao
            this.$emit('handleNewGame');
        },
        rollDice() {
            console.log('rollDice from Controls.vue');
            this.$emit('handleRollDice');
        }
    }
}
</script>

<style>
/**********************************************
*** Control
**********************************************/
.control {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}
.control.disable {
    pointer-events: none;
}

.control:hover { font-weight: 600; }
.control:hover i { margin-right: 20px; }

.control:focus {
    outline: none;
}

.control i {
    color: #42b983;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.btn-new { top: 45px;}
.btn-roll { top: 403px;}
.btn-hold { top: 467px;}

.final-score {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 520px;
    color: #555;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    padding: 10px;
    width: 160px;
    text-transform: uppercase;
}

.final-score:focus { outline: none; }
</style>