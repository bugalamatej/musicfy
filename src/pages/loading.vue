<template>
  <div class="bg">
    <div class="jumbotron jumbotron-fluid text-white text-center spotify-bg">
      <img
        class="logo"
        src="../assets/images/musicfy-logo-removebg-preview.png"
        alt=""
      />

    </div>
 

    <div class="loading-bar" v-if="!showNavbar"></div>

    <hr>
    <hr>
    <hr>
    <p class="text-center">This platform is using music from musicarchive.org</p>
  </div>
  <navbar v-if="showNavbar" />
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showNavbar = true;
    }, 5000);
  },
};
</script>

<style scoped>
.jumbotron {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1db954; /* Spotify Green */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white !important;
  border-radius: 0px 0px 90px 90px;
}

.spotify-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url("https://static.vecteezy.com/system/resources/previews/011/964/353/original/radial-lines-of-explosion-on-transparent-background-speed-lines-manga-frame-png.png");
}



h1 {
  font-size: 3rem;
  margin: 1rem;
}

.bounce {
  font-weight: 600;
  animation: bounce 2s ease-in-out infinite;
}

.lead {
  font-weight: 400;
}

img {
  height: auto;
  width: 100px;
  margin-top: 20px;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bg {
  background-color: black;
  height: 100vh;
  width: 100vw;
}

.loading-bar {
  margin-top: 10px;
  height: 5px;
  background-color: #1db954; /* Spotify Green */
  width: 60%;
  position: absolute;
  top: 50%;
  left: 20%;
  right: 20%;
  animation: loading 5s linear;
  border-radius: 50px;
}

@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 60%;
  }
}

navbar {
  opacity: 0;
  animation: fadein 5s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.logo {
  height: 90%;
  width: auto;
}
</style>
