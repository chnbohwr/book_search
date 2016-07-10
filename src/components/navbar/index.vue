<template>
    <nav class="navbar navbar-default ">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Book System</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                <ul class="nav navbar-nav">
                    <li><a v-link="{path: '/'}">Search</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>

    </nav>
</template>
<script>
    export default{}
</script>
