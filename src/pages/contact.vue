<template>
  <div class="bg">
    <h2 class="text-center font-weight-bold heading">Contact Us</h2>
    
    <p class="text-center p">
      If you have any questions or want to tell us something.
      <span class="bold">Do not hesitate to contact us</span>
    </p>
    
    <form @submit.prevent="submitForm" class="form-container">
      <label>
        <p class="form-label">Your email:</p>
        <input v-model="formData.email" type="email" name="email" class="form-input" placeholder="Your email">
      </label>
      <label>
        <p class="form-label">Your message:</p>
        <textarea v-model="formData.message" name="message" class="form-textarea" placeholder="Your message"></textarea>
      </label>
      <button :disabled="messageSent" type="submit" class="form-button">Send</button>
      <div v-if="messageSent" class="text-center">
        <div class="card border-danger">
          <img class="card-img-top"  alt="">
          <div class="card-body">
            <h4 class="card-title danger">Your message</h4>
            <p class="card-text danger">has beeen sent</p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <navbar />
</template>

<script>
import axios from "axios"; // Import Axios library
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      formData: {
        email: "",
        message: "",
      },
      messageSent: false,
    };
  },
  methods: {
    async submitForm() {
      if (this.messageSent) {
        return;
      }


      if (!this.isValidEmail(this.formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      try {
        const response = await axios.post("https://formspree.io/f/xeqwgyla", this.formData);
        if (response.status === 200) {
     
          this.messageSent = true;
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    isValidEmail(email) {
 
      return /\S+@\S+\.\S+/.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>


  .bg {
    background: linear-gradient(
      to bottom,
      rgba(29, 185, 84, 0.9),
      rgba(29, 185, 84, 1)
    ); 
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 180vh;
    padding-top: 50px;
  }

  .p {
    color: white;
  }

  .heading {
    font-size: 48px;
    font-weight: bold;
    color: white;
    margin-top: 50px;
  }

  .text-muted {
    font-size: 18px;
    color: #ccc;
  }

  .bold {
    font-weight: bold;
  }

  .form-container {
    justify-content: center !important;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin-top: 50px;
    padding: 40px;
    width: 80%;
    text-align: center;
    background-color: white; 

    @media (max-width: 576px) {
      width: 90%;
      padding: 20px;
    }
  }

  .form-label {
    font-size: 20px;
    font-weight: bold;
    color: #1db954; 
    margin-bottom: 10px;
  }

  .form-input,
  .form-textarea {
    display: block;
    margin: 10px 0;
    padding: 15px;
    font-size: 16px;
    color: #202124; 
    background-color: #f5f5f5; 
    border: none;
    border-radius: 5px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    &:focus {
      outline: none;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    &::placeholder {
      color: #ccc;
    }
  }

  .form-textarea {
    resize: none;
    height: 150px;
  }

  .form-button {
    display: block;
    margin-top: 20px;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #1db954; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #1aa34a; 
    }
  }

  .card {
    margin-bottom: 30px !important;
  }
</style>
