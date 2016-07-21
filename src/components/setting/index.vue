<style lang="css">



</style>

<template lang="html">

<navbar>
</navbar>
<h3>{{ $t('language') }}</h3>

<radio-group :value.sync="lang" type="primary">
    <radio-btn value="zh-tw">繁體中文</radio-btn>
    <radio-btn value="en-us" checked>English</radio-btn>
    <radio-btn value="es">español</radio-btn>
</radio-group>

</template>

<script>

import {
    radioGroup, radioBtn
}
from 'vue-strap'
import navbar from 'components/navbar'
import Vue from 'vue'

function watchLang(val){
    console.log(val);
    Vue.config.lang = val;
}

export default {
    data: () => ({
        lang: Vue.config.lang
    }),
    watch:{
        lang: watchLang
    },
    computed: {},
    ready: function() {

    },
    attached: function() {},
    methods: {},
    components: {
        radioGroup,
        radioBtn,
        navbar
    }
}

</script>
