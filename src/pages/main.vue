<template>
  
 
<div class=" pt-5  d-flex justify-content-center main">
    <div class="row bg pt-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbB4z65X3Yw2X5HGFmUhfOuZyhJUgaQuH5jg&usqp=CAU"

        alt="">

        <div class="info row d-flex justify-content-around mt-4 mb-4 ">
            <div class="col-6 song">
                <p class="bold">Bad guy</p>
                <p> Billie Eilish</p> 
            </div>

            <div class="col-6 song-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
            </div>
        </div>
        <div class="progress mt-2 mb-4">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>


 
        <div class="container play pb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
              </svg>

            <div class="p-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pause-fill pause" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                </svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-skip-forward-fill" viewBox="0 0 16 16">
                <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/>
              </svg>
        </div>

        
        <Navbar/>
    </div>
    
</div>
    
</template>
    
    <script>
   
   import Navbar from '../components/navbar.vue'
    
    export default {
      name: 'App',
      components: {
        Navbar,
   
  
      }
    }
    </script>
    
    <style scoped>
        .bg img{
            max-width: 500px;
            height: auto;
            border-radius: 35px;
            height: fit-content;
        }

        .info{
            max-width: 500px;
           
        }

        .bg{
         
            background-color: red;
            width: 50%;
            min-width: 360px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        
        .song{
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0px !important;
        }

        .song-icon{
            display: flex;
            justify-content: end;
            align-items: center;
        }

        .progress{
            max-width: 70%;
            height: 5px;
            color: black;
            background-color: black ;
        }
        
        .play{
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
        }

        .bold{
            font-size: 25px;
            font-weight: 700;
        }
        

        .pause{
            color: red;
        }

        .p-bg{
            background-color: black;
            border-radius: 50px;
            margin: 3px;
            padding: 10px;
        }

        .main{
            background-image: url("https://data.whicdn.com/images/269137684/original.gif");
            background-repeat: no-repeat;
            background-size: cover;
            max-height: 5000px;
            
        }
    </style>
    