<template>
    <div class="bg">
      <div class="jumbotron jumbotron-fluid text-white text-center">
        
        <img
        class="logo"
        src="../assets/images/musicfy-logo-removebg-preview.png" alt="">
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
      }, 5000)
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
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
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
      background-color: black;
      height: 100vh;
      width: 100vw;
    }
  
    .loading-bar {
        margin-top: 10px;
      height: 5px;
      background-color: red;
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
        opacity: 5;
      }
    }

    .logo{
        height: 90%;
        width: auto;
    }

  </style>
  