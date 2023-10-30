export default {
	// cung chua cac methods nhu mutations, tuy nhien actions hay dung de xu ly bat dong bo (VD call API get data va tra ve cho mutations)
	// param o day la context
	incrementAction ({ commit, dispatch, state }, obj) {   // su dung syntax ES6 destructuring(phân rã) bien context
	  // 1 action -> goi den 1 mutation tuong ung
	  console.log('Action: increment ', state.value2, obj);

	  dispatch('testABC');
	  commit('increment', obj.number);
	},
	decrementAction(context, obj) {
	  console.log('Action: decrement ', context, obj);
	  context.commit('decrement', obj.number);
	},
	testABC (context) {
	  console.log('another action testABC');
	}
}