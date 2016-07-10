<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <a v-link="{ name: 'book_detail', params: { book_id: bookData.id }}">
                {{* bookData.volumeInfo.title}}
            </a>
        </div>
        <div class="panel-body">
            <img :src="bookData.volumeInfo.imageLinks.thumbnail" />
            <p class="book_publisher">
                Publisher: {{* bookData.volumeInfo.publisher}}
            </p>
            <p class="book_publishedDate">
                Publish Date: {{* bookData.volumeInfo.book_publishedDate}}
            </p>
            <p class="book_description">
                Description:　{{* bookData.volumeInfo.description}}
            </p>
        </div>
    </div>
</template>

<script>
    function goBookDetail(){
        console.log(this.bookData);
    }
    export default {
        props: ['bookData'],
        methods:{
            goBookDetail
        }
    }
</script>
