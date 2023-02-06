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
        <audio v-if="selectedSong" :src="selectedSong" controls></audio>
      </div>
    </div>
    <navbar />
  </template>
  <script>
  import Navbar from '../components/navbar.vue'
  export default {
    data() {
      return {
        searchTerm: "",
        songs: [
          { title: "Alone", src: require("../assets/music/Alone.mp3") }
        ],
        selectedSong: null
      };
    },
    methods: {
      searchSong() {
        this.selectedSong = this.songs.find(song => song.title.toLowerCase().includes(this.searchTerm.toLowerCase())).src;
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
  }
  .form-control{
    border: none;
    border-radius: 10px 0px 0px 10px  !important;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 1rem;
  }
  .btn{
    background-color: black;
    font-weight: 600;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: white;
    padding: 1rem;
  }

  h3{
    color: white;
  }
</style>