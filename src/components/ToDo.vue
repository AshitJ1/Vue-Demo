<template>
  <div>
    <div class="container todo mt-5">
      <div class="row">
        <div class="col-sm">
          <div class="card" style="width: 18rem">
            <div class="card-header featured">
              <div class="input-group input-group-sm mb-1">
                <input
                  type="text"
                  placeholder="Type here..."
                  class="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  v-model="order"
                />
                <div class="input-group-prepend">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    v-on:click="addItems"
                  >
                    Add <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <p
                class="fs-6 fw-semibold"
                style="color: red"
                v-if="order.length == 0"
              >
                Required*
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title"><b>To-Dos:</b></h5>
              <div class="card-text" v-if="list.length > 0">
                <ul class="list-group">
                  <li
                    class="list-group-item"
                    v-for="item in list"
                    v-bind:key="item.id"
                  >
                    {{ item.bit }}
                    <!--extra feature in progress -->
                    <!-- <p class="text-decoration-line-through">{{ item.bit }}</p> -->
                    <!-- <button
                      type="button"
                      class="btn text-success"
                      v-on:click="strike"
                    >
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button> -->

                    <button
                      type="button"
                      class="btn text-danger"
                      v-on:click="deleteToDo(item.id)"
                    >
                      <i class="fa fa-remove" style="font-size: 20px"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="badge bg-primary text-wrap" v-else>
                Add items to View...
              </div>
            </div>
          </div>
        </div>
      </div>
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
  name: "ToDo",
  data() {
    return {
      order: "",
      list: undefined,
      // line: false,
    };
  },
  methods: {
    addItems() {
      if (this.order.length > 0) {
        this.postToDo();
      }
    },
    getToDo() {
      this.axios.get(URLS.toDo).then((response) => {
        console.warn(response);
        this.list = response.data;
      });
    },
    deleteToDo(id) {
      this.axios.delete(URLS.deleteToDoById + id).then((response) => {
        console.warn(response);
        this.getToDo();
      });
    },
    postToDo() {
      const body = {
        bit: this.order,
      };
      this.axios.post(URLS.toDo, body).then((response) => {
        console.warn("response", response);
        this.getToDo();
        this.order = "";
      });
    },
    // strike() {
    //   this.line = !this.line;
    //   console.log(this.line);
    // },
  },
  mounted() {
    this.getToDo();
  },
};
</script>
<style scoped>
.todo {
  display: flex;
  justify-content: center;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.featured {
  border: 1px solid black;
}
</style>