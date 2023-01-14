<template>
  <div class="users container">
    <!-- loops in vue -->
    <h3>loop in vue</h3>
    <table border-collapse=" collapse" width=" 100%">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Mail</th>
      </tr>
      <tr v-for="useri in users" :key="useri.id">
        <td>{{ useri.id }}</td>
        <td>{{ useri.name }}</td>
        <td>{{ useri.email }}</td>
      </tr>
    </table>
    <div class="nest">
      <h5>DataBind Component</h5>
      <DataBind class="users" v-bind:psusers="users" />
    </div>
  </div>
</template>
<script>
import DataBind from "./DataBind.vue";
export default {
  name: "LoopPage",
  components: {
    DataBind,
  },
  data() {
    return {
      users: [
        { id: 1, name: "peter", email: "peter@tst.com" },
        { id: 2, name: "paul", email: "paul@tst.com" },
        { id: 3, name: "alen", email: "alen@tst.com" },
        { id: 4, name: "sam", email: "sam@tst.com" },
        { id: 5, name: "john", email: "john@tst.com" },
      ],
    };
  },
};
</script>
<style scoped>
.users {
  background-color: rgb(233, 244, 187);
}
.nest {
  border: 2px solid;
}
</style>