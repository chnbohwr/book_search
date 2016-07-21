<template>
    <div>
        <navbar></navbar>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <img class="img-responsive" :src="bookData.image" />
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>
                    {{ bookData.title }}
                </p>
                <p>
                    {{ bookData.publisher }}
                </p>
                <p>
                    {{ bookData.authors }}
                </p>
            </div>
            
        </div>
        <div class="row">
            {{{ bookData.description }}}
        </div>
    </div>
</template>

<script>
import request from 'superagent';
import navbar from 'components/navbar';

function ready (){
    let _this = this;
    const book_id = this.$route.params.book_id;
    const url = 'https://www.googleapis.com/books/v1/volumes/' + book_id;
    request.get(url).end(function(err, res){
        if(!err){
            let v = res.body.volumeInfo;

            let parsed_book_data = {
                id: v.id,
                image: v.imageLinks.smallThumbnail,
                title: v.title,
                publisher: v.publisher,
                authors: v.authors || [],
                description: v.description
            }
            _this.bookData = parsed_book_data;
        }
    });
}

function addFavo(){
    this.$action('favoStore:addFavo', this.bookData)
}

function destroyed(){

}
export default {
    ready,
    data: ()=>({
        bookData:{}
    }),
    components:{
        navbar
    },
    methods:{
        addFavo
    },
    destroyed
}
</script>
