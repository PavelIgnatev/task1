<template>
  <div id="app">
    <Template
      :theme="
        this.$route.query['theme']
          ? (theme = this.$route.query['theme'])
          : 'dark'
      "
      :alias="
        $store.state.data
          ? $store.state.data[this.$route.query['slide'] - 1].alias
          : ''
      "
      :data="
        $store.state.data
          ? $store.state.data[this.$route.query['slide'] - 1].data
          : ''
      "
    >
    </Template>
  </div>
</template>

<script>
import Template from "./components/Template.vue";
import data from "./data/data.json";
export default {
  components: { Template },
  beforeCreate() {
    this.$store.commit("renderTemplateAll", data);
  },
};
</script>
