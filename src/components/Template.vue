<template>
  <div :class="['template', 'theme_' + theme, alias + '_template']">
    <Title :alias="alias" :data="data" :theme="theme"></Title>
    <Leaders
      :alias="alias"
      :data="data"
      :theme="theme"
      :selected="selectedUser()"
      v-if="alias === 'leaders'"
    ></Leaders>
    <Vote
      :alias="alias"
      :data="data"
      :theme="theme"
      :selected="selectedUser()"
      v-if="alias === 'vote'"
    ></Vote>
    <Chart
      :alias="alias"
      :data="data"
      :theme="theme"
      v-if="alias === 'chart'"
    ></Chart>
    <Diagram :data="data" :theme="theme" v-if="alias === 'diagram'"></Diagram>
    <Activity
      :data="data"
      :theme="theme"
      v-if="alias === 'activity'"
    ></Activity>
  </div>
</template>
<script>
import Title from "./rendering/title";
import Leaders from "./Leaders";
import Vote from "./Vote";
import Chart from "./Chart";
import Diagram from "./Diagram";
import Activity from "./Activity";
export default {
  name: "Template",
  props: ["theme", "alias", "data"],
  data() {
    return {
      tick: 0,
      time: 0,
    };
  },
  methods: {
    selectedUser() {
      const indexUser = Object.keys(this.data.users).find(
        (item) =>
          this.data.users[item].id ==
          this.data
            .selectedUserId
      );
      return indexUser ? Number(indexUser) : "-1";
    },
    selectedOffset() {
      const indexUser = Object.keys(this.data.users).find(
        (item) =>
          this.data.users[item].id ==
          this.data
            .selectedUserId
      );
      return indexUser ? Number(indexUser) : "-1";
    },

  },
  components: { Title, Leaders, Vote, Chart, Diagram, Activity },
};
</script>
<style lang="sass">
@import '@/assets/sass/_variables'
.template_title
  position: absolute
  top: 0
  width: 100vw
.invert_1
  filter: invert(1)
body 
  width: 100vw
  height: 100vh
  background: radial-gradient(circle at 50% 50%, #120C01 0%, #000000 100%)
  color: $white
  .user-img
    img
      filter: grayscale(100%)
  .user-respect, .user-emoji
    filter:  grayscale(0%) !important
.theme_light
  background: #ffffff !important
  color: $black !important
  .user-img
    img
      filter: grayscale(0%)
  .template-subtitle
    color: $greylight !important
.template
  &-title
    font-weight: 700
    font-size: 50px
    line-height: 32px
    padding: 40px 52px 0 52px
    text-align: center
    margin-bottom: 18px
    img
      display: inline-block
      box-sizing: border-box
      padding-bottom: 4px
      height: 35px
  &-subtitle
    font-weight: 500
    font-size: 22px
    line-height: 30px
    text-align: center
    color: $grey
  &-wrapper
    display: flex
    flex-direction: column
    height: 100vh
    margin-top: 110px
</style>
