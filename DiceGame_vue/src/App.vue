<template>
	<div id="app">
        <div class="wrapper clearfix">
            <players 
                :isWinner="isWinner"
                :activePlayer="activePlayer"
                :scoresPlayer="scoresPlayer"
                :currentScore="currentScore"
            />
            
            <controls 
                :isPlaying="isPlaying"
                :finalScore="finalScore"
                @handleChangeFinalScore="handleChangeFinalScore"
                @handleHoldScore="handleHoldScore"
                @handleNewGame="handleNewGame"
                @handleRollDice="handleRollDice"
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
            activePlayer: 0, // nguoi choi hien tai
            scoresPlayer: [0, 0],
            dices: [2, 5],
            currentScore: 0,
            finalScore: 15
		}
	},
	components: {
        Players,
        Controls,
        Dices,
        PopupRule
    },
    computed: {
        // computed dc chay bat cu khi nao data co su thay doi
        // computed du viet la func thi cug dc truyen props xuong cho comp con nhu truyen data thong thuong(v-bind) => ko co () nhu methods
        isWinner() {
            let { scoresPlayer, finalScore } = this;

            if(scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) {
                // dung cuoc choi
                this.isPlaying = false;
                return true;
            }
            return false;
        }
    },
    methods: {
        handleChangeFinalScore(e) {
            var number = parseInt(e.target.value);
            if (isNaN(number)) {
                this.finalScore = '';
            } else {
                this.finalScore = number;
            }
            // console.log(e.target.value);
        },
        handleHoldScore() {
            if (this.isPlaying) {
                console.log('handleHoldScore from App.vue');
                // activePlayer = 0 => Nguoi choi 1
                // activePlayer = 1 => Nguoi choi 2
                // scoresPlayer array
                // scoresPlayer[0] = scoresPlayer[activePlayer]
                // scoresPlayer[1] = scoresPlayer[activePlayer]

                // destructuring JS - ES6
                let { scoresPlayer, activePlayer, currentScore } = this;
                let scoreOld = scoresPlayer[activePlayer];

                // luu y dang lam viec vs array/object
                // clone data: tao 1 array moi de xu ly sau do copy lai du lieu vao array cu
                // let cloneScorePlayer = [...scoresPlayer]; // spread operator
                // cloneScorePlayer[activePlayer] = scoreOld + currentScore;            
                // this.scoresPlayer = cloneScorePlayer; // tai day clone data vao mang goc de thay doi dc dia chi o nho cua mang goc ban dau
                // hoac sd set cua Vue
                this.$set(this.scoresPlayer, activePlayer, scoreOld + currentScore); // params: mang goc muon thay doi, key/index cua phan tu trong mang goc muon doi value, gia tri moi

                // this.scoresPlayer[this.activePlayer] = this.scoresPlayer[this.activePlayer] + this.currentScore;
                // this.scoresPlayer[activePlayer] = scoreOld + currentScore;
                if (!this.isWinner) {
                    this.nextPlayer(); // lay diem xog thi doi luot choi
                }
            } else {
                alert('Please click on New Game button to start the Game');
            }
        },
        nextPlayer() {
            // activePlayer = 0 => 1; 1 => 0
            this.activePlayer = this.activePlayer === 0 ? 1 : 0;
            this.currentScore = 0;
        },
        handleRollDice() {
            console.log('handleRollDice from App.vue');
            if(this.isPlaying) {
                // xoay xuc xac
                // Math.random(): mac dinh random tu 0 -> 1
                /**
                 * 0 <= X <= 6
                 * 0 * 6 <= Y=X*6 <= 1*6
                 */
                // lam tron xuong va +1
                var dice1 = Math.floor(Math.random() * 6) + 1;
                var dice2 = Math.floor(Math.random() * 6) + 1;

                this.dices = [dice1, dice2];
                console.log(dice1, dice2);

                if (dice1 === 1 || dice2 === 1) {
                    // doi luot choi
                    let activePlayerr = this.activePlayer;
                    setTimeout(function() {
                        // console.log(this);
                        // neu su dung arrow function thi co the truy xuat bien this cua Vue nhu thuong: ${this.activePlayer + 1}
                        alert(`Player ${activePlayerr + 1} so very đen`);
                    }, 10);
                    // reset diem tam thoi currentScore ve 0
                    this.nextPlayer();
                } else {
                    // cong don diem tam thoi currentScore cho nguoi dang choi
                    this.currentScore = this.currentScore + dice1 + dice2;
                }
            } else {
                alert('Please click on New Game button to start the Game');
            }
        },
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
