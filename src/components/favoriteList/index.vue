<template>
    <navbar></navbar>
    <h3>favorite</h3>
    <book v-for="favo in state.favoStore.favorites" book-data="favo"></book>
</template>
<script>
    import navbar from 'components/navbar';
    import book from 'components/book';
    export default {
        components: {
            navbar
        }    
    }
</script>