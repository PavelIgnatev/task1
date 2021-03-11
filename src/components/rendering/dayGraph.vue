<template>
  <div class="day">
    <Hour
      v-for="(hour, index) in data"
      :key="index"
      :theme="theme"
      :index="index"
      :src="
        hour == 1 || hour == 2
          ? src[theme][1]
          : hour == 3 || hour == 4
          ? src[theme][2]
          : hour > 4
          ? src[theme][3]
          : src[theme][0]
      "
      :widthX="sizeX"
    ></Hour>
  </div>
</template>
<script>
import Hour from "./hour";
export default {
  name: "dayGraph",
  props: ["data", "theme"],
  data() {
    return {
      src: {
        dark: [
          "min-dark.png",
          "mid-dark.png",
          "max-dark.png",
          "extra-dark.png",
        ],
        light: [
          "min-light.png",
          "mid-light.png",
          "max-light.png",
          "extra-light.png",
        ],
      },// },:style="sizeX > 567 ? `left: ${34 * index}px` : `top: ${14 * index}px`"
      sizeX: window.screen.width,
    };
  },
  components: { Hour },
  created() {
    window.addEventListener("resize", () => {
      this.sizeX = window.screen.width;
    });
  },
};
</script>
<style lang="sass">
.day
  display: flex
  height: 34px
  width: 100%
  position: absolute
  &:nth-child(even)
    left: 17px
  &:nth-child(1)
    top: 0
  &:nth-child(2)
    top: 13px
  &:nth-child(3)
    top: 26px
  &:nth-child(4)
    top: 39px
  &:nth-child(5)
    top: 52px
  &:nth-child(6)
    top: 65px
  &:nth-child(7)
    top: 78px    
  &__hour
    position: absolute
    bottom: 0
    &_wrapper
      width: 34px
      position: relative
</style>
