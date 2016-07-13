<template>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div v-img="random_image" class="background" ></div>
            <div v-link="{ name: 'book_detail', params: { book_id: bookData.id }}"
                 class="small_img"
                 v-img="bookData.image">
            </div>
            <div class="content">
                <div class="title"> {{ bookData.title }}</div>
                <div class="author">{{ bookData.author }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    function ready(){
        if(this.random_image === ''){
            this.random_image = 'https://unsplash.it/300/100/?image=' + this.bookData.image_code;
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
        margin-bottom: 20px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #aaa;
        height: 230px;
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
                font-size: 14px;
                font-weight: 600;
            }
            .author{
                margin-top: 10px;
                font-size: 10px;
                font-weight: 100;
            }
            *{
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
            left: ~"calc(50% - 40px)";
            cursor: pointer;
        }
    }
</style>
