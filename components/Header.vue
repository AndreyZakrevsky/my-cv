<template>
    <div class="header">
        <div class="header-title">
            <span class="first-name" data-title="React.Js">Andrii</span>
            <span class="second-name" data-title="Vue.Js">Zakrevskyi</span>
        </div>
        <div v-if="($nuxt.$route.name.indexOf('index') !== -1)" class="typer-block">
            <v-typer
                    :text="typer"
                    :repeat="Infinity"
                    :shuffle="false"
                    initial-action="erasing"
                    :pre-type-delay="70"
                    :type-delay="70"
                    :pre-erase-delay="1980"
                    :erase-delay="150"
                    erase-style="select-back"
                    :erase-on-complete="false"
                    caret-animation="smooth"
                    class="typer"
            ></v-typer>
        </div>
        <div class="burger_menu"  v-if="!modal"  @click="showModal()">
            <span ></span>
            <span ></span>
            <span ></span>
        </div>
        <NavModal v-if="modal" />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import NavModal from './NavModal.vue'
    export default {
        name: "Header",
        components: {
            NavModal
        },

        data(){
            return{
                typer:["Front-End Developer", "Web Developer", "JavaScript lover"]
            }
        },

        computed: {
            ...mapGetters({
                modal: "modals/modal"
            })
        },

        methods:{
            showModal(){
                this.$store.dispatch('modals/showModal');
            }
        }
    }
</script>
<style>
    .typer {
        font-size: 20px;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
    .typer .custom.char.typed {
        color:  #00ccff;
    }
    .typer .custom.char.selected {
        color:#00C48D;
    }

    .typer .custom.caret.typing {
        background-color: #00ccff;
    }
</style>

<style scoped lang="scss">
   .header{
       /*position: fixed;*/
       width: 99%;
       height: 50px;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
           .typer-block{
               width: 200px;
               margin: 1px auto;
           }
         .header-title{
             padding: 15px;
             width: 140px;

               .first-name{
                   font-family: Arial, sans-serif;
                   font-size: 14px;
                  color: #00ccff;
                   cursor: pointer;
                   &:hover::after {
                       content: attr(data-title);
                       position: absolute;
                       left: 2%; top: 6%;
                       z-index: 1;
                       color: #00ccff;
                       font-family: Arial, sans-serif;
                       font-size: 14px;
                       padding: 5px 10px;
                   }
               }
             .second-name{
                 font-family: Arial, sans-serif;
                 font-size: 14px;
                  color: #00C48D;
                 cursor: pointer;
                 &:hover::after {
                     content: attr(data-title);
                     position: absolute;
                     left: 2%; top: 6%;
                     z-index: 1;
                     color: #00C48D;
                     font-family: Arial, sans-serif;
                     font-size: 14px;
                     padding: 5px 10px;
                 }
             }

         }
         .burger_menu{
             width: 25px;
             height: 26px;
             align-items: flex-end;
             display: flex;
             flex-direction: column;
             cursor: pointer;
                span{
                    width: 30px;
                    height: 3px;
                    background-color:  #00ccff;
                    margin-bottom: 5px;
                }

         }
   }

</style>
