<template>
    <nav class="navbar">
            <div class="navbar-header">

            </div>
            <div>
                <ul class="nav navbar-nav">
                    <li v-link-active><a v-link="{path: '/search'}">{{ $t('search') }}</a></li>
                    <li v-link-active><a v-link="{path: '/favorites'}">{{ $t('favorites') }}</a></li>
                    <li v-link-active><a v-link="{path: '/setting'}">{{ $t('setting') }}</a></li>
                </ul>
            </div>

    </nav>
</template>
<script>
    export default{}
</script>

<style scoped="true" lang="less">

.navbar {
    a{
        color: #829bb9;
    }
    li.v-link-active a{
        text-decoration: none;
        background-color: #eee
    }

}

</style>
