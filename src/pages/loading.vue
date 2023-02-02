<template>
    <div class="bg">
      <div class="jumbotron jumbotron-fluid text-white text-center">
        <h1 class="display-4 animated bounce delay-2s">Musicfy</h1>
        <p class="lead">Stream your favorite tunes anytime, anywhere.</p>
        <img src="https://awc.edu/wp-content/uploads/2015/09/music-note-icon.png" alt="">
      </div>
      <div class="loading-bar" v-if="!showNavbar"></div>
    </div>
    <navbar v-if="showNavbar" />
  </template>
  
  <script>
  import Navbar from '../components/navbar.vue'
  
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        showNavbar: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.showNavbar = true
      }, 10000)
    }
  };
  </script>
  
  <style scoped>
    .jumbotron {
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: red;
      color: black !important;
      border-radius: 0px 0px 90px 90px;
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
      background-color: rgba(44, 44, 44, 1);
      height: 100vh;
      width: 100vw;
    }
  
    .loading-bar {
      height: 5px;
      background-color: black;
      width: 60%;
      position: absolute;
      top: 50%;
      left: 20%;
      right: 20%;
      animation: loading 10s linear;
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
        opacity: 5;
      }
    }
  </style>
  