<template>
  <div class="parent">
    <h1>{{title}}</h1>
    <ChildComponent v-on:changeTitle="updateTitle($event)" />
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data(){
    return {title:"send props child to parent"}
  },
  methods:{
    updateTitle(title)
    {
      this.title=title
    }
  }
};
</script>
<style scoped>
.parent{
  background-color:blueviolet;
  color:whitesmoke;
}
</style>