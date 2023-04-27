<template>
  <div class="bg">
    <div class="container playlist my-5">
      <div class="playlist-section p-5">
        <h1 class="text-center text-white">Playlists</h1>
        <hr class="bg-light" />
        <div class="row">
          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Pop sensations</h5>
                <button class="btn btn-primary" @click="showAlert = true">
                  Go to playlist
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Rock Hits</h5>
                <button class="btn btn-primary" @click="showAlert = true">
                  Go to playlist
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card hov m-1">
              <div class="card-body text-white">
                <h5 class="card-title">Rap</h5>
                <button class="btn btn-primary" @click="showAlert = true">
                  Go to playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="text-center mt-5 text-white">Recomended songs</h1>
      <hr class="bg-light" />
      <div class="row">
        <div class="col-md-4">
          <div class="card hov m-1">
            <div class="card-body text-white">
              <h5 class="card-title">Abunai</h5>
              <p class="card-text">Barbara Allen</p>
              <audio controls>
                <source src="../assets/music/Abunai-Barbara-Allen.mp3" />
              </audio>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card hov m-1">
            <div class="card-body text-white">
              <h5 class="card-title">Better</h5>
              <p class="card-text">Juli Rich</p>
              <audio controls>
                <source src="../assets/music/Better.mp3" />
              </audio>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card hov m-1">
            <div class="card-body text-white">
              <h5 class="card-title">Survive</h5>
              <p class="card-text">Alan Gomez</p>
              <audio controls>
                <source src="../assets/music/Survive.mp3" />
              </audio>
            </div>
          </div>
        </div>
      </div>
      <button class="moore btn">View moore</button>
    </div>
    <navbar />
    <div v-if="showAlert" class="alert-box">
      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Jahzzar <span class="ik">Haunted</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/Jahzzar-Haunted.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">
            Superrare <span class="ik">Hyperreal</span>
          </h5>
          <audio controls>
            <source
              src="../assets/music/pop/SUPERARE-Hyperreal.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
      <button
        type="button"
        class="close"
        @click="showAlert = false"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-if="showAlert2" class="alert-box">
      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Jahzzar <span class="ik">Haunted</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/Jahzzar-Haunted.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">
            Superrare <span class="ik">Hyperreal</span>
          </h5>
          <audio controls>
            <source
              src="../assets/music/pop/SUPERARE-Hyperreal.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
      <button
        type="button"
        class="close"
        @click="showAlert2 = false"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-if="showAlert3" class="alert-box">
      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Jahzzar <span class="ik">Haunted</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/Jahzzar-Haunted.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">
            Superrare <span class="ik">Hyperreal</span>
          </h5>
          <audio controls>
            <source
              src="../assets/music/pop/SUPERARE-Hyperreal.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div class="card hov m-1">
        <div class="card-body text-white">
          <h5 class="card-title">Storytime <span class="ik">AJ Super</span></h5>
          <audio controls>
            <source
              src="../assets/music/pop/AJ--Super-Storytime.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
      <button
        type="button"
        class="close"
        @click="showAlert3 = false"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
export default {
  data() {
    return {
      showAlert: false,
      showAlert2: false,
      showAlert3: false,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>

.moore{
  background-color: black;
  
}
.playlist {
  max-height: 100px;
}

.bg {
  height: 160vh;
  background-color: black;
  display: flex;
  justify-content: center;
}

.card {
  background-color: black;
  color: white;
  cursor: pointer;
}

.btn {
  background-color: black !important;
  border: none;
  color: white;
}

.btn:hover {
  background-color: red !important;
}

.add-btn {
  cursor: pointer;
  color: white;
}

.playlist-section {
  background-color: rgba(52, 51, 51, 1);
  border-radius: 30px;
}

.bi {
  color: black;
}

.alert-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.alert-box .card {
  background-color: #212529;
  max-width: 400px;
  margin: 10px;
  border: none;
  box-shadow: 0px 0px 10px #333;
}

.alert-box .card h5 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: white;
}
.ik {
  font-size: 1.3rem !important;
  color: red;
}

.alert-box .close {
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  border-radius: 30px 0px 30px 30px;
}
</style>
