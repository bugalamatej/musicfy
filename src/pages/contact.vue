<template>
  <div class="bg">
    <h2 class="text-center font-weight-bold heading">Contact Us</h2>
    <p class="text-center p">
      If you have any questions or want to tell us something. <span class="bold">Do not hesitate to contact us</span>
    </p>
    <form action="https://formspree.io/f/xeqwgyla" method="POST" class="form-container">
      <label>
        <p class="form-label">Your email:</p>
        <input type="email" name="email" class="form-input" placeholder="Your email">
      </label>
      <label>
        <p class="form-label">Your message:</p>
        <textarea name="message" class="form-textarea" placeholder="Your message"></textarea>
      </label>
      <button type="submit" class="form-button">Send</button>
    </form>
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
  $primary-color: red;
  $secondary-color: #202124;
  $form-bg-color: #f5f5f5;

  .bg {
   background: linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8)),;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 180vh;
  }

  .form-button :hover{
    color:black !important;
    background-color: red !important;
  }

  
  .p{
    color: white;
  }

  .heading {
    font-size: 48px;
    font-weight: bold;
    color: $form-bg-color;
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
    background-color: $form-bg-color;

    @media (max-width: 576px) {
      width: 90%;
      padding: 20px;
    }
  }

  .form-label {
    font-size: 20px;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: 10px;
  }

  .form-input,
  .form-textarea {
    display: block;
    margin: 10px 0;
    padding: 15px;
    font-size: 16px;
    color: $secondary-color;
    background-color: #fff;
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

.form-submit-btn {
display: block;
margin-top: 20px;
padding: 15px;
font-size: 18px;
font-weight: bold;
color: #fff;
background-color: $primary-color;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
&:hover {
  background-color: darken($primary-color, 10%);
}
}

.card{
  margin-bottom: 30px !important;
}
</style>