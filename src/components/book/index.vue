<style scoped="true" lang="less">

.card {
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #557091;
    height: 230px;
    position: relative;
    overflow: hidden;
    .card_content {
        width: 100%;
        height: 100%;
        transition: .4s -webkit-filter linear;
    }
    .description {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .4);
        color: #fff;
        width: 100%;
        height: 100%;
        p {
            position: absolute;
            top: 80px;
            left: 0px;
            padding: 0 20px;
            font-size: 12px;
            width: 100%;
            height: 75px;
            line-height: 25px;
            overflow: hidden;
            text-shadow: 0px 0px 8px #000;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }
    .show_des_icon {
        margin: 5px 0 0 5px;
        width: 30px;
        height: 30px;
        background: rgba(255, 255, 255, .6);
        border: none;
        border-radius: 30px;
        transition: .25s all ease;
        color: #555;
        &:hover {
            background: rgba(0, 0, 0, .6);
            color: #eee;
        }
        &.active {
            background: #88342d;
            color: white
        }
    }
    &:hover .background {
        background-position: top;
    }
    .background {
        width: 100%;
        height: 100px;
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 1s ease;
    }
    .content {
        width: 100%;
        height: 100px;
        text-align: center;
        padding-top: 50px;
        .title {
            font-size: 14px;
            font-weight: 600;
        }
        .author {
            margin-top: 10px;
            font-size: 10px;
            font-weight: 100;
        }
        * {
            padding: 0 20px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .small_img {
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

.blur {
    filter: blur(5px);
}

.fade-transition {
    transition: .25s all;
    opacity: 1;
}

.fade-enter,
.fade-leave {
    opacity: 0;
}

</style>

<template>

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card" id="{{bookData.id}}">
        <div class="card_content" v-bind:class="{ 'blur': showDescription }">
            <div v-img.once="background_url" class="background">
                <button class="show_des_icon" v-if="bookData.description" v-on:click="toggleDescription()">
                    <span class="glyphicon glyphicon-book"></span>
                </button>
                <button class="show_des_icon" v-bind:class="{ 'active': isFavorite }" v-on:click="toggleFavo()">
                    <span class="glyphicon glyphicon-heart-empty"></span>
                </button>
            </div>
            <div v-on:click="goBookDetail()" class="small_img" v-img="bookData.image">
            </div>
            <div class="content">
                <div class="title">{{* bookData.title }}</div>
                <div class="author">{{* bookData.author }}</div>
            </div>
        </div>
        <div class="description" v-show="showDescription" transition="fade">
            <button class="show_des_icon" v-if="bookData.description" v-on:click="toggleDescription()">
                <span class="glyphicon glyphicon-book"></span>
            </button>
            <p>{{* bookData.description}}</p>
        </div>
    </div>
</div>

</template>

<script>

function ready() {
    this.background_url = 'https://unsplash.it/700/400/?image=' + this.bookData.image_code;

    if (isFavorite.call(this)) {
        this.isFavorite = true;
    } else {
        this.isFavorite = false;
    }
}

function goBookDetail() {
    this.$action('searchBook:setNowBookId', this.bookData.id);
    this.$router.go({
        name: 'book_detail',
        params: {
            book_id: this.bookData.id
        }
    });
}

function toggleDescription() {
    this.showDescription = !this.showDescription;
}

function toggleFavo() {
    if (isFavorite.call(this)) {
        this.isFavorite = false;
        this.$action('favoStore:removeFavo', this.bookData.id);
    } else {
        this.isFavorite = true;
        this.$action('favoStore:addFavo', this.bookData);
    }
}

function isFavorite() {
    let _this = this;
    let find = false
    this.state.favoStore.favorites.forEach(function(book_data) {
        if (_this.bookData.id === book_data.id) {
            find = true;
        }
    });
    return find;
}
export default {
    props: ['bookData'],
    methods: {
        goBookDetail,
        toggleDescription,
        toggleFavo
    },
    data: () => {
        return {
            background_url: '',
            showDescription: false,
            isFavorite: false
        }
    },
    ready
}

</script>
