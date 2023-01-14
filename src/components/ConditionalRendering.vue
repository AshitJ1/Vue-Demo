<template>
  <div v-bind:class="{condition:show, bgCondition:!show}">
    <!-- Conditional Rendering if/else hide/show block -->
    <h3 v-if="show" v-bind:style="{color:'yellow'}">Conditional Rendering in Vue</h3>
    <h3 v-else>else block in Vue</h3>
    <!-- another inline way of conditional rendering  -->
    <h3>{{show?"yes":"no"}}</h3>
    <!-- conditional class binding with array class -->
    <h3 v-bind:class="[show?'condition':'bgCondition']">Conditional class binding with array</h3>
    <button v-on:click="display">{{ action }}</button>
  </div>
</template>
<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      show: true,
      action: String("toggle"),
    };
  },
  methods: {
    display() {
      this.show = !this.show;
      if (this.show == true) {
        this.action = "show else";
      } else {
        this.action = "show if";
      }
    },
  },
};
</script>
<style scoped>
.condition{
  background-color: rgb(199, 199, 255);
}
.bgCondition{
  width: 300px;
}
</style>