<template>
<div class="container-fluid bg">
  <div class="margin container d-flex">
    <navbar />
    <h1 class="text-center">Find a song you would like to listen</h1>
    <div class="search-bar">
      <input v-model="searchTerm" @input="filterSongs" placeholder="Search for a song or artist">
      <button class="search" @click="applyFilter">Search</button>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="song in filteredSongs" :key="song.id">
        <div class="card text-start mb-3">
          <img class="card-img-top" src="../assets/images/musicfy-logo-removebg-preview.png">
          <div class="card-body">
            <h5 class="card-title">{{ song.interpret }}</h5>
            <p class="card-text">{{ song.nazov_skladby }}</p>
            <audio controls>
              <source :src="song.cesta" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
      <div v-if="filteredSongs.length === 0" class="col-12">
        <p>No songs found.</p>
      </div>  
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      songs: [],
      searchTerm: '',
      filteredSongs: [],
    };
  },
  created() {
    this.getAllSongs();
  },
  methods: {
    getAllSongs() {
      axios
        .get('http://127.0.0.1:8000/api/get-all-songs')
        .then((response) => {
          this.songs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching songs:', error);
        });
    },
    filterSongs() {
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      this.filteredSongs = this.songs.filter((song) => {
        return (
          song.interpret.toLowerCase().includes(searchTermLowerCase) ||
          song.nazov_skladby.toLowerCase().includes(searchTermLowerCase)
        );
      });
    },
    applyFilter() {
      this.filterSongs();
    },
  },
};
</script>


<style scoped>

.bg {
  background: black url("../assets/images/musicfy-logo-removebg-preview.png") no-repeat top;
  background-color: black;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 50px;
  min-height: 110vh;
}


  li::marker {
    display: none !important;
    color: #1ed760;
  }

  .search {
    border-radius: 10px 30px 30px 10px !important;
  }

body{
  background-color: black !important;
}

  h1 {
    color: white;
  }

  input {
    border-radius: 30px 10px 10px 30px;
    border: none;
    padding: 8px;
  }

  .card {
    background-color: #1ed760;
    margin: 30px;
    transition: transform 0.2s ease; /* Added transition property for card scaling */
  }

  .card:hover {
    transform: scale(1.1); /* Scale up the card when hovered */
  }

  .card-img-top {
    height: 100px;
    width: 110px;
    display: flex;
    justify-content: center;
  }

  .container {
    flex-direction: column;
    justify-content: center !important;
  }

  .margin {
    margin-top: 100px;
    
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  .search-bar input {
    flex: 1;
    margin-right: 10px;
  }

  .search-bar button {
    padding: 8px 16px;
    background-color: #1ed760;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

//velke skladby prehravanie