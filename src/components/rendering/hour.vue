<template>
 <div class="day__hour_wrapper" :style="`${widthX < 568 ? `top: ${16.72 * index}px` : ''}`">
    <div class="day__hour">
        <img :src="require(`@/assets/img/activity/${src}`)"  :style="`z-index: ${index}`">
  </div>
 </div>
</template>
<script>
export default {
  name: "hour",
  props: ["theme", "src", "index", "widthX"],
};
</script>
<style lang=""></style>
