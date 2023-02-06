<template>
 <div class="bg" style="height: 150vh;">
    <div class="container my-5">
        <h2 class="text-center font-weight-bold heading">Contact Us</h2>
        <p class="text-center text-muted">If you have any questions or want to tell us something. <span class="bold"> Do not hesitate to contact us</span></p>
        <form class="form my-5">
          <div class="form-group">
            <label for="email" class="font-weight-bold">Email</label>
            <input
              v-model="form.email"
              class="form-control border-0"
              required
            />
          </div>
          <div class="form-group">
            <label for="message" class="font-weight-bold">Message</label>
            <textarea
              v-model="form.message"
              class="form-control border-0"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block py-2">
            Submit
          </button>
        </form>
      </div>
      <div class="card my-5 m-5">
        <div class="card-body">
          <p class="text-center font-weight-bold">If you want to contact me directly, here is my email:</p>
          <h4 class="text-center">mbugala@gmail.com</h4>
        </div>
      </div>

      <navbar/>
 </div>
  </template>
  <script>
   import Navbar from '../components/navbar.vue'
  export default {
    data() {
      return {
        form: {
          email: "",
          message: ""
        }
      };
    },
    components: {
      Navbar
    }
  };
  </script>
  <style scoped>
  .form {
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
  }
label {
font-size: 16px;
}

input,
textarea {
font-size: 14px;
height: 50px;
border-radius: 10px;
margin-bottom: 20px;
padding: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
font-size: 18px;
font-weight: bold;
border-radius: 10px;
margin-top: 20px;
padding: 15px 30px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.bg{
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
}

.bold{
    font-weight: bold;
}

.card {
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  p {
    font-size: 16px;
  }
  
  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  .btn-primary{
    background-color: black;
    border: none;
  }

  .heading{
    color: white;
  }
</style>