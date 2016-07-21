let store = {
    name:'favoStore',
    state:{
        favorites:[]
    },
    addFavo: function(book_data){
        const index = getBookIndex(book_data.id);
        // if this book not favorite
        if (index === -1) {
            this.state.favorites.push(book_data);
        }
    },
    removeFavo: function(book_id){
        const index = getBookIndex(book_id);
        if (index > -1) {
            this.state.favorites.splice(index, 1);
        }
    },
    toggleFavo: function(book_data){
        const index = getBookIndex(book_id);
        if (index === -1) {
            this.state.favorites.push(book_data);
        } else {
            this.state.favorites.splice(index, 1);
        }
    }
};

function getBookIndex(id){
    let book_index = -1;
    store.state.favorites.forEach(function(book_data, index){
        if(book_data.id === id){
            book_index = index;
        }
    });
    return book_index;
}

export default store;
