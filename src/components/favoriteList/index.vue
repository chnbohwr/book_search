<template>
    <navbar></navbar>
    <book v-for="favo in state.favoStore.favorites" :book-data="favo"></book>
</template>
<script>
    import navbar from 'components/navbar';
    import book from 'components/book';
    export default {
        components: {
            navbar,
            book
        }
    }
</script>
