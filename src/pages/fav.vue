<template>
  <div class="container-fluid bg">
    <navbar />
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="text-center mt-5">
          <h2 class="text-white">All Songs</h2>

          <p class="lead text-white">
            Explore our curated selection of songs from our database. While our collection is currently limited, we're dedicated to expanding it and bringing you even more music.
          </p>
        </div>
        <hr class="bg-white" />
        <div class="btn-group mt-3">
          <button class="btn" :class="{ 'active-btn': activeFilter === 'all' }" @click="showAllSongs">All Songs</button>
          <button class="btn" :class="{ 'active-btn': activeFilter === 'pop' }" @click="showPopSongs">Pop</button>
          <button class="btn" :class="{ 'active-btn': activeFilter === 'rock' }" @click="showRockSongs">Rock</button>
          <button class="btn" :class="{ 'active-btn': activeFilter === 'rap' }" @click="showRapSongs">Rap</button>
        </div>
        <div class="row mt-5">
          <div class="col-md-4" v-for="song in displayedSongs" :key="song.id">
            <div class="card text-start mb-3">
              <img class="card-img-top" src="../assets/images/musicfy.png">
              <div class="card-body">
                <h5 class="card-title">{{ song.interpret }}</h5>
                <p class="card-text">{{ song.nazov_skladby }}</p>
                <audio controls>
                  <source :src="song.cesta" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
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
      displayedSongs: [], // Zobrazené piesne podľa vybraného žánru
      activeFilter: 'all', // Aktívny filter na začiatku
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
          this.displayedSongs = this.songs; // Zobraziť všetky piesne na začiatku
        })
        .catch((error) => {
          console.error('Error fetching songs:', error);
        });
    },

    showAllSongs() {
      this.activeFilter = 'all';
      this.displayedSongs = this.songs;
    },

    showPopSongs() {
      this.activeFilter = 'pop';
      axios
        .get('http://127.0.0.1:8000/api/get-pop-songs')
        .then((response) => {
          this.displayedSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching pop songs:', error);
        });
    },

    showRockSongs() {
      this.activeFilter = 'rock';
      axios
        .get('http://127.0.0.1:8000/api/get-rock-songs')
        .then((response) => {
          this.displayedSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching rock songs:', error);
        });
    },

    showRapSongs() {
      this.activeFilter = 'rap';
      axios
        .get('http://127.0.0.1:8000/api/get-rap-songs')
        .then((response) => {
          this.displayedSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching rap songs:', error);
        });
    },
    
  },
};
</script>

<style  scoped>
.btn {
  background-color: black;
  border: none;
  color: white;
}

.active-btn {
  background-color: red; /* Farba aktívneho tlačidla */
}

.bg {
  background: black url("../assets/images/musicfy-logo-removebg-preview.png") no-repeat top;
  background-color: black;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 50px;
}

.card {
  background-color: #1d1d1d;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  font-size: 14px;
  margin-bottom: 0;
}

/* Styly pro audio element */
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
}

/* Media queries... */
</style>
