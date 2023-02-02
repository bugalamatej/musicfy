<template>

 <div class="container d-flex justify-content-center fixed-bottom">
  <ul class="nav justify-content-center align-items-center">

    <svg @click="$router.push({ name: 'Search' })" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
      class="bi bi-search nav-icon " viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  

    <svg @click="$router.push({ name: 'Main' })" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
      class="bi bi-house-fill nav-icon " viewBox="0 0 16 16">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
    </svg>

    

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
      class="bi bi-heart-fill nav-icon " viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
      class="bi bi-person-fill nav-icon " viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    </svg>

  </ul>
 </div>

</template>
  
  <script>
  export default {
    name: 'Navbar',
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
    .nav{
      height: 80px;
      background-color: black;
      width: 100%;
      
      border-radius: 50px 50px 0px 0px !important; 
    }

  
    .nav-icon{
      height: 50%;
      width: 20%;
    }

    .nav-icon:hover{
      color: red;
      cursor: pointer;
    }


  </style>
  