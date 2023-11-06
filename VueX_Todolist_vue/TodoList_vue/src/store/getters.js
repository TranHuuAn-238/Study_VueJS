export default {
    listTaskSearch: state => {
        // state.strSearch - state.listTask
        const { strSearch } = state;
			
        var newItems = state.listTask.filter(item => {
            return item.name.toLowerCase().includes(strSearch.toLowerCase());
        });
        console.log("listTaskSearch Getters");
        return newItems;
    }
}