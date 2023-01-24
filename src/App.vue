<template>
  
<div class="hha">



<Loading/>

<!-- <Login/> -->  
<!-- <Navbar/>  -->


</div>
  



</template>

<script>

import Navbar from './components/navbar.vue'
import Login from './components/login.vue'
import Loading from './pages/loading.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Login,
    Loading,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
