<template>
    <div>
        <Header/>
        <no-ssr placeholder="Loading...">
            <nuxt class="head"/>
        </no-ssr>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>

<style>
    .head {
        margin-top: 45px;
    }

    html {
        font-family: 'Poppins', "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
    }

</style>

