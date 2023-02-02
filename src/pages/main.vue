<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row">
            <div class="col fav-songs justify-content-center align-items-center d-flex">
                <div class="container text-center mt-5 ">
                    <audio controls>
                      <source :src="music" type="audio/mpeg">
                    </audio>
                </div>
                <div class="container text-center">
                    <audio controls>
                      <source :src="music" type="audio/mpeg">
                    </audio>
                </div>
                <div class="container text-center">
                    <audio controls>
                      <source :src="music" type="audio/mpeg">
                    </audio>
                </div>
                <div class="container text-center">
                    <audio controls>
                      <source :src="music" type="audio/mpeg">
                    </audio>
                </div>
                <div class="container text-center">
                    <audio controls>
                      <source :src="music" type="audio/mpeg">
                    </audio>
                </div>
            </div>
            
        </div>

        <div class=" row d-flex">
            <div class="col playlist d-flex justify-content-center align-items-center">
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt=""
                    class="">
            </div>
            <div class="col playlist d-flex justify-content-center align-items-center">
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt=""
                    class="">
            </div>
        </div>
        <div class=" row d-flex">
            <div class="col playlist d-flex justify-content-center align-items-center">
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt=""
                    class="">
            </div>
            <div class="col playlist d-flex justify-content-center align-items-center">
                <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt=""
                    class="">
            </div>
        </div>
        
        



    </div>
        

    <navbar />
</template>

<script>
 import Navbar from '../components/navbar.vue'
  
  export default {
    components: {
      Navbar
    },
    data() {
       return {
         music: require("../assets/music/Alone.mp3")
       };
     },
  };
</script>

<style scoped>
.fav-songs{
    flex-direction: column;
}

img{
    max-height: 200px;
}





</style>