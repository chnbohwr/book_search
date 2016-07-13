let store = {
    name:'favoStore',
    state:{
        favorites:[]
    },
    addFavo: function(favo_data){
        console.log(this)
        this.state.favorites.push(favo_data);
        console.log('addFavo success', this.state.favorites)
    },
    removeFavo: function(favo_id){
        const new_favo_list = this.state.favorites.filter(function(favo_data){
            if(favo_data.id === favo_id){
                return false;
            }
            return true;
        });
        this.state.favorites = new_favo_list;
    }
};

export default store;