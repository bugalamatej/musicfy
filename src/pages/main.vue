<template>
<div class="container-fluid bg">
  <div class="container main">
    <div class="container playlist my-5">
      <div class="playlist-section p-5">
        <h1 class="text-center text-white ">Playlists</h1>
        <p class="text-center text-white">Your Soundtrack, Your Way. </p>
        <hr class="bg-light" />
        <div class="row">
          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Pop sensations</h5>
                <button href="#pop"  class="btn btn-primary" @click="showAlert = true ">
                  Go to playlist
                </button>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/1754/1754169.png" class="plogo" alt="">
            </div>
          </div>


          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Rock Hits</h5>
                <button class="btn btn-primary" @click="showAlert2 = true">
                  Go to playlist
                </button>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/599/599904.png" class="plogo" alt="">
            </div>
          </div>


          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Rap</h5>
                <button class="btn btn-primary" @click="showAlert3 = true">
                  Go to playlist
                </button>
              </div>
              <img src="https://cdn0.iconfinder.com/data/icons/urban-tribes-people/110/Rapper-2-512.png"
                class="plogo" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <navbar />
    <div v-if="showAlert"  class="alert-box overlay">
      <div class="container">
        <button type="button" class="close" @click="showAlert = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
        <div class="row">
          <div class="col-md-4" v-for="song in popSongs" :key="song.id">
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
        <button type="button" class="close" @click="showAlert = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
      </div>
    </div>

    <div v-if="showAlert2" class="alert-box overlay">
      <div class="container">
        <button type="button" class="close" @click="showAlert2 = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
        <div class="row">
          <div class="col-md-4" v-for="song in rockSongs" :key="song.id">
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
        <button type="button" class="close" @click="showAlert2 = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
      </div>
    </div>

    <div v-if="showAlert3" class="alert-box overlay">
      <div class="container">
        <button type="button" class="close" @click="showAlert3 = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
        <div class="row">
          <div class="col-md-4" v-for="song in rapSongs" :key="song.id">
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
        <button type="button" class="close" @click="showAlert3 = false" aria-label="Close">
          <span aria-hidden="true">Close</span>
        </button>
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
      showAlert: false,
      showAlert2: false,
      showAlert3: false,
      rapSongs: [],
      popSongs: [],
      rockSongs: [],
    };
  },
  created() {
    this.getRapSongs();
    this.getPopSongs();
    this.getRockSongs();
  },
  methods: {
    getRapSongs() {
      axios
        .get('http://127.0.0.1:8000/api/get-rap-songs')
        .then((response) => {
          this.rapSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching rap songs:', error);
        });
    },

    getPopSongs() {
      axios
        .get('http://127.0.0.1:8000/api/get-pop-songs')
        .then((response) => {
          this.popSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching pop songs:', error);
        });
    },

    getRockSongs() {
      axios
        .get('http://127.0.0.1:8000/api/get-rock-songs')
        .then((response) => {
          this.rockSongs = response.data;
        })
        .catch((error) => {
          console.error('Error fetching rock songs:', error);
        });
    },

    scrollIntoView(event) {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        const el = href ? document.querySelector(href) : null
        if (el) {
          this.$refs.content.scrollTop = el.offsetTop
        }
      }





  },
};
</script>

<style scoped>

.overlay {
  position: absolute;
  padding-top: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000; /* Z-index zabezpečuje, že prekrytie bude na vrchu */
}

.close-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 24px;
  z-index: 1001; /* Z-index zabezpečuje, že tlačidlo zavretia bude na vrchu prekrytia */
}




.bg {
  background: black;
  background-color: black;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 50px;
  min-height: 500vh;
}
.main {
  margin-top: 110px;
  background-color: black;
}


.card{
  background-color: #1ed760;
  border: none;
}

.close{
border-radius: 30px;
background-color: red;
color: black;
padding: 10px;
margin: 5px;
border: none;
font-weight: bold;

}


select{
  border-radius: 30px !important;
}
.close:hover{
  background-color: white;
}
</style>
