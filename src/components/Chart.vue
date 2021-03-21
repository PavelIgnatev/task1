<template>
  <div class="chart">
    <div class="chart-container">
      <div class="chart-pillars">
        <Charts
          v-for="(value, index) in data.values.slice(
            sizeX < 569 ? 7 : sizeX > 1424 ? 2 : sizeX > 569 ? 4 : '',
            Object.keys(data.values).length - (sizeX > 1424 ? 0 : 3)
          )"
          :key="value.value + index"
          :title="value.title"
          :value="value.value != 0 ? value.value: ''"
          :active="value.active"
          :theme="theme"
          :height="heightt(value.value) ? heightt(value.value) : 0"
        ></Charts>
      </div>
    </div>
    <div class="chart-user__wrapper">
      <User
        v-for="(user, index) in data.users.slice(0, 2)"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :avatar="user.avatar"
        :valueText="user.valueText"
        :alias="alias"
        :theme="theme"
        :index="index"
      >
      </User>
    </div>
  </div>
</template>
<script>
import User from "./rendering/user";
import Charts from "./rendering/charts";
export default {
  name: "Chart",
  props: ["theme", "data", "alias"],
  data() {
    return {
      begin: 4,
      sizeX: window.screen.width,
    };
  },
  methods: {
    heightt(o) {
      this.max = -Infinity
      this.min = Infinity
      Object.keys(this.data.values).map((item) =>
      this.data.values[item].value > this.max
        ? (this.max = this.data.values[item].value)
        : ""
      );
      Object.keys(this.data.values).map((item) =>
      this.data.values[item].value < this.min
        ? (this.min = this.data.values[item].value)
        : ""
    );
      return ((o - this.min) * 100) / (this.max - this.min);
    },
  },
  created() {
    window.addEventListener("resize", () => {
      this.sizeX = window.screen.width;
    });
  },
  components: { User, Charts },
};
</script>
<style lang="sass">
.chart-name
  padding: 0

.theme_light
  .chart
    .user-template
      &:nth-child(1)
        &::after
          background: #BFBFBF !important
.chart-name
  padding-top: 1px
.chart
    flex-grow: 1
    width: 100%
    display: flex
    justify-content: space-between
    flex-direction: column
    &_template
        display: flex !important
        flex-direction: column !important
    .user-template
        display: flex
        width: 220px
        height: 40px
        position: relative
        .user-img
            margin-right: 14px
            padding: 0
            img
                width: 40px
                height: 40px
        .user-value
            position: absolute
            left: 53px
            top: 19px
        .chart-user-name
            font-weight: 500
            font-size: 16px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            line-height: 18px
        &:nth-child(1)
            position: absolute
            left: 0
            &::after
                content: ''
                width: 2px
                height: 100%
                background:  #918F8A
                opacity: 0.3
                position: absolute
                right: -18px
        &:nth-child(2)
            position: absolute
            right: 0
    .chart-user__wrapper
        margin: 0 auto
        width: 474px
        height: 40px
        display: flex
        justify-content: center
        margin-bottom: 24px
        margin-top: 24px
        position: relative
    &-container
        flex-grow: 1
        width: 100%
        position: relative
        display: flex
        align-items: center
        padding-top: 78px
    &-pillars
        box-sizing: border-box
        width: 100%
        display: flex
        height: 100%
        justify-content: space-between
        align-items: flex-end
        padding: 0 58px
        padding-top: 63px
        padding-bottom: 30px
</style>
