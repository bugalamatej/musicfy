<template>
  <div>    
    <router-view />
  </div>
</template>

  
<style lang="scss">
*{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.hov:hover{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}


*{
  
  h1{
    color: black;
  }
  
  audio {
    width: 100%;
    margin-top: 10px;
  }
  
  /* Barva progress baru a tlačítek audio přehrávače */
  audio::-webkit-media-controls-progress-bar {
    background-color: #1d1d1d;
  }
  
  audio::-webkit-media-controls-play-button,
  audio::-webkit-media-controls-pause-button {
    background-color: #1ed760;
    border-radius: 20px ;
  }



  

}

</style>