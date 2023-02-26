<template>
  <div class="bg">
    <h2 class="text-center font-weight-bold heading">Contact Us</h2>
    <p class="text-center text-muted">If you have any questions or want to tell us something. <span class="bold"> Do not hesitate to contact us</span></p>
    <form
      action="https://formspree.io/f/xeqwgyla"
      method="POST"
      class="form-container"
    >
      <label>
        Your email:
        <input type="email" name="email" class="form-input">
      </label>
      <label>
        Your message:
        <textarea name="message" class="form-textarea"></textarea>
      </label>
      <!-- your other form fields go here -->
      <button type="submit" class="form-button">Send</button>
    </form>
    <div class="card my-5 m-5">
      <div class="card-body">
        <p class="text-center font-weight-bold if">If you want to contact me directly, here is my email:</p>
        <h4 class="text-center">mbugala@gmail.com</h4>
      </div>
    </div>
  </div>
  <navbar />
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>

h2{
  color: red !important;
}
.bg {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.heading {
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-top: 50px;
}

.text-muted {
  font-size: 18px;
  color: #666;
}

.bold {
  font-weight: bold;
  color: #333;
}

.form-container {
  justify-content: center !important;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 10px red;
  margin-top: 50px;
  padding: 40px;
  width: 80%;
  text-align: center;
}

.form-input,
.form-textarea {
  display: block;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  background-color: red;
 color: #666;
  border: none;
  border-radius: 5px;
  width: 100%;
}

.form-input:focus-visible{
  outline-color:red ;
}



.form-button {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  width: 56%;
  border: 1px solid red ;
  display: flex;
  justify-content: center;
}

.form-button:hover {
  background-color: red ;
}



.card {
  max-width: 600px;
  margin-bottom: 100px !important;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: red;
  padding: 20px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}

h4 {
  font-size: 22px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.if{
  font-weight: 700;
}

</style>
