let store = {
    name:'searchBook',
    state:{
        searchText: '',
        books: [],
        totalItem: -1,
        nowBookId: ''
    },
    setSearchText: function(searchText){
        this.state.searchText = searchText;
    },
    setTotalItem: function(totalItem){
        this.state.totalItem = totalItem;
    },
    addBooks: function(books){
        let _this = this;
        books.forEach(function(data){
            let book_data = {
                id: data.id,
                title: data.volumeInfo.title,
                publisher: data.volumeInfo.publisher,
                description: data.volumeInfo.description || ''
            };
            if(data.volumeInfo.imageLinks){
                book_data.image = data.volumeInfo.imageLinks.thumbnail;
            }
            if(data.volumeInfo.authors){
                let str = '';
                let last_index = data.volumeInfo.authors.length - 1;
                data.volumeInfo.authors.forEach(function(author, index){
                    str += author;
                    if(index !== last_index){
                        str += ' | ';
                    }
                })
                book_data.author = str;
            }
            // magic in here
            let image_num = 0;
            data.id.split('').forEach(function(char){image_num += char.charCodeAt();});
            book_data.image_code = image_num % 1080;

            _this.state.books.push(book_data);
        });
    },
    setNowBookId: function(id){
        this.state.nowBookId = id;
    },
    cleanBooks: function(){
        this.state.books = [];
    }
};

export default store;