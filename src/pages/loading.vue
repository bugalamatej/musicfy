<template>

 <div class="container-fluid background">
    <img src="https://media2.giphy.com/media/93ftaGQwuPfzwdIDuS/giphy.gif" 
    class="carti"
    alt="">
    <div class="progress">
        <div class="progress-bar fill-5" role="progressbar"
            style="width: 30%" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100">
        </div>
    </div>
 </div>
   
</template>
     
     <script>
     export default {
       name: 'Loading',
     
     }
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
     <style lang="scss" scoped>
     .background{
        background-image: url("https://bestanimations.com/media/storms/533684316animated-lighning-bolt-strike-storm-gif-1.gif");
        height: 2000px;
        overflow-x: hidden;
        .carti{
            height: 200px !important;
        }
      }

      html{
        margin: 0px !important;
      }

      .fill-5 {
        animation: fill 5s linear 1;
    }
    @keyframes fill {
        0% {
            width: 0%;
        }
    
        100% {
            width: 100%;
        }
    }
    .progress {
        --bs-progress-height: 1rem;
        --bs-progress-font-size: 0.75rem;
        --bs-progress-bg: #e9ecef;
        --bs-progress-border-radius: 0.375rem;
        --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
        --bs-progress-bar-color: #fff;
        --bs-progress-bar-bg: #0d6efd;
        --bs-progress-bar-transition: width 0.6s ease;
        display: flex;
        height: var(--bs-progress-height);
        overflow: hidden;
        font-size: var(--bs-progress-font-size);
        background-color: var(--bs-progress-bg);
        border-radius: var(--bs-progress-border-radius);
    }
    .progress-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        color: var(--bs-progress-bar-color);
        text-align: center;
        white-space: nowrap;
        background-color: var(--bs-progress-bar-bg);
        transition: var(--bs-progress-bar-transition);
    }
     </style>
     