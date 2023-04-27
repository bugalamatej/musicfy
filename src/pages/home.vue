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
  
  audio::-webkit-media-controls-panel {
    background-color: #0d1117;
    border: none;
  }

  audio::-webkit-media-controls-play-button {
    color: #fff;
    background-color: #161b22;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    margin-right: 10px;
    transition: background-color 0.2s ease-in-out;
  }

  audio::-webkit-media-controls-play-button:hover {
    background-color: #1f6feb;
  }

  audio::-webkit-media-controls-time-remaining-display,
  audio::-webkit-media-controls-current-time-display {
    color: #fff;
    font-size: 14px;
  }

  audio::-webkit-media-controls-volume-slider-container {
    width: 100px;
    height: 10px;
    margin-left: 10px;
  }

  audio::-webkit-media-controls-volume-slider {
    height: 10px;
    background-color: #0d1117;
    border-radius: 5px;
  }

  audio::-webkit-media-controls-volume-slider::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }

  .audio-player {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

}

</style>