<template>
  
  <div
    class="user-template"
    @click="changeSelected"
    :class="[
      {
        'user-selected':
          (index >= 3 && selected >= 3 && selected == index && alias != 'vote') ||
          (index == 4 && selected > index && alias != 'vote'),
      },
      {'vote-selected': (alias == 'vote' && selUser.id == id)}
    ]"
  >
    <template v-if="index != 4 || selected < 4 || alias != 'leaders'">
      <div class="user-img" :class="alias + '-img'">
        <img
          :src="require(`@/assets/img/userIcon/${avatar.split('.')[0]}.svg`)"
          :class="{ grayscale: theme == 'dark' }"
        />
        <img
          class="user-respect"
          src="@/assets/img/emoji/respect.svg"
          v-if="
            (selected != 0 || alias == 'vote') && selUser
              ? selUser.id == id
              : ''
          "
        />
        <div
          class="user-emoji"
          v-if="index == 0">
          {{emoji}}
        </div>

      </div>
      <div class="user-name" :class="alias + '-name'" v-if="alias != 'chart'">
        {{ name.split(" ")[0] }} <br />
        {{ name.split(" ")[1] }}
      </div>
      <div class="chart-user-name" :class="alias + '-name'" v-else>
        {{ name }}
      </div>
      <div class="user-value" :class="alias + '-value'" v-if="alias != 'vote'">
        {{ valueText }}
      </div>
      <div
        class="user-line"
        v-if="selected == index"
        style="display: none"
      ></div>
      <div
        class="user-place"
        style="display: none"
        v-if="selected == index"
      >
        {{ index + 1 }}
      </div>
    </template>
    <template v-else>
      <div class="user-img" :class="alias + '-img'">
        <img
          :src="
            require(`@/assets/img/userIcon/${selUser.avatar.split('.')[0]}.svg`)
          "
          :class="{ grayscale: theme == 'dark' }"
        />
        <img class="user-respect" src="@/assets/img/emoji/respect.svg" />
      </div>
      <div class="user-name" :class="alias + '-name'">
        {{ selUser.name.split(" ")[0] }} <br />
        {{ selUser.name.split(" ")[1] }}
      </div>
      <div
        class="user-value"
        :class="[alias + '-value', alias + '-value_' + theme]"
        v-if="alias != 'vote'"
      >
        {{ selUser.valueText }}
      </div>
      <div
        class="user-line"
        style="display: none"
      ></div>
      <div
        class="user-place"
        style="display: none"
      >
        {{ selected + 1 }}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "user",
  props: [
    "id",
    "name",
    "avatar",
    "valueText",
    "alias",
    "theme",
    "index",
    "selected",
    "selUser",
    "emoji",
  ],
  methods: {
    changeSelected() {
      if (this.alias == "vote") {
        this.$store.commit("offsetChange", [
          this.$route.query["slide"] - 1,
          this.id,
        ]);
      }
    },
  },
};
</script>
<style lang="sass">
.theme_light
  .user-value
    color: #BFBFBF
.user
  &-template
    box-sizing: border-box
    width: 104px
    height: 162px
  &-emoji
    position: absolute
    top: -10px
    display: block
    height: 30px
    left: 50% 
    transform: translateX(-50%)
    font-size: 37px
  &-img
    position: relative
    img
      display: block
      width: 64px
      border-radius: 50%
    margin-bottom: 6px
    padding: 20px 20px 0 20px
  &-name
    font-style: normal
    font-weight: 500
    font-size: 16px
    line-height: 18px
    text-align: center
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    padding: 0px 5px
    margin-bottom: 4px
  &-value
    font-size: 14px
    line-height: 16px
    text-align: center
    color: #918F8A
  &-respect
    display: block
    position: absolute
    top: -5px
    width: 32px
    height: 32px
</style>
