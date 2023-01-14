<template>
  <div class="actions">
    <!-- mouse/action events -->
    <h3>action events in vue</h3>
    <button v-on:click="onClickFunc('Parameters')">on click</button>
    <button v-on:mouseover="onOverFunc">on Mouse Over</button>
  </div>
</template>
<script>
export default {
  name: "InputEvents",
  methods: {
    onClickFunc(p) {
      console.log("on call function with", p);
      alert("on call function", p);
    },
    onOverFunc() {
      console.log("on mouse over function");
      alert("on mouse over function");
    },
  },
};
</script>
<style scoped>
.actions {
  background-color: rgb(241, 169, 252);
}
</style>