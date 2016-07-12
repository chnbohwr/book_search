<template>
    <div>
        <navbar></navbar>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" :src="image"/>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>
                    {{ title }}
                </p>
                <p>
                    {{ publisher }}
                </p>
                <p>
                    {{ authors }}
                </p>
            </div>
        </div>
        <div class="row">

        </div>
    </div>
</template>

<script>
import request from 'superagent';
import navbar from 'components/navbar';
import bookDetailStore from 'store/bookDetailStore.js';
function ready (){
    console.log('vue ready');
    let _this = this;
    const book_id = this.$route.params.book_id;
    const url = 'https://www.googleapis.com/books/v1/volumes/' + book_id;
    request.get(url).end(function(err, res){
        console.log('request end', err, res);
        if(!err){
            let v = res.body.volumeInfo;
            let parsed_book_data = {
                image: v.imageLinks.small,
                title: v.title,
                publisher: v.publisher,
                authors: v.authors,
                description: v.description
            }
            console.log(parsed_book_data, 'ajax finish');
            bookDetailStore.setBookData(parsed_book_data);
        }
    });
}
function destroyed(){
    bookDetailStore.clearBookData();
}
export default {
    ready,
    data: ()=>(bookDetailStore.state),
    components:{
        navbar
    },
    destroyed
}
</script>
