let storeBookDetail = {
    state:{
        image: '',
        title: '',
        publisher: '',
        authors: '',
        description: ''
    },
    clearBookData: function(){
        this.state.image = '';
        this.state.title = '';
        this.state.publisher = '';
        this.state.authors = '';
        this.state.description = '';
    },
    setBookData: function(data){
        this.state.image = data.image;
        this.state.title = data.title;
        this.state.publisher = data.publisher;
        this.state.authors = data.authors;
        this.state.description = data.description;
    }
}
export default storeBookDetail;
