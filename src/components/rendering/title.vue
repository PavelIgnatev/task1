<template>
  <div>
    <div
      class="template-title"
      :class="alias + '-title'"
      v-if="
        data.title && data.title.split(' ')[1]
          ? data.title.split(' ')[1].length == 2
          : false
      "
    >
      {{ data.title.split(" ")[0] }}
      <img src="@/assets/img/emoji/crown.svg" v-if="data.emoji == '👑'" />
      <img src="@/assets/img/emoji/seeearch.svg" v-else-if="data.emoji == '🔎'"/>
      <img src="@/assets/img/emoji/teeam.png" :class="{ invert_1: theme != 'light' }" v-else-if="data.emoji == '👪'"/>
      <img src="@/assets/img/emoji/crown.svg" v-else-if="emoji == '😮'" /> {{ data.title.split(" ")[2] }} {{ data.title.split(" ")[3] }}</div>
    <div class="template-title" :class="alias + '-title'" v-else>{{ data.title }}</div>
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