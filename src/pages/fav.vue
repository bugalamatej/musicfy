<template>
    <div class="bg">
        <div class="music-app">
            <div class="header">
              <h1>My Musicfy</h1>
              <p>Your favourite songs</p>
            </div>
            <div class="songs-list m-5 br">
                <div class="song" @click="playSong('Alone')">
                    <p>Alone</p>
                    <p class="artist">Alan Walker</p>
                  </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
              <div class="song" @click="playSong('Alone')">
                <p>Alone</p>
                <p class="artist">Alan Walker</p>
              </div>
            </div>
            <div class="player mb-5" v-if="showPlayer">
              <audio ref="audio" :src="'../assets/music/Alone.mp3' + playingSong + '.mp3'" controls></audio>
              <p class="now-playing">Now playing: {{ playingSong }} by {{ playingArtist }}</p>
            </div>
          </div>
          <navbar/>
    </div>
</template>
  
  <script>
  import Navbar from '../components/navbar.vue'
  export default {
    data() {
      return {
        showPlayer: false,
        playingSong: '',
        playingArtist: ''
      }
    },
    methods: {
      playSong(song) {
        this.showPlayer = true
        this.playingSong = song
        this.playingArtist = 'Alan Walker'
        this.$refs.audio.play()
      }
    },
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped>
  .music-app {
    background-color: black;
    color: #fff;
    padding: 20px;
  }
  
  .header {
    text-align: center;
  }
  
  .header h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .header p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .songs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .song {
    background-color: #444;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
  }
  
  .artist {
    font-size: 0.8rem;
    color: #bbb;
  }
  
  .player {
    background-color: #444;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  audio {
    width: 70%;
  }
  
  .now-playing {
    font-size: 1.2rem;
    margin-top: 10px;
  }


  .bg {
    height: 150vh; 
    background-color: black;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .br{
    border-bottom: 1px solid grey;
    border-radius: 5px;
  }
  </style>
  