<template>
  <div class="vote">
    <User
      v-for="(user, index) in data.users.slice(
        this.$store.state.data[[this.$route.query['slide'] - 1]].data.offset,
        this.$store.state.data[this.$route.query['slide'] - 1].data.offset + i
      )"
      :key="user.id"
      :id="user.id"
      :name="user.name"
      :avatar="user.avatar"
      :valueText="user.valueText"
      :alias="alias"
      :theme="theme"
      :index="index"
      :selected="selected"
      :emoji="data.emoji"
      :selUser="data.users[selected] ? data.users[selected] : ''"
    ></User>
    <div class="vote-button__wrapper">
      <div
        class="vote-button__up_wrapper"
        :class="[
          'vote-button__up_wrapper_' + theme,
          {
            'vote-button__up_wrapper_light_not':
              this.$store.state.data[this.$route.query['slide'] - 1].data
                .offset == 0 && theme == 'light',
          },
          {
            'vote-button__up_wrapper_dark_not':
              this.$store.state.data[this.$route.query['slide'] - 1].data
                .offset == 0 && theme == 'dark',
          },
        ]"
        @click="down"
      >
        <div class="vote-button__up" :class="'vote-button__up_' + theme"></div>
      </div>
      <div
        class="vote-button__down_wrapper"
        :class="[
          'vote-button__down_wrapper_' + theme,
          {
            'vote-button__down_wrapper_light_not':
              Object.keys(this.data.users).length - this.i ==
                this.$store.state.data[this.$route.query['slide'] - 1].data
                  .offset && theme == 'light',
          },
          {
            'vote-button__down_wrapper_dark_not':
              Object.keys(this.data.users).length - this.i ==
                this.$store.state.data[this.$route.query['slide'] - 1].data
                  .offset && theme == 'dark',
          },
        ]"
        @click="up"
      >
        <div
          class="vote-button__down"
          :class="'vote-button__down_' + theme"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import User from "./rendering/user";
export default {
  name: "Vote",
  props: ["theme", "alias", "data", "selected"],
  components: { User },
  data() {
    return {
      i: 6,
      width: window.screen.width
    };
  },
  methods: {
    up() {
      this.$store.commit("offChangePlus", this.$route.query["slide"] - 1);
    },
    down() {
      this.$store.commit("offChangeMinus", this.$route.query["slide"] - 1);
    },
    updateWidth() {
    this.width = window.innerWidth;
    if(this.width < 668){
      this.i = 8
    }else{
      this.i = 6
    }
  }
  },
  created() {
  window.addEventListener('resize', this.updateWidth);
  if(this.width < 668){
      this.i = 8
    }else{
      this.i = 6
    }
},
};
</script>
<style lang="sass">
.vote
    display: flex
    width: 100%
    height: 100%
    &-button__wrapper
      width: 67px
      height: 200px
      display: flex
      justify-content: space-between
      flex-direction: column
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
    &-button__up_wrapper, &-button__down_wrapper
        z-index: 10100
        width: 55px
        height: 55px
        border-radius: 100%
        background: white
        border: 2px solid #bfbfbf
        padding: 4px
        display: flex
        justify-content: center
        align-items: center
        cursor: pointer
        transition: 0.2s ease-in-out
        background: rgba(0,0,0,0)
        &:hover
            border: 2px solid #f4b000
            .vote-button__up, .vote-button__down
                background: #f4b000
        &_light
            z-index: 10100
            &_not
                pointer-events: none
                border: 2px solid #f4b000
                .vote-button__up, .vote-button__down
                    pointer-events: none
                    background: #f4b000
                &:hover
                    border: 2px solid #f4b000
                    .vote-button__up, .vote-button__down
                        background: #f4b000
    &-button__up_wrapper_dark, &-button__down_wrapper_dark
        border: 2px solid #fcfbf7
        &:hover
            border: 2px solid #918f89
            .vote-button__up, .vote-button__down
                background: #918f89
        &_not
            border: 2px solid #918f89
            pointer-events: none
            .vote-button__up, .vote-button__down
                background: #918f89
                pointer-events: none
            &:hover
                border: 2px solid #918f89
                .vote-button__up, .vote-button__down
                    background: #918f89
    &-button__up, &-button__down
        transition: 0.2s all
        display: flex
        justify-content: center
        align-items: center
        border: none
        background: #bfbfbf
        width: 54px
        height: 54px
        border-radius: 100%
        &:hover
            background: #f4b000
    &-button__up_dark, &-button__down_dark
         background: #fcfbf7
         &:hover
            background: #918f89
    &-button__up_dark, &-button__down_dark
        &::before, &::after
            background: black !important
    &-button__up, &-button__down
        position: relative
        &::before
            content: ''
            width: 15px
            height: 3px
            border-radius: 15px
            background: white
            transform: rotate(-45deg)
            position: absolute
            left: 15px
        &::after
            content: ''
            width: 15px
            height: 3px
            border-radius: 15px
            background: white
            transform: rotate(45deg)
            position: absolute
            right: 15px
    &-button__down
        transform: rotate(-180deg)
    &-selected
        &_dark
            background: radial-gradient(91.67% 122.17% at 69.17% -11.17%, #FFA300 0%, #2D1C00 100%) !important
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.4), inset 0px 6px 15px rgba(255, 162, 0, 0.4) !important
            border-radius: 6px
            cursor: pointer
        &_light
            background: linear-gradient(180deg, #FFF2D1 0.82%, #FFD66C 100%) !important
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(255, 176, 57, 0.8) !important
            border-radius: 6px
            cursor: pointer
    .user-template
        height: 142px
        cursor: pointer
        &:hover
            background: radial-gradient(85.62% 148.33% at 49.85% 100%, rgba(68, 58, 42, 0.7864) 0%, rgba(0, 0, 0, 0.8) 100%)
            box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.2), inset 2px 2px 16px rgba(255, 255, 255, 0.1)
            border-radius: 6px
        &_light
            &:hover
                background: linear-gradient(180deg, rgba(244, 244, 244, 0.9) 0.82%, #E9E9E9 100%, rgba(234, 234, 234, 0) 100%)
                box-shadow: inset -1px 1px 1px rgba(255, 255, 255, 0.5), inset 0px 0px 20px rgba(207, 207, 207, 0.5)
                border-radius: 6px
        &:nth-child(5), &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(6)
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
        &:nth-child(1)
          left: 30%
        &:nth-child(5)
          top: 60%
          left: 40%
        &:nth-child(2)
          left: 40%
          top: 40%
        &:nth-child(4)
          left: 70%
        &:nth-child(6)
          top: 60%
          left: 60%
        &:nth-child(3)
          left: 60%
          top: 40%
</style>
