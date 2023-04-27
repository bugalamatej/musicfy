<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="text-center mt-5">
          <h2 class="text-white">New Music</h2>
          <p class="lead text-white">
            Discover the latest and greatest new songs to hit the airwaves.
          </p>
        </div>
        <hr class="bg-white" />
        <div class="row mt-5">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">The Deep</h5>
                <p class="card-text text-muted">Juan Ortiez</p>
                <audio controls>
                  <source src="../assets/music/The-Deep.mp3" />
                </audio>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">The black fuzz</h5>
                <p class="card-text text-muted">Matte</p>
                <audio controls>
                  <source src="../assets/music/Matte--Black-Fuzz.mp3" />
                </audio>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">Choie mettle</h5>
                <p class="card-text text-muted">Pipe</p>
                <audio controls>
                  <source src="../assets/music/Abunai-Barbara-Allen.mp3" />
                </audio>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">Red</h5>
                <p class="card-text text-muted">Big John</p>
                <audio controls>
                  <source src="../assets/music/Abunai-Barbara-Allen.mp3" />
                </audio>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">Snow</h5>
                <p class="card-text text-muted">Lia Fox</p>
                <audio controls>
                  <source src="../assets/music/Abunai-Barbara-Allen.mp3" />
                </audio>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title text-white mb-0">Amelia</h5>
                <p class="card-text text-muted">OK Crew</p>
                <audio controls>
                  <source src="../assets/music/Abunai-Barbara-Allen.mp3" />
                </audio>
              </div>
            </div>
          </div>
        </div>
        <button class="btn">View moore</button>
      </div>
    </div>
    <navbar />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.btn {
  background-color: black !important;
  border: none;
  color: white;
}

.btn:hover {
  background-color: red !important;
}

.bg {
  background-color: black;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 50px;
  padding-bottom: 400px;
}

p {
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 30px;
}

.logo {
  max-width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
}

.new {
  text-align: center;
  margin-bottom: 50px;
}

.songs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.card-body {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.card-body:hover {
  background-color: #333333;
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-text {
  margin-bottom: 0;
}

audio {
  margin-top: 10px;
  width: 100%;
}

.navbar {
  position: sticky;
}

.bg {
  background: black,
    url("../assets/images/musicfy-logo-removebg-preview.png");
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
  color: #fff;
  background-blend-mode: lighten;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-text {
  font-size: 18px;
  margin-bottom: 0;
}

audio {
  display: block;
  width: 100%;
  margin-top: 20px;
}

h2 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 20px;
}

hr {
  border-top: 2px solid #fff;
  margin-top: 40px;
  margin-bottom: 40px;
}

.col-md-6 {
  padding-right: 15px;
  padding-left: 15px;
}

.col-lg-4 {
  padding-right: 15px;
  padding-left: 15px;
}

@media (max-width: 767.98px) {
  h2 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  .card-title {
    font-size: 20px;
  }

  .card-text {
    font-size: 16px;
  }
}
</style>
