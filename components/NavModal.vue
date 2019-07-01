<template>
    <div class="nav" :class="{'slow' : slide }" >
        <div class="close_popup" @click="hideModal()"></div>
        <div class="links">
            <div class="links-items">
                <p class="item" @click="changePage('/')">HOME</p>
                <p class="item" @click="changePage('/resume')">RESUME</p>
                <p class="item" @click="changePage('/contact')">CONTACT</p>
                <p class="item" @click="changePage('/projects')">PROJECTS</p>
                <p class="item" @click="changePage('/gallery')">GALLERY</p>
            </div>
        </div>
        <div class="blur-class"></div>
    </div>
</template>

<script>

    export default {
        name: "NavModal",
        data(){
            return{
                slide:false
            }
        },

        methods: {
            hideModal() {
                this.slide = true;
                setTimeout( ()=>{
                    this.$store.dispatch('modals/hideModal');
                    this.slide = false;
                }, 2000 );
            },
            changePage(path){
                this.$router.push({
                    path: path
                });
                this.slide = true;
                setTimeout( ()=>{
                    this.$store.dispatch('modals/hideModal');
                    this.slide = false;
                }, 2000 );

            }
        },


    }
</script>

<style scoped lang="scss">
    .nav {
        background-color: black;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9999;
        display: block;

        @keyframes slide {
            0% {
                transform: translate(0px, 50px);
                opacity: 0.3;
            }
            100% {
                transform: translate(0px, 0px);
                opacity: 1;
            }
        }
        animation-name: slide;
        animation-duration: 1s;
        animation-fill-mode: forwards;

        .close_popup {
            position: absolute;
            width: 14px;
            height: 14px;
            right: 20px;
            top: 15px;
            z-index: 2;
            background: url("~assets/img/css_sprites.png") -114px -325px;
            background-repeat: no-repeat;
            cursor: pointer;
            -webkit-transition: transform 0.2s linear;
            -moz-transition: transform 0.2s linear;
            -ms-transition: transform 0.2s linear;
            -o-transition: transform 0.2s linear;
            transition: transform 0.2s linear;

            &:hover {
                cursor: pointer;
                background: url("~assets/img/css_sprites.png") -138px -325px;
                -webkit-transform: rotate(90deg);
                -moz-transform: rotate(90deg);
                -ms-transform: rotate(90deg);
                -o-transform: rotate(90deg);
                transform: rotate(90deg);
            }
        }

        .links {
            position: absolute;
            display: inline-block;
            max-width: 450px;
            max-height: 300px;
            -webkit-animation: spin 0.8s linear infinite; /* Safari */
            margin: auto;
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 1000;

            .links-items {
                @keyframes slide {
                    0% {
                        transform: translate(0px, 10px);
                    }
                    100% {
                        transform: translate(0px, 0px);
                    }
                }

                animation-name: slide;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                margin: 0px;
                padding: 0px;
                overflow: hidden;
                text-align: center;
                font-size: 26px !important;
                font-weight: 400 !important;
                letter-spacing: 5px;

                .item {
                    list-style: none;
                    color:  #00ccff;
                    cursor: pointer;
                    font-family: Poppins,sans-serif;
                    font-size: 25px;
                    letter-spacing: 10px;
                    transition: all .4s;

                    &:hover {
                        color: #00C48D;
                    }
                }
            }
        }

        .blur-class{
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 1;
            background: url("~assets/img/fon4.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            filter: blur(5px);
        }
    }

    .slow{
        @keyframes slide2 {
            0% {
                    /*transform: translate(0px, 0px);*/
                opacity: 1;
            }
            100% {
                /*transform: translate(13000px);*/
                opacity: 0;
            }
        }
        animation-name: slide2;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
</style>

