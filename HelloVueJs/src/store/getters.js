export default {
	// giong nhu computed
	count: state => {
	  return state.count;
	},
	value(state) {
	  return state.value;
	},
	countDouble: state => {
	  return state.count * 2;
	}
}