<template>
  <div id="app">
    <div class="template__wrapper" style="display: none">
      <Template 
      ref="foo"
      :theme="
        this.$route.query['theme']
          ? (theme = this.$route.query['theme'])
          : 'dark'
      "
      :alias="
        alias
      "
      :data="
        data
      "
    >
    </Template>
    </div>
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
export default {
  components: { Template },
  data(){
    return{
      alias: '', 
      data: ""
    }
  },
  mounted() {
    window.renderTemplate = this.renderTemplate
  },
  methods: {

    renderTemplate(alias, data){
      this.alias = alias 
      this.data = data
      return this.$refs.foo.$el
    }
  },

};
</script>

