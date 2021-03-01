<template>
  <div class="day__hour">
        <img :src="require(`@/assets/img/activity/${src}`)"  :style="`z-index: ${index}`">
   
  </div>
</template>
<script>
export default {
  name: "hour",
  props: ["theme", "src", "index"],
};
</script>
<style lang=""></style>
