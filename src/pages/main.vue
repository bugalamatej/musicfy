<template>
  <div class="bg">
    <div class="container playlist my-5">
      <div class="playlist-section p-5">
        <h1 class="text-center text-white">Playlists</h1>
        <hr class="bg-light">
        <div class="row">
          <div class="col-md-4" v-for="playlist in playlists">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">{{ playlist.name }}</h5>
                <p class="card-text">{{ playlist.description }}</p>
                <a href="#" class="btn btn-primary">Go to playlist</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container d-flex mt-3 align-items-center add-btn">
          <button class="btn btn-primary d-flex justify-content-center align-items-center">New playlist
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg m-1" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button>
          
        </div>
      </div>
      <h1 class="text-center mt-5 text-white">Last Played Songs</h1>
      <hr class="bg-light">
      <div class="row">
        <div class="col-md-4" v-for="song in lastPlayedSongs">
          <div class="card hov m-1">
            <div class="card-body text-white">
              <h5 class="card-title">{{ song.title }}</h5>
              <p class="card-text">{{ song.artist }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <navbar />
  </div>
</template>

<script>
  import Navbar from '../components/navbar.vue'
export default {
  data() {
    return {
      playlists: [
        { name: "Rock Hits"},
        { name: "Pop Sensations"},
        { name: "Rap Royalty"}
      ],
      lastPlayedSongs: [
        { title: "Smells Like Teen Spirit", artist: "Nirvana" },
        { title: "Billie Jean", artist: "Michael Jackson" },
        { title: "I Want it That Way", artist: "Backstreet Boys" }
      ]
    };
  },
  components: {
      Navbar
    }
};
</script>

Sure, here is your updated style block:

<style scoped>
.playlist{
  max-height: 100px;
}

.bg {
  height: 160vh; 
  background-color: black;
  display: flex;
  justify-content: center;
}

.card{
  background-color: black;
  color: white;
  cursor: pointer;
}


.btn{
  background-color: black !important;
  border: none;
  color: white;
}

.btn:hover{
  background-color: red !important;
}

.add-btn{
  cursor: pointer;
  color: white;
}

.playlist-section{
  background-color:rgba(52, 51, 51, 1);
  border-radius: 30px;
}

.bi{
  color: black;
}
</style>