<template>
    <navbar></navbar>
    <div class="mgt10">
        <h3>Search Google Book</h3>
        <div class="form-group">
            <label>SearchText</label>
            <input class="form-control" type="text" maxlength="30" v-model="searchText" @keyup.enter="getBook()" />
        </div>
        <button class="btn btn-primary" v-on:click="getBook()">Search</button>
        <div class="book_area mgt10">
            <book v-for="book in books" :book-data.once="book"></book>
        </div>
        <spinner v-show="loading" v-ref:spinner></spinner>
    </div>
</template>

<script>
    import request from 'superagent';
    import book from 'components/book';
    import navbar from 'components/navbar';
    import {spinner} from 'vue-strap';
    function getBook(){
        let _this = this;
        this.$refs.spinner.show()
        const url = 'https://www.googleapis.com/books/v1/volumes';
        request.get(url).query({q:this.searchText}).end(function(err, res){
            getBookFinish.call(_this, err, res);
        });
    }

    function getBookFinish(err, res){
        if(err){
            console.log(err);
            return;
        }
        console.log(res.body)
        this.books = res.body.items.map(function(data){
            
            let book_data = {
                id: data.id,
                title: data.volumeInfo.title,
                publisher: data.volumeInfo.publisher
            };
            if(data.volumeInfo.imageLinks){
                book_data.image = data.volumeInfo.imageLinks.thumbnail;
            }
            return book_data;
        });
        this.totalItem = res.body.totalItems;
        this.$refs.spinner.hide();
    }

    let initial_data = {
        searchText: '',
        books: [],
        totalItem: 0
    };

    export default {
        methods:{
            getBook
        },
        data: ()=>(initial_data),
        components: {
            book,
            spinner,
            navbar
        },
        created: function(){
            console.log(this);
        }
    }
</script>
