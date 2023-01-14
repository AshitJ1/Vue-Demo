<template>
  <div class="axios">
    <h3>User-List</h3>
    <p>{{ msg }}</p>
    <div class="table">
      <table id="users">
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.salary}}</td>
          <td>{{item.age}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import {URLS} from '../utils/constants/urls'
Vue.use(VueAxios, axios)
export default {
  name: "UserList",
  props: {
    msg: String,
  },
  data(){
    return {
        list:undefined
    }
  },
  mounted() {
    Vue.axios
      .get(URLS.userList)
      .then((response) => {
        this.list=response.data
      });
  },
};
</script>
<style scoped>
.axios {
  background-color: red;
}
.table {
  margin: 10px;
}
#users {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#users td,
#users th {
  border: 1px solid #ddd;
  padding: 8px;
}

#users tr:nth-child(even) {
  background-color: #f2f2f2;
}

#users tr:hover {
  background-color: #ddd;
}

#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>