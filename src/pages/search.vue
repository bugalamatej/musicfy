<template>
    <div>
      <div class="container my-5">
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
  
  </style>
  