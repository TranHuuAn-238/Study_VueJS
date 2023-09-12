<template>
	<div id="app">
        <div class="wrapper clearfix">
            <players 
                :activePlayer="activePlayer"
                :scoresPlayer="scoresPlayer"
                :currentScore="currentScore"
            />
            
            <controls 
                @handleNewGame="handleNewGame"
            />
            
            <dices :dices="dices" />

            <popup-rule 
                @handleConfirm="handleConfirm"
                :isOpenPopup="isOpenPopup" />
        </div>

	</div>
</template>

<script>
import Players from "./components/Players"; // ko can khai bao duoi .vue cung dc
import Controls from "./components/Controls";
import Dices from './components/Dices.vue';
import PopupRule from './components/PopupRule.vue';

export default {
	name: 'app',
	data () {
		return {
            isPlaying: false,
            isOpenPopup: false,
            activePlayer: 1, // nguoi choi hien tai
            scoresPlayer: [20, 40],
            dices: [2, 5],
            currentScore: 1
		}
	},
	components: {
        Players,
        Controls,
        Dices,
        PopupRule
    },
    methods: {
        handleConfirm() {
            console.log('handleConfirm from App.vue');
            this.isPlaying = true;
            this.isOpenPopup = false;
            this.activePlayer = 0;
            this.dices = [1, 1];
            this.scoresPlayer = [0, 0];
            this.currentScore = 0;
        },
        handleNewGame() {
            console.log('from App.vue');
            // hien thi popup -> show luat choi
            this.isOpenPopup = true;
        }
    }
   
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
