<template>
    <div>
        <h4 class="book_title">
            {{* bookData.volumeInfo.title}}
        </h4>
        <p class="book_publisher">
            {{* bookData.volumeInfo.publisher}}
        </p>
        <p class="book_publishedDate">
            {{* bookData.volumeInfo.book_publishedDate}}
        </p>
        <p class="book_description">
            {{* bookData.volumeInfo.description}}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['bookData']
    }
</script>
