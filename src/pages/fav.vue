<template>
    <div class="bg">
      <div class="music-app">
        <div class="header">
          <h1>My Musicfy</h1>
          <p>Your favourite songs</p>
        </div>
        <div class="songs-list m-5 br">
          <div
            class="song"
            v-for="(song, index) in songs"
            :key="index"
            @click="playSong(song.title, song.artist, song.src)"
          >
            <p>{{ song.title }}</p>
            <p class="artist">{{ song.artist }}</p>
          </div>
        </div>
        <div class="player mb-5" v-if="showPlayer">
          <audio ref="audio" :src="playingSongSrc" controls></audio>
          <p class="now-playing">Now playing: {{ playingSong }} by {{ playingArtist }}</p>
        </div>
      </div>
      <navbar />
    </div>
  </template>
  <script>
  import Navbar from "../components/navbar.vue";
  
  export default {
    data() {
      return {
        showPlayer: false,
        playingSong: "",
        playingArtist: "",
        playingSongSrc: "",
        songs: [
          { title: "Alone", artist: "Alan Walker", src: "../assets/music/Alone.mp3" },
          { title: "Better", artist: "Unknown", src: "../assets/music/Better.mp3" },
          { title: "Survive", artist: "Unknown", src: "../assets/music/Survive.mp3" },
          { title: "Sweet", artist: "Unknown", src: "../assets/music/Sweet.mp3" },
          { title: "What Is Love", artist: "Haddaway", src: "../assets/music/What Is Love.mp3" },
          { title: "The Deep", artist: "Nick Middleton", src: "../assets/music/The Deep.mp3" },
        ],
      };
    },
    methods: {
      playSong(title, artist, src) {
        this.showPlayer = true;
        this.playingSong = title;
        this.playingArtist = artist;
        this.playingSongSrc = src;
        this.$refs.audio.play();
      },
    },
    components: {
      Navbar,
    },
  };
  </script>
  <style scoped>
  .music-app {
    background-color: black;
    color: white;
    padding: 30px;
    border-radius: 10px;
  }
  .header {
    text-align: center;
  }
  .songs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .song {
    width: 150px;
    height: 150px;
    background-color: #333;
    color: white;
    text-align: center;
    border-radius: 10px;
    margin: 10;
  }

</style>