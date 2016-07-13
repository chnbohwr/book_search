<template>
<!--    <navbar></navbar>-->
    <div class="mgt10">
        <h3>Search Google Book</h3>
        <div class="search-form">
            <label>SearchText</label>
            <input type="search" class="form-control" type="text" maxlength="30" v-model="searchText" @keyup.enter="getBook(true)" />
            <button class="btn btn-primary" v-on:click="getBook(true)">Search</button>
        </div>

        <div class="mgt10 row">
            <book v-for="book in books" :book-data.once="book"></book>
        </div>
        <spinner :fixed="true" v-ref:spinner></spinner>
        <alert type="warning" dismissable :show.sync="searchNotFound">
            找不到你想找的東西◢▆▅▄▃崩╰(〒皿〒)╯潰▃▄▅▇
        </alert>
        <infinite-loading :distance="infinite_distance"
            :on-infinite="getBook"
            v-if="totalItem > 0 && books.length < totalItem">
        </infinite-loading>
    </div>
</template>

<script>
    import request from 'superagent';
    import book from 'components/book';
    import navbar from 'components/navbar';
    import { alert, spinner } from 'vue-strap';
    import InfiniteLoading from 'vue-infinite-loading';
    function getBook(isClean){
        let _this = this;
        const url = 'https://www.googleapis.com/books/v1/volumes';
        const data = {
            q:this.searchText,
            startIndex: this.books.length
        }
        request.get(url).query(data).end(function(err, res){
            getBookFinish.call(_this, err, res);
        });
        if(isClean){
            this.books = [];
            this.$refs.spinner.show()
            this.searchNotFound = false;
        }
    }

    function getBookFinish(err, res){
        this.firstLoad = false;
        this.$refs.spinner.hide()
        this.totalItem = res.body.totalItems;
        this.$broadcast('$InfiniteLoading:loaded');
        if(err){
            console.log(err);
            this.totalItem = -1;
            this.searchNotFound = true;
            return;
        }
        let _this = this;
        if(res.body.items){
            parseBookData.call(this, res.body.items);
        } else {
            this.searchNotFound = true;
        }
    }

    function parseBookData(items){
        let _this = this;
        items.forEach(function(data){
            let book_data = {
                id: data.id,
                title: data.volumeInfo.title,
                publisher: data.volumeInfo.publisher
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

            _this.books.push(book_data);
        });
    }

    let initial_data = {
        searchText: '',
        books: [],
        totalItem: -1,
        infinite_distance: 200,
        firstLoad: false,
        searchNotFound: false
    };

    export default {
        methods:{
            getBook,
            onInfinite
        },
        data: ()=>(initial_data),
        components: {
            book,
            alert,
            navbar,
            spinner,
            InfiniteLoading
        },
        created: function(){
            console.log(this);
        }
    }
</script>

<style scoped="true" lang="less">
    .search-form{
        width: 100%;
        label{

        }
        input{
            max-width: 150px;
        }

        *{
            margin-right: 10px;
            display: inline-block;
        }
    }
</style>
