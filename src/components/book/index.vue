<template>
    <div class="panel panel-success">
        <div class="panel-heading panel-title">
            {{* bookData.volumeInfo.title}}
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

    export default {
        props: ['bookData']
    }
</script>
