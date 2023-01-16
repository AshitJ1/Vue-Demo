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
          <th>Actions</th>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.age }}</td>
          <td>
            <button type="button" class="btn btn-primary m-2 btn-sm">
              <i class="fa fa-eye"></i>
            </button>
            <button type="button" class="btn btn-warning m-2 btn-sm">
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger m-2 btn-sm"
              v-on:click="deleteUser(item.id)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
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
  name: "UserList",
  props: {
    msg: String,
  },
  data() {
    return {
      list: undefined,
    };
  },
  methods: {
    getUsers() {
      this.axios.get(URLS.userList).then((response) => {
        console.warn(response);
        this.list = response.data;
      });
    },
    deleteUser(id) {
      this.axios.delete(URLS.deleteUserById + id).then((response) => {
        console.warn(response);
        this.getUsers();
      });
    },
  },
  mounted() {
    this.getUsers();
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