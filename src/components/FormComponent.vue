<template>
  <div class="register">
    <h3 style="color: black">Sign-Up Form</h3>
    <!-- <h3 v-if="erray.length==0" style="color: Green">Form Submitted Successfully!!!</h3> -->
    <div>
      <form @submit="signUp" method="post">
        <div>
          <input
            type="text"
            placeholder="enter UserName"
            value="name"
            v-model="signup.username"
          />
          <p style="color: red" v-if="erray.includes('username')">
            UserName is Required*
          </p>
          <input
            type="password"
            placeholder="enter password"
            v-model="signup.password"
          />
          <p style="color: red" v-if="erray.includes('password')">
            Password is Required*
          </p>
          <p style="color: red" v-if="erray.includes('minPassword')">
            Password length must be greater 6 Characters*
          </p>
          <p style="color: red" v-if="erray.includes('maxPassword')">
            Password must not exceed 8 Characters*
          </p>
        </div>
        <h5 style="color: black">Account type</h5>
        <p style="color: red" v-if="erray.includes('type')">
          Account Type is Required*
        </p>
        <input
          type="checkbox"
          id="personal"
          value="personal"
          v-model="signup.privleges"
        />
        <label for="personal"> Personal </label>
        <input
          type="checkbox"
          id="public"
          value="public"
          v-model="signup.privleges"
        />
        <label for="public"> Public-Figure </label>
        <input
          type="checkbox"
          id="business"
          value="business"
          v-model="signup.privleges"
        />
        <label for="business"> Business </label>
        <input
          type="checkbox"
          id="arts"
          value="arts"
          v-model="signup.privleges"
        />
        <label for="arts"> Arts & Entertainment </label>

        <h5 style="color: black">Select Gender</h5>
        <p style="color: red" v-if="erray.includes('gender')">
          Gender is Required*
        </p>
        <input type="radio" id="male" value="male" v-model="signup.gender" />
        <label for="male"> Male </label>
        <input
          type="radio"
          id="Female"
          value="Female"
          v-model="signup.gender"
        />
        <label for="Female"> Female </label>

        <h5 style="color: black">Personal Information</h5>
        <input
          type="number"
          placeholder="enter Your Salary"
          value="salary"
          v-model="signup.salary"
        />
        <p style="color: red" v-if="erray.includes('salary')">
          Salary (in Rs) is Required*
        </p>
        <input
          type="number"
          placeholder="enter Age"
          value="age"
          v-model="signup.age"
        />
        <p style="color: red" v-if="erray.includes('age')">Age is Required*</p>
        <p style="color: red" v-if="erray.includes('maxAge')">
          Age can't Exceed 60 Years*
        </p>
        <p style="color: red" v-if="erray.includes('minage')">
          You must be above 25 years for Applying*
        </p>

        <div>
          <button v-on:click="clearForm">Clear</button>
          <button v-bind:disabled="err" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { URLS } from "../utils/constants/urls";
Vue.use(VueAxios, axios);
export default {
  name: "FormComponent",
  data() {
    return {
      signup: {
        username: null,
        password: null,
        privleges: [],
        gender: null,
        salary: null,
        age: null,
      },
      erray: [],
      err: false,
      sure: false,
    };
  },
  methods: {
    addUser() {
      const body = {
        name: this.signup.username,
        salary: this.signup.salary,
        age: this.signup.age,
      };
      this.axios.post(URLS.addUser, body).then((response) => {
        console.warn("response", response);
      });
    },
    clearForm() {
      this.signup.username = "";
      this.signup.password = "";
      this.signup.privleges = "";
      this.gender.privleges = "";
      this.erray.length = 0;
    },
    signUp(e) {
      if (
        this.signup.username &&
        this.signup.password &&
        this.signup.privleges &&
        this.signup.gender &&
        this.signup.salary &&
        this.signup.age
      ) {
        this.err == false;
        alert("Are you Sure Want to Create?");
        this.addUser();
        console.log(this.signup);
        this.sure == true;
      }
      if (!this.signup.username) {
        this.err == true;
        this.erray.push("username");
      }
      if (!this.signup.password) {
        this.err == true;
        this.erray.push("password");
      }
      if (this.signup.password.length < 6) {
        this.err == true;
        this.erray.push("minPassword");
      }
      if (this.signup.password.length > 8) {
        this.err == true;
        this.erray.push("maxPassword");
      }
      if (this.signup.privleges.length == 0) {
        this.err == true;
        this.erray.push("type");
      }
      if (!this.signup.gender) {
        this.err == true;
        this.erray.push("gender");
      }
      if (!this.signup.salary) {
        this.err == true;
        this.erray.push("salary");
      }
      if (!this.signup.age) {
        this.err == true;
        this.erray.push("age");
      }
      if (this.signup.age > 60) {
        this.err == true;
        this.erray.push("maxAge");
      }
      if (this.signup.age < 25) {
        this.err == true;
        this.erray.push("minAge");
      }
      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.register {
  background-color: cyan;
  color: white;
  border: 2px black dashed;
  margin: 10px;
}
</style>