<template>
    <navbar></navbar>
    <div class="mgt10">
        <div class="search-form">
            <input type="search" class="form-control"
            type="text" maxlength="30" v-el:search_text
            @keyup.enter="getBook(true)" placeholder="input book name" />
            <button class="btn btn-primary" v-on:click="getBook(true)">Search</button>
        </div>

        <div class="mgt10 row">
            <book v-for="book in state.searchBook.books" :book-data.once="book"></book>
        </div>

        <alert type="warning" dismissable :show.sync="searchNotFound">
            找不到你想找的東西◢▆▅▄▃崩╰(〒皿〒)╯潰▃▄▅▇
        </alert>
        <infinite-loading :distance="infinite_distance"
            :on-infinite="getBook"
            v-if="state.searchBook.totalItem > 0 && state.searchBook.books.length < state.searchBook.totalItem">
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
        let search_text = this.$els.search_text.value.trim();
        if(!search_text) { return; }
        _this.$action('searchBook:setSearchText', search_text);
        const url = 'https://www.googleapis.com/books/v1/volumes';
        const data = {
            q: search_text,
            startIndex: _this.state.searchBook.books.length
        }
        request.get(url).query(data).end(function(err, res){
            getBookFinish.call(_this, err, res);
        });
        if(isClean){
            _this.$action('searchBook:cleanBooks');
            _this.searchNotFound = false;
        }
    }

    function getBookFinish(err, res){
        let _this = this;
        _this.firstLoad = false;
        _this.state.searchBook.totalItem = res.body.totalItems || 0;
        _this.$broadcast('$InfiniteLoading:loaded');

        if(err){

            this.totalItem = -1;
            this.searchNotFound = true;
            return;
        }

        if(res.body.items){
            _this.$action('searchBook:addBooks', res.body.items);
        } else {
            this.searchNotFound = true;
        }
    }

    function ready(){
        this.$els.search_text.value = this.state.searchBook.searchText;

        // find ele last click and scroll into view
        if(this.state.searchBook.nowBookId){
            let q = document.getElementById(this.state.searchBook.nowBookId);
            q.scrollIntoView(true);
        }
    }

    export default {
        methods:{
            getBook
        },
        data: ()=>({
            infinite_distance: 200,
            firstLoad: false,
            searchNotFound: false
        }),
        components: {
            book,
            alert,
            navbar,
            spinner,
            InfiniteLoading
        },
        ready
    }
</script>

<style scoped="true" lang="less">
    .search-form{
        width: 100%;

        input{
            max-width: 150px;
        }

        *{
            margin-right: 10px;
            display: inline-block;
            vertical-align: bottom;
        }
    }
</style>
