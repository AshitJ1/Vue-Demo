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
                  <button type="button" class="btn btn-primary btn-sm">
                    Add <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">To-Dos:</h5>
              <div class="card-text">
                <ul class="list-group">
                  <li class="list-group-item">
                    Cras justo odio
                    <button type="button" class="btn btn-link">
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button>
                  </li>
                  <li class="list-group-item">
                    Dapibus ac facilisis in
                    <button type="button" class="btn btn-link">
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button>
                  </li>
                  <li class="list-group-item">
                    Morbi leo risus
                    <button type="button" class="btn btn-link">
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button>
                  </li>
                  <li class="list-group-item">
                    Porta ac consectetur ac
                    <button type="button" class="btn btn-link">
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button>
                  </li>
                  <li class="list-group-item">
                    Vestibulum at eros
                    <button type="button" class="btn btn-link">
                      <i class="fa fa-check" style="font-size: 20px"></i>
                    </button>
                  </li>
                </ul>
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
Vue.use(VueAxios, axios);
export default {
  name: "ToDo",
  data() {
    return {
      order: "",
    };
  },
  methods: {
    mounted() {
      Vue.axios.get('http://localhost:3004/todo')
      .then(resp=>{
        console.warn(resp.data.data);
      })
    },
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