<template>
  <div>
    <button v-on:click="updateTitle">update parent title</button>
  </div>
</template>
<script>
export default {
  name: "ChildComponent",
  methods:{
    updateTitle(){
      this.$emit('changeTitle', "Parent Updated, send sucessfully")
    }
  },
};
</script>
<style scoped>
</style>