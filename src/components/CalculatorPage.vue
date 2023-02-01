<template>
  <div>
    <div class="container cal">
      <div class="row">
        <div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-header featured">
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <h4>
                      {{ Anum }}
                      {{ operator }}
                      {{ Bnum }}
                      =
                      {{ result }}
                    </h4>
                    <button
                      type="button"
                      class="btn btn-link his"
                      v-on:click="his"
                    >
                      <i class="fa fa-history"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-body">
              <h5 class="card-title"><b>Calculator</b></h5>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    v-if="operator === '%'"
                    >Percent</span
                  >
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    v-else
                    >1st Input</span
                  >
                </div>
                <input
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Enter Number"
                  type="number"
                  v-model.number="Anum"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Operation</label
                  >
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  v-model="operator"
                >
                  <option value="." selected>Choose...</option>
                  <option value="+">Addition (+)</option>
                  <option value="-">Substraction (-)</option>
                  <option value="*">Multiplication (*)</option>
                  <option value="/">Division (/)</option>
                  <option value="%">Percentage (%)</option>
                </select>
              </div>

              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    v-if="operator === '%'"
                    >Total</span
                  >
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    v-else
                    >2nd Input</span
                  >
                </div>
                <input
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Enter Number"
                  type="number"
                  v-model.number="Bnum"
                />
              </div>

              <div class="container mb-2">
                <div class="row">
                  <div class="col-sm">
                    <button class="btn btn-danger" v-on:click="clear">
                      AC <i class="fa fa-remove"></i>
                    </button>
                  </div>
                  <div class="col-sm">
                    <button class="btn btn-primary" v-on:click="calc">
                      Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--History UI block in progress -->
    <div v-for="item in history" v-bind:key="item.id">
      <h4>history</h4>
      <p>
        {{ item.Anum }}{{ item.operation }}{{ item.Bnum }}={{ item.result }}
      </p>
      <button
        type="button"
        class="btn btn-danger m-2 btn-sm"
        v-on:click="deleteHistory(item.id)"
      >
        <i class="fa fa-trash"></i>
      </button>
    </div>
    <!-- History UI -->
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
      operator: ".",
      result: "0",
      history: undefined,
      showHistory: false,
    };
  },

  mounted() {
    this.getHistory();
  },

  methods: {
     calc() {
        switch (this.operator) {
          case "+":
            this.result = this.Anum + this.Bnum;
            this.postHistory();
            this.getHistory();
            return this.Anum + this.Bnum;
          case "-":
            this.result = this.Anum - this.Bnum;
            this.postHistory();
            this.getHistory();
            return this.Anum - this.Bnum;
          case "*":
            this.result = this.Anum * this.Bnum;
            this.postHistory();
            this.getHistory();
            return this.Anum * this.Bnum;
          case "/":
            this.result = this.Anum / this.Bnum;
            this.postHistory();
            this.getHistory();
            return this.Anum / this.Bnum;
          case "%":
            this.result = (this.Anum / 100) * this.Bnum;
            this.postHistory();
            this.getHistory();
            return (this.Anum / 100) * this.Bnum;
        }
      }
    },
    clear() {
      (this.Anum = 0), (this.Bnum = 0), (this.operator = ".");
      this.result = 0;
    },
    his() {
      this.showHistory = !this.showHistory;
      console.log(this.showHistory);
    },
    async getHistory() {
      try {
        await this.axios.get(URLS.history).then((response) => {
          console.warn(response);
          this.history = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
    async postHistory() {
      try {
        const body = {
          Anum: this.Anum,
          Bnum: this.Bnum,
          operation: this.operator,
          result: this.result,
        };
        await this.axios.post(URLS.history, body).then((response) => {
          console.warn("response", response);
        });
      } catch (err) {
        console.log(err);
      }
    },
    async deleteHistory(id) {
      try {
        await this.axios
          .delete(URLS.deleteHistoryById + id)
          .then((response) => {
            console.warn(response);
            this.getHistory();
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.cal {
  display: flex;
  justify-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.featured {
  background-color: rgb(214, 214, 214);
  border: 1px solid black;
}
.his {
  float: right;
}
</style>