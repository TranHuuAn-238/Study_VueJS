export default {
	// giong nhu methods
	increment(state, number) {
	  console.log("Mutations increment", state);
	  state.count = state.count + number;
	},
	decrement(state, number = 1) {
	  console.log("Mutations decrement", state);
	  state.count = state.count - number;
	}
}