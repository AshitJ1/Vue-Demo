<template>
  <div class="bind">
    <h3>Data-Binding in Vue Js</h3>
    <!-- one-way Data-Binding -->
    <h3 style="white-space: pre-line">{{ message }}</h3>
    <textarea type="text" v-model="message" />
    <!-- two-way Data-Binding -->
    <h3>{{ psinfo }}</h3>
    <table border-collapse=" collapse" width=" 100%">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Mail</th>
      </tr>
      <tr v-for="useri in psusers" :key="useri.id">
        <td>{{ useri.id }}</td>
        <td>{{ useri.name }}</td>
        <td>{{ useri.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataBind",
  props: ["psinfo", "psusers"],
  data() {
    return {
      message: "Bind Here!!",
    };
  },
};
</script>

<style scoped>
.bind {
  background-color: orange;
}
</style>