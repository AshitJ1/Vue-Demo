<template>
  <div class="home">
    <p v-html="rowHtml"></p>
    <!-- props example -->
    <p>{{ msg | Ucase }}</p>
    <!-- template properties -->
    <h3 v-once>{{ info }}</h3>
    <h3>{{ info }}</h3>
    <button v-bind:disabled="disabledBtn" v-on:click="updateText">
      update
    </button>
    <InputEvents />
    <ConditionalRendering />
    <LoopPage />
    <DataBind v-bind:psinfo="info" />
    <ParentComponent />
    <FormComponent />
    <UserList msg="(Get Data with API)" />

    <div class="container">
      <div class="row">
        <div class="col featured">
          <CalculatorPage />
          <ToDo />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ConditionalRendering from "./ConditionalRendering.vue";
import InputEvents from "./InputEvents.vue";
import LoopPage from "./LoopPage.vue";
import DataBind from "./DataBind.vue";
import ParentComponent from "./ParentComponent.vue";
import FormComponent from "./FormComponent.vue";
import UserList from "./UserList.vue";
import CalculatorPage from "./CalculatorPage.vue";
import ToDo from "./ToDo.vue";

export default {
  name: "HomePage",
  components: {
    ConditionalRendering,
    InputEvents,
    LoopPage,
    DataBind,
    ParentComponent,
    FormComponent,
    UserList,
    CalculatorPage,
    ToDo,
  },
  data() {
    return {
      info: "information",
      rowHtml: "<h1>Learning Vue</h1>",
      disabledBtn: true,
    };
  },
  methods: {
    updateText() {
      this.info = "report";
    },
  },
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.home {
  background-color: rgb(147, 255, 147);
}
.featured {
  display: flex;
  justify-content: center;
}
</style>