<template>
  <div>
    <h1>calculator</h1>
    <input placeholder="Enter Number" type="number" v-model.number="Anum" />
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="operator"
    >
      <option selected>Select Operation</option>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">X</option>
      <option value="/">/</option>
    </select>

    <input placeholder="Enter Number" type="number" v-model.number="Bnum" />
    <button v-on:click="calc">show</button>
    <h5>={{ result }}</h5>
    <h5>history</h5>
    <div v-for="item in history" v-bind:key="item.id">
      <p>{{ item.Anum }}{{ item.operator }}{{ item.Bnum }}={{ item.result }}</p>
      <button
        type="button"
        class="btn btn-danger m-2 btn-sm"
        v-on:click="deleteHistory(item.id)"
      >
        <i class="fa fa-trash"></i>
      </button>
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
  name: "CalculatorPage",
  data() {
    return {
      Anum: 0,
      Bnum: 0,
      operator: "",
      result: "",
      history: undefined,
    };
  },

  methods: {
    calc() {
      switch (this.operator) {
        case "+":
          this.result = this.Anum + this.Bnum;
          this.postHistory();
          return this.Anum + this.Bnum;
        case "-":
          this.result = this.Anum - this.Bnum;
          this.postHistory();
          return this.Anum - this.Bnum;
        case "*":
          this.result = this.Anum * this.Bnum;
          this.postHistory();
          return this.Anum * this.Bnum;
        case "/":
          this.result = this.Anum / this.Bnum;
          this.postHistory();
          return this.Anum / this.Bnum;
      }
    },
    getHistory() {
      this.axios.get(URLS.history).then((response) => {
        console.warn(response);
        this.history = response.data;
      });
    },
    postHistory() {
      const body = {
        Anum: this.Anum,
        Bnum: this.Bnum,
        operation: this.operator,
        result: this.result,
      };
      this.axios.post(URLS.history, body).then((response) => {
        console.warn("response", response);
      });
    },
    deleteHistory(id) {
      this.axios.delete(URLS.deleteHistoryById + id).then((response) => {
        console.warn(response);
        this.getHistory();
      });
    },
    mounted() {
      this.getHistory();
    },
  },
};
</script>

<style scoped>
</style>