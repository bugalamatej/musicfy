<template>
  <div class="container d-flex justify-content-center fixed-top">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <ul class="nav justify-content-center align-items-center hover">
      <svg
        @click="$router.push({ name: 'Search' })"
        :class="{ 'nav-icon': true, 'active-icon': activeIcon === 'Search' }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>

      <svg
        @click="$router.push({ name: 'Main' })"
        :class="{ 'nav-icon': true, 'active-icon': activeIcon === 'Main' }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-house-fill nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
        />
        <path
          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"
        />
      </svg>

      <button @click="$router.push({ name: 'Quiz' })">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5705/5705144.png"
          alt=""
        />
      </button>

      <svg
        @click="$router.push({ name: 'Fav' })"
        :class="{ 'nav-icon': true, 'active-icon': activeIcon === 'Fav' }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-heart-fill nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>

      <svg
        @click="$router.push({ name: 'Contact' })"
        :class="{ 'nav-icon': true, 'active-icon': activeIcon === 'Contact' }"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-telephone-fill nav-icon"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        />
      </svg>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeIcon: "", // Initialize active icon
    };
  },
  methods: {
    navigate(iconName) {
      this.$router.push({ name: iconName });
      this.activeIcon = iconName; // Set the active icon
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 3rem;
}

/* Apply red color to active icon */
.active-icon {
  color: white !important;
}

button {
  border-radius: 20px;
  border: none;
}



.nav {
  height: 80px;
  background-color: #1db954;
  width: 100%;

  border-radius: 0px 0px 50px 50px !important;
}

.nav-icon {
  height: 50%;
  width: 20%;
  color: black;
}

.nav-icon:hover {
  color: white;
  cursor: pointer;
}

.hover:hover {
  border: 1px solid #1db954;
  border-bottom: 0px !important;
}

.hover {
  border: 1px solid #1db954;
}

@media (max-width: 576px) {
  .nav {
    height: 60px;
    justify-content: space-around;
    border-radius: 0px !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .nav-icon {
    height: 1.5rem;
  }

  button {
    width: 40px;
    height: 40px;
  }
}
</style>
