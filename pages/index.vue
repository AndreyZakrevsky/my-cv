<template>
  <section class="container">

       <v-flex xs5 class="left-home" >
                <div class="py-4  ">
                    <img src="~assets/img/fon2.jpg" alt="" class="my-img">
                </div>
                <div class="py-4 social-block">
                    <a href="https://github.com/AndreyZakrevsky/" target="_blank" class="social-link"><img src="~assets/img/g.png" alt="" class="social-img"></a>
                    <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B7%D0%B0%D0%BA%D1%80%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-981855150/" target="_blank" class="social-link"><img src="~assets/img/in.png" alt="" class="social-img"></a>
                    <a href="" class="social-link"><img src="~assets/img/f.png" alt="" class="social-img"></a>
                </div>
       </v-flex>

        <v-flex xs5 class="right-home">
                <div class="py-4 desc-title ">
                     <h1>Good day</h1>
                </div>
                <div class="py-4 desc-text">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, distinctio eos explicabo illum itaque laborum nemo nulla odio odit perspiciatis praesentium quas qui quos ratione sed unde vitae! Illo, veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at, consequatur error ipsa ipsam ipsum magni mollitia quae, quasi qui quisquam quo temporibus totam. Commodi dolores maiores porro rerum velit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur cum dicta id iure nobis quibusdam sapiente suscipit ullam? Cumque hic iusto quaerat quasi veniam? Blanditiis ducimus minus porro vel?
                   </p>
                </div>

       </v-flex>
  </section>
</template>

<script>
export default {
  components: {
    //AppLogo
  },
    data(){
        return {

        };
    }
}
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
  border-top: 1px solid #00C48D;
  justify-content: space-between;
  flex-wrap: wrap;
}

.desc-title{
  width: 200px;
  margin: 2px auto;
  font-family: 'Playfair Display', serif;
  color: #96c0bf;
  text-align: center;
}


.desc-text{
  margin: 2px 15px;
  text-align: center;
  font-size: 20px!important;
  font-family: 'Playfair Display', serif;
  color: #86b6c0;
}

.social-block{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 300px;
  justify-content: space-around;
}

.social-link{
  /*margin: 20px*/
}

.social-img{
  width: 40px;
  height: 40px;
}

.left-home{
   width: 200px !important;
   margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-home{
   min-width: 300px;
   margin: auto;
  box-shadow: 0px 2px 18px -6px rgba(49,148,148,1);
  border-radius: 3px;

}

.my-img{
    width: 250px !important;
    height: 250px !important;
    border-radius: 7px;

}

</style>

