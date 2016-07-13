<template>
<!--
    <div class="panel panel-success">
        <div class="panel-heading">
            <a v-link="{ name: 'book_detail', params: { book_id: bookData.id }}">
                {{* bookData.title}}
            </a>
        </div>
        <div class="panel-body">
            <img v-if="bookData.image" :src="bookData.image" />
            <p v-if="bookData.publisher" class="book_publisher">
                Publisher: {{* bookData.publisher}}
            </p>
            
        </div>
    </div>
-->
    <div class="card">
        <div v-img="random_image" class="background" ></div>
        <div v-link="{ name: 'book_detail', params: { book_id: bookData.id }}"
             class="small_img"
             :style="{ 'background-image': 'url('+ bookData.image + ')' }">
        </div>
        <div class="content">
            <div class="title"> {{ bookData.title }}</div>
        </div>
    </div>
</template>

<script>
    
    function ready(){
        if(this.random_image === ''){
            this.random_image = 'https://unsplash.it/300/100/?image=' + Math.floor(Math.random()*1080);
        }
    }
    function goBookDetail(){
        //console.log(this.bookData);
    }
    export default {
        props: ['bookData'],
        methods:{
            goBookDetail
        },
        data:()=>{
            return{
                random_image: ''
            }
        },ready
    }
</script>

<style scoped="true" lang="less">
    .card {
        width: 290px;
        display: inline-block;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid #aaa;
        height: 200px;
        position: relative;
        overflow: hidden;
        .background{
            background-color: #ccc;
            width: 100%;
            height: 100px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .content{
            width: 100%;
            height: 100px;
            text-align: center;
            padding-top: 50px;
            .title{
                padding: 0 20px;
                width: 100%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;    
            }
        }
        .small_img{
            position: absolute;
            width: 80px;
            height: 80px;
            border: 5px solid #fff;
            border-radius: 80px;
            background-color: #999;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            top: 60px;
            left: 105px;
            cursor: pointer;
        }
    }
</style>
