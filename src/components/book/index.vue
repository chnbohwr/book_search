<template>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div v-img="random_image" class="background" >
                <button class="show_des_icon" v-if="bookData.description" v-on:click="toggleDescription()">
                    <span class="glyphicon glyphicon-book"></span>
                </button>
                <button class="show_des_icon">
                    <span class="glyphicon glyphicon-heart-empty"></span>
                </button>
            </div>
            <div v-link="{ name: 'book_detail', params: { book_id: bookData.id }}"
                 class="small_img"
                 v-img="bookData.image">
            </div>
            <div class="content">
                <div class="title"> {{ bookData.title }}</div>
                <div class="author">{{ bookData.author }}</div>
            </div>
            <div class="description" v-show="showDescription">
                <button class="show_des_icon" v-if="bookData.description" v-on:click="toggleDescription()">
                    <span class="glyphicon glyphicon-book"></span>
                </button>
                <p>{{ bookData.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    function ready(){
        if(this.random_image === ''){
            this.random_image = 'https://unsplash.it/700/400/?image=' + this.bookData.image_code;
        }
    }
    function goBookDetail(){
        //console.log(this.bookData);
    }
    function toggleDescription(){
        this.showDescription = !this.showDescription;
    }
    export default {
        props: ['bookData'],
        methods:{
            goBookDetail,
            toggleDescription
        },
        data:()=>{
            return{
                random_image: '',
                showDescription: false
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
        .description{
            position: absolute;
            top: 0;
            left: 0;
            background: #ccc;
            color: #555;
            width: 100%;
            height: 100%;
            p{
                position: absolute;
                top: 80px;
                left: 0px;
                padding: 0 20px;
                font-size: 12px;
                height: 75px;
                line-height: 25px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
        .show_des_icon{
            margin: 5px 0 0 5px;
            width: 30px;
            height: 30px;
            background: rgba(255,255,255,.6);
            border: none;
            border-radius: 30px;
            transition: .25s all;
            &:hover{
                background: rgba(0,0,0,.6);
                color: #eee;
            }
        }
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
