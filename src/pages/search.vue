<template>
  <div class="bg">
    <div class="container my-5 text-center">
      <h3 class="text-white my-5">Find a song you would like to listen</h3>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search for a song" v-model="searchTerm">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchSong">Search</button>
        </div>
      </div>
      <div v-if="selectedSong">
        <p class="text-white">{{selectedSong.title}} by {{selectedSong.artist}}</p>
        <audio :src="selectedSong.src" controls></audio>
      </div>

    </div>
    <navbar></navbar>
  </div>
</template>
  
<script>
import Navbar from '../components/navbar.vue'
export default {
  data() {
    return {
      searchTerm: "",
      songs: [
        { title: "Alone", artist: "Alan Walker", src: require("../assets/music/Alone.mp3")}
      ],
      selectedSong: null
    };
  },
  methods: {
    searchSong() {
      this.selectedSong = this.songs.find(song => song.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  components: {
    Navbar
  }
};
</script>


<style scoped>
  .bg {
    height: 100vh; 
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('../assets/images/musicfy-logo-removebg-preview.png');
    background-repeat: no-repeat;
    background-position: center;
    background-position: top;
  }

  .form-control {
    border: none;
    border-radius: 10px 0px 0px 10px;
    background-color: black;
    color: white;
    padding: 1rem;
    width: 70%;
    margin-right: -4px;
  }

  .btn {
    background-color: black;
    font-weight: 600;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: white;
    padding: 1rem;
  }

  .btn:hover {
    background-color: red;
    color: white;
  }

  h3 {
    color: white;
    font-size: 2rem;
  }

  .text-white {
    color: white;
  }

  .audio-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .song-title {
    color: white;
    font-size: 1.5rem;
    margin: 0;
  }

  .song-artist {
    color: #8b949e;
    font-size: 1rem;
    margin: 0;
  }

</style>
  

