<template>
  <div>
    <div class="template-title" :class="alias + '-title'">{{ data.title }}</div>
    <div
      :class="[
        'template-subtitle',
        'template-subtitle' + '_' + theme,
        alias + '-subtitle',
      ]"
    >
      {{ data.subtitle }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Title",
  props: ["data", "alias", "theme"],
};
</script>