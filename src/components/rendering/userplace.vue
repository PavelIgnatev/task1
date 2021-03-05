<template>
  <div class="userplace-template">
    <div class="userplace-place" v-if="index == 0 && selected > 4">
      {{ selected + 1 }}
    </div>
    <div class="userplace-place" v-else>{{ place[index] }}</div>
  </div>
</template>
<script>
export default {
  name: "userplace",
  props: ["index", "theme", "alias", "selected"],
  data() {
    return {
      place: { 0: "5", 1: "3", 2: "1", 3: "2", 4: "4" },
    };
  },
};
</script>
<style lang="sass">
.theme_light
    .userplace
        &-template
            color: #261C00
            background: linear-gradient(-180deg, #F4F4F4 1%, #E9E9E9 100%, #EAEAEA 100%)
            box-shadow: inset 0px 0px 20px 0px #CFCFCF,inset -1px 1px 1px 0px #FFFFFF
            &:nth-child(3)
                background: linear-gradient(-180deg, #FFF2D1 1%, #FFD66C 100%) !important
                box-shadow: inset 0px 0px 20px 0px #FFB039,inset -1px 1px 1px 0px #FFFFFF !important
.userplace
    &-template
        display: flex
        box-sizing: border-box
        font-size: 30px
        line-height: 32px
        font-weight: 500
        text-align: center
        color: #FCFBF7
        width: 120px
        position: absolute
        height: 100%
        background: white
        border-top-right-radius: 6px
        border-top-left-radius: 6px
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) -2.22%, rgba(0, 0, 0, 0.8) 100%), radial-gradient(149.08% 95.38% at 38.75% 71.48%, #000000 0%, #231900 0.01%, #4D4D4D 100%)
        box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 16px rgba(103, 103, 103, 0.6)
        &:nth-child(1), &:nth-child(2)
            padding-left: 42px
            padding-right: 52px
        &:nth-child(4), &:nth-child(5)
            padding-left: 58px
            padding-right: 42px
        &:nth-child(1), &:nth-child(5)
            height: 80%
            bottom: 0
        &:nth-child(2), &:nth-child(4)
            height: 89%
            bottom: 0
            z-index: 100
        &:nth-child(3)
            left: 200px
            height: 100%
            padding: 0 50px
            background: radial-gradient(91.67% 122.17% at 69.17% -11.17%, #FFA300 0%, #2D1C00 100%)
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.4), inset 0px 6px 15px rgba(255, 162, 0, 0.4)
            z-index: 200
            bottom: 0
        &:nth-child(1)
            left: 0px
        &:nth-child(2)
            left: 100px
        &:nth-child(4)
            left: 200px
        &:nth-child(4)
            left: 300px
        &:nth-child(5)
            left: 400px

    &-place
        font-weight: 700
        position: absolute
        top: 18px
</style>
